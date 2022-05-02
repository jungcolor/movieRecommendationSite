import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
// import config from "./config/key";
import User from "./models/User";
import Board from "./models/Board";
import auth from "./middleware/auth";
const app = express();
const port = 5000;

// application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// apllication/json
app.use(bodyParser.json());
app.use(cookieParser());

import mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://dongwoo:1q2w3e4r@boilerplate.c1lu6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world!~~~ 안녕하세요"));

// 게시판 server api 작업
app.get("/api/board/list", (req, res) => {
    Board.find((err, list) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, list });
    }).sort({ writeDate: -1 });
});

app.post("/api/board/detail", (req, res) => {
    Board.find({ _id: req.body }, (err, detailData) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, detailData });
    });
});

app.post("/api/board/write", (req, res) => {
    // 작성한 글 정보를 client에서 가져오면
    // 가져온 데이터들을 데이터 베이스에 넣어준다.
    const board = new Board(req.body);
    board.save((err, data) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true });
    });
});

app.post("/api/board/update", (req, res) => {
    Board.findByIdAndUpdate(
        { _id: req.body.id }, // target ID
        {
            $set: {
                title: req.body.title,
                writer: req.body.writer,
                contents: req.body.contents,
                writerDate: req.body.writerDate,
            },
        }, // 변경 될 값
        (err, updateData) => {
            // callback
            if (err) return res.json({ success: false, err });
            return res.status(200).json({ success: true, updateData });
        }
    );
});

app.post("/api/board/search", (req, res) => {
    Board.find({ title: { $regex: req.body.contents } }, (err, searchData) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, searchData: searchData });
    }).sort({ writeDate: -1 });
});

app.post("/api/board/remove", (req, res) => {
    Board.deleteMany({ _id: req.body }, (err, removeData) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true });
    });
});

app.post("/api/users/register", (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 가져온 데이터들을 데이터 베이스에 넣어준다.
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true });
    });
});

app.post("/api/users/login", (req, res) => {
    // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다.",
            });
        }

        // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." });
            }

            // 비밀번호 까지 맞다면 토큰을 생성하기.
            user.generateToken((err, user) => {
                if (err) {
                    return res.status(400).send(err);
                }

                // 토큰을 저장한다. 쿠키, 로컬스토리지 등..
                res.cookie("x_auth", user.token).status(200).json({ loginSuccess: true, userId: user._id });
            });
        });
    });
});

app.get("/api/users/logout", auth, (req: any, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true,
        });
    });
});

app.get("/api/users/auth", auth, (req: any, res) => {
    // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True 라는 말
    res.status(200).json({
        _id: req.user._id, // id
        isAdmin: req.user.role === 0 ? false : true, // 관리자
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastName: req.user.lastName,
        role: req.user.role,
        image: req.user.image,
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));

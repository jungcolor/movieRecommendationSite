import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import { RootState } from "../../../reducers";
import Auth from '../../../middleware/auth';
import axios from 'axios';

interface IProps {
    comment: object;
}

function SingleCommentContainer({ comment }: IProps): JSX.Element {
    const user: any = useSelector((state: RootState) => state.user);
    const [openReply, setOpenReply] = useState(false);
    const [commentValue, setcommentValue] = useState("");
    const handleClickReply = (): void => {
        setOpenReply(!openReply);
    };
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { value } = e.target;
        setcommentValue(value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const variables = {
            content: commentValue,
            writer: user.userData._id,
            responseTo: "",
            // postId: "" // 해당 페이지 || 컨텐츠 || 등등 정보 추가
        };

        axios.post("/api/comment/saveComment", variables).then((response) => {
            if (response.data.success) {
                setcommentValue("");
            } else {
                alert("error");
            }
        });
    };

    return <SingleComment openReply={openReply} comment={comment} commentValue={commentValue} handleClickReply={handleClickReply} handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default SingleCommentContainer;
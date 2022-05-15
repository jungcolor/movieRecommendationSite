import * as mongoose from "mongoose";
import Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema(
    {
        writer: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        // postId: {
        //     type: Schema.Types.ObjectId,
        //     ref: "Video",
        // },
        responseTo: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        content: {
            type: String
        }
    }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

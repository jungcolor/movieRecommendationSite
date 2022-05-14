import React, { ReactChildren } from 'react';
import SingleCommentContainer from './SingleCommentContainer';

interface IProps {
    children?: ReactChildren;
    commentValue: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
}

function Comment({ commentValue, ...rest }: IProps) {
    const { handleChange, handleSubmit } = rest;

    return (
        <div>
            <br />
            <p>Replies</p>
            <hr />

            <SingleCommentContainer />

            <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                <textarea style={{ width: "100%", borderRadius: "5px", resize: "none" }} value={commentValue} placeholder="코멘트를 작성해 주세요" onChange={handleChange} />
                <br />
                <button style={{ width: "250px", height: "52px" }} onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Comment;
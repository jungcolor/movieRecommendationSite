import React, { ReactChild } from 'react';
import { Avatar, Button, Grid, Input } from '@mui/material';

interface IProps {
    children?: ReactChild;
    openReply: boolean;
    comment: any;
    commentValue?: string;
    handleClickReply?: () => void;
    handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
}

function SingleComment({ openReply, comment, commentValue, ...rest }: IProps): JSX.Element {
    const { handleClickReply, handleChange, handleSubmit } = rest;
    const actions = [
        <span key="commnet-basic-reply-to" onClick={handleClickReply} style={{ fontSize: "12px", cursor: "pointer" }}>
            Reply to
        </span>,
    ];

    return (
        <div style={{ marginBottom: "20px" }}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar alt="user" src="" />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>{comment.writer.name}</h4>
                    <p style={{ margin: "5px 0", textAlign: "left" }}>{comment.content}</p>
                    {actions}
                </Grid>
            </Grid>

            {openReply && (
                <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                    <textarea style={{ width: "100%", borderRadius: "5px", resize: "none" }} placeholder="코멘트를 작성해 주세요" onChange={handleChange} />
                    <br />
                    <button style={{ width: "250px", height: "52px" }} onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}

export default SingleComment;
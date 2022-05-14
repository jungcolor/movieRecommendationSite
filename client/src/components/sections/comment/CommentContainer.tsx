import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import { RootState } from "../../../reducers";
import Auth from '../../../middleware/auth';
import axios from 'axios';

function CommentContainer() {
    const user: any = useSelector((state: RootState) => state.user);
    const [comments, setComments] = useState([]);
    const [commentValue, setCommentValue] = useState("");

    // useEffect(() => {
    //     axios.post('/api/comment/getComments').then(response => {
    //         if (response.data.success) {
    //             setComments(response.data.comments);

    //             console.log(comments);
    //         }
    //         else {
    //             alert('코멘트 정보를 가져오는 것을 실패 하였습니다.');
    //         }
    //     });
    // }, []);

    // 코멘트 목록 저장
    // UI 업데이트
    // 목록 계층구조 적용
    // 리팩토링

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setCommentValue(value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const variables = {
            content: commentValue,
            writer: user.userData._id,
            // postId: "" // 해당 페이지 || 컨텐츠 || 등등 정보 추가
        }

        axios.post("/api/comment/saveComment", variables).then(response => {
            if (response.data.success) {
                console.log(response.data.result);
                setCommentValue('');
            }
            else {
                alert('커멘트를 저장하지 못했습니다');
            }
        });
    };

    return <Comment commentValue={commentValue} handleSubmit={handleSubmit} handleChange={handleChange} />;
}

export default Auth(CommentContainer, null);
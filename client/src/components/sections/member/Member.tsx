import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RootState } from '../../../reducers';

interface IProps {
    handleLogOut: () => void;
}

function Member({ handleLogOut }: IProps): JSX.Element {
    // 나중에 type 정의
    const reducer: any = useSelector((state: RootState) => state.member);

    return (
        <div id="member">
            <div>
                {reducer.loginFlag ? (
                    <a href="#" onClick={handleLogOut}>
                        LOGOUT
                    </a>
                ) : (
                    <Link to="/user/login">LOGIN</Link>
                )}
            </div>
            <div>{reducer.loginFlag ? <></> : <Link to="/user/register">REGISTER</Link>}</div>
        </div>
    );
}

export default Member;
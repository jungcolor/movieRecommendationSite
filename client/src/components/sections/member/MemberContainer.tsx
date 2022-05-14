import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginFlag } from '../../../actions/memberActions';
import { logoutUser } from '../../../actions/userActions';
import Member from './Member';

function MemberContainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = (): void => {
        dispatch(logoutUser({ _id: "asdasdasd" }));
        dispatch(setLoginFlag(false));
        navigate("/user/login");
    }

    return <Member handleLogOut={handleLogOut} />;
}

export default MemberContainer;
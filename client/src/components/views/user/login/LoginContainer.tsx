import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginFlag } from '../../../../actions/memberActions';
import { loginUser } from '../../../../actions/userActions';
import Auth from '../../../../middleware/auth';
import Login from './Login';

function LoginContainer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({ email: "", password: "" });
    const { email, password } = form;
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    }
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        loginUser({ email, password }).then((response) => {
            console.log(response.payload);
            if (response.payload.loginSuccess) {
                dispatch(setLoginFlag(true));
                navigate("/");
            }
            else {
                alert(response.payload.message);
            }
        });
    }

    return <Login handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />;
}

export default Auth(LoginContainer, null);
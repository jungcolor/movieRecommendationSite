import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../../actions/userActions';
import Register from './Register';

function RegisterContainer() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '', passwordConfirm: '', name: '' });
    const { email, password, name } = form;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        registerUser({ email, password, name }).then(response => {
            if (response.payload.success) {
                navigate("/user/login");
            }
            else {
                console.log("실패");
                console.log(response.payload.message);
            }
        });
    }

    return <Register handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />;
}

export default RegisterContainer;
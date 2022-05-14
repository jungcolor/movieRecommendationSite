import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";

interface IUser {
    email?: string;
    password?: string;
    name?: string;
    _id?: string;
}

export async function loginUser(dataTosubmit: IUser) {
    const request = await axios.post("/api/users/login", dataTosubmit).then((response) => response.data);

    return {
        type: LOGIN_USER,
        payload: request,
    };
}

export async function logoutUser(dataTosubmit: IUser) {
    const request = await axios.get("/api/users/logout").then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export async function registerUser(dataTosubmit: IUser) {
    const request = await axios.post("/api/users/register", dataTosubmit).then((response) => response.data);

    return {
        type: REGISTER_USER,
        payload: request,
    };
}

export async function auth() {
    const request = await axios.get("/api/users/auth").then((response) => response.data);

    return {
        type: AUTH_USER,
        payload: request,
    };
}

import { LOGIN_SUCCESS } from "./types";

export function setLoginFlag (flag: boolean): object {
    return {
        type: LOGIN_SUCCESS,
        payload: flag
    }
}

import { LOGIN_SUCCESS } from "../actions/types";

const initialState = { loginFlag: false };

export default function (state: object = initialState, action: any): object {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, loginFlag: action.payload };
        default:
            return state;
    }
}

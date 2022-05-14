import { combineReducers } from "redux";
import user from "./userReducer";
import board from "./boardReducer";
import member from './memberReducer';

const rootReducer = combineReducers({ user, board, member });

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

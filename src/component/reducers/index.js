/** @format */

import { combineReducers } from "redux";

import userRole from "./roleReduser";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import cofferReducer from "./cofferData";

const reducerss = combineReducers({
	// userRole,
	authReducer,
	currentUserReducer,
	questionsReducer,
	cofferReducer,
});

export default reducerss;

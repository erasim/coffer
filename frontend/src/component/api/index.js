/** @format */

import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
export const logIn = (authData) => API.post("/user/login", authData);
export const signUP = (authData) => API.post("/user/signup", authData);

export const postQuestion = (questionData) =>
	API.post("/questions/Ask", questionData);
export const addpolicy = (policyData) =>
	API.post("/questions/addpolicy", policyData);
export const getAllQuestions = () => API.get("/questions/get");
export const getAllPolicies = () => API.get("/questions/getpolicy");
export const getAllcofferData = () => API.get("/coffer/getalldata");

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
	API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });

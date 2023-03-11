/** @format */

import express from "express";
import {
	addPolicy,
	AskQuestion,
	getAllPolicies,
	getAlldata,
} from "../controllers/Questions.js";
import { getAllQuestions } from "../controllers/Questions.js";

const router = express.Router();
// router.post('/Ask', AskQuestion)
// router.post('/addpolicy', addPolicy)
router.get("/get", getAllQuestions);
router.get("/getalldata", getAlldata);

export default router;

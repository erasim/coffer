/** @format */

import mongoose from "mongoose";
const cofferSchema = mongoose.Schema({
	end_year: {
		type: String,
		required: "Policy must have Title",
	},
	intensity: {
		type: String,
		// required: "Question must have Body",
	},
	sector: {
		type: String,
		// required: "Question must have Body",
	},
	topic: {
		type: String,
		// required: "Question must have Body",
	},
	insight: {
		type: String,
		// required: "Question must have Body",
	},
	url: {
		type: String,
		// required: "Question must have Body",
	},
	region: {
		type: String,
		// required: "Question must have Body",
	},
	start_year: {
		type: String,
		// required: "Question must have Body",
	},
	impact: {
		type: String,
		// required: "Question must have Body",
	},
	added: {
		type: String,
		// required: "Question must have Body",
	},
	published: {
		type: String,
		// required: "Question must have Body",
	},
	country: {
		type: String,
		// required: "Question must have Body",
	},
	relevance: {
		type: String,
		// required: "Question must have Body",
	},
	pestle: {
		type: String,
		// required: "Question must have Body",
	},
	source: {
		type: String,
		// required: "Question must have Body",
	},
	title: {
		type: String,
		// required: "Question must have Body",
	},
	likelihood: {
		type: String,
		// required: "Question must have Body",
	},
});

export default mongoose.model("Coffer", cofferSchema);

/** @format */

const cofferReducer = (state = { data: null }, action) => {
	switch (action.type) {
		case "POST_QUESTION":
			return { ...state };

		case "POST_ANSWER":
			return { ...state };

		case "COFFER_DATA":
			return { ...state, data: action.payload };
		default:
			return state;
	}
};
export default cofferReducer;

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
	postData: [
		{id: 1, message: 'Hi bro, how are u?', like: 1},
		{id: 2, message: 'It\'s first post', like: 12},
		{id: 3, message: 'DA DA DA', like: 21},
		{id: 4, message: 'I talk u come me', like: 35},
	],
	newTextPost: '',
	addCountLike: 1,
};
const profileReducer = (state = initialState, action) => {
		switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newTextPost,
				like: 0
			};
			state.postData.unshift(newPost);
			state.newTextPost = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newTextPost = action.newTextPostElement;
			return state;
		default:
			return state;
	}
};
export const addPostCreator = () => {
	return {
		type: ADD_POST,
	}
};
export const updateNewPostTextCreator = (text) => {
	return{
		type: UPDATE_NEW_POST_TEXT,
		newTextPostElement: text,
	}
};

export default profileReducer;
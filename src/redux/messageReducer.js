const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
	messageData: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Yo, what so?'},
		{id: 3, message: 'It\'s OK!'},
		{id: 4, message: 'I want see u again'},
	],
	newTextMessage: '',
	dialogData: [
		{id: 1, name: 'Vladimir Zelensky', img: '../../../img/Ze.jpg'},
		{id: 2, name: 'Nastenka', img: '../../../img/Ze.jpg'},
		{id: 3, name: 'Dima developer', img: '../../../img/Ze.jpg'},
		{id: 4, name: 'Artem lowSkill', img: '../../../img/Ze.jpg'},
	],
};
const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return  {
				...state,
				newTextMessage: '',
				messageData: [...state.messageData, {id: 5,message: state.newTextMessage}]
			};
		case UPDATE_NEW_MESSAGE_TEXT:
			return  {
				...state,
				newTextMessage: action.newTextMessageElement,
			};
		default:
			return state;
	}
};
export const addMessageCreator = () => {
	return{
		type: ADD_MESSAGE,
	}
};
export const updateNewMessageTextCreator = (text) => {
	return{
		type: UPDATE_NEW_MESSAGE_TEXT,
		newTextMessageElement: text
	}
};

export default messageReducer;
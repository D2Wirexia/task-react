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
		{id: 1, name: 'Vladimir Zelensky',
			photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
		},
		{id: 2, name: 'Nastenka',
			photoUrl: 'https://svirtus.cdnvideo.ru/SO9sxAqnAkR1tN1Kg6jXFhWvYMM=/0x0:371x371/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/d4/d4e61b79893464edf8fac84d5b25bcd6.jpg?m=6abf7ca4aedde894c0fb76aea5a89542',
		},
		{id: 3, name: 'Dima BigBoss',
			photoUrl: 'https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s176-c-k-c0x00ffffff-no-rj-mo',
		},
		{id: 4, name: 'Artem lowSkill',
			photoUrl: 'https://abakan-news.ru/wp-content/uploads/2018/03/-e1520919096875.jpg',
		},
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
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
	_state: {
		profilePage: {
			postData: [
				{id: 1, message: 'Hi bro, how are u?', like: 1},
				{id: 2, message: 'It\'s first post', like: 12},
				{id: 3, message: 'DA DA DA', like: 21},
				{id: 4, message: 'I talk u come me', like: 35},
			],
			newTextPost: ''
		},
		messangerPage: {
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
				{id: 3, name: 'Dima developer',
					photoUrl: 'https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s176-c-k-c0x00ffffff-no-rj-mo',
				},
				{id: 4, name: 'Artem lowSkill',
					photoUrl: 'https://abakan-news.ru/wp-content/uploads/2018/03/-e1520919096875.jpg',
				},
			],
		},
		sideBar: {
			friends: [
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
		},
		ZeChat: {
			what: ["Красивые", "Похожи на меня", "Суть вопроса мне ясна, ждите ответа!"],
			who: ["Спросите у Петра", "Это все Россия", "Артём Смирнов", "Точно не я!"],
			where: ["Нужно посмотреть в Берлине", "Сзади",
				"Где именно не знаю, но в квартале было хорошо", "Давайте посмотри вместе"],
			howMuch: ["3 кг гречки", "Точно сказать не могу, но сумма внушает доверие",
				"8 лет строгача", "Разузнаю, потом напишу", "Чучуть"],
			when: ["В четверг", "На выходных", "Со следующей недели"],
		}
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
	},
	subscribe(observer) {
		this._callSubscriber = observer; //observer - патерн
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messangerPage = messageReducer(this._state.messangerPage, action);
		this._state.sideBar = sidebarReducer(this._state.sideBar, action);
		this._callSubscriber(this._state);
	},
};

export default store;
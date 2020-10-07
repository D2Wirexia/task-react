const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
	users: [
		{	id: 1,
			followed: true,
			name: 'Vladimir Zelensky',
			photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
			status: '#ThePrezedent',
			locetion: {city: 'Kiev', country: 'Ukraine'}
		},
		{	id: 2,
			followed: true,
			name: 'Nastenka',
			photoUrl: 'https://svirtus.cdnvideo.ru/SO9sxAqnAkR1tN1Kg6jXFhWvYMM=/0x0:371x371/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/d4/d4e61b79893464edf8fac84d5b25bcd6.jpg?m=6abf7ca4aedde894c0fb76aea5a89542',
			status: 'I\'m Little girl',
			locetion: {city: 'Kiev', country: 'Ukraine'}
		},
		{	id: 3,
			followed: false,
			name: 'Dima BigBoss',
			photoUrl: 'https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s176-c-k-c0x00ffffff-no-rj-mo',
			status: 'next lvl improve skills',
			locetion: {city: 'Paris', country: 'Franch'}
		},
		{	id: 4,
			followed: false,
			name: 'Artem lowSkill',
			photoUrl: 'https://abakan-news.ru/wp-content/uploads/2018/03/-e1520919096875.jpg',
			status: 'All about this...',
			locetion: {city: 'Sumy', country: 'Ukraine'}
		},
	]
};
const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return  {
				...state,
				users: state.users.map(u => {
					if(u.id === action.userID){
						return {...u, followed: true};
					}
					return u;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if(u.id === action.userID){
						return {...u, followed: false};
					}
					return u;
				}),
			};
		case SET_USERS:
			return {
				...state,
				users: action.users,
			};
		default:
			return state;
	}
};
export const followEC = (userID) => {
	return {
		type: FOLLOW,
		userID
	}
};
export const unfollowEC = (userID) => {
	return{
		type: UNFOLLOW,
		userID
	}
};
export const setUsersAC = (users) => {
	return{
		type: SET_USERS,
		users
	}
}

export default usersReducer;
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
			photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
			status: 'I\'m Little girl',
			locetion: {city: 'Sumy', country: 'Ukraine'}
		},
		{	id: 3,
			followed: false,
			name: 'Dima developer',
			photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
			status: 'next lvl improve skills',
			locetion: {city: 'Paris', country: 'Franch'}
		},
		{	id: 4,
			followed: false,
			name: 'Artem lowSkill',
			photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
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
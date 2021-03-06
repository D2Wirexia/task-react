import {dalAPi} from "../components/Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return  {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
export const setAuthUserData = (id, email, login, isAuth) => {
	return {
		type: SET_USER_DATA,
		payload: {
			id,
			email,
			login,
			isAuth
		}
	}
};
export const authThunk = () => async (dispatch) => {
	let response = await dalAPi.getAuthAxios();
	if(response.resultCode === 0){
		let {id, email, login} = response.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};
export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
	let response = await dalAPi.postLoginAxios(email, password, rememberMe);
	if(response.data.resultCode === 0){
		dispatch(authThunk());
	}else{
		let mes = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
		dispatch(stopSubmit('login', {_error: mes}));
	}

};
export const logoutThunk = () => async (dispatch) => {
	let response = await dalAPi.deleteLoginAxios();
		if(response.data.resultCode === 0){
			dispatch(setAuthUserData(null, null, null, false));
		}
};


export default authReducer;
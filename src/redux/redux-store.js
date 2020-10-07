import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	messangerPage: messageReducer,
	sideBar: sidebarReducer,
	usersPage: usersReducer,
});
let store = createStore(reducers);

export default store;
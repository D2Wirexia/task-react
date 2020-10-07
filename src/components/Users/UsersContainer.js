import React from "react";
import Users from "./Users";
import {connect} from 'react-redux'
import {followEC, setUsersAC, unfollowEC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followEC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowEC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
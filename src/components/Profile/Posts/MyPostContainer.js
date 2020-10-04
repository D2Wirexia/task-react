import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
		newTextPost: state.profilePage.newTextPost
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextCreator(text));
		},
		addPost: (text) => {
			if(text.length == 0) {
				alert("Вы ничего не написали")
			}else if (text.length > 5000){
				alert("Макс. симолов 5000")
			}else{
				dispatch(addPostCreator());
			}
		}
	}
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;
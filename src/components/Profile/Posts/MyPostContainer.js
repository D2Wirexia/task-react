import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
	const state = props.store.getState();
	let addPostElement = (text) => {
		if(text.length == 0) {
			alert("Вы ничего не написали")
		}else if (text.length > 5000){
			alert("Макс. симолов 5000")
		}else{
			props.store.dispatch(addPostCreator());
		}
	};

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostTextCreator(text));
	};

	return(<MyPost updateNewPostText={onPostChange} addPost={addPostElement}
						postData={state.profilePage.postData}
						newTextPost={state.profilePage.newTextPost}/>);
};

export default MyPostContainer;
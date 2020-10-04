import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		newTextMessage: state.messangerPage.newTextMessage,
		messageData: state.messangerPage.messageData,
		dialogData: state.messangerPage.dialogData
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextCreator(text));
		},
		addMessage: () => {
			dispatch(addMessageCreator());
		}
	}
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

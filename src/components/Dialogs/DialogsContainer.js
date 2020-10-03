import React from 'react';
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	const state = props.store.getState();

	let addMassageElement = () => {
		props.store.dispatch(addMessageCreator());
	};
	let onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageTextCreator(text));
	};

	return (<Dialogs updateNewMessageText={onMessageChange}
						  addMessage={addMassageElement}
						  newTextMessage={state.messangerPage.newTextMessage}
						  messageData={state.messangerPage.messageData}
						  dialogData={state.messangerPage.dialogData}/>); //перерисовывать нужно
}

export default DialogsContainer;

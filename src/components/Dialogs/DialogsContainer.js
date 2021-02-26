import React from 'react';
import {addMessage} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
	return {
		messageData: state.messangerPage.messageData,
		dialogData: state.messangerPage.dialogData,

	}
};

export default compose(
	 connect(mapStateToProps, {addMessage}),
	 withAuthRedirect
)(Dialogs);

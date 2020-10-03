import React from 'react';
import universal from './Dialogs.module.css';
import Friends from "./Friends/Friends";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messageReducer";

const Dialogs = (props) => {

	let messageElement = props.messageData.map(mes => <Message message={mes.message}/>);

	let newMessageElement = React.createRef();

	let addMassageElement = () => {
		props.addMessage();
	};
	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);

	};

	return (
		 <div>
			 <h3>Dialogs</h3>
			 <div className={universal.mainDialog}>
				 <Friends dialogData={props.dialogData}/>
				 <div className={universal.mes}>
					 <div className={universal.sms}>
					 	{messageElement}
					 </div>
					 <div className={universal.dataEntry}>
						 <textarea ref={newMessageElement}
									  placeholder={"Message..."}
									  onChange={onMessageChange}
									  value={props.newTextMessage} />
						 <button onClick={addMassageElement}>Send</button>
					 </div>
				 </div>
			 </div>
		 </div>

	);
}

export default Dialogs;

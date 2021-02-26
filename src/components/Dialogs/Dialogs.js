import React from 'react';
import universal from './Dialogs.module.css';
import Friends from "./Friends/Friends";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formControls/formControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

const maxLength500 = maxLengthCreator(500);
const minLength2 = minLengthCreator(2);

const Dialogs = (props) => {

	let messageElement = props.messageData.map(mes => <Message message={mes.message}/>);

	let onSubmit = (values) => {
		props.addMessage(values.newMassage);
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
						 <MassageReduxForm onSubmit={onSubmit}/>
					 </div>
				 </div>
			 </div>
		 </div>

	);
};

const MassageForm = (props) => {
	return(
		 <form onSubmit={props.handleSubmit}>
			 <Field placeholder={"Message..."}
					  validate={[required, maxLength500, minLength2]}
					  component={Textarea}
					  name="newMassage"/>
			 <button className={universal.send}>Send</button>
		 </form>
	)
};
const MassageReduxForm = reduxForm({form: 'massage'})(MassageForm);

export default Dialogs;

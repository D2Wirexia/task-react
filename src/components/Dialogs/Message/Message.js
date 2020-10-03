import React from 'react';
import universal from './Message.module.css';


const Message = (props) => {

	return(
		 <div className={universal.blockMessage}>
			 <div className={universal.discussion}>{props.message}</div>
		 </div>

	);
};

export default Message;
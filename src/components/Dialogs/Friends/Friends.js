import React from 'react';
import universal from './Friends.module.css';
import {NavLink} from 'react-router-dom';

const OneDialog = (props) => {
	return(
		 <NavLink to={'/dialogs/' + props.id}>
			 <div className={universal.dialog}>
				<div className={universal.imgFriend}>
					<img src={props.photoUrl} />
				</div>

				<div className={universal.nameFriend}>{props.name}</div>

			 </div>
		 </NavLink>
	);
};

const Friends = (props) => {

	let dialogElement = props.dialogData.map( dialog => {
		return <OneDialog name={dialog.name} id={dialog.id} photoUrl={dialog.photoUrl}/>
	});
	return (
		 <div className={universal.mainDialog}>
			 <div className={universal.friendsDialog}>
				 {dialogElement}
			 </div>
		 </div>

	);
};

export default Friends;

import React from "react";
import universal from './SimplePost.module.css';
import "../../../../css/all.min.css"


const SimplePost = (props) => {
	let countLike = () => {

	};


	return(
		 <div className={universal.item}>
			 <div className={universal.photo}>
				 <img src='https://download-cs.net/steam/avatars/3412.jpg' />
			 </div>
			 <div className={universal.message}>{props.message}</div>
			 <div className={universal.like} >
				 <i className="far fa-thumbs-up" onClick={countLike}></i>
				 {props.like}
			 </div>
		 </div>
	);
}

export default SimplePost;
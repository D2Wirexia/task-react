import React from "react";
import universal from './Users.module.css'
import userPhoto from '../../img/1.jpg'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, followThunk, unfollowThunk}) => {
	return (
		 <div className={universal.user}>
			 <div className={universal.info}>
				 <NavLink to={'/profile/' + user.id}>
					 <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
				 </NavLink>
				 <div className={universal.arrButton}>
					 {user.followed
						  ? <button disabled={followingInProgress.some(id => id === user.id)}
										className={universal.btn}
										onClick={() => unfollowThunk(user.id)}>
							  Unfollow</button>
						  : <button disabled={followingInProgress.some(id => id === user.id)}
										className={universal.btn}
										onClick={() => followThunk(user.id)}>
							  Follow</button>
					 }
				 </div>
			 </div>
			 <div className={universal.location}>
				 <div className={universal.leftBlock}>
					 <div className={universal.name}>{user.name}</div>
					 <div className={universal.status}>{user.status}</div>
				 </div>
				 <div className={universal.rightBlock}>
					 <div className={universal.country}>{"user.location.country"}</div>
					 <div className={universal.city}>{"user.location.city"}</div>
				 </div>
			 </div>
		 </div>
	)
};
export default User;
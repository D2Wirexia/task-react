import React from "react";
import universal from './Users.module.css'
import userPhoto from '../../img/1.jpg'

let Users = (props) => {

	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for(let i=1; i <= pageCount; i++){
		pages.push(i);
	}

	return(
		 <div>
			 <div className={universal.getUser}>Users</div>
			 <div className={universal.pagination}>
				 {
					 pages.map(p => {
						 return <span
							  className={props.currentPage === p && universal.selectedPage}
							  onClick={ () => {props.onPageChanged(p)} }>
								{p}
							</span>
					 })
				 }
			 </div>
			 {
				 props.users.map(u => <div key={u.id}>
					 <div className={universal.user}>
						 <div className={universal.info}>
							 <div>
								 <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
							 </div>
							 <div className={universal.arrButton}>
								 {u.followed
									  ? <button className={universal.btn} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
									  : <button className={universal.btn} onClick={() => {props.follow(u.id)}}>Follow</button>
								 }
							 </div>
						 </div>
						 <div className={universal.location}>
							 <div className={universal.leftBlock}>
								 <div className={universal.name}>{u.name}</div>
								 <div className={universal.status}>{u.status}</div>
							 </div>
							 <div className={universal.rightBlock}>
								 <div className={universal.country}>{"u.location.country"}</div>
								 <div className={universal.city}>{"u.location.city"}</div>
							 </div>
						 </div>
					 </div>
				 </div>)
			 }
		 </div>
	)
};

export default Users;
import React from "react";
import universal from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = props => {

	return(
		 <div>
			 <div className={universal.getUser}>Users</div>
			 <Paginator totalUsersCount={props.totalUsersCount}
							pageSize={props.pageSize}
							currentPage={props.currentPage}
							onPageChanged={props.onPageChanged}/>
			 {
				 props.users.map(u => <User key={u.id} user={u}
													 followingInProgress={props.followingInProgress}
													 unfollowThunk={props.unfollowThunk}
													 followThunk={props.followThunk}/>)
			 }
		 </div>
	)
};

export default Users;
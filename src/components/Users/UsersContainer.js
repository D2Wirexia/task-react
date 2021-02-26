import React from "react";
import {connect} from 'react-redux'
import {
	setCurrentPageAC,
	requestUsers,
	followThunk,
	unfollowThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {
	getCurrentPage, getFollowingProgress, getIsFetching,
	getPageSize,
	getTotalUsersCount, getUsersSelector
} from "../../redux/selectors/users-selectors";

class UsersContainer extends React.Component{
	componentDidMount() {
		const {currentPage, pageSize} = this.props;
		this.props.getUsers(currentPage, pageSize);
	}
	onPageChanged = (pageNumber) => {
		const {pageSize} = this.props;
		this.props.getUsers(pageNumber, pageSize);
	};

	render() {
		return <>
			{this.props.isFetching ? <Preloader/> : null }
			<Users totalUsersCount={this.props.totalUsersCount}
					 pageSize={this.props.pageSize}
					 currentPage={this.props.currentPage}
					 users={this.props.users}
					 onPageChanged={this.onPageChanged}
					 followingInProgress={this.props.followingInProgress}
					 followThunk={this.props.followThunk}
					 unfollowThunk={this.props.unfollowThunk}/>
		</>
	}
}


let mapStateToProps = (state) => {
	return {
		users: getUsersSelector(state),
		totalUsersCount: getTotalUsersCount(state),
		pageSize: getPageSize(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingProgress(state),
	}
};


export default compose(
	 connect(mapStateToProps, {
		 setCurrentPageAC, followThunk, unfollowThunk, getUsers: requestUsers
	 }),
	 withAuthRedirect
)(UsersContainer);
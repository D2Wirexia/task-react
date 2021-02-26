import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux'
import {logoutThunk} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.authPart.isAuth,
		login: state.authPart.login,
	}
};

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);
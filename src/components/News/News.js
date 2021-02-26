import React from 'react';
import universal from './News.module.css';
import {connect} from 'react-redux'

class News extends React.Component{


	render() {
		return (
			 <div className={universal.title}>News
				 <div>
					 14792
					 2
					 8
					 9
					 11849
				 </div>
			 </div>
		);
	}


}

let mapStateToProps = (state) => {
	return {

	}
};

export default connect(mapStateToProps, {})(News);
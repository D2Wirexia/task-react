import React from "react";
import universal from './Profile.module.css'
import MyPostContainer from "./Posts/MyPostContainer";

const Profile = () => {

	return(
		 <div className={universal.content}>
			 <div className={universal.backLogo}>
			 	<img src="https://i.pinimg.com/originals/09/60/a4/0960a433aa3b7e5a563dd0e12b808916.jpg" />
			 </div>
			 <div className={universal.profile}>
				 <img src="https://download-cs.net/steam/avatars/3412.jpg" />
				 <div className={universal.name_profile}>Dmitry <i>Wirexia</i> S.
					 <ul className={universal.info_profile}>
						 <li>Date of Birth: 27 May</li>
						 <li>City: Sumy</li>
						 <li>Education: SSU</li>
						 <li>Web Site: https://Wirex.com</li>
					 </ul>
				 </div>
			 </div>
			 <MyPostContainer />
		 </div>
	);
};

export default Profile;
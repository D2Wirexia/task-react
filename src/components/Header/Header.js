import React from 'react';
import logo from "../../logo.svg";
import universal from './Header.module.css'

const Header = () => {
	return(
		 <header className={universal.header}>
			 <img src={logo} className={universal.App_logo} alt="logo" />
			 <div className={universal.RT}>This site is made on React</div>
			 <div className={universal.add_logo}>
				 <div className={universal.dop}></div>
				 <div className={universal.dop}></div>
				 <div className={universal.dop}></div>
				 <div className={universal.dop}></div>
				 <div className={universal.dop}></div>
				 <div className={universal.dop}></div>
			 </div>
		 </header>
	);
}
export default Header;
import preLoader from "../../../img/loading.gif";
import React from "react";
import w from './Preloader.module.css'

const Preloader = (props) => {
	return(
		 <div className={w.loader}>
			 <img src={preLoader} />
		 </div>
	);
}
export default Preloader;

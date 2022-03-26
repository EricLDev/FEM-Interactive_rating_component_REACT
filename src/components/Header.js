import React from "react";
import classes from "./Header.module.css";
import iconStar from "../images/icon-star.svg";

const Header = (props) => {
	return (
		<div className={classes.header}>
			<img src={iconStar} alt="" />
			<h1> How did we do?</h1>
			<p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
		</div>
	);
};

export default Header;

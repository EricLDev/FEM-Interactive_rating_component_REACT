import React from "react";
import classes from "./ThankYou.module.css";
import thankyou from "../images/illustration-thank-you.svg";

const ThankYou = (props) => {
	return (
		<div className={classes.thankYou}>
			<img src={thankyou} alt="" />
			<div>You selected {props.value} out of 5</div>
			<h2>Thank you!</h2>
			<p> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
		</div>
	);
};

export default ThankYou;

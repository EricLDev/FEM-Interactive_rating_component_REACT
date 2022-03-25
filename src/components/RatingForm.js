import React, { useState, useEffect } from "react";
import classes from "./RatingForm.module.css";

const RatingForm = (props) => {
	const [value, setValue] = useState();

	useEffect(() => {
		console.log(value);
	}, [value]);

	const inputChangeHandler = (e) => {
		const value = e.target.value;
		setValue(value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(value);
		props.changeValue(value);
	};

	return (
		<form className={classes.ratingForm} onSubmit={onSubmitHandler}>
			<div className={classes.inputGroup}>
				<div className={`${classes.rating} ${value === "1" ? classes.checked : ""}`}>
					<input type="radio" name="rating" id="1" value="1" onChange={inputChangeHandler} />
					<label htmlFor="1">1</label>
				</div>
				<div className={`${classes.rating} ${value === "2" ? classes.checked : ""}`}>
					<input type="radio" name="rating" id="2" value="2" onChange={inputChangeHandler} />
					<label htmlFor="2">2</label>
				</div>
				<div className={`${classes.rating} ${value === "3" ? classes.checked : ""}`}>
					<input type="radio" name="rating" id="3" value="3" onChange={inputChangeHandler} />
					<label htmlFor="3">3</label>
				</div>
				<div className={`${classes.rating} ${value === "4" ? classes.checked : ""}`}>
					<input type="radio" name="rating" id="4" value="4" onChange={inputChangeHandler} />
					<label htmlFor="4">4</label>
				</div>
				<div className={`${classes.rating} ${value === "5" ? classes.checked : ""}`}>
					<input type="radio" name="rating" id="5" value="5" onChange={inputChangeHandler} />
					<label htmlFor="5">5</label>
				</div>
			</div>
			<button>Submit</button>
		</form>
	);
};

export default RatingForm;

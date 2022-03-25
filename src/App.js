import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RatingForm from "./components/RatingForm";

function App() {
	const [value, setValue] = useState();

	return (
		<div className="App">
			<div className="container">
				<Header score={value} />
				<RatingForm changeValue={(value) => setValue(value)} />
			</div>
		</div>
	);
}

export default App;

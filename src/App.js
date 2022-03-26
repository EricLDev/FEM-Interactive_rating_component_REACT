import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RatingForm from "./components/RatingForm";
import ThankYou from "./components/ThankYou";

function App() {
	const [value, setValue] = useState();

	return (
		<div className="App">
			<div className="container">
				{value ? (
					<ThankYou value={value} />
				) : (
					<>
						<Header />
						<RatingForm changeValue={(value) => setValue(value)} />
					</>
				)}
			</div>
		</div>
	);
}

export default App;

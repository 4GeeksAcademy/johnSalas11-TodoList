import React from "react";
import { List } from "./todoList";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="m-5">
			<List/>
		</div>
	);
};

export default Home;

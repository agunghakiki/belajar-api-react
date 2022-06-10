import React from "react";
import Auth from "../views/Auth";
import Task from "../views/Task";
import {Route} from "react-router-dom";


const Routes = () => {
	return(
		<>
		<Route exact path="/" component={Auth}/>
		<Route exact path="/task" component={Task}/>
		</>
	)
}

export default Routes
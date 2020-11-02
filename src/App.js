import React, { Component } from "react";
import Main from "./clientapp/main/Main";
import Notfound from "./homepage/cmp/notfound";

import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./homepage/homepage";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/search" component={Main} />{" "}
					<Route path="/not-found" component={Notfound} />{" "}
					<Route path="/" exact component={HomePage} />{" "}
					<Redirect to="/not-found" />
				</Switch>{" "}
			</div>
		);
	}
}

export default App;

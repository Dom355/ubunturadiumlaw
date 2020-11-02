import React, { Component } from "react";
import TopNav from "./TopNav";

class Notfound extends Component {
	state = {};
	render() {
		return (
			<div>
				<TopNav />
				<h2 className="maintitle title">
					Relax. The page you're looking for doesn't exist.
				</h2>
			</div>
		);
	}
}

export default Notfound;

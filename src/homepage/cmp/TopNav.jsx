import React, { Component } from "react";
import logoWhite from "../../styles/img/Logo1_white.png";

class TopNav extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg bg-dark  ">
				<a href="www.radiumlaw.com" className="navbar-brand">
					<img
						width="200px"
						src={logoWhite}
						alt="you're missing our beautiful logo"
					/>
				</a>
			</nav>
		);
	}
}
export default TopNav;

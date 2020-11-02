import React, { Component } from "react";
import logo from "../../styles/img/Logo1.svg";
import search from "../../styles/img/Search_Icon.png";
import settings from "../../styles/img/settings.png";

class NavbarTop extends Component {
	render() {
		return (
			<nav
				className="navbar navbar-expand-xl bg-light "
				style={{ width: "100%" }}
			>
				<a className="navbar-brand" href="https://www.radiumlaw.com">
					<img width="175px" src={logo} alt="RadiumLaw" />
				</a>
				<button className="btn" onClick={this.props.instructionOn}>
					<img
						style={{ marginTop: "-2px" }}
						width="20px"
						src={settings}
						alt=""
					/>{" "}
					How it works
				</button>

				<button
					className="btn"
					style={{ borderRadius: "5px" }}
					onClick={this.props.onClick}
				>
					<img
						style={{ marginTop: "-2px" }}
						width="20px"
						src={search}
						alt="searchicon"
					/>
					Search
				</button>
			</nav>
		);
	}
}

export default NavbarTop;

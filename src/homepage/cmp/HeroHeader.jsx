import React, { Component } from "react";
import backgroundHeader from "../../styles/img/Background_header.svg";
import { Link } from "react-router-dom";
import "./homepage.css";
import video from "../../styles/Video/radiumlawCompress.mp4";

class HeroHeader extends Component {
	render() {
		return (
			<div
				className="container-fluid"
				style={{
					backgroundImage: `url( ${backgroundHeader})`,
					overflow: "hidden",
				}}
			>
				<div className="col-12 maintitle">
					<h2 className="title">The Fastest Law Reader For Lawyers</h2>
					<br />
					<h5 className="subtitle">
						Get all your laws in one app. Better navigation & better search
						functions.
					</h5>
					<br />
					<Link to="/search" style={{ color: "white" }}>
						<button className="button">Enter Here</button>
					</Link>
				</div>

				<div
					className="col-12"
					style={{ textAlign: "center", alignItems: "center" }}
				>
					<img
						autoPlay
						loop
						playsInline
						poster="true"
						className="videodemo videocompress shadow rounded"
						src={video}
						alt="A nice video that didn't load..."
					></img>
				</div>
			</div>
		);
	}
}
export default HeroHeader;

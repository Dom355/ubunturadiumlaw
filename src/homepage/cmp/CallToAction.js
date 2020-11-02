import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductFeature extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="col-12 maintitle">
					<h2 className="title">The Fastest Law Reader For Lawyers</h2>
					<br />
					<Link to="/search" style={{ color: "white" }}>
						<button className="button">Enter Here</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default ProductFeature;

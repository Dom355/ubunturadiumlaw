import React, { Component } from "react";
import Background5 from "../../styles/img/Background5.svg";
import annotateImage from "../../styles/img/Feature_Annotate.svg";

class ProductFeature4 extends Component {
	render() {
		return (
			<div className="container">
				<div
					className="row col s12 m12 push-s12"
					style={{
						backgroundImage: `url(${Background5})`,
					}}
				>
					<div
						className="col s12 m6 push-m7"
						style={{ margin: "10% 2%", maxWidth: "500px" }}
					>
						<h6 style={{ fontFamily: "Big Caslon" }}>ANNOTATION</h6>
						<h4 style={{ fontFamily: "Big Caslon" }}>
							Remember & share your legal knowledge
						</h4>
						<p
							style={{
								fontFamily: "Optima",
								fontSize: "16px",

								textAlign: "justify",
								color: "#5A5858",
							}}
						>
							Create notes and annotations wherever you need. Accumulate
							knowledge and never search through past cases again.
						</p>
						<ul
							style={{
								fontFamily: "Optima",
								fontSize: "16px",

								textAlign: "justify",
								color: "#5A5858",
							}}
						>
							<li>Create and add links to any law/section</li>
							<li>Add precedent, dropbox links or documents</li>
							<li>Share across your app and network</li>
						</ul>
					</div>

					<div
						className="col s12 m6 "
						style={{ alignItems: "center", textAlign: "center" }}
					>
						<img
							style={{ width: "35rem", margin: "50px 0" }}
							src={annotateImage}
							alt="headerimage"
						></img>
					</div>
				</div>
			</div>
		);
	}
}
export default ProductFeature4;

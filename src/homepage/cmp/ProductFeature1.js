import React, { Component } from "react";

class ProductFeature1 extends Component {
	render() {
		return (
			<div className="container p-5">
				{/* 1st column */}
				<div className="row ">
					<div className="col-lg-6 col-sm-12 text-center p-3 ">
						<i className="align-middle icon material-icons fas fa-history fa-lg  "></i>
						<span className="title "> FAST SEARCH </span>
						<p className="parag text-center">
							Search any law, statute, and sections with our intelligent search
							bar.Access specific articles and bookmarks as fast as Google.
						</p>
					</div>
					{/* 2nd column */}
					<div className="col-lg-6 col-sm-12 text-center p-3">
						<i className="align-middle icon material-icons fas fa-columns fa-lg ">
							{" "}
						</i>
						<span className="title"> SPLIT SCREEN </span>
						<p className="parag">
							Use split - screen and multiple tabs to sift through different
							laws & sections.Find what you need quickly & without hassle.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default ProductFeature1;

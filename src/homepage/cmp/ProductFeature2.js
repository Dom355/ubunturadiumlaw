import React, { Component } from "react";

class ProductFeature2 extends Component {
	render() {
		return (
			<div className="container p-5">
				{/* 1st column */}
				<div className="row">
					<div className="col-lg-6 col-sm-12 text-center p-3">
						<i className="align-middle icon material-icons fas fa-bolt fa-lg">
							{" "}
						</i>
						<span className="title"> QUICK NAVIGATION </span>
						<p className="parag">
							Hover over any mentioned section / law to read an excerpt.Create
							bookmarks or links and open them as a snippet, a different tab or
							in split - screen.
						</p>
					</div>
					{/* 2nd column */}
					<div className="col-lg-6 col-sm-12 text-center p-3">
						<i className="align-middle icon material-icons fas fa-pen-square fa-lg"></i>
						<span className="title"> CREATE / SHARE NOTES </span>
						<p className="parag">
							Create notes and annotations anywhere within a law.Add key
							precedents, links, documents, dropbox files and share them with
							others.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default ProductFeature2;

import React, { Component } from "react";
import DbResults from "./ExpandingSections";

class ResultText extends Component {
	render() {
		const {
			codeTitle,
			sectionNum,
			sectionTitle,
			sectionTxt,
			laws,
		} = this.props;

		return (
			<div className="container">
				<span className="h1 title">{codeTitle}</span>
				<br />
				<span className="h5 mt-5 subtitle">{sectionTitle}</span>

				<div className="container row mt-5 subtitle">
					<div className="col-2">
						<b>{sectionNum}</b>
					</div>
					<div className="col-10">{sectionTxt}</div>
				</div>
				<DbResults laws={laws} />
			</div>
		);
	}
}

export default ResultText;

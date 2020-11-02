import React, { Component } from "react";
import PropTypes from "prop-types";
import http from "../../server/httpService";
import { Highlight } from "react-instantsearch-dom";
import AlgoliaSearchBar from "../searchBar/AlgoliaSearchBar";
import ResultText from "../result/ResultSections";
import { RegexResults } from "../helper/regexService";
import Tappable from "react-tappable/lib/Tappable";

const urlLaw = "https://www.radiumlaw.com/api/";

class Result extends Component {
	state = {
		query: "",
		sectionNum: "",
		lawName: "",
		sectionText: "",
		sectionTitle: "",
		codeTitle: "",
		SectionId: "",
		laws: [],
		scrollIcon: false,
	};

	async componentDidMount() {}

	getLaws = async () => {
		var urlId = urlLaw + this.state.SectionId;
		try {
			const { data: laws } = await http.get(urlId);
			console.log(laws);
			this.setState({ laws });
		} catch (ex) {
			if (ex.response && ex.response === 404) alert("error receiving data");
		}
	};

	onSuggestionSelected = async (_, { suggestion }) => {
		const sectionNum = suggestion.section_num;
		const lawName = suggestion.law_code;
		const sectionTitle = suggestion.heading;
		const sectionText = suggestion.content_xml;
		const codeTitle = suggestion.code_title;
		const SectionId = suggestion._id.$oid;
		const scrollIcon = this.state.scrollIcon;

		this.setState({
			sectionNum,
			lawName,
			sectionText,
			sectionTitle,
			codeTitle,
			SectionId,
			laws: [],
			scrollIcon: !scrollIcon,
		});
	};
	onSuggestionCleared = () => {
		this.setState({
			query: "",
		});
	};

	showIcon = () => {
		let sectionText = this.state.sectionText;

		if (sectionText) {
			return (
				<div>
					<Tappable onTap={this.handleClick}>Expand</Tappable>
					<i
						style={{ cursor: "pointer" }}
						onClick={() => this.handleClick()}
						className="fas fa-caret-down fa-3x "
					></i>
				</div>
			);
		} else return null;
	};

	handleClick = (e) => {
		const scrollIcon = this.state.scrollIcon;

		this.getLaws();
		this.setState({ scrollIcon: !scrollIcon });
	};

	render() {
		const { HideShowSearch } = this.props;
		const {
			sectionNum,
			sectionTitle,
			codeTitle,

			laws,
		} = this.state;

		const sectionTxt = RegexResults(this.state.sectionText);

		return (
			<div
				className="container"
				style={{
					textAlign: "justify",
					marginTop: "10px",
					zIndex: 1,
					position: "absolute",
				}}
			>
				<AlgoliaSearchBar
					query={this.state.query}
					HideShowSearch={HideShowSearch}
					codeTitle={this.state.codeTitle}
					sectionTitle={this.state.sectionTitle}
					sectionNum={sectionNum}
					onSuggestionCleared={this.onSuggestionCleared}
					onSuggestionSelected={this.onSuggestionSelected}
				/>

				<ResultText
					codeTitle={codeTitle}
					sectionTitle={sectionTitle}
					sectionTxt={sectionTxt}
					splitLaw={this.splitLaw}
					sectionNum={sectionNum}
					laws={laws}
				/>
				<div className="text-center">{this.showIcon()}</div>
			</div>
		);
	}
}

function Hit(props) {
	return (
		<div>
			<Highlight attribute="section_text" hit={props.hit} />
		</div>
	);
}
Hit.propTypes = {
	hit: PropTypes.object.isRequired,
};

export default Result;

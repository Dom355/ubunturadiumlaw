import React, { Component } from "react";
import http from "../../server/httpService";
import Result from "./ResultContainer";
import NavbarTop from "../nav/NavbarTop";
import Instructions from "../nav/NavInstructions";

class SearchPage extends Component {
	state = {
		sectionNum: "",
		codeTitle: "",
		sectionContent: "",
		showResult: [],
		instructionOn: false,
		HideShowSearch: false,
	};
	async componentDidMount() {
		await this.getLaws();
	}

	getLaws = async () => {
		try {
			const { data: laws } = await http.get();
			const sectionNum = laws.section_num;
			const codeTitle = laws.code_title;
			const sectionContent = laws.content_xml;

			this.setState({ sectionNum, codeTitle, sectionContent });
		} catch (ex) {
			if (ex.response && ex.response === 404) alert("error receiving data");
		}
	};

	HideShowSearch = () => {
		var map = {};
		let HideShowSearch = this.state.HideShowSearch;
		var self = this;
		onkeydown = function (e) {
			map[e.keyCode] = e.type === "keydown";

			// Cmd + K
			if (e.keyCode === 75 && e.metaKey) {
				self.setState(() => ({ HideShowSearch: !HideShowSearch }));
			}
			//when press enter
			if (e.keyCode === 13) {
				self.setState({
					HideShowSearch: false,
				});
			}
		};
	};

	handleClick = (e) => {
		e.preventDefault();
		let HideShowSearch = this.state.HideShowSearch;
		this.setState({ HideShowSearch: !HideShowSearch });
	};

	instructionShow = () => {
		let instructionOn = this.state.instructionOn;
		this.setState({ instructionOn: !instructionOn });
	};
	render() {
		this.HideShowSearch();

		return (
			<div className="">
				<NavbarTop
					instructionOn={this.instructionShow}
					onClick={this.handleClick}
				/>
				{this.state.instructionOn ? <Instructions /> : null}
				<Result
					showResult={this.state.showResult}
					laws={this.state.laws}
					sectionText={this.state.sectionText}
					showSearch={this.state.showSearch}
					HideShowSearch={this.state.HideShowSearch}
					focus={this.focusOn}
				/>
			</div>
		);
	}
}

export default SearchPage;

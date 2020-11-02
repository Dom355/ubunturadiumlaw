import React, { Component } from "react";
import { connectAutoComplete, Snippet } from "react-instantsearch-dom";
import AutoSuggest from "react-autosuggest";

class Autocomplete extends Component {
	state = { value: this.props.currentRefinement };
	//currentRefinement is the current value of the query

	//retrieve the selected value from the autocomplete
	onChange = (event, { newValue }) => {
		if (!newValue) {
			this.props.onSuggestionCleared();
		}

		this.setState({ value: newValue });
	};

	//Called every time you update suggestions (input changed, user press Up, Down, Esc)
	//refine is a function that takes a query to retrieve our relevant suggestions.

	onSuggestionsFetchRequested = ({ value }) => {
		this.props.refine(value);
	};

	onSuggestionsClearRequested = () => {
		this.props.refine();
	};
	//how the suggestion will be display in the autosuggest box (input)
	//hits contains the list of suggestions
	getSuggestionValue(hit) {
		const searchResult = hit.section_num + "  " + hit.content_xml;
		return searchResult;
	}

	onKeyDown = ({ e, value }) => {
		// when press enter
		if (e.keyCode === 13) {
			this.setState({
				result: value,
			});
		}
	};

	renderSuggestion(hit) {
		const regex = /\[\d*\.\s-\s\d*\.]/gm;
		const heading = hit.heading;
		const newHeading = heading.replace(regex, "");

		return (
			<div className="row">
				<div className="col-3 ">
					<span
						style={{ fontSize: "10px", marginRight: "5px" }}
						className="title"
					>
						{hit.law_code}
					</span>

					<span className="hit">{hit.section_num}</span>
				</div>

				<div className="col-9" style={{ marginLeft: "0px" }}>
					<Snippet attribute="content_xml" hit={hit} tagName="em" />
					<br />
					<span style={{ fontSize: "10px" }} className="hit">
						{newHeading}
					</span>
				</div>
			</div>
		);
	}

	renderSectionTitle(section) {
		return section.index;
	}

	getSectionSuggestions(section) {
		return section.hits;
	}

	render() {
		const { hits, onSuggestionSelected } = this.props;
		const { value } = this.state;

		const inputProps = {
			placeholder: "Search a Californian Law",
			onChange: this.onChange,
			autoFocus: true,
			value,
		};

		return (
			<div>
				<AutoSuggest
					suggestions={hits}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					onSuggestionSelected={onSuggestionSelected}
					renderSectionTitle={this.renderSectionTitle}
					getSuggestionValue={this.getSuggestionValue}
					renderSuggestion={this.renderSuggestion}
					getSectionSuggestions={this.getSectionSuggestions}
					inputProps={inputProps}
				/>
			</div>
		);
	}
}

export default connectAutoComplete(Autocomplete);

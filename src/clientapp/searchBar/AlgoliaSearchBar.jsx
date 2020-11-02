import React, { Component } from "react";
import {
	InstantSearch,
	connectSearchBox,
	Configure,
} from "react-instantsearch-dom";
import Autocomplete from "./AlgoliaAutocomplete";
import algoliasearch from "algoliasearch/lite";
import "../css/ClientApp.css";

const VirtualSearchBox = connectSearchBox(() => null);

const searchClient = algoliasearch(
	"Z62FGCMHZD",
	"9a68937c02faa1182e49eb5c0737e009",
);
class AlgoliaSearchBar extends Component {
	render() {
		return (
			<div>
				<div className="algoliaSearchBar">
					{this.props.HideShowSearch ? (
						<InstantSearch indexName="AllCodes_CA" searchClient={searchClient}>
							<Configure hitsPerPage={7} />
							<VirtualSearchBox defaultRefinement={this.props.query} />
							<Autocomplete
								onSuggestionSelected={this.props.onSuggestionSelected}
								onSuggestionCleared={this.props.onSuggestionCleared}
							/>
						</InstantSearch>
					) : null}
				</div>
			</div>
		);
	}
}

export default AlgoliaSearchBar;

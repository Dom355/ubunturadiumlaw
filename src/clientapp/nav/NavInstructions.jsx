import React from "react";
import search from "../../styles/img/Search_Icon.png";
import searchsettings from "../../styles/img/searchsettings.png";
import booksection from "../../styles/img/booksection.png";

const Instructions = () => {
	return (
		<div className="container-fluid instructions">
			<span>
				<img className="icon_instructions" src={search} alt="searchicon" />
				Press CMD + K to search (or click on Search)
			</span>
			<br />
			<br />
			<span>
				<img
					className="icon_instructions"
					src={searchsettings}
					alt="searchicon"
				/>
				Use codes abbr. (CIV , PEN, FIN) to search a specific code. (i.e. "civ
				10")
			</span>
			<br />

			<br />
			<span>
				<img className="icon_instructions" src={booksection} alt="searchicon" />
				Search by Divisions, Titles or Parts by adding a section name. (i.e.
				"Division 1 pen")
			</span>
			<br />
		</div>
	);
};

export default Instructions;

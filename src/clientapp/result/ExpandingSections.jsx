import React from "react";
import { RegexResults } from "../helper/regexService";

const DbResults = ({ laws }) => {
	return (
		<div>
			{laws.map((i, num) => {
				const dblaws = i.content_xml;

				return (
					<div className="container row mt-5 wrap-text subtitle" key={num}>
						<div className="col-2">
							<b>{i.section_num}</b>
						</div>
						<div className="col-10">{RegexResults(dblaws)}</div>
					</div>
				);
			})}
		</div>
	);
};

export default DbResults;

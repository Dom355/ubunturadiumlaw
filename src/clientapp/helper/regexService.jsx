import React from "react";

export function RegexResults(string) {
	const splitString = string.replace(
		/\([a-z0-9][0-9]*\)\([a-z0-9][0-9]*\)|\([a-z0-90-9][0-9]*\)|:([0-9][0-9]*\.)|;([0-9][0-9]*\.)/g,
		replacer,
	);
	// //--> line break not showing in client so need to add 2 others in DOM
	const stringResult = splitString.split("\n\n").map((item, i) => {
		return <p key={i}>{item}</p>;
	});

	return stringResult;
}

function replacer(match) {
	return "\n\n" + match;
}

import React, { Component } from "react";

import TopNav from "./cmp/TopNav";
import HeroHeader from "./cmp/HeroHeader.jsx";
import CallToAction from "./cmp/CallToAction";
import Footer from "./cmp/Footer";
import ProductFeature1 from "./cmp/ProductFeature1";
import ProductFeature2 from "./cmp/ProductFeature2";
import ProductFeature3 from "./cmp/ProductFeature3.jsx";

class HomePage extends Component {
	state = {};
	render() {
		return (
			<div>
				<TopNav />
				<HeroHeader />
				<ProductFeature1 />
				<ProductFeature2 />
				<ProductFeature3 />
				<CallToAction />
				<Footer />
			</div>
		);
	}
}

export default HomePage;

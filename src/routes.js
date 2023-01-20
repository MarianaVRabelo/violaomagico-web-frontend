import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, ContactUs, PageTest } from "./pages";
import { Header } from "./components";
import GlobalStyle from "./globalStyles";

function RoutesPage() {
	return (
		<Router>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/page-test" element={<PageTest />} />
			</Routes>
		</Router>
	);
}

export default RoutesPage;

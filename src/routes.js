import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageTest from "./pages/PageTest";

function RoutesPage() {
	return (
		<Router>
			<Routes>
				<Route path="/page-test" element={<PageTest />} />
			</Routes>
		</Router>
	);
}

export default RoutesPage;

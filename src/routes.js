import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, ContactUs } from "./pages";
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
      </Routes>
    </Router>
  );
}

export default RoutesPage;

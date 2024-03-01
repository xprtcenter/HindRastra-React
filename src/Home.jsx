import React from "react";

import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import OtherPage from "./components/OtherPages/otherpage";
import { Routes, Route, useNavigate } from "react-router-dom";
const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/otherpage" element={<OtherPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default Home;

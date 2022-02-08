import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Users from "./pages/Users";
import OwnUserProfile from "./pages/OwnUserProfile";
import UserProfile from "./pages/UserProfile";

function App() {
    const [list, setList] = useState([]);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="users" element={<Users />}>
					<Route path="me" element={<OwnUserProfile />} />
					<Route path=":id" element={<UserProfile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

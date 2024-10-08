import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Discovery from "./pages/Discovery";
import Library from "./pages/Library";
import SignIn from "./pages/SignIn";
import CardsPage from "./pages/CardsPage"; 

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar setActivePage={setActivePage} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discovery" element={<CardsPage activePage={activePage} />} /> 
            <Route path="/library" element={<Library />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

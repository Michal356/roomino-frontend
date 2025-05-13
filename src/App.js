
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Strona główna</Link>
        <Link to="/login" className="nav-link">Zaloguj się</Link>
        <Link to="/register" className="nav-link">Załóż konto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

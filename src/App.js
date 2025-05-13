
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", backgroundColor: "#f9f3ee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Strona główna</Link>
        <Link to="/login" style={{ marginRight: "1rem" }}>Zaloguj się</Link>
        <Link to="/register">Załóż konto</Link>
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


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WhyRoomino from "./pages/WhyRoomino";
import Dashboard from "./pages/Dashboard";
import "./styles.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Roomino logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Strona główna</Link>
          <Link to="/why-roomino" className="nav-link">Dlaczego Roomino</Link>
          <Link to="/dashboard" className="nav-link">Panel użytkownika</Link>
          <Link to="/login" className="nav-link">Zaloguj się</Link>
          <Link to="/register" className="nav-link">Załóż konto</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/why-roomino" element={<WhyRoomino />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

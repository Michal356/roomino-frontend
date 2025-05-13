
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
      <h2>Zaloguj się</h2>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Hasło" />
      <button>Zaloguj się</button>
      <div className="small-link">
        Nie masz konta? <Link to="/register">Załóż je tutaj</Link>
      </div>
    </div>
  );
}

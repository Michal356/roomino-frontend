
import React from "react";

export default function Register() {
  return (
    <div className="login-container">
      <h2>Załóż konto</h2>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Hasło" />
      <button>Zarejestruj się</button>
    </div>
  );
}

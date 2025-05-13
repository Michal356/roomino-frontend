
import React from "react";

export default function Register() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Załóż konto</h2>
      <input placeholder="E-mail" type="email" style={{ display: "block", marginBottom: "1rem", padding: "0.5rem", width: "100%" }} />
      <input placeholder="Hasło" type="password" style={{ display: "block", marginBottom: "1rem", padding: "0.5rem", width: "100%" }} />
      <button style={{ padding: "0.75rem 1.5rem", backgroundColor: "#e67e22", color: "white", border: "none", borderRadius: "6px" }}>
        Zarejestruj się
      </button>
    </div>
  );
}


import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "3rem", color: "#e67e22" }}>Roomino</h1>
      <p style={{ fontSize: "1.25rem" }}>Twoja przyjazna platforma do wynajmu mieszkań</p>
      <button style={{
        marginTop: "1.5rem",
        padding: "1rem 2rem",
        backgroundColor: "#e67e22",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem"
      }}>
        Dodaj ogłoszenie
      </button>
      <div style={{ marginTop: "3rem", textAlign: "left" }}>
        <h2>Dlaczego Roomino?</h2>
        <ul>
          <li>✅ Szybkie i proste ogłoszenia</li>
          <li>✅ Ciepły, przyjazny interfejs</li>
          <li>✅ Gotowe na przyszłe funkcje czatu i filtrowania</li>
        </ul>
      </div>
      <footer style={{ marginTop: "4rem", fontSize: "0.9rem", color: "#777" }}>
        Kontakt: <a href="mailto:kontakt@roomino.pl">kontakt@roomino.pl</a>
      </footer>
    </div>
  );
}


import React from "react";

export default function Dashboard() {
  return (
    <div className="page">
      <h1>Witaj, Użytkowniku!</h1>
      <p>Twoje ogłoszenia:</p>
      <div className="announcement">
        <span>🛏️ Pokój w Warszawie – 2000 zł</span>
        <div>
          <button>Edytuj</button>
          <button>Usuń</button>
        </div>
      </div>
      <div className="announcement">
        <span>🏠 Kawalerka w Krakowie – 2500 zł</span>
        <div>
          <button>Edytuj</button>
          <button>Usuń</button>
        </div>
      </div>
      <button style={{
        marginTop: "2rem",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#e67e22",
        color: "white",
        border: "none",
        borderRadius: "6px"
      }}>
        ➕ Dodaj nowe ogłoszenie
      </button>
    </div>
  );
}

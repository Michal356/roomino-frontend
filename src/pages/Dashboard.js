
import React from "react";

export default function Dashboard() {
  return (
    <div className="page">
      <h1>Witaj, Użytkowniku!</h1>
      <p>Twoje ogłoszenia:</p>
      <ul>
        <li>🛏️ Pokój w Warszawie – 2000 zł <button>Edytuj</button> <button>Usuń</button></li>
        <li>🏠 Kawalerka w Krakowie – 2500 zł <button>Edytuj</button> <button>Usuń</button></li>
      </ul>
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


import React from "react";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Roomino</h1>
        <p>Twoja przyjazna platforma do wynajmu mieszkań</p>
        <button>Dodaj ogłoszenie</button>
      </div>
      <div className="features">
        <div className="feature-tile">✅ Intuicyjny interfejs</div>
        <div className="feature-tile">🏠 Dodawanie ogłoszeń</div>
        <div className="feature-tile">💬 Gotowe na czat</div>
        <div className="feature-tile">🔍 Wyszukiwanie po lokalizacji</div>
      </div>
      <footer>
        Kontakt: <a href="mailto:kontakt@roomino.pl">kontakt@roomino.pl</a>
      </footer>
    </div>
  );
}

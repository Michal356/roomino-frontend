
import React from 'react';
import './styles.css';

export default function Home() {
  return (
    <div className="hero-section">
      <div className="overlay">
        <h1>GOTOWY NA WYNAJEM?</h1>
        <p>Idealny najemca? A może zaufany wynajmujący? U nas znajdziesz jedno i drugie.</p>
        <a href="/rooms" className="cta-button">Rozpocznij z Roomino</a>
      </div>
    </div>
  );
}

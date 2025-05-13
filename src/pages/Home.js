
import React from 'react';
import '../styles.css';

export default function Home() {
  return (
    <div className="home-wrapper">
      <header className="top-menu">
        <div className="logo">Roomino</div>
        <nav className="nav-links">
          <a href="/rooms">Pokoje</a>
          <a href="/register">Rejestracja</a>
          <a href="/login">Logowanie</a>
          <a href="/admin">Panel Admina</a>
        </nav>
      </header>

      <main className="home-content">
        <section className="login-box">
          <h2>Witaj w Roomino</h2>
          <p>Znajdź pokój lub wynajmij swoje mieszkanie</p>
          <a className="start-button" href="/login">Zaloguj się</a>
        </section>

        <section className="image-gallery">
          <img src="https://source.unsplash.com/500x300/?apartment" alt="Apartment 1" />
          <img src="https://source.unsplash.com/500x300/?room" alt="Apartment 2" />
          <img src="https://source.unsplash.com/500x300/?flat" alt="Apartment 3" />
        </section>
      </main>
    </div>
  );
}

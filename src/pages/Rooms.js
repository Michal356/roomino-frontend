
import React from 'react';
import '../styles.css';

const rooms = [
  {
    id: 1,
    title: "Pokój 1-osobowy w centrum Krakowa",
    city: "Kraków",
    price: 1300,
    image: "https://source.unsplash.com/400x300/?room,krakow",
    description: "Przytulny pokój blisko rynku, idealny dla studenta.",
    available: true
  },
  {
    id: 2,
    title: "2-pokojowe mieszkanie w Warszawie",
    city: "Warszawa",
    price: 2600,
    image: "https://source.unsplash.com/400x300/?apartment,warsaw",
    description: "Nowoczesne mieszkanie z balkonem i windą.",
    available: true
  },
  {
    id: 3,
    title: "Pokój do wynajęcia – Gdańsk Wrzeszcz",
    city: "Gdańsk",
    price: 1100,
    image: "https://source.unsplash.com/400x300/?room,gdansk",
    description: "Pokój w mieszkaniu studenckim blisko SKM.",
    available: false
  }
];

export default function Rooms() {
  return (
    <div className="room-list-container">
      <h1>Dostępne pokoje i mieszkania</h1>
      <div className="room-list">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.title} loading="lazy" />
            <div className="room-info">
              <h2>{room.title}</h2>
              <p><strong>Miasto:</strong> {room.city}</p>
              <p><strong>Cena:</strong> {room.price} PLN</p>
              <p>{room.description}</p>
              <p className={room.available ? 'available' : 'unavailable'}>
                {room.available ? "Dostępny" : "Niedostępny"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

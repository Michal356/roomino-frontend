
import React from 'react';

const rooms = [
  {
    id: 1,
    title: "Pokój 1-osobowy w centrum Krakowa",
    city: "Kraków",
    price: 1300,
    image: "https://via.placeholder.com/300x200?text=Pokoj+1",
    description: "Przytulny pokój blisko rynku, idealny dla studenta.",
    available: true
  },
  {
    id: 2,
    title: "2-pokojowe mieszkanie w Warszawie",
    city: "Warszawa",
    price: 2600,
    image: "https://via.placeholder.com/300x200?text=Pokoj+2",
    description: "Nowoczesne mieszkanie z balkonem i windą.",
    available: true
  },
  {
    id: 3,
    title: "Pokój do wynajęcia – Gdańsk Wrzeszcz",
    city: "Gdańsk",
    price: 1100,
    image: "https://via.placeholder.com/300x200?text=Pokoj+3",
    description: "Pokój w mieszkaniu studenckim blisko SKM.",
    available: false
  }
];

export default function Rooms() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Oferty pokoi i mieszkań</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {rooms.map(room => (
          <div key={room.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '1rem',
            width: '300px',
            backgroundColor: room.available ? '#fff' : '#f8f8f8'
          }}>
            <img src={room.image} alt={room.title} loading="lazy" style={{ width: '100%', borderRadius: '6px' }} />
            <h2>{room.title}</h2>
            <p><strong>Miasto:</strong> {room.city}</p>
            <p><strong>Cena:</strong> {room.price} PLN</p>
            <p>{room.description}</p>
            <p style={{ color: room.available ? 'green' : 'red' }}>
              {room.available ? "Dostępny" : "Niedostępny"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

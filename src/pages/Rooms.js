
import React from 'react';
import '../styles.css';

const listings = [
  {
    id: 1,
    title: 'Nowoczesny pokój w centrum Warszawy',
    city: 'Warszawa',
    price: 1600,
    image: 'https://source.unsplash.com/600x400/?apartment,modern',
    rating: 4.8,
    reviews: 31,
    available: true,
  },
  {
    id: 2,
    title: 'Mieszkanie 2-pokojowe blisko morza',
    city: 'Gdańsk',
    price: 2400,
    image: 'https://source.unsplash.com/600x400/?flat,sea',
    rating: 4.6,
    reviews: 22,
    available: true,
  },
  {
    id: 3,
    title: 'Pokój jednoosobowy dla studenta',
    city: 'Kraków',
    price: 1100,
    image: 'https://source.unsplash.com/600x400/?room,student',
    rating: 4.2,
    reviews: 10,
    available: false,
  },
];

export default function Rooms() {
  return (
    <div className="rooms-wrapper">
      <h1 className="section-title">Wybierz pokój lub mieszkanie</h1>
      <div className="room-grid">
        {listings.map(room => (
          <div key={room.id} className="room-card-wide">
            <img src={room.image} alt={room.title} loading="lazy" />
            <div className="room-details">
              <h2>{room.title}</h2>
              <p className="room-meta">
                {room.city} • {room.price} PLN
              </p>
              <p className="room-status">
                {room.available ? (
                  <span className="available">Dostępny</span>
                ) : (
                  <span className="unavailable">Niedostępny</span>
                )}
              </p>
              <p className="room-rating">
                Ocena: <strong>{room.rating}</strong> ({room.reviews} opinii)
              </p>
              <a href="#" className="room-btn">Zobacz szczegóły</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

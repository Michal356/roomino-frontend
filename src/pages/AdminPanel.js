
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const mockRooms = [
  { id: 1, title: "Pokój w Warszawie", available: true },
  { id: 2, title: "Pokój w Krakowie", available: false },
];

export default function AdminPanel() {
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Panel Admina</h1>
      <button onClick={logout} style={{ marginBottom: '1rem' }}>Wyloguj</button>
      <ul>
        {mockRooms.map(room => (
          <li key={room.id}>
            {room.title} – {room.available ? "Dostępny" : "Niedostępny"}
          </li>
        ))}
      </ul>
    </div>
  );
}

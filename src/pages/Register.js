
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tymczasowa "rejestracja" lokalna
    const user = { name, email, password };
    localStorage.setItem("mockUser", JSON.stringify(user));
    alert("Rejestracja zakończona! Możesz się teraz zalogować.");
    navigate("/login");
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Rejestracja</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
}

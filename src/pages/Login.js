
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@roomino.pl" && password === "1234") {
      login();
      navigate("/admin");
    } else {
      alert("Nieprawidłowe dane logowania.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Logowanie do panelu admina</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
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
        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
}

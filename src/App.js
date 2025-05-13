import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2c3e50' }}>
        Roomino
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#555' }}>
        Twoja nowa platforma do wynajmu mieszkań i pokoi.
      </p>
      <button
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Funkcja dodawania ogłoszeń już wkrótce!')}
      >
        Dodaj ogłoszenie
      </button>

      <div style={{ marginTop: '4rem', textAlign: 'left' }}>
        <h2>Dlaczego Roomino?</h2>
        <ul>
          <li>✅ Szybka publikacja ogłoszeń</li>
          <li>✅ Prosty czat między użytkownikami</li>
          <li>✅ Filtrowanie po lokalizacji i cenie</li>
          <li>✅ Dostępność z telefonu i komputera</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Roomino</h1>
      <p>Twoja platforma do wynajmu mieszkań i pokoi.</p>
      <button onClick={() => alert('Rejestracja już wkrótce!')}>Dołącz teraz</button>
    </div>
  );
}

export default App;
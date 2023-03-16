const createGame = async () => {
  const gameId = JSON.parse(window.localStorage.getItem('gameID')) || [];
  if (gameId.length === 0) {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      body: JSON.stringify({ name: "Fuad's game" }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    localStorage.setItem('gameID', JSON.stringify(data));
  }
};

export default createGame;
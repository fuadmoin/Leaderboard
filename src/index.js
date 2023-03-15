import './styles.css';
import Leaderboard from '../modules/leaderboard.js';
import createGame from '../modules/createGame.js';
const form = document.querySelector('.score');
const name = document.querySelector('.yourName');
const score = document.querySelector('.yourScore');

form.addEventListener('submit', (event) => {
  event.preventDefault();
   createGame();
  const board = new Leaderboard(name.value, score.value);
  if (name.value !== '' && score.value !== '') {
    Leaderboard.add(board);
    // Leaderboard.displayAll();
    name.value = '';
    score.value = '';
    name.focus();
  }
});

// window.onload = Leaderboard.displayAll();
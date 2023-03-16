import gameID from './gameID.js';

const displayAll = async () => {
  const id = gameID();
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();

  const ul = document.querySelector('.display');
  ul.innerHTML = '';
  for (let i = 0; i < result.result.length; i += 1) {
    const node = document.createElement('li');
    node.innerHTML = `
     <span class="items names">${result.result[i].user}</span>
     <span class="items scoreresult">${result.result[i].score}</span>
     `;
    ul.append(node);
  }
};

export default displayAll;
const displayAll = () => {
  const scores = JSON.parse(window.localStorage.getItem('scores')) || [];
  const ul = document.querySelector('.display');
  ul.innerHTML = '';
  for (let i = 0; i < scores.length; i += 1) {
    const node = document.createElement('li');
    node.innerHTML = `
     <span class="items">${scores[i].name}</span>
     <span class="items">${scores[i].number}</span>
     `;
    ul.append(node);
  }
};

export default displayAll;
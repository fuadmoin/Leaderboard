const add = (data) => {
  const scores = JSON.parse(window.localStorage.getItem('scores')) || [];
  scores.push(data);
  localStorage.setItem('scores', JSON.stringify(scores));
};

export default add;
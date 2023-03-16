const gameID = () => {
  const json = JSON.parse(window.localStorage.getItem('gameID'));
  const { result } = json;
  const start = result.indexOf('ID: ') + 4;
  const end = result.indexOf(' added');
  const id = result.substring(start, end);
  return id;
};

export default gameID;
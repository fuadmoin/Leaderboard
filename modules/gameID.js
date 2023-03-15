const gameID = () => {
          
    const json = JSON.parse(window.localStorage.getItem('gameID'))
    const result = json.result;
    console.log(result);
    let start_index = result.indexOf("ID: ") + 4;
    let end_index = result.indexOf(" added");
    let id = result.substring(start_index, end_index);
    return id;
    }


    export default gameID;
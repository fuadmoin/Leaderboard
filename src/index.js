import './styles.css' ;
class Leaderboard {
    constructor( name , number){
this.name = name;
this.number = number;
    }
    static add (data)
    {
        const scores = JSON.parse(window.localStorage.getItem('scores')) || [];
        scores.push(data);
        localStorage.setItem('scores', JSON.stringify(scores));
    }

    static displayAll(){
    const scores = JSON.parse(window.localStorage.getItem('scores')) || [];
   const ul = document.querySelector('.display');
   ul.innerHTML= '';
   for (let i=0; i<scores.length; i+=1){
    const node = document.createElement('li')
    node.innerHTML=`
    <span class="items">${scores[i].name}</span>
    <span class="items">${scores[i].number}</span>
    `;
    ul.append(node);
   }

    }
}

const form = document.querySelector('.score');
const name = document.querySelector('.yourName');
const score = document.querySelector('.yourScore');

form.addEventListener('submit', (event) =>{
 event.preventDefault();
 const board = new Leaderboard(name.value, score.value)
 if(name.value !="" && score.value !=""){
 Leaderboard.add(board);
 Leaderboard.displayAll();
 name.value="";
 score.value="";
 name.focus();
 }

} );

window.onload = Leaderboard.displayAll();
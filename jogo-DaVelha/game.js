let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winStates = [
    [0,1,2], [3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

let player1 = document.querySelector('.placar1');
let player2 = document.querySelector('.placar2');
let valor1 = '';
let valor2 = '';
let btn2 = document.querySelector('.btn2');


function handleMove(position){
    if(gameOver){
        return;
    }
    if(board[position] == ''){
    board[position] = symbols[playerTime];

    gameOver = isWin();

    if(gameOver == false){
    if(playerTime == 0){
        playerTime = 1;
    }else{
        playerTime = 0;
    }
    }
}

return gameOver;

}

function isWin(){
    
    for(let i = 0; i<winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] &&
           board[pos1] == board[pos3] && 
           board[pos1] != '') {
           placar()
           return true;
        }


    }
    return false;
}

function placar (){
    
if(playerTime == 0){
    player1.innerHTML = valor1 ++;
    localStorage.setItem('nome1',valor1);
}
if(playerTime == 1){
    player2.innerHTML = valor2 ++;
    localStorage.setItem('nome2',valor2);
}

}

onload = function (){
valor1 = localStorage.getItem('nome1');
valor2 = localStorage.getItem('nome2');
player2.innerHTML = valor2;
player1.innerHTML = valor1;
}

btn2.addEventListener('click', ()=>{
    localStorage.removeItem('nome1');
    localStorage.removeItem('nome2');
    location.reload();
})
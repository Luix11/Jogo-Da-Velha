document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            gameOverDisplay = document.querySelector('.gameOverDisplay');
            gameOverDisplay.style="display: flex;";
            gameOverDisplay.innerHTML = `<h3>Fim de jogo - O Vencedor foi o Jogador ${(playerTime + 1)}</h3>`;
            gameOverDisplay.innerHTML += '<button class="btn" onclick="reset()">Restart</button>' ;
        }, 10)
    };

updateSquare();
}
    

function updateSquare() {
    let square = document.querySelectorAll(".square");
    square.forEach((square) => {
        let position = square.id;
        let symbols = board[position];

        if (symbols != '') {
            square.innerHTML = `<div class='${symbols}'></div>`;
        }
    })
}

function reset(){
    location.reload();
    
    
}
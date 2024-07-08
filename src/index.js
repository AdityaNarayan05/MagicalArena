const Player = require('./player');
const Game = require('./game');

function main() {
    const playerA = new Player('Ajay',50,5,10);
    const playerB = new Player('Saumya',100,10,5);
    const playerC = new Player('Aditya',80,8,12);
    const playerD = new Player('Mohi', 60,6,15);
    const game = new Game(playerB, playerA);//initializing players in constructor
    
    const result = game.startGame();//invoking the game logic service from game file 
    console.log(result);
}

main();

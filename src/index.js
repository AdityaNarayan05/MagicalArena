const Player = require('./player');
const Game = require('./game');

function main() {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);
    const game = new Game(playerA, playerB);//initializing players in constructor
    
    const result = game.startGame();//invoking the game logic service from game file 
    console.log(result);
}

main();

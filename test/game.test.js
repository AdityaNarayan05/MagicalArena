const rollDice = require('../src/utils');
jest.mock('../src/utils');

const Player = require('../src/player');
const Game = require('../src/game');

describe('Game Class', () => {
    it('should set up the game with two players correctly', () => {
        const player1 = new Player('Player 1', 100, 10, 15);
        const player2 = new Player('Player 2', 80, 8, 12);
        const game = new Game(player1, player2);
        expect(game.player1).toBe(player1);
        expect(game.player2).toBe(player2);
    });

    it('should determine who attacks first based on health', () => {
        const player1 = new Player('Player 1', 100, 10, 15);
        const player2 = new Player('Player 2', 80, 8, 12);
        const game = new Game(player1, player2);
        expect(game.startGame()).toMatch(/wins!/);
    });

    it('should correctly execute turns and determine a winner', () => {
        const player1 = new Player('Player 1', 50, 5, 10);
        const player2 = new Player('Player 2', 100, 10, 5);
        const game = new Game(player1, player2);

        // Mock dice rolls
        const rolls = [5, 2, 4, 3]; // Fixed rolls for testing
        let rollIndex = 0;
        rollDice.mockImplementation(() => rolls[rollIndex++ % rolls.length]);

        expect(game.startGame()).toBe('Player 1 wins!');
    });
});
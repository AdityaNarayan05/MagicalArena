const rollDice = require('../src/utils');
jest.mock('../src/utils');

const Player = require('../src/player');
const Game = require('../src/game');

describe('Player Class', () => {
    it('should set up player attributes correctly', () => {
        const player = new Player('Test Player', 100, 10, 15);
        expect(player.name).toBe('Test Player');
        expect(player.health).toBe(100);
        expect(player.strength).toBe(10);
        expect(player.attack).toBe(15);
    });

    it('should calculate the attack roll properly', () => {
        const player = new Player('Test Player', 100, 10, 15);
        rollDice.mockReturnValue(3);
        expect(player.attackRoll()).toBe(15 * 3);
    });

    it('should calculate the defend roll properly', () => {
        const player = new Player('Test Player', 100, 10, 15);
        rollDice.mockReturnValue(2);
        expect(player.defendRoll()).toBe(10 * 2);
    });

    it('should reduce health correctly when taking damage', () => {
        const player = new Player('Test Player', 100, 10, 15);
        player.takeDamage(30);
        expect(player.health).toBe(70);
    });

    it('should set health to zero if damage is more than current health', () => {
        const player = new Player('Test Player', 20, 10, 15);
        player.takeDamage(30);
        expect(player.health).toBe(0);
    });

    it('should correctly tell if a player is alive or not', () => {
        const player = new Player('Test Player', 20, 10, 15);
        expect(player.isAlive()).toBe(true);
        player.takeDamage(20);
        expect(player.isAlive()).toBe(false);
    });
});

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
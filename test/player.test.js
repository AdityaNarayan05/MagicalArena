const rollDice = require('../src/utils');
jest.mock('../src/utils');

const Player = require('../src/player');

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
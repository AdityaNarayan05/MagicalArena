const rollDice = require('../src/utils');

describe('rollDice function', () => {
    it('should give a number between 1 and 6', () => {
        for (let i = 0; i < 100; i++) { // Run multiple times to check randomness
            const roll = rollDice();
            expect(roll).toBeGreaterThanOrEqual(1);
            expect(roll).toBeLessThanOrEqual(6);
        }
    });

    it('should always return whole numbers', () => {
        for (let i = 0; i < 100; i++) { // Run multiple times to check randomness
            const roll = rollDice();
            expect(Number.isInteger(roll)).toBe(true);
        }
    });
});
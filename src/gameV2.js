const Player = require('./player');
const rollDice = require('./utils');

class Game {
    constructor(player1, player2, diceSides = 6) {
        this.player1 = player1;
        this.player2 = player2;
        this.diceSides = diceSides;
    }

    startGame() {
        let attacker, defender;
        if (this.player1.health <= this.player2.health) {
            attacker = this.player1;
            defender = this.player2;
        } else {
            attacker = this.player2;
            defender = this.player1;
        }

        while (attacker.isAlive() && defender.isAlive()) {
            console.log(`${attacker.name} attacks!`);
            const attackDamage = attacker.attackRoll(this.diceSides);
            if (attackDamage === Infinity) {
                console.log(`Critical hit! ${defender.name} is instantly killed.`);
                defender.takeDamage(defender.health);
            } else {
                const defendValue = defender.defendRoll(this.diceSides);
                const damage = Math.max(attackDamage - defendValue, 0);
                defender.takeDamage(damage);
                console.log(`${defender.name} defends and takes ${damage} damage. Health is now ${defender.health}`);
            }

            [attacker, defender] = [defender, attacker];
        }

        if (!this.player1.isAlive()) {
            return `${this.player2.name} wins!`;
        }
        return `${this.player1.name} wins!`;
    }
}

module.exports = Game;

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    takeTurn(attacker, defender) {
        const attackDamage = attacker.attackRoll();
        const defendValue = defender.defendRoll();
        const damageDealt = Math.max(0, attackDamage - defendValue); // Ensure non-negative damage

        defender.takeDamage(damageDealt);

        console.log(`${attacker.name} attacks ${defender.name} and deals ${damageDealt} damage.`);
        console.log(`${defender.name}'s health is now ${defender.health}.`);
    }

    checkWinner() {
        if (this.player1.isAlive()) {
            return `${this.player1.name} wins!`;
        } else {
            return `${this.player2.name} wins!`;
        }
    }

    startGame() {
        // Determine the initial attacker based on health
        let attacker = this.player1.health <= this.player2.health ? this.player1 : this.player2;
        let defender = attacker === this.player1 ? this.player2 : this.player1;

        // Loop until one player dies
        while (attacker.isAlive() && defender.isAlive()) {
            this.takeTurn(attacker, defender);
            [attacker, defender] = [defender, attacker]; // Swap roles
        }

        // Return the winner
        return this.checkWinner();
    }
};

module.exports = Game;
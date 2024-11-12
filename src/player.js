const rollDice = require('./utils');
class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    // attackRoll(diceSides = 6) {
    //     // Check for critical hit
    //     if (Math.floor(Math.random() * 15) === 0) {
    //         return Infinity; // Critical hit: instant kill
    //     }
    //     const roll = rollDice(diceSides);
    //     return this.attack * roll;
    // }

    // defendRoll(diceSides = 6) {
    //     const roll = rollDice(diceSides);
    //     return this.strength * roll;
    // }

    attackRoll() {
        return this.attack * rollDice();
    }

    defendRoll() {
        return this.strength * rollDice();
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    isAlive() {
        return this.health > 0;
    }
};

module.exports = Player;
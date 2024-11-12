function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

//New feature if Dice has more sides
// function rollDice(sides = 6) {
//     return Math.floor(Math.random() * sides) + 1;
// }

module.exports = rollDice;

# Magical Arena Project

This project implements a magical arena game where two players, each defined by their health, strength, and attack attributes, battle in a turn-based fashion. The game continues until one player's health reaches zero, determining the winner.

## Problem Statement

Design a Magical Arena. Every player is defined by three positive integer attributes: `health`, `strength`, and `attack`. A player dies if their health reaches 0. Any two players can fight a match in the arena. Players attack in turns. The attacking player rolls an attacking dice and the defending player rolls a defending dice. The `attack` value multiplied by the outcome of the attacking dice roll is the damage dealt by the attacker. The `strength` value multiplied by the outcome of the defending dice roll is the damage defended by the defender. Any damage dealt by the attacker that exceeds the damage defended by the defender reduces the defender's health. The game ends when a player's health reaches 0.

The player with lower health attacks first at the start of a match.

### Example

Assume two players:

- Player A: 50 health, 5 strength, 10 attack
- Player B: 100 health, 10 strength, 5 attack

Both the attacking and defending dice are 6-sided with values ranging from 1 to 6.

#### Sample Turn:

1. Player A attacks and rolls a die: Die roll = 5
2. Player B defends and rolls a die: Die roll = 2
3. Attack damage = 5 * 10 = 50
4. Defending strength = 10 * 2 = 20
5. Player B's health is reduced by 30 (50 - 20) to 70.

Next turn:

1. Player B attacks and rolls a die: Die roll = 4
2. Player A defends and rolls a die: Die roll = 3
3. Attack damage = 4 * 5 = 20
4. Defending strength = 5 * 3 = 15
5. Player A's health is reduced by 5 (20 - 15) to 45.
   And so on...

## Features

- **Player Attributes:**

  - Each player has health, strength, and attack attributes.
  - Players attack in turns using dice rolls to determine damage and defense.
- **Game Logic:**

  - Players with lower health attack first.
  - Damage calculation based on player attributes and dice rolls.
  - Game ends when any player's health reaches zero.
- **Unit Testing:**

  - Comprehensive unit tests for player and game logic.
  - Ensures reliable and correct functionality of the game.

## Technologies Used

- **Backend:**
  - Node.js
  - Jest (for unit testing)

## Project Structure

```
magical_arena/
│
├── src/
│ ├── utils.js
│ ├── player.js
│ ├── game.js
│ └── index.js
│
├── test/
│ ├── utils.test.js
│ ├── player.test.js
│ └── game.test.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```
2. Running the Game
   To start the game,
   run:

   ```bash
   npm start
   ```

   ```bash
   npm run dev
   ```
3. Running Tests
   To run the unit tests, use:

   ```bash
   npm test
   ```

### Testing

- The project includes comprehensive unit tests for the following:
  - Player Class: Tests for initializing player attributes, calculating attack and defend rolls, reducing health on taking damage, and determining if a player is alive.
  - Game Class: Tests for initializing the game with two players, determining the initial attacker based on health, and executing turns to determine a winner.
  - Utils: Tests for the rollDice function to ensure it returns a number between 1 and 6 and only returns integers.

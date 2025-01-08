class Game {
    constructor() {
        this.targetNumber = null;
        this.attempts = 0;
        this.isGameOver = false;
    }

    startNewGame() {
        this.targetNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        this.isGameOver = false;
        console.log("Game started! Guess the number between 1 and 100.");
    }

    checkGuess(userGuess) {
        if (this.isGameOver) {
            console.log("The game is over. Start a new game.");
            return;
        }

        this.attempts++;

        if (userGuess < this.targetNumber) {
            console.log("Higher! Try again.");
        } else if (userGuess > this.targetNumber) {
            console.log("Lower! Try again.");
        } else {
            this.isGameOver = true;
            console.log(`Congratulations! You've guessed the correct number ${this.targetNumber} in ${this.attempts} attempts.`);
        }
    }
    resetGame() {
        this.isGameOver = true;
        console.log("The game has been reset. Start a new game.");
    }
}

const game = new Game();
game.startNewGame();
game.checkGuess(50);
game.checkGuess(75);
game.checkGuess(62);
game.checkGuess(56);

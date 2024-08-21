# Project Name and Introduction

We have created a card game called **"Set"**, where players must find a group of cards that satisfy specific criteria. The objective of the game is to identify as many sets as possible within a 5-minute time limit. At the start of the game, 12 cards will be laid face-up, and whenever a set is found, the corresponding cards are replaced. The game is implemented in JavaScript for functionality, with HTML/CSS used for the front-end. Additionally, we've included a hint generator as a special feature.

## Rules of the Set Card Game

**Set** is a card game that demands keen observation and quick thinking. Each card in the game has four attributes:

- **Number**: one, two, or three
- **Color**: blue, green, or purple
- **Shape**: diamond, wave, or oval
- **Fill**: solid, hollow, or shaded

The main objective is to find a "set" of three cards that meet the following rule: for each of the four attributes, the three cards must either be exactly the same or completely different.

### Example:

If the selected cards are 3 solid red diamonds, 2 solid green squiggles, and 1 solid purple oval, it is a set because the shading of the three cards is the same, while the numbers, colors, and shapes are all different.

If the selected cards are 3 cards, each with a red diamond and a different number of diamonds, but two are striped, and one is filled-in, it is not a set because the shading feature condition isn't satisfied.

## How to Play the Game

1. Before playing, click "View Rules."
2. At the start of the game, click the "Start Game" button, and the timer will begin counting down from 5 minutes.
3. Players then make sets based on the rules.
4. As the game progresses, the player can click the "Hint" button on the left panel to receive a hint, helping them find a set.
5. The game ends either when the timer runs out or there are no more cards in the deck, and all remaining cards are on the table. A game summary panel will display the score and time taken to find the sets.
6. To start a new game, click the "New Game" button on the game summary panel, which will take you to the main page. Click "Start Game" to begin a new round.

## Installation Instructions

1. Download and install **Visual Studio Code**.
2. Install the **Live Server** extension in VS Code.
3. Close and reopen VS Code.
4. Clone the repository for this project.
5. Open `index.html` in VS Code, then click the "Go Live" button in the bottom-right corner of VS Code. The game will automatically open in your browser.

## Possible Installation Issues

- If the `index.html` page doesn't load, reinstall the **Live Server** extension.
- If the page freezes, and the refresh button isn't working, and the console shows an infinite loop, close VS Code and reinstall **Live Server**.

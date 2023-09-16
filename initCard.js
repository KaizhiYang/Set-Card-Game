//initialize the card attributes array
const colorArr = ["red", "green","purple"];
const shapeArr=["diamond", "oval", "squiggles"];
const numberArr=[1,2,3];
const shadingArr=["open","solid","striped"];


//construct the card into object
function Card(id, color, shape, number,shading){
    this.id=id;
    this.color=color;
    this.shape=shape;
    this.number=number;
    this.shading =shading;
}

//create a deck for 81 cards
function generateDeck(){
    const deck=[];
    let id = 0;
    for (let colorIndex = 0; colorIndex < colorArr.length; colorIndex++) {
        for (let shapeIndex = 0; shapeIndex < shapeArr.length; shapeIndex++) {
            for (let numberIndex = 0; numberIndex < numberArr.length; numberIndex++) {
                for (let shadingIndex = 0; shadingIndex < shadingArr.length; shadingIndex++) {
                    const card = {
                        id,
                        color: colorArr[colorIndex],
                        shape: shapeArr[shapeIndex],
                        number: numberArr[numberIndex],
                        shading: shadingArr[shadingIndex],
                    };
                    deck.push(card);
                    id++;
                }
            }
        }
    }

    return deck;
}

//test
const deck=generateDeck();
console.log(deck);

//shuffle the card
function shuffle(deck){
    const shuffledDeck=[...deck];
    //Fisher-Yates (Knuth) Shuffle
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[randomIndex]] = [shuffledDeck[randomIndex], shuffledDeck[i]];
    }
    return shuffledDeck;
}

//test
const shuffledDeck = shuffle(deck);
console.log(shuffledDeck);

//generate 12 cards on table
function onTable(shuffledDeck){
    const cardsOnTable=[];
    for(let i=0; i<12; i++){
        let removedCard=shuffledDeck.shift();
        cardsOnTable.push(removedCard);
    }
    return cardsOnTable;
}

//test
const cardsOnTable = onTable(shuffledDeck);
console.log(cardsOnTable);

// Display the cards
//author: Yiheng Zhou
function displayCards(cardsOnTable) {
    let gameBoard = document.getElementById('game-board');
    for (let i = 0; i < cardsOnTable.length; i++) {
        let cardData = cardsOnTable[i];
        let card = document.createElement('div');
        card.className = 'card';
        // Create a text representing the card attributes
        let text = document.createElement('p');
        text.textContent = `${cardData.color} ${cardData.shape} ${cardData.number} ${cardData.shading}`;
        cards.appendChinld(text);
        gameBoard.appendChild(card);
        }
}

// Call the displayCards function after your card data is ready

function displayCards(cards) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';  // clear gameBoard

    for (let card of cards) {
        // create a new div to show cards
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        
        
        // !
        cardElement.textContent = `Color: ${card.color}, Shape: ${card.shape}, Number: ${card.number}, Shading: ${card.shading}`;

        gameBoard.appendChild(cardElement);
    }
}

displayCards(cardsOnTable);






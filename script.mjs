// Memory Card Game Layout Starts!
// References for Form and Game Elements is Here!
const form = document.getElementById("login");
const game = document.getElementById("memoryGameBoard");
// References for Form and Game Elements Ends Here.

// Event Listener for Form Submission Starts!
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm()) {
        form.style.display = "none";
        game.style.display = "block";
        resetGame();
        form.remove();
    } else {
        alert(`Please fill in all input fields to continue.`);
    }
});

function validateForm() {
    const email = document.getElementById(`email`).value;
    const password = document.getElementById(`password`).value;
    return email && password;
}

const numberOfRows = 4;
const numberOfColumns = 4;
// const cardLayout = []; is this needed? Doesn't appear so.

const gameBoard = document.getElementById("memoryGameBoard"); // Container for the cards in the HTML as a div container.

// Creating card tempalte with DocumentFragment 

// Card data with unique identifiers.

const cardData = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];

// shuffle the cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// shuffle the card data array
shuffle(cardData);

// Old nested for loop to create card grid. Now moved on to using dynamically created cards by Document Fragment and Clone Node

for (let i = 0; i < numberOfRows; i++) { // for loop for rows
    const row = document.createElement(`div`); // creating a new row as a div.
    row.classList.add(`card-row`); // adding card-row class to the row.
    for (let j = 0; j < numberOfColumns; j++) { // for loop for columns. Apparently called cells as well?
        const card = document.createElement("div"); // Creating a div for each card. ("card-div")
        // console.log(`Add cell ${j} to row ${i}`);
        card.classList.add("card"); // Adding card class to style later.

        row.appendChild(card); // Adding card to the row.
    }
    gameBoard.appendChild(row); // Adding full row of cards to the row.
}

// Attempting Dynamic card generation with cloneNode without causing any errors. Here we go!
// Ran out of time to implement it. For now I just will comment it out.

// referencing card template in html
// const cardTemplate = document.getElementById(`cardTemplate`);
// // createa DocumentFragment to store the cloned cards
// const fragment = document.createDocumentFragment();

// // looping through card data array
// cardData.forEach((data, index) => {
//     // cloning the card template
//     const cardClone = cardTemplate.content.cloneNode(true);

//     // creating card data with data
//     const card = cardClone.querySelector(`.card`);
//     card.dataset.cardId = index;
//     card.textContent = data;

//     // Appending the cloned card to the fragment
//     fragment.appendChild(cardClone);
// });

// // Appending the fragment containing all of the  cards to the game board.

// gameBoard.appendChild(fragment);


const cards = document.querySelectorAll(`.card`); // selecting all card elements.
console.log(cards);
cards.forEach((card, index) => {
    card.dataset.cardId = index; // Assigning an identifier to each card.
    card.textContent = cardData[index]; // setting card conent that is based on cardData.

    card.addEventListener(`click`, handleCardClick); // Click event listener for each card.
});

function checkWinCondition() {
    const allCards = document.querySelectorAll(`.card`);
    const matchedCards = document.querySelectorAll(`.matched`);

    if (matchedCards.length === allCards.length) {
        alert(`Yay! You matched all the cards! You Win the game!`);
    }
}

// Add reset game function

function resetGame() {
    cards.forEach(card => {
        card.classList.remove(`flipped`, `matched`);
    });
    flippedCards = [];
    shuffle(cardData);
    cardData.forEach((data, index) => {
        cards[index].textContent = data;
    });
}

// The logic that makes the memory match game playable.

let flippedCards = []; // Empty array to keep track of the cards that are flipped.

function handleCardClick(event) {
    const cardClicked = event.target; // Get the clicked card element.

    if (flippedCards.length < 2 && !flippedCards.includes(cardClicked)) { // reveal the clicked card.
        //TODO
        // console.log('Clicked card:', cardClicked);
        //TODO
        cardClicked.classList.add(`flipped`); // Adding the flipped class to show the card face on screen.
        flippedCards.push(cardClicked); // Adding flipped card to the flippedCards array.

        if (flippedCards.length === 2) {
            const card1 = flippedCards[0];
            const card2 = flippedCards[1]; // extracting values from array and assigning them to individual cards.

            if (card1 && card2) { // Check if card1 and card2 are defined
                if (card1.textContent === card2.textContent) {
                    // It is a MATCH!
                    setTimeout(() => {
                        card1.classList.add(`matched`); // adding matched class to both cards when match is found.
                        card2.classList.add(`matched`); // same as card1 match
                        flippedCards = []; // empty the flippedCards array.
                        checkWinCondition();
                    }, 500); // 500 milliseconds
                } else {
                    // match not found.
                    setTimeout(() => {
                        card1.classList.remove(`flipped`); // flipping both cards back to original state.
                        card2.classList.remove(`flipped`); // same as card1
                        flippedCards = []; // clear the flippedCards array.
                    }, 1000); // 1000 milliseconds
                }
            }
        }
    }
}

// event listener for card click
// gameBoard.addEventListener(`click`, handleCardClick);

// Event Listener for Form Submission Ends.
// Memory Card Game Layout Ends.

// // Memory Card Game Functionality Starts!
// const cardData = [];
// for (let i = 1; i <= numberOfRows * numberOfColumns; i++) {
//     cardData.push(i);
// }
// // Shuffle the card data
// SharedArray(cardData);

// const cardColor = Array.from({ length: numberOfRows * numberOfColumns }, (index) => index + 1) For loop above does the same thing and is easier to read.
// Arrow function is called for each index in the new array.
// length means that it determins how many elements the new array will have
// Array.from() is an object literal which makes the length of the array.
// Index means current index. And Index + 1 is creating an array of numbers starting from 1.


// Memory Card Game Functionality Ends.
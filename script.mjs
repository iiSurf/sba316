// let paragraph = document.getElementById(`forgotUserPass`);
// paragraph.style.color = "white";

// Memory Card Game Layout Starts!
// Card grid build
const numberOfRows = 4;
const numberOfColumns = 4;
// const cardLayout = []; is this needed? Doesn't appear so.

const gameBoard = document.getElementById("memoryGameBoard"); // Container for the cards in the HTML as a div container.

for (let i = 0; i < numberOfRows; i++) { // for loop for rows
    const row = document.createElement(`div`); // creating a new row as a div.
    row.classList.add(`card-row`); // adding card-row class to the row.
    for (let j = 0; j < numberOfColumns; j++) { // for loop for columns. Apparently called cells as well?
        const card = document.createElement("div"); // Creating a div for each card. ("card-div")
        // console.log(`Add cell ${j} to row ${i}`);
        card.classList.add("card"); // Adding card class to style later.

        // placing image on cards

        row.appendChild(card); // Adding card to the row.
    }
    gameBoard.appendChild(row); // Adding full row of cards to the row.
}

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

const cards = document.querySelectorAll(`.card`); // selecting all card elements.
console.log(cards);
cards.forEach((card, index) => {
    card.dataset.cardId = index; // Assigning an identifier to each card.
    card.textContent = cardData[index]; // setting card conent that is based on cardData.

    card.addEventListener(`click`, handleCardClick); // Click event listener for each card.
});

// The logic that makes the memory match game playable.

let flippedCards = []; // Empty array to keep track of the cards that are flipped.

function handleCardClick(event) {
    const cardClicked = event.target; // Get the clicked card element.

    if (flippedCards.length < 2 && !flippedCards.includes(cardClicked)) { // reveal the clicked card.
        //TODO
        console.log('Clicked card:', cardClicked);
        //TODO
        cardClicked.classList.add(`flipped`); // Adding the flipped class to show the card face on screen.
        flippedCards.push(cardClicked); // Adding flipped card to the flippedCards array.
        let card1;
        let card2;
        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards; // extracting values from array and assigning them to individual cards.
            card1 = firstCard;
            card2 = secondCard;
        }
        if (card1.textContent === card2.textContent) {
            // It is a MATCH!
            setTimeout(() => {
                card1.classList.add(`matched`); // adding matched class to both cards when match is found.

                card2.classList.add(`matched`); // same as card1 match
                flippedCards = []; // empty the flippedCards array.
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

// event listener for card click

gameBoard.addEventListener(`click`, handleCardClick);
// Check for win function

function checkForWin() {
    return cards.every(card => card.classList.contains(`matched`));
}

// Check for win

if (checkForWin()) {
    alert(`Yay! You win the game!`);
    resetGame();
}

// References for Form and Game Elements is Here!
const form = document.getElementById("login");
const game = document.getElementById("memoryGameBoard");
// References for Form and Game Elements Ends Here.

// Event Listener for Form Submission Starts!
form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.style.display = "none";
    game.style.display = "block";
    resetGame();
    form.remove();

    // playGame()
});

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
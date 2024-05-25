// let paragraph = document.getElementById(`forgotUserPass`);
// paragraph.style.color = "white";

// Memory Card Game Layout Starts!
const numberOfRows = 5;
const numberOfColumns = 5;
const gameBoard = document.getElementById(`memoryGameBoard`);

for (let i = 0; i < numberOfRows; i++) {
    const row = document.createElement(`div`);
    row.classList.add(`card-row`);

    for (let j = 0; j < numberOfColumns; j++) {
        const card = document.createElement(`div`);
        card.classList.add(`card`);
        row.appendChild(card);
    }
    gameBoard.appendChild(row);
}




// const numberOfRows = 5;
// const numberOfColumns = 5;
// // const cardLayout = [];

// const gameBoard = document.getElementById("memoryGameBoard"); // Container for the cards in the HTML as a div container.

// for (let i = 0; i < numberOfRows; i++) { // for loop for rows
//     const row = document.createElement(`div`);
//     row.classList.add(`card-row`);
//     for (let j = 0; j < numberOfColumns; j++) { // for loop for columns. Apparently called cells as well?
//         const card = document.createElement("div"); // Creating a div for each card. ("card-div")
//         // console.log(`Add cell ${j} to row ${i}`);
//         card.classList.add("card"); // Adding card class to style later.
//         row.appendChild(card);
//         // Adding card to the row.
//     }
//     gameBoard.appendChild(row); // Adding full row of cards to the row.
// }

// // References for Form and Game Elements is Here!
// const form = document.getElementById("login");
// const game = document.getElementById("memoryGameBoard");
// // References for Form and Game Elements Ends Here.

// // Event Listener for Form Submission Starts!
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     form.style.display = "none";
//     game.style.display = "block";
//     playGame();

//     // form.remove()
//     // event.preventDefault()
//     // playGame()
// });

// // Event Listener for Form Submission Ends.
// // Memory Card Game Layout Ends.

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
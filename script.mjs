let paragraph = document.getElementById(`forgotUserPass`);
paragraph.style.color = "white";

// Memory Card Game Starts!
const numberOfRows = 5;
const numberOfColumns = 5;
const cardGrid = [];

const gameBoard = document.querySelector("memoryGameBoard"); // Container for the cards.

for (let i = 0; i < numberOfRows; i++) {
    const row = []; // Initializing an empty row.
    for (let j = 0; j < numberOfColumns; j++) {
        const card = document.createElement("card-div"); // Creating a div for each card.
        card.classList.add("card"); // Adding card class to style.
        gameBoard.appendChild(card); // Append card to the game board.
        row.push(card); // Adding card to the row.
    }
    cardGrid.push(row); // Adding row to the Game Card 2D Grid.
}

// References for Form and Game Elements is Here!
const form = document.getElementsByClassName("login");
const game = document.getElementById("memoryGameBoard");
// References for Form and Game Elements Ends Here.

// Event Listener for Form Submission Starts!

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops page from refreshing when submit button is clicked.
    form.style.display = "none"; // Hiding the form after submit button click.
    game.style.display = "block"; // Reveal the game
});

// Event Listener for Form Submission Ends.
// Memory Card Game Ends.
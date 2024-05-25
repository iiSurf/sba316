// let paragraph = document.getElementById(`forgotUserPass`);
// paragraph.style.color = "white";

// Memory Card Game Layout Starts!
const numberOfRows = 5;
const numberOfColumns = 5;
// const cardLayout = [];

const gameBoard = document.getElementById("memoryGameBoard"); // Container for the cards.

for (let i = 0; i < numberOfRows; i++) { // for loop for rows
    const row = document.createElement(`div`);
    row.classList.add(`card-row`);
    for (let j = 0; j < numberOfColumns; j++) { // for loop for columns. Apparently called cells as well?
        const card = document.createElement("div"); // Creating a div for each card. ("card-div")
        // console.log(`Add cell ${j} to row ${i}`);
        card.classList.add("card"); // Adding card class to style later.
        row.appendChild(card);
        // Adding card to the row.
    }
    gameBoard.appendChild(row); // Adding full row of cards to the row.
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
    playGame();

    // form.remove()
    // event.preventDefault()
    // playGame()
});

// Event Listener for Form Submission Ends.
// Memory Card Game Layout Ends.

// Memory Card Game Functionality Starts!



// Memory Card Game Functionality Ends.
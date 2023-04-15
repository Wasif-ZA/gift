import './data.js'

document.addEventListener("keydown", (event) => {

  if (event === 'enter') {
    
  }

})
import { help, github, fail } from "./data.js";

// Define the command prompt and terminal area
const prompt = document.querySelector(".prompt");
const terminal = document.querySelector(".terminal");

// Define the cards area
const cards = document.querySelector("#cards");

// Add an event listener for key presses
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Get the command entered by the user
    const command = prompt.textContent.trim();

    // Create a new line in the terminal with the command
    const newLine = document.createElement("div");
    newLine.textContent = `$ ${command}`;
    terminal.appendChild(newLine);

    // Handle different commands
    switch (command) {
      case "help":
        // Create a new card for the help data
        help.forEach((item) => {
          const card = createCard(item);
          cards.appendChild(card);
        });
        break;
      case "github":
        // Create a new card for the github data
        github.forEach((item) => {
          const card = createCard(item);
          cards.appendChild(card);
        });
        break;
      default:
        // Create a new card for the fail data
        fail.forEach((item) => {
          const card = createCard(item);
          cards.appendChild(card);
        });
        break;
    }

    // Clear the command prompt
    prompt.textContent = "";
  }
});

// Function to create a new card
function createCard(text) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardText = document.createElement("p");
  cardText.textContent = text;
  card.appendChild(cardText);

  return card;
}

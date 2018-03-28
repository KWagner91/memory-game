// Function for making 16 cards, displayed immediately on window.onload
function displayCards() {
  for (let x = 0; x < 4; x++) {
    let newTr = document.createElement("tr");
      newTr.setAttribute("id", "row"+ x);
    let TrElement = document.getElementById("game");
    TrElement.appendChild(newTr);

    for (let y = 0; y < 4; y++) {
    let newTd = document.createElement("td");
      newTd.className = "card hidden";
    let TdElement = document.getElementById("row"+ x);
    TdElement.appendChild(newTd);
  }
  }
}
window.onload = displayCards();




// Function for randomizing array
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}




// Make array with 2 x 8 numbers (newArray), shuffle this array
const allCards = document.querySelectorAll(".card");
const arrayWithNumbers = [...Array(8).keys()];
const myArray = arrayWithNumbers.concat([...Array(8).keys()]);
const newArray = shuffle(myArray);
let points = 0;
let turn = 0;
let clickCount = 0;
let moves = 0;




// Function to assign randomized numbers from array to cards displayed
function shuffleCards() {
  for (let a = 0; a < newArray.length; a++) {
    const arrayContent = newArray[a];
    allCards[a].innerHTML += arrayContent;
    };
  };




// Function for user to click on Cards
function userClick() {
    allCards.forEach(function(item) {
    item.addEventListener("click", function() {
        if (clickCount < 2) {
        clickCount++;
        this.classList.remove("hidden");
        this.classList.add("selected");
      }

        if (userCard.length === 2) {
        moves++;
        document.getElementById("moves").innerHTML = moves;
        setTimeout(cardMatch, 1500)
      }
});
});
}

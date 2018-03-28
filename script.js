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



// Function to check user choice
const userCard = document.getElementsByClassName("selected");
function cardMatch() {
  if (userCard[0].innerHTML === userCard[1].innerHTML) {
    correctGuess();
    points++;
    clickCount = 0;
    if (points === 8) {
      gameWon();
    }
  }
  else if (userCard[0].innerHTML !== userCard[1].innerHTML)  {
    wrongGuess();
    clickCount = 0;
    turn++;
    starRating();
}
}



// Function to remove selected class from user choice
function correctGuess() {
  let selectedCard = document.querySelectorAll(".selected");
  selectedCard.forEach(function(item) {
  item.classList.add("correct");
  item.classList.remove("selected");
});
}



// Function to remove selected class from user choice
function wrongGuess() {
  let selectedCard = document.querySelectorAll(".selected");
selectedCard.forEach(function(item) {
  item.classList.remove("selected");
  item.classList.add("hidden");
});
}




// Stars
function starRating() {
var starRating = document.getElementsByClassName("checked")
if (turn > 4) {
  starRating[starRating.length - 1].classList.remove("checked");
  turn = 0;
}
}




/* Timer
Reference for displaying time (s) in hh:mm:ss format: https://www.w3schools.com/howto/howto_js_countdown.asp */
function startTimer() {
const start = Date.now();
setInterval(function() {
    var delta = (Date.now() - start);
    let seconds = Math.floor((delta % (1000 * 60)) / 1000);
    let minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("time-displayed").innerHTML = hours + "h " +
    minutes + "m " + seconds + "s ";
})
}




/* Play Game
1) Create array of 2 x 8 numbers (myArray)
2) Shuffle Array (shuffle()) */
function game() {
  document.getElementById("moves").innerHTML = "Move: " + moves;
  shuffleCards();
  userClick();
  startTimer()
}

game();

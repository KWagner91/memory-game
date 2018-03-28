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



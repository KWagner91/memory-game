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




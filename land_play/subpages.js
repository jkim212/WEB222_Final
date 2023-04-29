const flipContainer = document.getElementById("dealer-card2");
const flipButton = document.getElementById("stand");
const hitButton = document.getElementById("hit");
const startButton = document.getElementById("start");
var playArea = document.querySelector(".area");
var dealerFlip = document.querySelector(".flipper");

var playerTot = document.createElement("div");
var dealerTot = document.createElement("div");
var colStart = 3;
var playerTotal = 0;
var dealerTotal = 0;
var dealtCards = 0;

function createCard() {
  //Pick a random card from cards array
  //Possible update: copy into temp array then slice the picked card to remove duplicates
  const randomIndex = Math.floor(Math.random() * window.cards.length);
  const randomCard = window.cards[randomIndex];
  const cardValue = randomCard.value;

  var value = cardValue;
  var card = document.createElement("div");         //Create Card div
  card.className = "card";
  card.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.4)";
  card.style.borderRadius = "15px";

  const cardImage = document.createElement("img");  //Get card image
  cardImage.setAttribute("src", randomCard.imgUrl);
  cardImage.style.width = "100%";
  cardImage.style.height = "100%";
  cardImage.style.borderRadius = "15px";
  card.appendChild(cardImage);  

  card.style.gridColumn = colStart;                 //Set grid column to next available column
  colStart++;                                       //Increment card column
  card.style.gridRow = 3;                           

  // add the card to the body of the document
  playArea.appendChild(card);
  // return the value of the card
  return value;
}


//Updates Player total div
function updatePlayer() {
  playerTot.style.gridColumn = 5;
  playerTot.style.gridRow = 2;
  playerTot.innerHTML = "Player total: ";
  playerTot.textContent += playerTotal;
  playArea.appendChild(playerTot);
}

//Updates Dealer total div
function updateDealer() {
  dealerTot.style.gridColumn = 3;
  dealerTot.style.gridRow = 2;
  dealerTot.innerHTML = "Dealer total: ";
  dealerTot.textContent += dealerTotal;
  playArea.appendChild(dealerTot);
}

//Start button
var startFlag = 0;
startButton.addEventListener("click", function () {
  //If game already started, reload page
  if (startFlag > 0) {
    location.reload();
    startFlag = 0;
  }
  //If new game,
  if (startFlag === 0) {
    //Picking first card of dealer
    var randomIndex = Math.floor(Math.random() * window.cards.length);
    var randomCard = window.cards[randomIndex];
    var cardValue = randomCard.value;

    var value = randomCard.value;
    var dc1 = document.createElement("div");
    dc1.className = "card";
    dc1.id = "dealer-card1";
    dc1.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.4)";
    dc1.style.borderRadius = "15px";

    const cardImage1 = document.createElement("img");
    cardImage1.src = randomCard.imgUrl;
    cardImage1.style.height = "100%";
    cardImage1.style.width = "100%";
    cardImage1.style.borderRadius = "15px";
    dc1.appendChild(cardImage1);

    dc1.style.gridColumn = 3;
    dc1.style.gridRow = 1;

    playArea.appendChild(dc1);

    var cardVal = value;
    dealerTotal += cardVal;
    updateDealer();

    var front = document.createElement("div");
    front.className = "front";
    front.style.borderRadius = "15px";
    var cardImage = document.createElement("img");
    cardImage.src = "card-back.png";
    cardImage.style.height = "100%";
    cardImage.style.width = "100%";
    cardImage.borderRadius = "15px";
    front.appendChild(cardImage);

    var back = document.createElement("div");
    back.className = "back";
    back.style.borderRadius = "15px";
    //Picking 2nd card of dealer and setting it to already created flipper element
    randomIndex = Math.floor(Math.random() * window.cards.length);
    randomCard = window.cards[randomIndex];
    cardValue = randomCard.value;

    const cardImage2 = document.createElement("img");
    cardImage2.src = randomCard.imgUrl;
    cardImage2.style.height = "100%";
    cardImage2.style.width = "100%";
    cardImage2.style.borderRadius = "15px";
    back.appendChild(cardImage2);

    value = cardValue;
    cardVal = value;
    dealerTotal += cardVal;

    dealerFlip.appendChild(front);
    dealerFlip.appendChild(back);

    //Pick 2 cards for the player
    if (dealtCards < 2) {
      playerTotal += createCard();
      updatePlayer();

      playerTotal += createCard();
      updatePlayer();

      dealtCards = 2;
    }

    startFlag = 1;
  }
});

//For "Stand" button
standFlag = 0;
var dealerBust = 0;
var dealerGridCol = 5;
flipButton.addEventListener("click", function () {
  //Remove Hit button display
  hitButton.style.display = "none";
  //Flip the dealer card and pick additional cards until sum is over 17
  if (standFlag === 0 && startFlag === 1) {
    flipContainer.classList.toggle("flipped");

    updateDealer();
    function addCardWithDelay() {
      randomIndex = Math.floor(Math.random() * window.cards.length);
      randomCard = window.cards[randomIndex];
      value = randomCard.value;

      var addCard = document.createElement("div");
      dealerTotal += value;
      addCard.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.4)";
      addCard.style.borderRadius = "15px";

      const cardImage2 = document.createElement("img");
      cardImage2.src = randomCard.imgUrl;
      cardImage2.style.height = "100%";
      cardImage2.style.width = "100%";
      cardImage2.style.borderRadius = "15px";
      addCard.appendChild(cardImage2);

      addCard.style.gridColumn = dealerGridCol;
      dealerGridCol++;
      addCard.style.gridRow = 1;
      updateDealer();
      playArea.appendChild(addCard);
    }

    while (dealerTotal < 17) {
      addCardWithDelay();
    }
    //Set dealer total to 0 if bust
    if (dealerTotal > 21) {
      dealerTot.innerHTML += "<br> BUST!";
      dealerTotal = 0;
      dealerBust = 1;
    }
    getOutput();
  }

  //Calculates and determines who wins the game
  function getOutput() {
    var output = document.createElement("div");
    output.style.gridColumn = 6;
    output.style.gridRow = 2;
    if (playerTotal > dealerTotal) {
      output.innerHTML = "Player Wins!";
    } else if (playerTotal == dealerTotal) {
      output.innerHTML = "Push!";
    } else if (playerTotal < dealerTotal) {
      output.innerHTML = "House Wins!";
    }
    playArea.appendChild(output);
  }

  standFlag = 1;
  flipButton.style.display = "none";
});

//Hit button will add additional cards to player until bust
bustflag = 0;
hitButton.addEventListener("click", function () {
  if (dealtCards < 7 && playerTotal < 22 && standFlag === 0 && startFlag > 0) {
    playerTotal += createCard();
    updatePlayer();
    dealtCards++;
    if (bustflag === 0 && playerTotal > 21) {
      playerTot.innerHTML += "<br> BUST!";
      playerTotal = 0;
      bustflag = 1;
      hitButton.style.display = "none";
      flipButton.style.display = "none";

      var output = document.createElement("div");
      output.style.gridColumn = 6;
      output.style.gridRow = 2;
      output.innerHTML = "House Wins!";
      playArea.appendChild(output);
    }
  }
});

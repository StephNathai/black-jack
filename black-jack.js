$(function(){

// alert("Welcome to Black Jack!"); // alert to introduce game
//
// var howManyPlayers = prompt("How many players are playing?")

// $('.start').on('click', function(){
//   $(this).remove();
//   newGame();
//
// });

  var deck = []; //overall deck
  for(var i=0; i<52; i++) {
    deck.push(i); //push to deck
  };
  //this represents 1 deck of cards for shoe;
  var shoeDeck = [];

  //this represents 1 deck of cards for players
  var playerDeck = [];

  //this represents 1 deck of cards for dealer
  var dealerDeck = [];



  var deckShuffled = shuffle(deck);
  var newCard;

function drawNewCard() {
  newCard = deckShuffled.pop();
  var cardSuit = findSuit(newCard);
  var cardValue = findValue(newCard);
  var card = (findValue(newCard) + " of " + findSuit(newCard))
  console.log(card);

}
drawNewCard();


//  $('.divcard1').text() = card;


//function to shuffle an array
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

//function to determine the card suit
function findSuit(){
  var suit = Math.floor(newCard / 13);

  var hearts = "hearts";
  var diamonds = "diamonds";
  var clubs = "clubs";
  var spades = "spades";

  if (suit === 0){
    return hearts;
  } else if (suit === 1) {
    return diamonds;
  } else if (suit === 2) {
    return clubs;
  } else {
    return spades;
  };
};

//function to determine the card suit
function findValue() {
  var value = (newCard % 13);

  var ace = "A";
  var jack = "J";
  var queen = "Q";
  var king = "K";

  if (value === 1){
    return ace;
  } else if (value === 11) {
    return jack;
  } else if (value === 12) {
    return queen;
  } else if (value === 13){
    return king;
  } else {
    return value;
  }
};







});

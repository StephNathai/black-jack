$(function(){

// alert("Welcome to Black Jack!"); // alert to introduce game
//
// var howManyPlayers = prompt("How many players are playing?")

$('.start').on('click', function(){
  $(this).remove();
  dealCards();
});

$('.newGame').on('click', function(){
  clearBoard();
  dealCards();
});


//overall deck
var deck = [];
//this represents 1 deck of cards for shoe;
var shoeDeck = [];
//this represents 1 deck of cards for players
var playerDeck = [];
//this represents 1 deck of cards for dealer
var dealerDeck = [];

for(var i=0; i<52; i++) {
  deck.push(i); //push to deck
};


var newCard;

function drawNewCard() {
  var deckShuffled = shuffle(deck);
  newCard = deckShuffled.pop();
  var cardSuit = findSuit(newCard);
  var cardValue = findValue(newCard);
  var card = (findValue(newCard) + " of " + findSuit(newCard))
  return card;
}



function dealCards() {
  setTimeout(function(){
    $('.playerCard1').append(drawNewCard);//adds new card from deck to player 1 card div
    setTimeout(function(){
      $('.dealerCard1').append(drawNewCard);
      setTimeout(function(){
        $('.playerCard2').append(drawNewCard);
        setTimeout(function(){
          $('.dealerCard2').append(drawNewCard);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

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
  } else if (value === 0){
    return king;
  } else {
    return value;
  }
};

function clearBoard(){
  $('.playerCard1').html("");
  $('.dealerCard1').html("");
  $('.playerCard2').html("");
  $('.dealerCard2').html("");

};






});

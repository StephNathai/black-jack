$(function(){

// alert("Welcome to Black Jack!"); // alert to introduce game
//
// var howManyPlayers = prompt("How many players are playing?")

$('.start').on('click', function(){
  $(this).remove();
  clearBoard();
  dealCards();
    // $('.hit').on('click', function(){
    //   hit();
    // });
});

$('.newGame').on('click', function(){
  clearBoard();
  dealCards();
});

$('.hit').on('click', function(){
  hit();
});



//this represents 1 deck of cards for shoe;
var deck = [];
 for(var i=0; i<52; i++) {
  deck.push(i)
};


//this represents empty array for playerHand
var playerHand = [];
//this represents empty array for dealerHand
var dealerHand = [];

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
  // setTimeout(function(){
    var cardDiv = $('<div class="playerCard"></div>');
    $(cardDiv).append(drawNewCard);
    $('.playerSpot').append(cardDiv);//adds new card from deck to player 1 card div
    playerHand.push(cardDiv);
  // // }, 2000);
  // // setTimeout(function(){
      var cardDiv = $('<div class="dealerCard"></div>');
      $(cardDiv).append(drawNewCard)
      $('.dealerSpot').append(cardDiv);
      dealerHand.push(cardDiv);
  // // }, 2000);
  // // setTimeout(function(){
        var cardDiv = $('<div class="playerCard"></div>')
        $(cardDiv).append(drawNewCard)
        $('.playerSpot').append(cardDiv);
        playerHand.push(cardDiv);
  // // }, 3000);
  // // setTimeout(function(){
          var cardDiv = $('<div class="dealerCard"></div>')
          $(cardDiv).append(drawNewCard)
          $('.dealerSpot').append(cardDiv);
          dealerHand.push(cardDiv);
  // // }, 4000);
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
  $('.playerSpot').empty();
  $('.dealerSpot').empty();
};

function hit(){
    var cardDiv = $('<div></div>')
    $(cardDiv).append(drawNewCard())
    $(cardDiv).addClass('playerCard');
    $('.playerSpot').append(cardDiv);
    playerHand.push(cardDiv);

};





});

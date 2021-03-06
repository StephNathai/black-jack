//$(function(){

// alert("Welcome to Black Jack!"); // alert to introduce game
//
// var howManyPlayers = prompt("How many players are playing?")

var audioShuffle = $("#shuffle-sound")[0];
var audioDeal = $("#deal-card")[0];
var audioApplause = $("#applause")[0];

$('.start').on('click', function(){
  audioShuffle.play();
  $(this).remove();
  $('.hidden').animate({opacity: 1});
  clearBoard();
});

$('.newGame').on('click', function(){
  clearBoard();
});

$('.hit').on('click', function(){
  audioDeal.play();
  playerHit();
});

$('.stand').on('click', function(){

  $('.dealerCard').removeClass('blank-card');
  playerScore();
  dealerScore();
});

$('.bet').on('submit', function(e){
  e.preventDefault();
  var newBet = $('<p class="betAmount"></p>')
  var input = $('.bet-amount').val();
  (newBet).append(input);
  $('.player-overall-score-box').append(newBet.val());
  //input.text() = ""
})

var playerHand;
var dealerHand;
var deck;


function clearBoard(){
  $('.playerSpot').empty();
  $('.dealerSpot').empty();
  $('.dealer-current-score-box').empty();
  $('.player-current-score-box').empty();

  //this represents empty array for playerHand
  playerHand = [];
  //this represents empty array for dealerHand
  dealerHand = [];
  playerValue = [];
  dealerValue = [];

  //this represents 1 deck of cards for shoe;
  deck = [];
  for(var i=0; i<52; i++) {
    deck.push(i)
  };
  dealCards();
};

function stopGame(){
  $('.playerSpot').empty();
  $('.dealerSpot').empty();
  $('.dealer-current-score-box').empty();
  $('.player-current-score-box').empty();

  //this represents empty array for playerHand
  playerHand = [];
  //this represents empty array for dealerHand
  dealerHand = [];
  playerValue = [];
  dealerValue = [];

  //this represents 1 deck of cards for shoe;
  deck = [];
  for(var i=0; i<52; i++) {
    deck.push(i)
  };
}

//function to shuffle an array
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

function drawNewCard() {
  var deckShuffled = shuffle(deck);
  var newCard = $('<svg>');
  var cardId = deckShuffled.pop();
  var cardSuit = findSuit(cardId);
  var cardValue = findValue(cardId);
  newCard.append(cardSuit);
  newCard.append($('<text class="cardNumber"></text>').text(cardValue));
  return newCard;
};

var sum = 0;
//function to determine the card suit
function findValue(newCard) {
  var value = (newCard % 13);

  var ace = "A";
  var jack = "J";
  var queen = "Q";
  var king = "K";

  if (value === 11) {
    sum = 10;
    return jack;
  } else if (value === 12) {
    sum = 10;
    return queen;
  } else if (value === 0){
    sum = 10;
    return king;
  } else if ((value === 1) && (sum > 21)){
    sum = 1
    return ace;
  } else if ((value === 1) && (sum < 21)){
    sum = 11
    return ace;
  } else {
    sum = value;
    return value;
};
  };

//function to determine the card suit
function findSuit(newCard){
  var suit = Math.floor(newCard / 13);

  var hearts = $('<path d="M151.299,93.486 C149.846,87.955 147.772,82.763 145.077,77.912 C142.381,73.06 137.167,65.525 129.432,55.306 C123.76,47.806 120.268,43.049 118.956,41.033 C116.799,37.752 115.241,34.74 114.28,31.998 C113.319,29.256 112.838,26.478 112.838,23.666 C112.838,18.463 114.573,14.103 118.042,10.588 C121.51,7.072 125.799,5.314 130.909,5.314 C136.065,5.314 140.542,7.142 144.338,10.799 C147.198,13.517 149.518,17.572 151.299,22.963 C152.846,17.666 155.026,13.635 157.838,10.869 C161.729,7.119 166.229,5.244 171.338,5.244 C176.401,5.244 180.69,6.99 184.206,10.482 C187.721,13.974 189.479,18.135 189.479,22.963 C189.479,27.182 188.448,31.576 186.385,36.146 C184.323,40.717 180.338,46.705 174.432,54.111 C166.745,63.814 161.143,71.783 157.628,78.017 C154.862,82.939 152.753,88.096 151.299,93.486 L151.299,93.486 z" fill="#D40000" id="heart"/>');
  var diamonds = $('<path d="M39.419,107.322 C29.928,122.904 19.033,137.607 7.076,151.385 C19.044,165.157 30.124,179.822 39.419,195.541 C48.715,179.822 59.794,165.157 71.763,151.385 C59.806,137.607 48.911,122.904 39.419,107.322 z" fill="#D40000" id="diamond"/>');
  var clubs = $('<path d="M151.143,108.151 C145.612,108.151 140.979,110.01 137.206,113.713 C133.432,117.416 131.549,121.823 131.549,126.932 C131.549,131.104 133.159,135.463 136.393,140.057 C133.591,137.722 130.798,136.338 125.487,136.338 C115.096,136.338 107.643,144.868 107.643,155.526 C107.643,166.827 115.891,175.432 126.893,175.432 C137.909,175.432 146.175,167.918 150.237,158.776 C150.049,166.229 148.917,172.127 146.831,176.463 C144.745,180.799 141.549,184.385 137.237,187.244 C134.331,189.166 129.096,190.854 121.549,192.307 L120.987,194.713 L151.143,194.713 L181.331,194.713 L180.768,192.307 C173.221,190.854 167.987,189.166 165.081,187.244 C160.768,184.385 157.573,180.799 155.487,176.463 C153.401,172.127 152.268,166.229 152.081,158.776 C156.143,167.918 164.409,175.432 175.424,175.432 C186.427,175.432 194.674,166.827 194.674,155.526 C194.674,144.868 187.222,136.338 176.831,136.338 C171.52,136.338 168.726,137.722 165.924,140.057 C169.159,135.463 170.768,131.104 170.768,126.932 C170.768,121.823 168.885,117.416 165.112,113.713 C161.338,110.01 156.674,108.151 151.143,108.151 z" fill="#000000" id="club"/>');
  var spades = $('<path d="M39.419,4.459 C38.201,9.521 36.326,14.068 33.794,18.053 C31.263,22.037 26.755,26.951 20.263,32.834 C13.771,38.717 9.654,43.224 7.919,46.365 C6.185,49.506 5.326,52.693 5.326,55.928 C5.326,60.428 6.826,64.178 9.826,67.178 C12.826,70.178 16.482,71.678 20.794,71.678 C28.514,71.678 34.485,66.041 38.419,59.896 C38.12,66.615 37.013,71.993 35.076,76.021 C32.99,80.357 29.796,83.945 25.482,86.803 C22.577,88.726 17.341,90.412 9.794,91.865 L9.232,94.271 L39.388,94.271 L69.576,94.271 L69.013,91.865 C61.466,90.412 56.23,88.726 53.326,86.803 C49.012,83.945 45.818,80.357 43.732,76.021 C41.797,71.999 40.689,66.632 40.388,59.928 C44.322,66.063 50.334,71.678 58.044,71.678 C62.357,71.678 66.013,70.178 69.013,67.178 C72.013,64.178 73.513,60.428 73.513,55.928 C73.513,52.693 72.654,49.506 70.919,46.365 C69.185,43.224 65.068,38.717 58.576,32.834 C52.083,26.951 47.576,22.037 45.044,18.053 C42.513,14.068 40.638,9.521 39.419,4.459 z" fill="#000000" id="spade"/>');

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

var playerValue = [];
var dealerValue = [];

function dealCards() {

  // setTimeout(function(){
  var cardDiv = $('<div class="playerCard"></div>');
  $(cardDiv).append(drawNewCard());
  (playerValue).push(sum);
  //console.log(sum);
  $('.playerSpot').append(cardDiv);//adds new card from deck to player 1 card div
  playerHand.push(cardDiv.text());
  // }, 2000);
  // setTimeout(function(){
  var cardDiv = $('<div class="dealerCard"></div>');
  $(cardDiv).append(drawNewCard());
  (dealerValue).push(sum);
  $('.dealerSpot').append(cardDiv);
  dealerHand.push(cardDiv.text());
  // }, 2000);
  // setTimeout(function(){
  var cardDiv = $('<div class="playerCard"></div>');
  $(cardDiv).append(drawNewCard());
  (playerValue).push(sum);
  //console.log(sum);
  $('.playerSpot').append(cardDiv);
  playerHand.push(cardDiv.text());
  console.log(playerHand);
  $('.playerCard').each(function(i,e) { $(e).html($(e).html()); })//hack to make SVG work
  // }, 3000);
  // setTimeout(function(){
  var cardDiv = $('<div class="dealerCard"></div>');
  $(cardDiv).append(drawNewCard());
  (dealerValue).push(sum);
  $(cardDiv).addClass('blank-card');
  $('.dealerSpot').append(cardDiv);
  dealerHand.push(cardDiv.text());
  console.log(dealerHand);
  $('.dealerCard').each(function(i,e) { $(e).html($(e).html()); })//hack to make SVG work
  // }, 4000);

  playerScore();
};

function playerHit() {
  var cardDiv = $('<div class="playerCard"></div>');
  $(cardDiv).append(drawNewCard());
  (playerValue).push(sum);
  $('.playerSpot').append(cardDiv);//adds new card from deck to player 1 card div
  playerHand.push(cardDiv.text());
  $('.playerCard').each(function(i,e) { $(e).html($(e).html()); })//hack to make SVG work
  playerScore();
};

function dealerHit() {
  var cardDiv = $('<div class="dealerCard"></div>');
  $(cardDiv).append(drawNewCard());
  (dealerValue).push(sum);
  $('.dealerSpot').append(cardDiv);
  dealerHand.push(cardDiv.text());
  console.log(dealerHand);
  $('.dealerCard').each(function(i,e) { $(e).html($(e).html()); })//hack to make SVG work
  dealerScore();
};

var playerSum;
var newArray
var playerNewSum;
var aceSum;

function playerScore(){
  playerSum = 0;
  newArray = [];
  playerNewSum = 0;

  for(var i = 0; i<playerValue.length; i++){
    playerSum += playerValue[i];
    // $.each(playerValue, function(){
    //   playerSum += this;
    // });

    if (playerSum === 21) {
      playerSum = "BlackJack!";
      $('.dealerCard').removeClass('blank-card');
      $('.player-current-score-box').empty();
      $('.player-current-score-box').append(playerSum);
      dealerScore()
      //alert("You have Blackjack!");
    } else if (playerSum < 21){
      $('.player-current-score-box').empty();
      $('.player-current-score-box').append(playerSum);
    } else if (playerSum > 21) {
        // if (playerValue[i] === 11){
        //     playerValue[i] = 1;
        //     console.log(playerValue[i])
        //     $.each(playerValue, function(){
        //       playerSum += this;
        //
        //   $('.player-current-score-box').empty();
        //   $('.player-current-score-box').append(playerSum);
        // })
        // } else if (playerValue[i] != 11){
          playerSum = "Busted!";
          $('.dealerCard').removeClass('blank-card');
          $('.player-current-score-box').empty();
          $('.player-current-score-box').append(playerSum);

        dealerScore()
        //winner();
      }
    };
  };
// };


var dealerSum;

function dealerScore(){
  dealerSum = 0;
  $.each(dealerValue, function(){
    dealerSum += this;
  });

  if (playerSum === "BlackJack!" || playerSum === "Busted!"){
    if (dealerSum === 21) {
      dealerSum = "BlackJack!";
      $('.dealerCard').removeClass('blank-card');
      $('.dealer-current-score-box').empty();
      $('.dealer-current-score-box').append(dealerSum);
      winner();
    } else {
      $('.dealerCard').removeClass('blank-card');
      $('.dealer-current-score-box').empty();
      $('.dealer-current-score-box').append(dealerSum);
      winner();
    }
  } else if (dealerSum < 17){
    $('.dealer-current-score-box').empty();
    $('.dealer-current-score-box').append(dealerSum);
    dealerHit();
  } else if (dealerSum < 21){
    $('.dealer-current-score-box').empty();
    $('.dealer-current-score-box').append(dealerSum);
    winner();
  } else if (dealerSum === 21) {
    dealerSum = "BlackJack!";
    $('.dealerCard').removeClass('blank-card');
    $('.dealer-current-score-box').empty();
    $('.dealer-current-score-box').append(dealerSum);
    winner();
  } else if (dealerSum > 21) {
    for (var i = 0; i < dealerValue.length; i++) {
      if (dealerValue[i] === 11){
        dealerValue[i] = 1;
        $.each(dealerValue, function(){
          dealerSum += this;

        });
        $('.dealer-current-score-box').empty();
        $('.dealer-current-score-box').append(dealerSum);
        dealerScore();
      } else {
        dealerSum = "Busted!";
        $('.dealerCard').removeClass('blank-card');
        $('.dealer-current-score-box').empty();
        $('.dealer-current-score-box').append(dealerSum);
        winner();
      };
    };

  };

};

function winner() {
  audioApplause.play();
  if (playerSum === "Busted!"){
    alert("Dealer wins!");
    stopGame();
  }
  else if (dealerSum === "Busted!"){
    alert("Player wins!");
    stopGame();
  }
  else if ((dealerSum === "BlackJack!") && (playerSum === "BlackJack!")){
    alert("Dealer wins!");
    stopGame();
  }
  else if (dealerSum === "BlackJack!"){
    alert("Dealer wins!");
    stopGame();
  }
  else if (playerSum === "BlackJack!"){
    alert("Player wins!");
    stopGame();
  }
  else if (dealerSum > playerSum){
    alert("Dealer wins!");
    stopGame();
  }
  else if (playerSum > dealerSum){
    alert("Player wins!");
    stopGame();
  }
  else if ((dealerSum === "Busted!") && (playerSum === "Busted!")){
    alert("You both busted!");
    stopGame();
  }
  else if (dealerSum === playerSum){
    alert("Tie!");
    stopGame();
  };

};

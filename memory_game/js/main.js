var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

//DOM elements
var gameBoard = document.getElementById('game-board');
var gameConsole = document.getElementById('game-console');

//game variables
var cardsInPlay = [];
var score = 0;

//functions
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score++;
		trackScore();
	} else {
		alert("Sorry, try again.");
	}
}

var trackScore = function() {
	var scoreLbl = gameConsole.querySelector('p');
	scoreLbl.innerHTML = "Score: " + score;
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	/*console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage); */

	cardsInPlay.push(cards[cardId].rank);
	var srcPath = cards[cardId].cardImage;
	this.setAttribute('src', srcPath);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var resetBoard = function() {
	cardsInPlay = [];
	createBoard();
}

var createBoard = function() {
	gameBoard.innerHTML = null;
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);
	}
};

var listenForReset = function() {
	var resetBtn = gameConsole.querySelector('button');
	resetBtn.addEventListener('click', resetBoard);
}

createBoard();
trackScore();
listenForReset();
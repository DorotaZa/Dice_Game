//Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1-6.png

var randomImageSource = "images/" + randomDiceImg; //full path

var image1 = document.querySelectorAll("img")[0]; //two img elements in the arrays; index 0 indicates on the player1

image1.setAttribute("src", randomImageSource);

//Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Getting message according to the dice result
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

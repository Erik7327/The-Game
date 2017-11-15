// variables ...
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// your wins...
var win = 0;
// your losses...
var loss = 0;
// your guesses..
var guessLeft = 9;
// computer chooses random number out of one of the options...
var computerChoice = options [Math.floor(Math.random() * options.length)];
// var. set to 'userletters'
var userLetters = new Array();

// fnction is to reset the score, 
function resetScore() {
	
	computerChoice = options[Math.floor(Math.random() * options.length)];
	guessLeft = 9;
}
// creating button to start game...
$("#start-game").on("click", function() {
	$("*").css("box-sizing",
$(this).text());
});

//Updating the score...
function updateScore(win, loss, guessLeft, userLetters) {
// sets the names of boxes for the board...
var score = "Wins: " + win + "<br>Loss: " + loss + "<br>Guess left: " + guessLeft + "<p>Your guess so far</p> ";

//Changes color of user input letter
var ul = document.getElementById("user-letters");
ul.style.color = "green";

//inject html
document.getElementById("score").innerHTML = score;
document.getElementById("user-letters").innerHTML = userLetter;
//console.log(computerChoice);
}

document.onkeydown = function (event) {
	//when alphabet key is pressed...
	if (event.keCode >= 65 && event.keyCode  <= 90) {
		var userGuess = 65 = event.key.toLowerCase();
		guessLeft--;
	//Append user input letter to array
	userLetters.push(userGuess);

	//If user guesses correctly....
	if ( userGuess === computerChoice) {
			Win++;
// use reset score function...
			resetScore();
	}
// and update scoreboard...
	updateScoreboard(win, loss, guessLeft, userLetters);

//When guesses are = 0...
	if (guessLeft < 1){
		loss++;
		resetScore();
	}
//Update the score for loss...
	updateScoreboard(win, loss, guessLeft, userLetters);
	}
	else {
		alert("Enter an alphabet");
	}
// wanted to make it so when you win you get the secret gif...//
};

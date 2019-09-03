
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordsList = [];
gradeBasic = ["hat", "bet", "bear", "blue", "flab", "crib", "stump", "made", "frame", "grape", "track", "stand", "want", "chalk", "track"];
gradeInter = ["sharks", "sharp", "arctic", "born", "forward", "form", "forest", "apron", "music", "replied", "began", "anthill", "daylight", "handstand", "sunrise"];
gradeAdvan = ["conflicts", "examples", "helpful", "imagine", "plans", "printed", "problems", "upset", "echoed", "scrambled", "reeds", "valley", "gully", "clutched"];

// Player chooses level of difficulty 
var chosenWord = "";         // Selected word
var wordList = [];
var lettersCorr = [];        // Letters in chosen word
var numBlanks = 0;           // Number of blanks to show
var curState = [];           // Number of right guesses and blanks left
var guessed = "";            // User's Guess
var wrongGuesses = [];       // Stored guesses
var winCounter = 0;          // Count games won
var lossCounter = 0;         // Count games lost
var games = 0;               // Count games played
var numGuesses = 10;         // Count number of guesses


//Functions to load when window is ready
// Create alphabet buttons
var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('div');
    letters.setAttribute("id", "alphabet");
    for (var i = 0; i < alphabet.length; i++) {
        list = document.createElement('button');
        list.setAttribute("type", "button");
        list.setAttribute("class", "col-1 btn btn-dark letter");
        list.id = 'letter';
        list.innerHTML = alphabet[i].toUpperCase();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
    alpo = document.getElementsByClassName('letter');
    for (i = 0; i <alpo.length;i++){
    alpo[i].addEventListener("click", function () {
    guessed = this.innerHTML;
    
});
}
};

buttons();
//Assign events to level buttons
document.getElementById("bas").addEventListener("click", function () {
    level = this.id;
    console.log(level);
    chosenWord = gradeBasic[Math.floor(Math.random() * gradeBasic.length + 1)];
    startGame();
    checkLetters(guessed);
    roundComplete();

});

document.getElementById("int").addEventListener("click", function () {
    level = this.id;
    console.log(level);
    chosenWord = gradeInter[Math.floor(Math.random() * gradeInter.length + 1)];
    startGame();
    checkLetters(guessed);
    roundComplete();
});

document.getElementById("adv").addEventListener("click", function () {
    level = this.id;
    console.log(level);
    chosenWord = gradeAdvan[Math.floor(Math.random() * gradeAdvan.length + 1)];
    startGame();
    checkLetters(guessed);
    roundComplete();
});


function startGame() {
    numGuesses = 10;
    lettersCorr = chosenWord.split("");
    numBlanks = lettersCorr.length;
    curState = [];
    wrongGuesses = [];
    for (var i = 0; i < numBlanks; i++) {
        curState.push("_");
    }
    console.log(curState);
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("hold").innerHTML = curState.join(" ");
    document.getElementById("guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                curState[j] = letter;
            }
        }
        console.log(curState);
    }
    else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

function roundComplete() {
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | Games: " + games);
    // HTML UPDATES
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("hold").innerHTML = curState.join(" ");
    document.getElementById("guesses").innerHTML = wrongGuesses.join(" ");
    if (lettersCorr.toString() === curState.toString()) {
        winCounter++;
        games++;
        alert("You win!");
        document.getElementById("win-counter").innerHTML = winCounter;
        document.getElementById("games-played").innerHTML = games;
        startGame();
    }

    // If we've run out of guesses
    else if (numGuesses === 0) {
        lossCounter++;
        games++;

        // Give the user an alert
        alert("You lose");

        // Update the loss counter in the HTML
        document.getElementById("loss-counter").innerHTML = lossCounter;
        document.getElementById("games-played").innerHTML = games;
        startGame();
    }
}

//Main Process


// Then initiates the function for capturing key clicks.
document.onclick = function (event) {

    // Converts all key clicks to lowercase letters.
    guessed = String.fromCharCode(event.which).toLowerCase();

    // Runs the code to check for correct guesses.
    
    // Runs the code that ends each round.

};

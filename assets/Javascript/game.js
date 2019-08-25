window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var grade;              // Player chooses level of difficulty 
    var word;               // Selected word
    var guess;              // User's Guess
    var guesses = [];       // Stored guesses
    var counter;            // Count correct guesses
    var space;              // Number of spaces in word '-'


    // create alphabet buttons
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('div');
        letters.setAttribute("id", "alphabet");
        for (var i = 0; i < alphabet.length; i++) {
            list = document.createElement('button');
            list.setAttribute("type", "button");
            list.setAttribute("class", "col-1 btn btn-dark");
            list.id = 'letter';
            list.innerHTML = alphabet[i].toUpperCase();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };
    buttons();

    // Select Level
    grade = [
        ["hat", "bet", "bear", "blue", "flab", "crib", "stump", "made", "frame", "grape", "track", "stand", "want", "chalk", "track"],
        ["sharks", "sharp", "arctic", "born", "forward", "form", "forest", "apron", "music", "replied", "began", "anthill", "daylight", "handstand", "sunrise"],
        ["conflicts", "examples", "helpful", "imagine", "plans", "printed", "problems", "upset", "echoed", "scrambled", "reeds", "valley", "gully", "clutched"]
    ];
    //Level Selection

    var basic = document.getElementById("bas");
    basic.onclick = function () {
        var word = grade[0][Math.floor(Math.random() * 14)];
        var wordl = word.length;
        correct = document.createElement('div');
        var listb = document.getElementById('letter');
        listb.onclick = function () {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < wordl; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
        };
        for (var i = 0; i < wordl; i++) {
            correct.setAttribute('id', 'my-word');
            correct.setAttribute('class','row');
            guess = document.createElement('div');
            guess.setAttribute('class', 'col-3');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            }
            else {
                guess.innerHTML = "_";
            }
            wordHolder = document.getElementById('hold');
            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }

    };

    var inter = document.getElementById("int");
    inter.onclick = function () {
        var word = grade[1][Math.floor(Math.random() * 14)];
        var wordl = word.length;
        correct = document.createElement('ul');
        for (var i = 0; i < wordl; i++) {
            correct.setAttribute('class','row');
            guess = document.createElement('div');
            guess.setAttribute('class', 'col-3');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            }
            else {
                guess.innerHTML = "_";
            }
            wordHolder = document.getElementById('hold');

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }

    };
    var advan = document.getElementById("adv");
    advan.onclick = function () {
        var word = grade[2][Math.floor(Math.random() * 13)];
        var wordl = word.length;
        correct = document.createElement('ul');
        for (var i = 0; i < wordl; i++) {
            correct.setAttribute('class','row');
            guess = document.createElement('div');
            guess.setAttribute('class', 'col-3');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }
            wordHolder = document.getElementById('hold');

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    };

};

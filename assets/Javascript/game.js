window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var level;              // Player chooses level of difficulty 
    var curLevel;           // Selected level
    var word;               // Selected word
    var guess;              // User's Guess
    var guesses = [];       // Stored guesses
    var counter;            // Count correct guesses
    var space;              // Number of spaces in word '-'

    // Get elements

    var showLevel = document.getElementById("level");

    // create alphabet buttons
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('div');
         letters.setAttribute("id","alphabet");
        for (var i = 0; i < alphabet.length; i++) {
            list = document.createElement('button');
            list.setAttribute("type","button");
            list.setAttribute("class","col-2 btn btn-dark");
            list.id = 'letter';
            list.innerHTML = alphabet[i].toUpperCase();
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };


    // Select Catagory
    var selectLev = function () {
        if (curLevel === level[0]) {
            levelName.innerHTML = "Basic";
        } else if (curLevel === level[1]) {
            levelName.innerHTML = "Intermediate";
        } else if (curLevel === level[2]) {
            levelName.innerHTML = "Advanced";
        }
    }

    // Create guesses ul
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }


    // OnClick Function
    check = function () {
        list.onclick = function () {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }

        }

    }

    // Play
    play = function () {
        level = [
            ["hat", "bet", "bear", "blue", "flab", "crib", "stump","made","frame","grape","track","stand","want","chalk","track"],
            ["sharks", "sharp", "arctic", "born","forward","form","forest","apron","music","replied","began","anthill","daylight","handstand","sunrise"],
            ["conflicts", "examples", "helpful", "imagine", "plans","printed","problems","upset","echoed","scrambled","reeds","valley","gully","clutched"]
        ];

        curLevel = level[Math.floor(Math.random() * level.length)];
        word = curLevel[Math.floor(Math.random() * curLevel.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [];
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        
    }

    play();

    

    // Reset

    document.getElementById('reset').onclick = function () {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        play();
    };
};



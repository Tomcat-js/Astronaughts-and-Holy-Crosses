var scienceButton = document.querySelector('.science');

var religionButton = document.querySelector('.religion');

var squares = document.querySelectorAll('.square');

var pickAsideText = document.querySelector('.pick-a-side');

var title = document.querySelector('.title');


var turnCount = 0;
var xPositionNumbers = [];
var oPositionNumbers = [];


var gameOver = function() {
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].className !== "fire" || squares[i].className !== "background") {
            squares[i].style.backgroundColor = "black";
            squares[i].classList.add('un-clickable');
        }
    }
    var resetButton = document.createElement('BUTTON');
    resetButton.innerHTML = "PLAY AGAIN?";
    document.querySelector('.header').appendChild(resetButton);
    scienceButton.remove();
    religionButton.remove();
    resetButton.classList.add('btn');
    resetButton.addEventListener('click', playAgain);
}




var firstTurnScience = function(event) {

   
    event.target.classList.add('background');

    var nasaDiv = document.createElement("div");
    event.target.appendChild(nasaDiv);
    nasaDiv.classList.add('nasa');
    nasaDiv.textContent = 'NASA';

    var helmetDiv = document.createElement("div");
    event.target.appendChild(helmetDiv);
    helmetDiv.classList.add('helmet');
    

    var screenDiv = document.createElement('div');
    helmetDiv.appendChild(screenDiv);
    screenDiv.classList.add('screen');

    var shouldersDiv = document.createElement('div');
    event.target.appendChild(shouldersDiv);
    shouldersDiv.classList.add('shoulders');

    var neckDiv = document.createElement('div');
    shouldersDiv.appendChild(neckDiv);
    neckDiv.classList.add('neck');

    turnCount += 1;

    xPositionNumbers.push(event.target.id);

    aiTargetArray = [];


    for (var i = 0; i < squares.length; i++) {
        if (squares[i].className === 'square') {
            var aiTarget = squares[i].id;
            aiTargetArray.push(aiTarget);     
        }
    }

    var randomTarget = aiTargetArray[Math.floor(Math.random() * aiTargetArray.length)];

    if (turnCount < 8) {

    document.getElementById(randomTarget).classList.add('fire');
    document.getElementById(randomTarget).innerHTML = "&#10015";

    turnCount += 1;

    oPositionNumbers.push(randomTarget);

    for (var i = 0; i < squares.length; i++) {

        if (squares[i].className !== "square") {
            
            squares[i].classList.add('un-clickable');
        }
    }
}


if (xPositionNumbers.includes("1") && xPositionNumbers.includes("2") && xPositionNumbers.includes("3")
    ||  xPositionNumbers.includes("1") && xPositionNumbers.includes("4") && xPositionNumbers.includes("7")
    ||  xPositionNumbers.includes("7") && xPositionNumbers.includes("8") && xPositionNumbers.includes("9")
    ||  xPositionNumbers.includes("1") && xPositionNumbers.includes("5") && xPositionNumbers.includes("9")
    ||  xPositionNumbers.includes("7") && xPositionNumbers.includes("5") && xPositionNumbers.includes("3")
    ||  xPositionNumbers.includes("4") && xPositionNumbers.includes("5") && xPositionNumbers.includes("6")
    ||  xPositionNumbers.includes("2") && xPositionNumbers.includes("5") && xPositionNumbers.includes("8")  
    ||  xPositionNumbers.includes("9") && xPositionNumbers.includes("6") && xPositionNumbers.includes("3")) {


    gameOver();

    var scienceWins = document.querySelector('.winner-text').textContent = "SCIENCE WINS!!!";

    document.querySelector('.winner-text').classList.add('blinking');

    return scienceWins;

    } else if 

        (oPositionNumbers.includes("1") && oPositionNumbers.includes("2") && oPositionNumbers.includes("3")
        ||  oPositionNumbers.includes("1") && oPositionNumbers.includes("4") && oPositionNumbers.includes("7")
        ||  oPositionNumbers.includes("7") && oPositionNumbers.includes("8") && oPositionNumbers.includes("9")
        ||  oPositionNumbers.includes("1") && oPositionNumbers.includes("5") && oPositionNumbers.includes("9")
        ||  oPositionNumbers.includes("7") && oPositionNumbers.includes("5") && oPositionNumbers.includes("3")
        ||  oPositionNumbers.includes("4") && oPositionNumbers.includes("5") && oPositionNumbers.includes("6")
        ||  oPositionNumbers.includes("2") && oPositionNumbers.includes("5") && oPositionNumbers.includes("8")  
        ||  oPositionNumbers.includes("9") && oPositionNumbers.includes("6") && oPositionNumbers.includes("3")) {

        gameOver();   

        var religionWins = document.querySelector('.winner-text').textContent = "RELIGION WINS!!!";

        document.querySelector('.winner-text').classList.add('blinking');

        return religionWins;

    }

    if (turnCount === 9) {
        gameOver();
    }      
    
}

var firstTurnReligion = function(event) {

    event.target.classList.add('fire');    
    event.target.innerHTML = "&#10015";
    
    turnCount += 1;

    oPositionNumbers.push(event.target.id);

    aiTargetArray = [];

    for (var i = 0; i < squares.length; i++) {

        if (squares[i].className === 'square') {

            var aiTarget = squares[i].id;
            aiTargetArray.push(aiTarget);
            
        }
    }

    var randomTarget = aiTargetArray[Math.floor(Math.random() * aiTargetArray.length)];

    if (turnCount < 8) {

        document.getElementById(randomTarget).classList.add('background');

        var nasaDiv = document.createElement("div");
        document.getElementById(randomTarget).appendChild(nasaDiv);
        nasaDiv.classList.add('nasa');
        nasaDiv.textContent = 'NASA';

        var helmetDiv = document.createElement("div");
        document.getElementById(randomTarget).appendChild(helmetDiv);
        helmetDiv.classList.add('helmet');

        var screenDiv = document.createElement('div');
        helmetDiv.appendChild(screenDiv);
        screenDiv.classList.add('screen');

        var shouldersDiv = document.createElement('div');
        document.getElementById(randomTarget).appendChild(shouldersDiv);
        shouldersDiv.classList.add('shoulders');

        var neckDiv = document.createElement('div');
        shouldersDiv.appendChild(neckDiv);
        neckDiv.classList.add('neck');

        turnCount += 1;
    
        xPositionNumbers.push(randomTarget);

    }
    
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].className !== "square") {
            
            squares[i].classList.add('un-clickable');
        }
    }


    if (xPositionNumbers.includes("1") && xPositionNumbers.includes("2") && xPositionNumbers.includes("3")
        ||  xPositionNumbers.includes("1") && xPositionNumbers.includes("4") && xPositionNumbers.includes("7")
        ||  xPositionNumbers.includes("7") && xPositionNumbers.includes("8") && xPositionNumbers.includes("9")
        ||  xPositionNumbers.includes("1") && xPositionNumbers.includes("5") && xPositionNumbers.includes("9")
        ||  xPositionNumbers.includes("7") && xPositionNumbers.includes("5") && xPositionNumbers.includes("3")
        ||  xPositionNumbers.includes("4") && xPositionNumbers.includes("5") && xPositionNumbers.includes("6")
        ||  xPositionNumbers.includes("2") && xPositionNumbers.includes("5") && xPositionNumbers.includes("8")  
        ||  xPositionNumbers.includes("9") && xPositionNumbers.includes("6") && xPositionNumbers.includes("3")) {

        gameOver();

        var scienceWins = document.querySelector('.winner-text').textContent = "SCIENCE WINS!!!";

        document.querySelector('.winner-text').classList.add('blinking');

        return scienceWins;
    


        } else if 

            (oPositionNumbers.includes("1") && oPositionNumbers.includes("2") && oPositionNumbers.includes("3")
            ||  oPositionNumbers.includes("1") && oPositionNumbers.includes("4") && oPositionNumbers.includes("7")
            ||  oPositionNumbers.includes("7") && oPositionNumbers.includes("8") && oPositionNumbers.includes("9")
            ||  oPositionNumbers.includes("1") && oPositionNumbers.includes("5") && oPositionNumbers.includes("9")
            ||  oPositionNumbers.includes("7") && oPositionNumbers.includes("5") && oPositionNumbers.includes("3")
            ||  oPositionNumbers.includes("4") && oPositionNumbers.includes("5") && oPositionNumbers.includes("6")
            ||  oPositionNumbers.includes("2") && oPositionNumbers.includes("5") && oPositionNumbers.includes("8")  
            ||  oPositionNumbers.includes("9") && oPositionNumbers.includes("6") && oPositionNumbers.includes("3")) {

            gameOver();

            var religionWins = document.querySelector('.winner-text').textContent = "RELIGION WINS!!!";

            document.querySelector('.winner-text').classList.add('blinking');
            
            return religionWins;

            }

    if (turnCount === 9) {
        gameOver();
    }
    
}


var playForScience = function() {

    religionButton.disabled = true;
    scienceButton.disabled = true;

    religionButton.classList.add('un-clickable');
    scienceButton.classList.add('un-clickable');

    pickAsideText.classList.add('remove-text');
    title.classList.add('addPadding');
    
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', firstTurnScience, { once: true })
    }
}

var playForReligion = function() {
    
    religionButton.disabled = true;
    scienceButton.disabled = true;

    religionButton.classList.add('un-clickable');
    scienceButton.classList.add('un-clickable');

    pickAsideText.classList.add('remove-text');
    title.classList.add('addPadding');

    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', firstTurnReligion, { once: true })
    }
}

var playAgain = function() {
    location.reload();
}


scienceButton.addEventListener('click', playForScience);
religionButton.addEventListener('click', playForReligion);






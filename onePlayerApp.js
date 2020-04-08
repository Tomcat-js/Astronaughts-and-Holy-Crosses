console.log("test");

var scienceButton = document.querySelector('.science');
var religionButton = document.querySelector('.religion');

var squares = document.querySelectorAll('.square');

var pickAsideText = document.querySelector('.pick-a-side');

var title = document.querySelector('.title');


var X = "X";
var O = "O";
var turnCount = 0;
var xPositionNumbers = [];
var oPositionNumbers = [];


var winningRows = [1, 2, 3];

var gameOver = function() {
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].className !== "fire" || squares[i].className !== "background") {
            squares[i].style.backgroundColor = "black";
            squares[i].classList.add('un-clickable');
        }
    }
}




var firstTurnScience = function(event) {

        
        event.target.classList.add('background');

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
        console.log(event.target.id);
        xPositionNumbers.push(event.target.id);
        console.log(xPositionNumbers);

        aiTargetArray = [];


        for (var i = 0; i < squares.length; i++) {
            if (squares[i].className === 'square') {
                var aiTarget = squares[i].id;
                aiTargetArray.push(aiTarget);
                
            }
        }

        // console.log(aiTargetArray);

        var randomTarget = aiTargetArray[Math.floor(Math.random() * aiTargetArray.length)];

        // console.log(typeof randomTarget);
        if (turnCount < 9) {
        document.getElementById(randomTarget).classList.add('fire');
        document.getElementById(randomTarget).innerHTML = "&#10015";

        turnCount += 1;

        console.log(turnCount);

        

        oPositionNumbers.push(randomTarget);

        console.log(oPositionNumbers);
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
    
    return religionWins;
    
    
    }
        
    
}

var firstTurnReligion = function(event) {

    

        event.target.classList.add('fire');    
        event.target.innerHTML = "&#10015";
        
        turnCount += 1;
        console.log(event.target.id);
        oPositionNumbers.push(event.target.id);
        console.log(oPositionNumbers);


        aiTargetArray = [];


        for (var i = 0; i < squares.length; i++) {
            if (squares[i].className === 'square') {
                var aiTarget = squares[i].id;
                aiTargetArray.push(aiTarget);
                
            }
        }

        // console.log(aiTargetArray);

        var randomTarget = aiTargetArray[Math.floor(Math.random() * aiTargetArray.length)];

        // console.log(typeof randomTarget);
        if (turnCount < 9) {
        document.getElementById(randomTarget).classList.add('background');
       

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

        console.log(turnCount);

        

        xPositionNumbers.push(randomTarget);

        console.log(oPositionNumbers);
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
    
    return religionWins;

    }
    
}

console.log(turnCount);



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


scienceButton.addEventListener('click', playForScience);
religionButton.addEventListener('click', playForReligion);



// var testArray1 = [1, 2, 3];
// var testArray2 = "123";

// if (testArray1.includes(2) && testArray1.includes(3)) {
//     console.log("Test worked!")
// }

// console.log(testArray1.join(''));

// var randomNum = console.log(Math.floor(Math.random() * 9));

// var stringNum = '' + randomNum;

// console.log(stringNum);

// var randomNum = Math.ceil(Math.random() * 9);

// console.log(randomNum);


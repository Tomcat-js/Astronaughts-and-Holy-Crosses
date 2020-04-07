console.log("test");

var squares = document.querySelectorAll('.square');

var X = "X";
var O = "O";
var turnCount = 0;
var xPositionNumbers = [];
var oPositionNumbers = [];


var winningRows = [1, 2, 3];

var placeXorO = function(event) {
    if (turnCount == 0) {
        event.target.textContent = "X";
        turnCount += 1;
        console.log(event.target.id);
        xPositionNumbers.push(event.target.id);
        console.log(xPositionNumbers);

    } else if (turnCount % 2 !== 0) {
        event.target.textContent = "O";
        turnCount += 1;
        console.log(event.target.id);
        oPositionNumbers.push(event.target.id);
        console.log(oPositionNumbers);
    } else {
        event.target.textContent = "X";
        turnCount += 1;
        console.log(event.target.id);
        xPositionNumbers.push(event.target.id);
        console.log(xPositionNumbers);
    }

        if (xPositionNumbers.includes("1") && xPositionNumbers.includes("2") && xPositionNumbers.includes("3")
        ||  xPositionNumbers.includes("1") && xPositionNumbers.includes("4") && xPositionNumbers.includes("7")
        ||  xPositionNumbers.includes("7") && xPositionNumbers.includes("8") && xPositionNumbers.includes("9")
        ||  xPositionNumbers.includes("1") && xPositionNumbers.includes("5") && xPositionNumbers.includes("9")
        ||  xPositionNumbers.includes("7") && xPositionNumbers.includes("5") && xPositionNumbers.includes("3")
        ||  xPositionNumbers.includes("4") && xPositionNumbers.includes("5") && xPositionNumbers.includes("6")
        ||  xPositionNumbers.includes("2") && xPositionNumbers.includes("5") && xPositionNumbers.includes("8")  
        ||  xPositionNumbers.includes("9") && xPositionNumbers.includes("6") && xPositionNumbers.includes("3")) {

        console.log("X WINS!!!!!!");

        } else if 

            (oPositionNumbers.includes("1") && oPositionNumbers.includes("2") && oPositionNumbers.includes("3")
        ||  oPositionNumbers.includes("1") && oPositionNumbers.includes("4") && oPositionNumbers.includes("7")
        ||  oPositionNumbers.includes("7") && oPositionNumbers.includes("8") && oPositionNumbers.includes("9")
        ||  oPositionNumbers.includes("1") && oPositionNumbers.includes("5") && oPositionNumbers.includes("9")
        ||  oPositionNumbers.includes("7") && oPositionNumbers.includes("5") && oPositionNumbers.includes("3")
        ||  oPositionNumbers.includes("4") && oPositionNumbers.includes("5") && oPositionNumbers.includes("6")
        ||  oPositionNumbers.includes("2") && oPositionNumbers.includes("5") && oPositionNumbers.includes("8")  
        ||  oPositionNumbers.includes("9") && oPositionNumbers.includes("6") && oPositionNumbers.includes("3")) {

            console.log("O WINS!!!!!");
        } 
}


console.log(turnCount);

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', placeXorO)
}

// var testArray1 = [1, 2, 3];
// var testArray2 = "123";

// if (testArray1.includes(2) && testArray1.includes(3)) {
//     console.log("Test worked!")
// }

// console.log(testArray1.join(''));
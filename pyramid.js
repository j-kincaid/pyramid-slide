// Jessica Kincaid
// Unit 3
// JavaScript
// pyramid-slide 


var heightElem = document.getElementById("height"); // from range input 
var formElem = document.getElementById("controls").value;


// set a handler function for the form's submission event
heightElem.oninput = function(event) {
    // // // QUIZ
    // // // what happens if we don't do this?
    event.preventDefault();

    // // // // QUIZ
    // // // // what happens if we don't do this?
    // clearError();

    // // // figure out the height the user typed
    heightStr = heightElem.value;


    // // // convert the string to an int
    height = parseInt(heightStr);


    // draw pyramid with the specified height
    drawPyramid(height);
}

//***************************** */
// Changes brick symbol 
//***************************** */

function pyrChar() {
    var hash = document.getElementById("symbol").value;
    document.getElementById("pyramid").innerHTML = hash;
}


// // set a handler function for the form's submission event
heightElem.onchange = function pyrChar(hash) {
        // // // QUIZ
        // // // what happens if we don't do this?
        event.preventDefault();

        // // // // QUIZ
        // // // // what happens if we don't do this?
        // clearError();

    }
    // Change characters in bricks menu

// draw pyramid with the specified height

// AS A REMINDER

// var heightElem = document.getElementById("height"); // from range input 
// var formElem = document.getElementById("controls").value;

function drawPyramid() {

    // document.getElementById("height").innerHTML = numSpaces;
    rowElem = document.getElementById("symbol").value;
    document.getElementById("pyramid").innerHTML = formElem;

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }

    // draw pyramid with the specified height
    drawPyramid(height, symbol);

}
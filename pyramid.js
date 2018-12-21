// Jessica Kincaid
// Unit 3
// JavaScript
// pyramid-slide 


var heightElem = document.getElementById("height").value; // from range input 
var formElem = document.getElementById("controls").value;


// set a handler function for the range slider
heightElem.oninput = function(event) {

    drawPyramid();
}

// // set a handler function for the form's submission event
heightElem.onchange = function pyrChar() {

    event.preventDefault();

    var hash = document.getElementById("symbol").value;
    document.getElementById("pyramid").innerHTML = hash;

    drawPyramid(hash);
}

function drawPyramid(height, symbol) {

    // document.getElementById("height").innerHTML = numSpaces;
    rowElem = document.getElementById("symbol").value;
    document.getElementById("pyramid").innerHTML = formElem;
    mySymbol = document.getElementById("symbol").value;
    rowStr = document.getElementById("height").value;
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
            rowStr += mySymbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }

    // draw pyramid with the specified height
    drawPyramid(rowStr, mySymbol);

}
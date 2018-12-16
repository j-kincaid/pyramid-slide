// Jessica Kincaid
// Unit 3
// JavaScript
// pyramid-slide 

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");


// draw pyramid with the specified height

function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

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
}

// Change characters in bricks menu
function pyrChar() {
    var x = document.getElementById("brick-symbol").value;
    document.getElementById("bricks").innerHTML = "option value= " + x;
}

/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
// //  */
// function determineHeightAndThenDrawPyramid() {

//     var heightInput = document.getElementById("height");
//     heightStr = heightInput.value

//     //     // TODO 2
//     //     // draw the pyramid with the given height


//     // TODO 1
//     // hook up the button's click event to our determineHeightAndThenDrawPyramid function
//     var slider = document.getElementById("slider")[0]
//     slider.addEventListener("mouseup", determineHeightAndThenDrawPyramid)
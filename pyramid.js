var heightElem = document.getElementById("height");
var formElem = document.getElementById("pyramid");


// md = false;
// document.getElementById('slider').addEventListener('mouseup', function() {
//     md = false;
// });
// document.getElementById('slider').addEventListener('mousedown', function() {
//     //md=true;
// });
// document.getElementById('slider').addEventListener('mousemove', function() {
//     drawPyramid();
// });
// drawPyramid();
// set a handler function for the form's submission event
formElem.onsubmit = function(event) {

        // QUIZ
        // what happens if we don't do this?
        event.preventDefault();

        // QUIZ
        // what happens if we don't do this?
        clearError();

        // figure out the height the user typed
        heightStr = heightElem.value;

        // TODO 1
        // if they didn't type anything at all, give a different error message,
        // something like "Please provide a height"


        // convert the string to an int
        height = parseInt(heightStr);

        // if the height is not-a-number, yell at them and exit early
        // TODO 2
        // negative numbers and zero should also be rejected here
        // if (isNaN(height)) {
        //     displayError("That's not a valid height.");
        //     return;
        // }

        // draw pyramid with the specified height
        drawPyramid(height);
    }
    /**
     * determineHeightAndThenDrawPyramid
     *
     * Determines the current value that the user has typed in the 'How high?' text-box,
     * and then draws a pyramid with that height.
    //  */
    // function determineHeightAndThenDrawPyramid() {

//     // just so we know we're here
//     console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

//     // TODO 3
//     // figure out the height the user typed (replace the "5" below)

//     var heightInput = document.getElementById("height")
//     heightStr = heightInput.value


//     // here we convert the string to an int
//     height = parseInt(heightStr);

//     // TODO 2
//     // draw the pyramid with the given height
//     drawPyramid(height)

// }


// TODO 1
// hook up the button's click event to our determineHeightAndThenDrawPyramid function
var slider = document.getElementById("slider")[0]
slider.addEventListener("mouseup", determineHeightAndThenDrawPyramid)


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
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
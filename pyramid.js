// Jessica Kincaid
// Unit 3
// JavaScript
// pyramid-slide 


var heightElem = document.getElementById("height");
var inputElem = document.getElementById("pyramid");


// draw pyramid with the specified height
function drawPyramid() {
    var x =
        document.getElementById("slider").value;
    document.getElementById("pyramid").innerHTML = x;

}
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
//  */
function determineHeightAndThenDrawPyramid() {

    var heightInput = document.getElementById("height");
    heightStr = heightInput.value

    //     // TODO 2
    //     // draw the pyramid with the given height


    // TODO 1
    // hook up the button's click event to our determineHeightAndThenDrawPyramid function
    var slider = document.getElementById("slider")[0]
    slider.addEventListener("mouseup", determineHeightAndThenDrawPyramid)
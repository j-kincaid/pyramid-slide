function drawPyramid(height) {

    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 1; i < numSpaces; i++) {
            rowStr += " "; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 1; i < numBricks; i++) {
            rowStr += "#";
        }

        p = document.innerHTML("rowStr");
        pyramidDiv = document.getElementById("pyramid");
    }
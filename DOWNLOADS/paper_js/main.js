//SET UP THE DRAWING
paper = new paper.PaperScope();
paper.setup($("#myCanvas")[0]);

var values = [-1, 1, 2,-3]//CHANGE THESE NUMBERS FOR EACH CHARACTER

function drawCurve(values){
 
	var x = 50; // Where the line will start (x value)
	var y = 500; //where the line will start (y value)
	var step = 50 //how many pixels is equal to one step
	var stepX; //set a variable for stepping along the X axis
	var stepY; //set a variable for stepping along the Y axis
	var ministep = 10; //ignore this

	function createSingleCurve(value){
		if(value < 0){ //if the number is negative, only use the negative for the Y value
			stepX = step * (value * (-1))
		} else{
			stepX = step * value
		}
		stepY = step * value; // so if the value is 1 go up 50 px, if it's 2 go up 100px, if it's -1 go down 50 px, etc.
		x = x + stepX + ministep //ignore
		y = y - stepY //for the Y axis you subtract the value to go "up" (the lower the number the closer to the top of the page)
		path.add(new paper.Point(x, y)); //add the first point for the curve
		x = x + stepX 
		y = y + ministep
		path.add(new paper.Point(x,y)) //add the second point for the curve
	}

/* CREATE A NEW LINE AND SET COLOR */
	var path = new paper.Path({
	    strokeColor: 'black'
	});

/* CREATE FIRST TWO POINTS */

	path.add(new paper.Point(x, y));
	x = x + ministep
	path.add(new paper.Point(x, y));


/* Create Rest of the line, for each value, draw a single curve */
	for (var i = 0; i <= values.length - 1; i++) {
		createSingleCurve(values[i])
	}

/* SMOOTH OUT THE LINE AND DRAW IT ON THE PAGE*/

	path.smooth()
	paper.view.draw()

}
drawCurve(values)
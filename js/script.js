function myFunction() {
	var yNum = prompt("Choose a number between 1 and 100.");
 // code for complete cancel "cancel button"   
    if (yNum == null) {
        return
    }
// choosing the first number, upperLimit
// line break = \n
    while (isNaN(yNum)) {
        yNum = prompt("Nope. That's not a number. Try again.\nPlease, choose a number between 1 and 100.");    
    }
         document.getElementById("demo").innerHTML += "You entered " + yNum + " as your high number." + "<br>"
    
// choosing the second number, lowerLimit
    var xNum = prompt("Choose a number between 1 and 100.");
// code for complete cancel "cancel button"      
    if (xNum == null) {
        return
    }
    
    while (isNaN(xNum)) {
        xNum = prompt("C'mon! Dude, a number between 1 and 100.");
    }
        document.getElementById("demo").innerHTML += "\nYou entered " + xNum + " as your low number." + "<br>"

// varifying the range between upper & lowerLimits   
    var input = prompt("Pick a number between " + xNum + " and " + yNum + ".");
// code for complete cancel "cancel button"    
    if (input == null) {
        return
    }
    
    while (isNaN(input)) {
        input = prompt("Look. Stop the funny games!\nPick a number between " + xNum + " and " + yNum + ".");
    }
    
    if (input < xNum || input > yNum) {
        document.getElementById("demo").innerHTML += "Really? " + input + " is not even... Stop playing with me, human!" + "<br>"
    } else {
        document.getElementById("demo").innerHTML += input + " is definitely between " + xNum + " & " + yNum + "." + "<br>"
    }
   
// choosing the number within range   
    if (input > xNum && input < yNum) {
        document.getElementById("demo").innerHTML += "Cool! you did good! 2 Thumbs Up."
        document.getElementById("roboSmile").style.visibility = "visible"
    } else {
        document.getElementById("demo").innerHTML += "You think this is a game!? Fine! Run it!"
        document.getElementById()
    }
    
};























//document.getElementById
//("demo").innerHTML += "Hello World";
//	};
//}

// var upperLimit = a
// var lowerLimit = b

// assignment requirements:
// if/else statements
// loops
// functions
// html, css, and js files

// document.getElementById("demo").innerHTML += "your chosen input"
// var fixedUpperLimit = parseInt(upperLimit);
// var fixedLowerLimit = parseInt(lowerLimit);

// on click of a button (click me) program will prompt some prompts allowing you to enter in variables
// create an (y)upper & (x)lower limit prompt; input a number between x & y limits
// loop runs until a number is entered

// "While" your parameters are numbers
// "If"
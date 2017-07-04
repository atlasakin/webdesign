var numOfSq = 6;
var colors = randomColorArrayGenerator(numOfSq);
var pickedColor =colors[Math.floor(6*Math.random())];
var squares = document.querySelectorAll(".square");
var PC = document.querySelector("#PC");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#RESET");
var easyBTN = document.querySelector("#easyBTN"); 
var hardBTN = document.querySelector("#hardBTN");
var hardSQ = document.querySelectorAll(".hard");


PC.innerHTML = pickedColor.toUpperCase();

//GAME
game();
//New Colors
newColors();


easyBTN.addEventListener("click", easyGame);

hardBTN.addEventListener("click", hardGame);




//FUNCTIONS

function game() {
	for (var i=0; i<squares.length; i++) {
	//adding the colors
	squares[i].style.backgroundColor=colors[i]; 
	//adding the event listeners
	squares[i].addEventListener("click",function(){
		//grab the color
		var clickedColor = this.style.backgroundColor;
		//compare
		//win
		if (clickedColor === pickedColor) {
			message.textContent="Correct!";
			changeColors();
			resetButton.textContent ="PLAY AGAIN?";
		}

		//lose
		else {
			this.style.backgroundColor = "#232323"; 
			message.textContent="Try Again!";
		}
	});
}
}



function newColors() {
resetButton.addEventListener("click",function(){
	this.textContent = "NEW COLORS"
	var colors = randomColorArrayGenerator(numOfSq);
	for (var i=0; i<squares.length; i++) {
	//adding the colors
	squares[i].style.backgroundColor=colors[i]; 
	//adding the event listeners
	pickedColor =colors[Math.floor(numOfSq*Math.random())];
	PC.innerHTML = pickedColor.toUpperCase();
	message.textContent ="";
	h1.style.backgroundColor = "steelblue";
}

});

}
function rndRGB () {
	return Math.floor(256*Math.random())
}

function rndClr () {
	return "rgb(" + rndRGB() + ", " + rndRGB() + ", " + rndRGB() + ")"
}

function changeColors() {
for (var i=0; i<numOfSq; i++) {
				squares[i].style.backgroundColor = pickedColor;
				h1.style.backgroundColor = pickedColor;
			}
}

function randomColorArrayGenerator(num) {
	arr = [];
	for (var i=0; i<num;i++) {
		arr.push(rndClr());
	}
	return arr;
}


function hardGame () {
	this.classList.add("selected");
	easyBTN.classList.remove("selected");
	numOfSq=6;
	colors = randomColorArrayGenerator(numOfSq);
	for (var i=0; i<squares.length; i++) {
	//adding the colors
	squares[i].style.backgroundColor=colors[i];
	} 
	pickedColor =colors[Math.floor(6*Math.random())];
	PC.innerHTML = pickedColor.toUpperCase();
	h1.style.backgroundColor = "steelblue";
	message.textContent ="";
	resetButton.textContent ="NEW COLORS";
}

function easyGame () {
	this.classList.add("selected");
	hardBTN.classList.remove("selected");
	numOfSq = 3;
	colors = randomColorArrayGenerator(numOfSq);
	for (var i=0; i<squares.length; i++) {
	//adding the colors
	squares[i].style.backgroundColor=colors[i];
	} 
	pickedColor =colors[Math.floor(3*Math.random())];
	for(var i=0; i<hardSQ.length;i++) {
	hardSQ[i].style.backgroundColor="#232323";
	}
	PC.innerHTML = pickedColor.toUpperCase();
	h1.style.backgroundColor = "steelblue";
	message.textContent ="";
	resetButton.textContent ="NEW COLORS";
}
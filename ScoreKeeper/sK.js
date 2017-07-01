var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1S = document.querySelector("#p1S");
var p2S = document.querySelector("#p2S");
var Score1 = 0;
var Score2 = 0;
var over=false;
var gameScore = 5;
var gameScoreText = document.querySelector("input");
var scoreToShow = document.querySelector("#score");

gameScoreText.addEventListener("input",function() {
gameScore = Number(gameScoreText.value);
scoreToShow.innerHTML = gameScore;

});
	p1.addEventListener("click",function() {
if (over===false) {
Score1 +=1;
p1S.innerHTML = Score1;
if (Score1 === gameScore) {
	over=true;
	p1S.style.color="gray";
	alert("Game over! Player 1 wins!");
}
}
});

p2.addEventListener("click",function() {
if (over===false) {
Score2 +=1;
p2S.innerHTML = Score2;

if (Score2 === gameScore) {
over=true;
p2S.style.color="gray";
alert("Game over! Player 2 wins!");
}
}
});



reset.addEventListener("click",function() {
Score1=0;
Score2=0;
p1S.innerHTML = Score1;
p2S.innerHTML = Score2;
p1S.style.color="black";
p2S.style.color="black";
over=false;
});




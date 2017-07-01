function cc(){
	var r= 0+Math.floor(Math.random()*256);
	var g= 0+Math.floor(Math.random()*256);
	var b= 0+Math.floor(Math.random()*256);
	thergb = "rgb(" + r + "," + g + "," + b + ")";
	bd.style.background=thergb; 
}

var bu = document.querySelector("button");
var bd = document.querySelector("body");


// bu.addEventListener("click",function(){
// 		bd.style.background= ('#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6));
// });

bu.addEventListener("click",cc);
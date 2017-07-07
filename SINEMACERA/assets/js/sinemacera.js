	// $(".btn-primary").click(function() {

	// var thisBTN = $(this);
	// var RM = $(this).prev();

	// RM.slideToggle(1000, function() {
	// 	thisBTN.toggleClass("btn-info")
	// 	if(thisBTN.text()==="Küçült") {
	// 		thisBTN.text("Devamını oku");
	// 	}
	// 	else {
	// 		thisBTN.text("Küçült")
	// 	}
	// });
	// });

	$("#COVER").fadeTo(3000,1);
	$("#COVERTEXT").delay(3500).fadeTo(1500,0.5);








function shorten(text, maxLength, delimiter, overflow) {
  delimiter = delimiter || "…";
  overflow = overflow || false;
  var ret = text;
  if (ret.length > maxLength) {
    var breakpoint = overflow ? maxLength + ret.substr(maxLength).indexOf(" ") : ret.substr(0, maxLength).lastIndexOf(" ");
    ret = ret.substr(0, breakpoint) + delimiter;
  }
  return ret;
}

$(document).ready(function() {
  var editedText = $(".text");
  
  for(var i=0; i<editedText.length; i++) {
  editedText[i].textContent = shorten(editedText[i].textContent, 200, "...", false);
}

});























// //--------------------------RESIZING-------------------------------

// //VARIABLE DECLARATION


// 	var cover = $("#COVER");
// 	var header = $("#COVERTEXT");
// 	var forTextWidth = $("#LENGTHOFIT");
// 	var headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 	var coverHeight = parseInt(cover[0].offsetHeight);	
// 	var headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 	var coverWidth = parseInt(cover[0].offsetWidth);
// 	var fontSize = parseInt(header.css("font-size"));
// 	var windowAfter;
// 	var windowBefore=window.innerWidth;

// //INITIAL CONTROL


// if(headerHeight>coverHeight) {
   	
	
//     do {

//         fontSize=fontSize-0.5;
//         header.css("font-size", fontSize.toString() + "px");
//         headerHeight = parseInt(forTextWidth[0].offsetHeight);
//         coverHeight = parseInt(cover[0].offsetHeight);
//     } 

//     while (headerHeight > coverHeight);


// headerHeight = parseInt(forTextWidth[0].offsetHeight);
// coverHeight = parseInt(cover[0].offsetHeight);	
// headerWidth =parseInt(forTextWidth[0].offsetWidth);
// coverWidth = parseInt(cover[0].offsetWidth);
// fontSize = parseInt(header.css("font-size"));





// }




// if(headerWidth>coverWidth) {


// do {
		
// 	    fontSize=fontSize-0.5;
//         header.css("font-size", fontSize.toString() + "px");
//         headerWidth =parseInt(forTextWidth[0].offsetWidth);
//         coverWidth = parseInt(cover[0].offsetWidth);
//     } 

//     while (headerWidth > coverWidth);
// 	headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 	coverHeight = parseInt(cover[0].offsetHeight);	
// 	headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 	coverWidth = parseInt(cover[0].offsetWidth);
// 	fontSize = parseInt(header.css("font-size"));    
	
	
 
// }




// //RESIZING EVENT HANDLING

// $( window ).resize(function() {

// windowAfter=window.innerWidth;

// headerHeight = parseInt(forTextWidth[0].offsetHeight);
// coverHeight = parseInt(cover[0].offsetHeight);
// headerWidth =parseInt(forTextWidth[0].offsetWidth);
// coverWidth = parseInt(cover[0].offsetWidth);
// fontSize = parseInt(header.css("font-size"));


// if (windowAfter<windowBefore) {


	

// 	if(headerHeight>coverHeight) {

	    
		

// 	    do {
        
//         fontSize=fontSize-0.5;
//         header.css("font-size", fontSize.toString() + "px");
//         headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 		coverHeight = parseInt(cover[0].offsetHeight);
// 		headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 		coverWidth = parseInt(cover[0].offsetWidth);
//     } 

//     while (headerHeight > coverHeight);


// 	headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 	coverHeight = parseInt(cover[0].offsetHeight);
// 	headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 	coverWidth = parseInt(cover[0].offsetWidth);
// 	fontSize = parseInt(header.css("font-size"));
	

// }
	
	

// if(headerWidth>coverWidth) {

	    
	    

// 	do {



// 	        fontSize=fontSize-0.5;
// 	        header.css("font-size", fontSize.toString() + "px");
// 	        headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 			coverHeight = parseInt(cover[0].offsetHeight);
// 	        headerWidth = parseInt(forTextWidth[0].offsetWidth);
// 			coverWidth = parseInt(cover[0].offsetWidth);


// 			} 


//     while (headerWidth > coverWidth);

	
// 	headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 	coverHeight = parseInt(cover[0].offsetHeight);
// 	headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 	coverWidth = parseInt(cover[0].offsetWidth);
// 	fontSize = parseInt(header.css("font-size"));
	

// 	 }



// }
	

// else {
			
// 			headerHeight = 5000;
// 			coverHeight = parseInt(cover[0].offsetHeight);
// 			headerWidth =5000;
// 			coverWidth = parseInt(cover[0].offsetWidth);
// 			fontSize = 500;


// 	if(headerHeight>coverHeight) {
		
	    
		
	    
// 	    do {
// 	    fontSize=fontSize-0.5;
//         header.css("font-size", fontSize.toString() + "px");
//         headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 		coverHeight = parseInt(cover[0].offsetHeight);
// 		headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 		coverWidth = parseInt(cover[0].offsetWidth);
//     } 

//     while (headerHeight > coverHeight);

	
// 	headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 	coverHeight = parseInt(cover[0].offsetHeight);
// 	headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 	coverWidth = parseInt(cover[0].offsetWidth);
// 	fontSize = parseInt(header.css("font-size"));
	
// }
	


// if(headerWidth>coverWidth) {

	    
	    

// 	do {
// 	        fontSize=fontSize-0.5;
// 	        header.css("font-size", fontSize.toString() + "px");
// 	        headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 			coverHeight = parseInt(cover[0].offsetHeight);
// 			headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 			coverWidth = parseInt(cover[0].offsetWidth);	    
// } 

// 	    while (headerWidth > coverWidth);

	
// 	headerHeight = parseInt(forTextWidth[0].offsetHeight);
// 	coverHeight = parseInt(cover[0].offsetHeight);
// 	headerWidth =parseInt(forTextWidth[0].offsetWidth);
// 	coverWidth = parseInt(cover[0].offsetWidth);
// 	fontSize = parseInt(header.css("font-size"));
	


// 	 }




// }


// windowBefore=window.innerWidth;




// });
	
 
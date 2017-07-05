$("#container").delay(1000).fadeIn(300);
$("input[type='text']").delay(1300).slideToggle(100);
 //Check on-off specific todos by clicking
 $("ul").on("click", "li", function() {
 		$(this).toggleClass("completed");
 });

 //

 $("ul").on("click","span", function(event)
  {
  
  	$(this).parent().fadeOut(500,function(){
  	$(this).remove();	
  	
  });

  	event.stopPropagation();
  });

 $("input[type='text']").keypress(function(event){
 	//grab the text
 	if(event.which===13   && ($(this).val()!=="")) {
 		var todoText = $(this).val();
 		console.log("Alo");
 	//create a new todo
 		$("ul").append("<li><span><i class='fa fa-minus-square'></i></span> " + todoText + "</li>");	
 		$(this).val("");
 	}
 });


 $(".fa-plus-square").click(function() {
$("input[type='text']").fadeToggle();
});
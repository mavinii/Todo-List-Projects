// esse evento puxa informação do css
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut("500", function(){		//parent() remove all the parent LI
		$(this).remove()
	});		
	event.stopPropagation();		// add new event with 'stopPropagation()'
});

// add new element in LI
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

//button plus obs> classe usamos ".", para div "#"
$(".fa-plus").click(function(){
	$("input").fadeToggle();
});
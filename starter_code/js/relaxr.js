$(document).ready(function(){
	console.log("Is this thing on?");

//BLOG section	
	$(".read-more").click(function(){
		event.preventDefault(); //prevent form submission
		$("#show-this-on-click").slideDown();	// show #show-this-on-click text
		$(".read-less").slideDown();	//show read less link
		$(".read-more").hide();		//hide read more link
	});
//hide content when clicking Read Less
	$(".read-less").click(function(){
		event.preventDefault();
		$("#show-this-on-click").slideUp();
		$(".read-less").hide();
		$(".read-more").show();
	});
//Sidebar section
	$(".learn-more").click(function(){
		event.preventDefault();
		$("#learn-more-text").slideDown();
		$(".learn-more").hide();
	})
//.mouseOver Test
	$("article").mouseover(function(){
		$("article").css("background", "orange");
	});
	$("article").mouseout(function(){
		$("article").css("background-color", "transparent");
	});

});
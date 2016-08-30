$( document ).ready(function() {
	
	$("#show-this-on-click").hide();
	$("#learn-more-text").hide();
	
//toggle up down

	$(".learn-more").click(revealLearnMore);

	function revealLearnMore() {
		$(".learn-more").slideToggle();
		}

//slide up , slide down

	$(".read-more").click(ReadMoreUp);
	function ReadMoreUp(){
		$("#show-this-on-click").slideUp();
	}

	$(".learn-more").click(learnMoreDown);
	function learnMoreDown(){
		$("#learn-more-text").slideDown();
	}

});
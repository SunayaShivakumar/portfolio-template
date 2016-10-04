// Write any custom javascript functions here
$(document).ready(function(){
	$('.modal').slick({
        arrows: true
	});
	//smooth scrolling
	$(function() {
		$('a[href^="#"]').click(function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $(this.hash).offset().top}, 700);
		});
	});
});

//resizing navbar
$(document).on("scroll", function() {
	if($(document).scrollTop()>400) {
		$("header").removeClass("big").addClass("tiny");
	} else {
		$("header").removeClass("tiny").addClass("big");
	}
});

// Write any custom javascript functions here
$(document).ready(function(){
	$('.carousel').slick({
		nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
		prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        arrows: true,
        autoplay: true,
        infinite: true
	});
	//smooth scrolling
	$(function() {
		$(this.hash).click(function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $(this.hash).offset().top}, 800);
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

//position indicator
var lastId,
    topMenu = $("ul"),
    topMenuHeight = topMenu.outerHeight()+10,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

//modal
var modal = document.getElementById('modd');
var img = document.getElementById('button');
var modalImg = document.getElementById('full');
var captionText = document.getElementById('caption')[0];
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = document.getElementById('full').src;
    captionText.innerHTML = captionText;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

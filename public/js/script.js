$(document).ready(function(){$(".carousel").slick({nextArrow:'<i class="fa fa-angle-right" aria-hidden="true"></i>',prevArrow:'<i class="fa fa-angle-left" aria-hidden="true"></i>',arrows:!0,autoplay:!0,infinite:!0}),$(function(){$(this.hash).click(function(a){a.preventDefault(),$("html, body").animate({scrollTop:$(this.hash).offset().top},800)})})}),$(document).on("scroll",function(){$(document).scrollTop()>400?$("header").removeClass("big").addClass("tiny"):$("header").removeClass("tiny").addClass("big")});var lastId,topMenu=$("ul"),topMenuHeight=topMenu.outerHeight()+10,menuItems=topMenu.find("a"),scrollItems=menuItems.map(function(){var a=$($(this).attr("href"));return a.length?a:void 0});menuItems.click(function(a){var b=$(this).attr("href"),c="#"===b?0:$(b).offset().top-topMenuHeight+1;$("html, body").stop().animate({scrollTop:c},500),a.preventDefault()}),$(window).scroll(function(){var a=$(this).scrollTop()+topMenuHeight,b=scrollItems.map(function(){return $(this).offset().top<a?this:void 0});b=b[b.length-1];var c=b&&b.length?b[0].id:"";lastId!==c&&(lastId=c,menuItems.parent().removeClass("active").end().filter("[href='#"+c+"']").parent().addClass("active"))});var modal=document.getElementById("modd"),img=document.getElementById("button"),modalImg=document.getElementById("full"),captionText=document.getElementById("caption")[0];img.onclick=function(){modal.style.display="block",modalImg.src=document.getElementById("full").src,captionText.innerHTML=captionText};var span=document.getElementsByClassName("close")[0];span.onclick=function(){modal.style.display="none"};
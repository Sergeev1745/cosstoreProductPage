jQuery(document).ready(function(){
var mainImgHref = $("#zoom_01").attr("src");

$(".small-pic-row > img").click(function(){
	var href = $(this).attr("href");
	mainImgHref = href;
	$("#zoom_01").attr("src", href);
	$("#zoom_01").attr("data-zoom-image", href);
	$(".small-pic-row > img").removeClass("activ-img");
	$(this).addClass("activ-img");	
	$(".zoomWindow").css('background-image','url(' + href + ')');
});
	$(".small-pic-row > img").mouseout(function(){
	$("#zoom_01").attr("src", mainImgHref);
});
	$(".small-pic-row > img").mouseover(function(){
	var transitory = $(this).attr("href");
	$("#zoom_01").attr("src", transitory);
	
});
});
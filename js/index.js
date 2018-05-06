// JavaScript Document
// Claudio Gomboli . the EGGS LAB
// 2012 / 8 / 29
// Responsive animated gallery

$('.portfolio').each(function(index)
{
    $(this).attr('id', 'img' + (index + 1));
});
    
$('.portfolio').each(function(){
  $('#navi').append('<div class="circle"></div>');
});
  
$('.circle').each(function(index)
{
    $(this).attr('id', 'circle' + (index + 1));
});   
   
$('.portfolio').click(function(){
if($(this).hasClass('opened')){
    $(this).removeClass('opened');
    $(".portfolio").fadeIn("fast");
    $(this).find('.ombra').fadeOut();
    $("#navi div").removeClass("activenav");
}
else{
	var indexi = $("#maincontent .portfolio").index(this) + 1;
    $(this).addClass('opened'); 
    $(".portfolio").not(this).fadeOut("fast");
    $(this).find('.ombra').fadeIn();
    $("#circle" + indexi).addClass('activenav'); 
}
});	

//navi buttons
$("#navi div").click(function() {
if($(this).hasClass("activenav")){
	return false;
}
		
	$("#navi div").removeClass("activenav");
	$(".portfolio").removeClass('opened');
	$(".portfolio").show();
        $('.ombra').hide();
		
	var index = $("#navi div").index(this) + 1;
	$("#img" + index).addClass('opened'); 
    $(".portfolio").not("#img" + index).fadeOut("fast");
    $("#img" + index).find('.ombra').fadeIn();
        
    $(this).addClass("activenav");
});
// Due    
var dueDate = "May 17 2018 23:59:00 UTC+10"

// Countdown (1sec)
var timer = setInterval(function() {
    var closingTime = new Date(dueDate).getTime();
    var currentTime = new Date().getTime();
    var interval = closingTime - currentTime;
    
    // Calculate
    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60)) / 1000);
    
    // Output
    document.getElementById("timerCounter").innerHTML = 
        "<span class='counter-day'>"    + "<strong>" + days    + "</strong>" + "days"    + "</span> " + 
        "<span class='counter-hour'>"   + "<strong>" + hours   + "</strong>" + "hours"   + "</span> " + 
        "<span class='counter-minute'>" + "<strong>" + minutes + "</strong>" + "minutes" + "</span> " +  
        "<span class='counter-second'>" + "<strong>" + seconds + "</strong>" + "seconds" + "</span>";
    
    // Expired
    if (interval < 0) {
        clearInterval(timer); // Stop timer
        document.getElementById("timerTitle").innerHTML = "Voting closed";
        document.getElementById("timerCounter").innerHTML = "";
    }
}, 1000);

// JavaScript Document

$(document).ready(function(e){
   document.addEventListener ("deviceready",function(){
		
	$('#bepp').tap(function(){
		navigator.notification.beep(1);
});//tap beep

$('#vibrar').tap(function(){
	navigator.notifition.vibrate (1000);
});//tap vibrar

},false);//deviceready
});//ready
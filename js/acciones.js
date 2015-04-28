// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){//cuando el dispositivo este listo
	$('#btnvibrar').on('tap',function(){
		navigator.vibrate(1000);
});//tap a btnvibrar 
$('#btnbeep').on('tap',function(){
		navigator.beep(1);
});//tap a btnbeep
$('#Izquierda').on('swipe left',function(){
		alert.("Barrido a la izquierda");
});
$('#Derecha').on('swipe right',function(){
		alert.("Barrido a la derecha");
});
});
});


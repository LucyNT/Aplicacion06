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
   document.addEventListener("pause",function(){
         $('#listado').append("<p> la aplicacion se pauso </p>"); //agregar al final = append
   });
    document.addEventListener("resume",function(){
		 $('#listado').append("<p> se reinicio la aplicacion </p>");
   });
   $(window).on('orientationchange',function(e){
	$('#listado').append("<p>orientation: "+ e.orientation + "</p>");
   });
});
});


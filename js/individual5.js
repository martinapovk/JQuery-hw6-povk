$(document).ready( function() {
   $(".card").hide()

   $(".cross-fade").click( function() {
       $(".card:first").fadeIn(2000);
       $(".card:last").fadeOut(2000);
   });
   
   $(".double-appear").click( function() {
       $(".card").fadeIn(2000);
   })
});
$(document).ready(function() {
   $(window).resize(function() {
       $("[href]").hide();
       $(".toast").show();
       setTimeout(function() {
          $(".toast").fadeOut(3000) 
       }, 2500);
       setTimeout(function() {
           $("[href]").show();
       }, 4000);
   });
   $(".toast .btn-close").click(function() {
       $(".toast").hide();
   });
});
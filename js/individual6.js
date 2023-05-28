$(document).ready( function(){
    let index;
    $(".hidden-text").hide();
    $(".random-show").click( function() {
        index = randomNumber(1, 5);
        $(".hidden-text").hide();
        $(".hidden-text:nth-child(" + index + ")").fadeIn(3000);
    });
    
    $(".hide-all").click( function() {
        $(".hidden-text").hide();
    });
});

function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start) + start)
}
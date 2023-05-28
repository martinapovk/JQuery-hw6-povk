$(document).ready( function() {

    // set background color using randomColor() for textarea on key press
    $("textarea").on("keypress", function() {
        $("textarea").css("background-color", randomColor());
    });

});

function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
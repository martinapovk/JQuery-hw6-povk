$(document).ready( function() {
    $("img").mouseenter( function() {
        $(this).hide();
    }).mouseleave( function() {
        setTimeout(() => {
                $(this).show()
        }, 1000)
    });
});
$(document).ready( function() {
    $('[align=center]').dblclick( function() {
        $(this).hide();
        setTimeout(() => {
            $(this).show();
        }, 1500);
    });
});
$(document).ready( function () {
    $(".text-block").hide();
    let odd = $(".text-block:odd")
    let even = $(".text-block:even")
    $(".toggle").click( function () {
        if (odd.is(":visible")) {
            odd.fadeOut(2000);
            setTimeout(() => {
                even.fadeIn(2000);
            }, 2000);
        } else {
            even.fadeOut(2000);
            setTimeout(() => {
                odd.fadeIn(2000);
            }, 2000);        }
    })
})
$(document).ready( function () {
    $(".square").hide();

    $(".wave").click( function () {
        setInterval(() => {
            for (let index = 1; index <= $(".square").length; index++) {
                $(".square:nth-child(" + index +")").fadeIn(1000 * index);
                setTimeout(() => {
                    $(".square:nth-child(" + index +")").fadeOut(1000 * index);
                }, 250);
            }
        }, 2000);
    });
});
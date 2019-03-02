function parallax() {
    scrollPos = $(this).scrollTop();
    $('.p1').css({
        'background-position': '70% ' + (-scrollPos / 4) + "px"
    });
    $('.p2').css({
        'background-position': '50% ' + (-scrollPos / 8) + "px"
    });
    $('.p3').css({
        'background-position': '70% ' + (-scrollPos / 16) + "px"
    });
    $('.p4').css({
        'background-position': '70% ' + (-scrollPos / 32) + "px"
    });
    $('.p5').css({
        'background-position': '70% ' + (-scrollPos / 32) + "px"
    });
    $('.parallax-text').css({
        'margin-top': (scrollPos / 2) + "px",
        'opacity': 1 - (scrollPos / 230)
    });
}
$(document).ready(function () {
    $(window).scroll(function () {
        parallax();
    });
});
if ($(window).width() > 1025) {

    var elementPosition = $('#compare-main-outr').offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > elementPosition.top) {
            $('#compare-main-outr').addClass('active').css('top', elementPosition.top - 30);
        } else {
            $('#compare-main-outr').removeClass('active').css('top', "inherit");
        }
    });
}
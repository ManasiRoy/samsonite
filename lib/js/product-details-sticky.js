if ($(window).width() > 1025) {

    function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var window_height_half = $(window).height() / 2
        var footer_top = $("#sticky-remove").offset().top + window_height_half;
        var div_top = $('#sticky-anchor-one').offset().top;
        var div_height = $(".left-sticky").height();
        var leftHeight = $('.right-sticky').height();

        if (window_top + div_height > footer_top) {
            $('.left-sticky').removeClass('stick');
            $('.left-sticky-container').css('min-height', leftHeight + 'px');
        }
        else if (window_top > div_top) {
            $('.left-sticky').addClass('stick');
        } else {
            $('.left-sticky').removeClass('stick');
        }
    }

    $(function () {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });
}
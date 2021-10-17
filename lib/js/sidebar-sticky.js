if ($(window).width() > 1025) {

    function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var footer_top = $(".four-col").offset().top;
        var div_top = $('#sticky-anchor').offset().top;
        var div_height = $(".sidebar").height();
        var leftHeight = $('.right-container').height();

        if (window_top + div_height > footer_top) {
            $('.sidebar').removeClass('stick');
            $('.left-conatainer').css('min-height', leftHeight + 'px');
        }
        else if (window_top > div_top) {
            $('.sidebar').addClass('stick');
        } else {
            $('.sidebar').removeClass('stick');
        }
    }

    $(function () {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });
}
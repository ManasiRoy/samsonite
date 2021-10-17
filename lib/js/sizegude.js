$(document).ready(function () {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 4,
            slideBy: 1,
            smartSpeed: 2000,
            slideSpeed: 500,
            dots: false,
            center: true,
            responsiveRefreshRate: 100,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 1,
                },
                // breakpoint from 767 up
                700: {
                    items: 2
                },
                // breakpoint from 768 up
                768: {
                    items: 4,
                },
            }
        })
        .on("changed.owl.carousel");

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 3,
            dots: false,
            nav: true,
            center: true,
            smartSpeed: 2000,
            slideSpeed: 500,
            margin: 50,
            slideBy: 1,
            responsiveRefreshRate: 100,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    margin: 0
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                    margin: 0,
                },
                // breakpoint from 767 up
                700: {
                    items: 2,
                    margin: 20
                },

                // breakpoint from 768 up
                768: {
                    items: 3,
                },
            }
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 300, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });

});

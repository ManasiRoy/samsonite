$(document).ready(function () {

    $('#hdr-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1024: {
                items: 1
            },
            1025: {
                items: 3
            }
        }
    })

    $('#partners').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    })

    $('#topprocat').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        autoWidth: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
        }
    })

    $('#catch_light').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    })
    jQuery('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 0,
        nav: false,
        autoplayHoverPause: true,
        thumbs: true,
        thumbsPrerendered: true,
        responsive: {
            0: {

            },
            600: {
                dots: false,
                autoplay: false,
            },
            1000: {
                dots: false,
            }
        },


        // Class that will be used on the thumbnail container
        thumbContainerClass: 'owl-thumbs',

        // Class that will be used on the thumbnail item's
        thumbItemClass: 'owl-thumb-item',
    });

    $(function () {
        $('#modellist').each(function () {
            $(this).select2({
                theme: 'bootstrap4',
                width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
                placeholder: $(this).data('placeholder'),
                allowClear: Boolean($(this).data('allow-clear')),
            });

        });
        function iformat(icon, badge,) {
            var originalOption = icon.element;
            var originalOptionBadge = $(originalOption).data('badge');

            return $('<span><i class="fa ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '<span class="badge">' + originalOptionBadge + '</span></span>');
        }
    });
    $('.productmodel').on('click', function () {
        $('.form-group').slideToggle();
        $(this).toggleClass('active');
    })

    $('.carousel').carousel({
        interval: false,
    });

    $(".rightsideProductVisualDetails .indicators a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });

        }
    });

    $(".rightsideProductVisualDetails .indicators li").on('click', function (event) {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
    $('#male').on('click', function () {
        $('.outer').addClass('maleImg').removeClass('femaleImg')
        $('#backImgMan').show()
        $('#backImgFemale').hide()
        $(this).addClass('active')
        $('#female').removeClass('active')
    })
    $('#female').on('click', function () {
        $('.outer').removeClass('maleImg').addClass('femaleImg')
        $('#backImgMan').hide()
        $('#backImgFemale').show()
        $(this).addClass('active')
        $('#male').removeClass('active')
    })
    $("#slide").on('change', function () {
        var value = $(this).val();
        $("#backImgMan").height(value);
        $("#backImgFemale").height(value);
        $('#big .item img').height(value / 1.5);
        // console.log(value);
        const result = document.querySelector('.result')
        result.querySelector('span').textContent = `${value}m`;
    });

    $('#slideToggle').on('click', function () {
        $('.rangewrap').slideToggle()
    })

})

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            wrappers: ["bootstrap"],
            //counters: true,
            searchfield: {
                placeholder: 'Search Products...',
            },
            navbars: [

                {
                    content: ['close'],
                },
                // {
                //     content: ['searchfield'],
                // },


            ],
        });
    }
);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

window.onscroll = function () {
    myFunction();
};

var navbar = document.getElementById("myHeader");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


if ($(window).width() < 1025) {
    $("#removecontent").appendTo($("#appendcontent"));
    $('.cartbtn').on('click', function () {
        $('.navbar-toggler').attr('disabled', true);
    })

    $('.navbar-toggler').on('click', function () {
        $('.navbar-toggler').removeAttr('disabled')
    })

    $('.searchbar').on('click', function () {
        $('.navbar-toggler').attr('disabled', true);
    })
    $('.btn-close').on('click', function () {
        $('.navbar-toggler').prop('disabled', false)
    })
    $('.cartclosebtn').on('click', function () {
        $('.navbar-toggler').prop('disabled', false)
    })

}

const headerheight = $('#myHeader').height();
$('.sticky-top').css({ 'top': headerheight })

if ($(window).width() < 993) {
    $('#filter').on('click', () => {
        $(".icon-right-arrow").toggleClass('icon-leftarrow')
        $('#filterbody').toggleClass('active')
        $('#leftbody').toggleClass('active')
        $("#uphdr").hide();

        $("#myHeader").addClass('sticky')
        $('#topproheight').toggleClass('active')
        $('.mm-wrapper').addClass('filterBody')
    })

    $('#filternone').on('click', () => {
        $('#filterbody').removeClass('active')
        $("#uphdr").show();
        $('.mm-wrapper').removeClass('filterBody')
    })

    $('#s1').on('click', () => {
        $("#myHeader").addClass('sticky')
        $('#topproheight').hide();
        $('#sortbody').addClass('active')
        $("#uphdr").hide();
        $('.mm-wrapper').addClass('sortBody')
    })
    $('#sortby').on('click', () => {
        //console.log('hi')
        $('#sortbody').removeClass('active')
        $('#topproheight').show();
        $("#uphdr").show();
        $('.mm-wrapper').removeClass('sortBody')
    })

} else {
    //changes 28-10-2020
    const bannerTotalheight = $('#banner-expert').outerHeight();

    $('#filter').on('click', () => {
        $(".icon-leftarrow").toggleClass('icon-right-arrow')
        $('#filterbody').toggle({ direction: 'right' }, 500)
        $('#leftbody').toggleClass('active')
        $("html, body").animate({ scrollTop: bannerTotalheight - 60 }, "slow");
        return false;
    })
}


$(window).scroll(function () {
    let bannerTotalheight = $('#banner-expert').outerHeight();

    if ($(window).scrollTop() >= bannerTotalheight - 60) {
        $('.pro-top-list').css({ 'top': headerheight }).addClass('sticky-top');
    }
    else {
        $('.pro-top-list').css({ 'top': 'inherit' }).removeClass('sticky-top');
    }
});

//changes 28-10-2020

// 25/11/2020

// $(window).scroll(function () {
//     if ($(window).scrollTop() >= $("#yearOutr").offset().top + $("#yearOutr").height() || $(window).scrollTop() < $("#yearOutr").offset().top)
//         $('#outline').removeClass('stick');
//     else
//         $('#outline').addClass('stick');
// });




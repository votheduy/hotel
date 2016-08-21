window.onload = function() {
    // Animate loader off screen
    $("#village-loading").fadeOut("slow");
};




$(document).ready(function(){


     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         var phone = $('.animation-element').attr('ani');
         $('.animation-element').addClass(phone);
     }else {
        //  $('body').addClass('pc');
        var $animation_elements = $('.animation-element');
        //$animation_elements.css("opacity","0");
        var $window = $(window);
        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);
            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);
                //check to see if this current container is within viewport
                if((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                    $element.css("opacity","1");
                    $element.css("animation-delay",$element.attr('ani-time'));
                    $element.css("-webkit-animation-delay",$element.attr('ani-time'));
                    $element.addClass($element.attr('ani'));
                }else {
                    $element.css("opacity","0");
                    $element.removeClass($element.attr('ani'));
                }
            });
        }
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
     }


    function animateLine(){
        $('.line_1').css('height','0%');
        $('.line_2').css('width','0%');
        $('.line_3').css('height','0%');
        $('.line_4').css('width','0%');
        $('.line_1').animate({
            height: 100+'%'
        }, 800,function(){
            $('.line_2').animate({
                width: 100+'%'
            }, 800,function(){
                $('.line_3').animate({
                    height: 100+'%'
                }, 800,function(){
                    $('.line_4').animate({
                        width: 100+'%'
                    }, 800,function(){
                    });
                });
            });
        });
    }

    $(".moblie-navigation").click(function(){
        $(this).toggleClass("opened");
        $("#sidebar-wrapper").toggleClass("opened");
    });

    //
    // var hPage = $('#page-content-wrapper').height();
    // var scrollAbout = hPage*34/100;
    // console.log(scrollAbout);
    // $('.ab-custom-1').css("height",scrollAbout);
    // $('.ab-col-2').css("height",hPage);
    //
    // $(window).resize(function(){
    //     $('.ab-custom-1').css("height",scrollAbout);
    //     $('.ab-col-2').css("height",hPage);
    // });


    var hPage = $('#page-content-wrapper').height();
    var scrollAbout = hPage*34/100;
    console.log(scrollAbout);
    $('.ab-custom-1').css("height",scrollAbout);
    $('.ab-col-2').css("height",hPage);

    $(window).resize(function(){
        var hPage = $('#page-content-wrapper').height();
        var scrollAbout = hPage*34/100;
        $('.ab-custom-1').css("height",scrollAbout);
        $('.ab-col-2').css("height",hPage);
    });





    $(".scrollbar-custom-1").mCustomScrollbar({
        theme:"minimal"
    });
    $(".scrollbar-custom-2").mCustomScrollbar({
        theme:"dark"
    });
    $(".cuba").mCustomScrollbar({
        theme:"dark"
    });

    $('.service-slide').owlCarousel({
        items:1,
        margin: 0,
        nav:false,
        autoplayTimeout:4000,
        autoplay:true,
        loop: true,

        onResized:function(){
            var hImgSlide = $('.service-slide .items').height();
            $('.box-service-content').css("margin-top",-hImgSlide+17);
            $('.box-service-content').css("padding-top",hImgSlide);
            $('.control-slide-ser').css("height",hImgSlide);
        },
        onInitialized:function(){
            var hImgSlide = $('.service-slide .items').height();
            $('.box-service-content').css("margin-top",-hImgSlide+17);
            $('.box-service-content').css("padding-top",hImgSlide);
            $('.control-slide-ser').css("height",hImgSlide);
        },
        onChanged:function(){
            animateLine();
        },
        onChange:function(){
        }
    });

    $('.customNextBtn').click(function(){
        $('.line_1').finish();
        $('.line_2').finish();
        $('.line_3').finish();
        $('.line_4').finish();
        animateLine();
    })
    $('.customPrevBtn').click(function(){
        $('.line_1').finish();
        $('.line_2').finish();
        $('.line_3').finish();
        $('.line_4').finish();
        animateLine();
    })

    $('.slide-thumb-gmap').owlCarousel({
        items:2,
        margin:10,
        nav:true,
        loop: true,
        navText:[
                "<i class='glyphicon glyphicon-menu-left'></i>",
                "<i class='glyphicon glyphicon-menu-right'></i>"
        ],
        responsive : {
            640 : {
                items:2
            },
            768 : {
                items:3
            },
            1100:{
                items:4
            }
        }

        // onInitialized:function(){
        //     $('.slide-thumb-gmap').css("margin-top",-30+'px');
        // },
    });

    $('.popup').fancybox({
        openEffect:'elastic',
        closeEffect :'elastic',
        nextEffect:'fade',
        prevEffect:'fade',
    });

    $('a.scroll-div[href^="#"]').bind('click.smoothscroll',function (e) {
       e.preventDefault();
       var target = this.hash,
       $target = $(target);
       $('html, body').stop().animate( {
           'scrollTop': $target.offset().top
       }, 100, 'swing', function () {
           window.location.hash = target;
       });
   });

    $('.customNextBtn').click(function(e) {
        e.preventDefault();
        $(".service-slide").trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function(e) {
        e.preventDefault();
        $(".service-slide").trigger('prev.owl.carousel');
    });

    $('.changle-floor').change(function(){
        var selected = $(this).find(':selected');
        var select = selected.attr("value");
        //$('.floor-img img').toggleClass('zoomIn');
        $('.floor-img img').attr('src','./images/'+select+'.jpg');
    })






})

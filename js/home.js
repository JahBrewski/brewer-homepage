$(document).ready(function(){

        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

        var $navigation= $(".main-nav"),
                $window    = $(window),
                offset     = $navigation.offset(),
                topPadding = 15;


        $window.scroll(function() {
                if ($window.scrollTop() > offset.top) {
                $navigation.addClass('fixed');
        } else {
                $navigation.removeClass('fixed');
        }
    });

        $(function() {
    $('.banner').unslider({
            speed: 500,               //  The speed to animate each slide (in milliseconds)
            delay: 3000,              //  The delay between slide animations (in milliseconds)
            complete: function() {},  //  A function that gets called after every slide animation
            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
            dots: true,               //  Display dot navigation
            fluid: false              //  Support responsive design. May break non-responsive designs
    });

            });

        
 

});

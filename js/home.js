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
 

});

$(document).ready(function(){

    //Scroll to tag
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

        function elementInViewport(el) {
          var top = el.offsetTop;
          var left = el.offsetLeft;
          var width = el.offsetWidth;
          var height = el.offsetHeight;

          while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
          }

          return (
            top >= window.pageYOffset &&
            left >= window.pageXOffset &&
            (top + height) <= (window.pageYOffset + window.innerHeight) &&
            (left + width) <= (window.pageXOffset + window.innerWidth)
          );
        }
            function checkAnimation() {
        $('.html-css, .jquery, .java, .php, .ruby, .mysql, .git, .cli').each(function() {
            if (!$(this).hasClass('start') && elementInViewport(this)) {
                $(this).addClass('start');
            }
        });
    }
        $(window).scroll(function() {
             checkAnimation();
         });

});

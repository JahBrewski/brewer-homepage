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

        function moveScroller() {
            var move = function() {
                var st = $(window).scrollTop();
                var ot = $("#scroller-anchor").offset().top;
                var s = $("#scroller");
                if(st > ot) {
                    s.css({
                        position: "fixed",
                        top: "0px"
                    });
                } else {
                    if(st <= ot) {
                        s.css({
                            position: "relative",
                            top: ""
                        });
                    }
                }
            };
            $(window).scroll(move);
            move();
        }
});

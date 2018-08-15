// function slideSwitch() {
//     var $active = $('.image.active');

//     if ( $active.length === 0 ) $active = $('.image:last');

//     var $next =  $active.next().length ? $active.next()
//         : $('.image:first');

//     $active.addClass('last-active');
        
//     $next.css({opacity: 0.0})
//         .addClass('active')
//         .animate({opacity: 1.0}, 800, function() {
//             $active.removeClass('active last-active');
//         });
// }

// $(function() {
//     setInterval( "slideSwitch()", 5000 );
// });



/*JQUERY FOR NAV BAR*/
if ($("nav").is('*')) {
    var elem = $('nav');
    var offset = elem.offset();
    var topValue =  offset.top + elem.height();
    var width = elem.width();
    $(window).scroll(function (event) {
          var y = $(this).scrollTop();
            if (y >= topValue) {  
                if (!$('nav').hasClass('follow')){	 
                   $("nav").hide().addClass("follow").fadeIn(250);
                }
            } else {
              $(".follow").removeClass("follow");
            }
     });
}
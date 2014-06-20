// Smooth scroll for in page links
$(function(){
    var target, scroll;

    $("a[href*=#]:not([href=#])").on("click", function(e) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

            if (target.length) {
                if (typeof document.body.style.transitionProperty === 'string') {
                    e.preventDefault();
                  
                    var avail = $(document).height() - $(window).height();

                    scroll = target.offset().top;
                  
                    if (scroll > avail) {
                        scroll = avail;
                    }

                    $("html").css({
                        "margin-top" : ( $(window).scrollTop() - scroll ) + "px",
                        "transition" : ".4s ease"
                    }).data("transitioning", true);
                } else {
                    $("html, body").animate({
                        scrollTop: scroll
                    }, 200);
                    return;
                }
            }
        }
    });

    $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function (e) {
        if (e.target == e.currentTarget && $(this).data("transitioning") === true) {
            $(this).removeAttr("style").data("transitioning", false);
            $("html, body").scrollTop(scroll);
            return;
        }
    });
});

// $(function() {
//     function isTopScrolledIntoView(elem) {
//         var docViewTop = $(window).scrollTop();
//         var docViewBottom = docViewTop + $(window).height();

//         var elemTop = $(elem).offset().top;
//         var elemBottom = elemTop + $(elem).height();
        
//         return ((elemTop) >= (docViewTop));
        
//     }
//     function isBottomScrolledIntoView(elem) {
//         var docViewTop = $(window).scrollTop();
//         var docViewBottom = docViewTop + $(window).height();

//         var elemTop = $(elem).offset().top;
//         var elemBottom = elemTop + $(elem).height();
        
//         return ((elemBottom) <= (docViewBottom));
        
//     }

//     var descriptionScrollDown = $('.description-scroll-down');

//     $(window).scroll(function() {
//         if (isBottomScrolledIntoView('.description') === true) {
//             descriptionScrollDown.addClass('appear');
//         } else { 
//             descriptionScrollDown.removeClass('appear');
//         }
//     });
// });

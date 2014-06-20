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

$(function() {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        if ((elem == '.main-headings .description')) {
            return (((elemBottom) <= (docViewBottom)) && ((elemTop) >= (docViewTop + 200)));
        } else {
            return (((elemBottom) <= (docViewBottom + 300)) && ((elemTop + 300) >= (docViewTop)));     
        }
        
    }

    var firstCircle = $('.first-circle'),
    firstCircleScrollUp = $('.first-circle .scroll-up'),
    firstCircleScrollDown = $('.first-circle .scroll-down'),
    lastCircle = $('.last-circle'),
    lastCircleScrollUp = $('.last-circle .scroll-up'),
    lastCircleScrollDown = $('.last-circle .scroll-down'),
    finalCircle = $('.final-circle'),
    finalCircleScrollUp = $('.final-circle .scroll-up'),
    finalCircleScrollDown = $('.final-circle .scroll-down'),
    secondCircle = $('.second-circle');

    $(window).scroll(function() {
        if (isScrolledIntoView('.first-circle') === true) {
            firstCircle.addClass('in-view');
            firstCircleScrollUp.addClass('in-view');
            firstCircleScrollDown.addClass('in-view');
        } else {
            firstCircle.removeClass('in-view');
            firstCircleScrollUp.removeClass('in-view');
            firstCircleScrollDown.removeClass('in-view');
        }
        if(isScrolledIntoView('.last-circle') === true) {
            lastCircle.addClass('in-view');
            lastCircleScrollUp.addClass('in-view');
            lastCircleScrollDown.addClass('in-view');
        } else {
            lastCircle.removeClass('in-view');
            lastCircleScrollUp.removeClass('in-view');
            lastCircleScrollDown.removeClass('in-view');
        }
        if (isScrolledIntoView('.second-circle') === true) {
            secondCircle.addClass('in-view');
        } else {
            secondCircle.removeClass('in-view');
        }
        if(isScrolledIntoView('.final-circle') === true) {
            finalCircle.addClass('in-view');
            finalCircleScrollUp.addClass('in-view');
            finalCircleScrollDown.addClass('in-view');
        } else {
            finalCircle.removeClass('in-view');
            finalCircleScrollUp.removeClass('in-view');
            finalCircleScrollDown.removeClass('in-view');
        }

        if ((isScrolledIntoView('.first-circle') === true) && (isScrolledIntoView('.last-circle') === true)) {
            firstCircleScrollUp.addClass('in-view');
            firstCircleScrollDown.removeClass('in-view');
            lastCircleScrollUp.removeClass('in-view');
            lastCircleScrollDown.addClass('in-view');
        } //else {
        //     firstCircleScrollUp.removeClass('in-view');
        //     lastCircleScrollDown.removeClass('in-view');
        // }
        //Scroll Chevrons
        
        var descriptionScrollDown =  $('.description > .col-xs-12.col-md-8 > .scroll-down');
        if (isScrolledIntoView('.main-headings .description') === true) {
           descriptionScrollDown.addClass('in-view');
        } else {
            descriptionScrollDown.removeClass('in-view');
        }
    });

    });

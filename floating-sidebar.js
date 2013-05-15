function sidebar_settings(sidebar, prevScrollTop, sbBottom, bottom_margin){
    var top_limit = sidebar.offset().top - $(window).scrollTop(),
    bottom = ( $(window).scrollTop()+$(window).height() ) - ( $(document).height() - bottom_margin ),
    $window = $(window),
    sidebar_height = sidebar.height(),
    window_height = $window.height(),
    scrolltop = $window.scrollTop();
    if (prevScrollTop <= scrolltop) {
        sidebar.removeClass('fixedTop');
        if (scrolltop > (sbBottom + 12)) {
            sidebar.addClass('fixedBtm');
        } else {
            sidebar.removeClass('fixedBtm');
        }
    } else {
        sidebar.removeClass('fixedBtm');
        if (scrolltop > sbBottom) {
            sidebar.addClass('fixedTop');
        } else {
            sidebar.removeClass('fixedTop');
        }
    }

    if(sidebar_height<=window_height){
        sidebar.removeClass('fixedBtm');
        if((window_height - sidebar_height - bottom) > 0)
            sidebar.addClass('fixedTop');
    }

    if ( bottom > 0 && top_limit < 0) {
        if( (window_height - sidebar_height - bottom) < 0){
            sidebar.addClass('fixedBtm');
            sidebar.removeClass('fixedTop');
            sidebar.attr('style', 'bottom: '+(bottom+15)+'px !important');
        }
        else{
            sidebar.attr('style', '');
        }
    }
    else{
        sidebar.attr('style', '');
    }
    if(top_limit > 0){
        sidebar.removeClass('fixedBtm');
        sidebar.removeClass('fixedTop');
        sidebar.attr('style', '');
    }
    return scrolltop;

}

function load_sidebar(bottom_margin) {
    var sidebar = $('.floating-sidebar'),
    prevScrollTop = 0,
    offset = sidebar.offset(),
    sbBottom = Math.abs($(window).height() - (offset.top + sidebar.height()));
    bottom_margin = parseInt(bottom_margin);
    if(isNaN(bottom_margin))
        bottom_margin = 0;
    prevScrollTop = sidebar_settings(sidebar, prevScrollTop, sbBottom, bottom_margin);
    $(window).scroll(function() {
        prevScrollTop = sidebar_settings(sidebar, prevScrollTop, sbBottom, bottom_margin);
    });
}

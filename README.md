floating-sidebar
================

To use floating sidebar

Add 'floating-sidebar' class to your div which you want to float.

Include floating-sidebar.js and floating-sidebar.css

Call load_sidebar(); function from javascript on document ready like this:

$(document).ready(function (){
	load_sidebar();
});

If you need some margin in bottom like if you have footer and you don't want to overlap your sidebar with footer then pass bottom margin in function parameters like this:

load_sidebar(200);

================

if you have added id (footer) in footer's main div then function call will look like this:

load_sidebar($('#footer').height());


/** * jQuery Line Progressbar * Author: Sharifur Rahman * Author URI : https:devrobin.com * Version: 1.0.0 */ ;
(function($) {
    'use strict';
    $.fn.rProgressbar = function(options) {
        options = $.extend({ percentage: null, ShowProgressCount: true, duration: 1000, fillBackgroundColor: '#ed1c24', backgroundColor: '#EEEEEE', borderRadius: '0px', height: '10px', width: '100%' }, options);
        $.options = options;
        return this.each(function(index, el) {
            $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
            var lineProgressBarInit = function() {
                var progressFill = $(el).find('.proggress');
                var progressBar = $(el).find('.progressbar');
                progressFill.css({ backgroundColor: options.fillBackgroundColor, height: options.height, borderRadius: options.borderRadius });
                progressBar.css({ width: options.width, backgroundColor: options.backgroundColor, borderRadius: options.borderRadius });
                progressFill.animate({ width: options.percentage + "%" }, { step: function(x) { if (options.ShowProgressCount) { $(el).find(".percentCount").text(Math.round(x) + "%"); } }, duration: options.duration });
            }
            $(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });
        });
    }
})(jQuery);



 $('.progressbarHTML').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#6fbcfe',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '8px',
width: '100%'
});

 $('.progressbarCSS').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#6fbcfe',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '8px',
width: '100%'
});

 $('.progressbarBOOTSTRAP').rProgressbar({
    percentage: 80,
    fillBackgroundColor: '#6fbcfe',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '8px',
width: '100%'
});

 $('.progressbarJQUARY').rProgressbar({
    percentage: 85,
    fillBackgroundColor: '#6fbcfe',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '8px',
width: '100%'
});

 $('.progressbarJS').rProgressbar({
    percentage: 85,
    fillBackgroundColor: '#6fbcfe',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '8px',
width: '100%'
});



 // *************circle
 $('svg.radial-progress').each(function( index, value ) {

  $(this).find($('circle.complete')).removeAttr('style' );

});


$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');
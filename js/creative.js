/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    }); 

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    
    $('#foot-nav').affix({
        offset: {
            top: 100
        }
    });
    //传入文件路径    
    $("#to_print").html('<iframe src=/pdf/receipt.pdf id="FiletoPrint"></iframe>')
    
    $(document).scroll(
        function() {
            if ($(document).scrollTop() >= ($(document).height() - $(window).height() - 500)) {
                $('#foot-nav').hide();
            }
            else {
                $('#foot-nav').show();
            }
        }
    );
    //$(document).ready(function() {
    //   $('#navbar-collapse-1').css("cssText", 
    //   "height:" +
    //   function() {
    //       var deviation = $('#head-pic').position();
    //       //var value = $('#head-pic').css("height");
    //       if (deviation.top != 0)
    //       //alert(deviation.top);
    //       return deviation.top;
    //   }
    //   + "px !important");
    //});
  
    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

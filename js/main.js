(function($) {
    "use strict"; // Start of use strict
    $("#mytag").tooltip({
        trigger:'hover',
        html:true,
        title:'Mouse hover'
    }).popover({
        trigger:'click',
        placement:'bottom',
        content:'Tip Tag'
    });
    //传入文件路径
 
})(jQuery);
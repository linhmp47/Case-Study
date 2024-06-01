(function($){
    $(function() {
        $('.js-studyItem').click(function(){
            if ($(this).hasClass('Study-tab-list-item--active')) {
                return;
            }
            $('.Study-tab-list-item--active').removeClass('Study-tab-list-item--active');
            $(this).addClass('Study-tab-list-item--active');
            var index = $(this).index('.js-studyItem');
            var itemContent = $('.js-studyContent[data-index='+index+']');
            $('.js-studyList').animate({
                left: 0 - itemContent.position().left
            }, 500);
        });
    });
})(jQuery);
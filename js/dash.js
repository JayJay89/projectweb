// Written by Swallow!
$('.template-click-me').click(function(e) {
    $('.template-click-me').find('.template-pointer').removeClass('active');
    $(e.currentTarget).find('.template-pointer').addClass('active');
});

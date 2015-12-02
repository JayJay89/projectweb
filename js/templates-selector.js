$('.tab').click(function(e) {
    $('.category-tab').find('.tab').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('.templates-tab').click(function(e) {
    $('.shortlist-section').removeClass('active');
    $('.templates-section').addClass('active');
});

$('.shortlist-tab').click(function(e) {
    $('.templates-section').removeClass('active');
    $('.shortlist-section').addClass('active');
});

$('.category-dropdown').click(function(e) {
    $(e.currentTarget).find('.dropdown').toggleClass('active');
});
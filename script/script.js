$(function() {

    var
        order = $('.order'),
        orderTitle = $('.order__title');

    orderTitle.on('click', function() {
        order.toggleClass('order_open order_closed');
    });
})

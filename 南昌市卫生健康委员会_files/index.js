$(function () {
    $('.tit ul li').mouseenter(function () {
        $(this).addClass('change');
        $(this).siblings().removeClass('change');
        var i = $(this).index();
        $('#content .cont').eq(i).show();
        $('#content .cont').eq(i).siblings().hide();
    })
})
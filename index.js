var elements = $(".text, .img").toArray();
$(window).scroll(function () {
    elements.forEach(function(item) {
        if($(this).scrollTop() >=$(item).offset().top - 400) {
            $(item).addClass("reveal");
        }
    });
});
elements.forEach(function(item) {
    if($(this).scrollTop() >= $(item).offset().top - 400) {
        $(item).addClass("reveal");
    }
})
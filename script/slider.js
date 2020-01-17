$(document).ready(function(){
    
    var auto = setInterval(sliding,500,1);
    $("#slider").mouseover(function(){
        clearInterval(auto);
    });
    $("#slider").mouseout(function(){
        auto = setInterval(sliding,500,1)
    });
    
    $("#slider").slick({
        fade: true,
        prevArrow: "<button type='button' class='slick-prev'></button>",
        nextArrow: "<button type='button' class='slick-next'></button>",
        dots: true
    });
    
});
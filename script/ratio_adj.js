$(document).ready(function(){
    function ratiofit(){
        $(".ratiobox").each(function(){
            var boxW = $(this).width();
            var boxH = $(this).height();
            var boxRatio = boxH / boxW;
            var imgRatio = $(this).children("img").height() / $(this).children("img").width();
            if(boxRatio < imgRatio){
                // 박스보다 그림이 세로로 더 길다
                $(this).children("img").width(boxW).height("auto");
            }else{
                // 박스보다 그림이 가로로 더 길다
                $(this).children("img").height(boxH).width("auto");
            }
        });
    }

    ratiofit();

    $(window).resize(function(){
        ratiofit();
    });
});


















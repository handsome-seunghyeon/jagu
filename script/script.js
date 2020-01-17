$(document).ready(function(){
    $(".main").mouseover(function(){
        $("#pcnav").stop().animate({
            height: "340px"
        },200);
//        $("#back").stop().slideDown(200);
    });
    
    $(".main").mouseout(function(){
        $("#pcnav").stop().animate({
            height: "80px"
        },200);
//        $("#back").stop().slideUp(200);
    });
    
    $("header").after("<div id='dummy'></div>");
    function setheader(){
        var headerH = $("header").height();
        $("#dummy").height(headerH);
    }
    setheader();
    
    $(".mmain>a").append("<span class='plus'>+</span>");
    
    // 모바일버전 메뉴바
    // .mmain>a를 눌렀을때
        // 응당 해야할 일을 멈춰라. ( e.preventDefault() )
    $(".mmain>a").click(function(e){
        e.preventDefault();
    });
    
    // .mmain을 눌렀을때
        // 모든 .mmain으로부터 .aactive를 일단 뺏기.
        // 만약 지금누른그것 안에 있는 .msub가 보이고 있는가?
                                    //   is(":visible")
            // 지금누른그것 안에 있는 .msub를 닫기
        // 그렇지 않다면
            // 지금누른그것 안에 있는 .msub를 열기
            // 지금누른그것에게 .aactive를 주기.
        // 열기가 끝나면
        // 지금누른그것을 제외한 나머지 .mmain안에있는 .msub를 닫기    
    $(".mmain").click(function(){
        $(".mmain").removeClass("aactive");
        $(".plus").text("+");
        if( $(this).children(".msub").is(":visible") ){
            $(this).children(".msub").stop().slideUp(400);
        }else{
            $(this).children(".msub").stop().slideDown(400);
            $(this).addClass("aactive");
            $(this).find(".plus").text("-");
        }
        $(this).siblings(".mmain").children(".msub").delay(400).slideUp(400);
    });
    
    // #ham을 눌렀을때
        // #mnav의 right:0px이 되도록 애니메이트
    $("#ham").click(function(){
        $("#mback").fadeIn(200);
        $("#mnav").animate({
            right: "0px"
        },300);
        $("html,body").css("overflow","hidden");
    });
    
    $("#mback, .msub a").click(function(){
        $("#mnav").animate({
            right: "-250px"
        },300);
        $("#mback").fadeOut(200);
        $("html,body").css("overflow","auto");
    });
    
    
    // 모바일에서 만들어진 각종 부산물들이
    // PC버젼까지 묻어오는것을 초기화하는 함수
    function pcini(){
        // #mnav, #mback의 style 속성자체를 들어냄
        $("#mnav, #mback").removeAttr("style");
    }
    
    $(window).resize(function(){
        var winW = $(this).outerWidth();
        if(winW > 1025){
            pcini();
        }
        setheader();
    });
    
    
    // #linkbtn이 눌렸을때
        // #linklist의 value가 무엇이냐를 알아보고
        // 만약 그 값이 ""이 아니냐
            // 새 이름으로 새 창을 띄우고 그 해당 value를
            // 방금띄운 새창에 주소로 삽입한다.
    var popnum = 0;
    $("#linkbtn").click(function(){
        popnum++;
        var linkval = $("#linklist").val();
        if(linkval != ""){
            window.open(linkval, "pop"+popnum);
        }
    });
    
    
    // Breadcrumb 구동부
    var urlset = [
        ["intro0", "intro1","intro2"],
        ["part0", "part1","part2"],
        ["ad0", "ad1","ad2"],
        ["manage0", "manage1","manage2"]
        
    ];
    
    var path = window.location.pathname;
    var page = path.split("/").pop();
    page = page.split(".")[0];
    
    // urlset라는 아파트에서 page라는 이름을 가진 값이
    // 몇층 몇호에 있는지 수색
    // 1. 우리 아파트가 몇층이지?
    // 2. 각 층별로 수색.
        // 2-1. 이번 층 복도에는 몇개의 호실이 있지?
        // 2-2. 각 호실별로 수색.
            // 이때 page라는 이름이 같은 값이 발견되면!
            // 그때의 층수 => 층수
            // 그때의 호수 => 호수
    var mainnum;
    var subnum;
    
    var level = urlset.length;
    for(i=0; i<level; i++){
        var room = urlset[i].length;
        for(j=0; j<room; j++){
            if(urlset[i][j] == page){
                mainnum = i;
                subnum = j;
            }
        }
    }
    
    
    
    
});
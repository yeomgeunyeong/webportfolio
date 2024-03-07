$(function(){
    
    //디자인 슬라이드
    setInterval(function(){
        $(".move").animate({left:"-400px"},500, function(){
            $(".move").css({left:"0"});
            $(".move").append($(".move li").first());
        })
    },2000)
    
    
    //pdf
    $(".enter").click(function(){
        $(".iflayer, .pdfimg").show();
    })

    $(".ifclose").click(function(){
        $(".iflayer").hide();
    })

    $(".git_txt").hide();
    $(".github").hover(function(){
        $(".git_txt").fadeIn();
    }, function(){
        $(".git_txt").fadeOut();
    })


    //web
    $(".web_copy_pop").hide();
    $(".web_copy_click").click(function(){
        $(".web_copy_pop").fadeIn();
    })

    $(".copy_btn_click").click(function(){
        $(".web_copy_pop").fadeOut();
    })


    $(".respon_pop").hide();
    $(".web_respon_click").click(function(){
        $(".respon_pop").fadeIn();
    })

    $(".copy_btn_click").click(function(){
        $(".respon_pop").fadeOut();
    })


    $(".project_pop").hide();
    $(".web_project_click").click(function(){
        $(".project_pop").fadeIn();
    })

    $(".copy_btn_click").click(function(){
        $(".project_pop").fadeOut();
    })
})



$(window).scroll(function(){
    var top=$(this).scrollTop();
    console.log("top:", top);

    // 3685

    if(top>3000){
        $("#contact_move").addClass("on");
    }else if(top>2500){
        $("#contact_move").removeClass("on");
    }else{
        $("#contact_move").removeClass("on");
    }
    
})



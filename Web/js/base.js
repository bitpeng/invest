/**
 * Created by vwdo on 2016/10/21.
 */

$(function(){
    //ͷ����Ŀ����
    $(".xm").hover(function(){
        $(".xm-yc").show()
    },function(){
        $(".xm-yc").hide()
    })
    $(".xm-yc").hover(function(){
        $(".xm-yc").show()
    },function(){
        $(".xm-yc").hide()
    })

    //��Ŀ�����л�
    $(".case-right ul li").hover(function(){
        var index=$(this).index()
        $(".left-yc").eq(index).show().siblings(".left-yc").hide()
    },function(){

    })
    //��Ŀ����ҳ���л�
    $(".case-nav ul li a").click(function(){
        $(".case-nav ul li a").removeClass("active")
        $(this).addClass("active")
        var index=$(this).parent("li").index()
        $(".case-yc").eq(index).show().siblings(".case-yc").hide()
    })
    $(".case-navs ul li").click(function(){
        location.href="case.html"
    })
    //�ֻ��л�
    $(".phone-img").click(function(){
        $(".phone-nav").animate({
            left:0
        },500)
    })
    $(".phone-nav-back").click(function(){
        $(".phone-nav").animate({
            left:"-100%"
        },500)
    })
    //��������banner�л�
    $(".join-a ul li").hover(function(){
        var index=$(this).index()
        $(".join-banners").eq(index).show().siblings(".join-banners").hide()
    })
    $(".bx-s li").click(function(){
        //$(".bx-s li").removeClass("active")
        $(this).parent(".bx-s").children("li").removeClass("active")
        $(this).addClass("active")
        var index=$(this).index()
        $(".bx li").eq(index).addClass("active").siblings(".bx li").removeClass("active")
    })
    $(".bxs-s li").click(function(){
        var index=$(this).index()
        $(".bxs li").eq(index).show().siblings(".bxs li").hide()
    })
    $(".bxss-s li").click(function(){
        var index=$(this).index()
        $(".bxss li").eq(index).show().siblings(".bxss li").hide()
    })
    $(".bxsss-s li").click(function(){
        var index=$(this).index()
        $(".bxsss li").eq(index).show().siblings(".bxsss li").hide()
    })
    $(".bxssss-s li").click(function(){
        var index=$(this).index()
        $(".bxssss li").eq(index).show().siblings(".bxssss li").hide()
    })
    //��Ƹ�ַ����л�
    $(".recruit-yc ul li").click(function(){
        $(".recruit-yc ul li .recruit-lis img").attr("src", "/Web/images/zxcr.jpg");
        $(this).children(".recruit-lis").children("img").attr("src", "/Web/images/1111.jpg");
        $(".recruit-lis").removeClass("active")
        $(this).children(".recruit-lis").addClass("active")
        if(!$(this).hasClass("active")){
            $(".recruit-yc ul li").removeClass("active")
            $(".recruit-yc ul li .recruit-yc-li").slideUp(500)
            $(this).children(".recruit-yc-li").slideDown(500)
            $(this).addClass("active")
        }else{
            $(this).removeClass("active")
            $(".recruit-yc ul li .recruit-yc-li").slideUp(500)
            $(".recruit-yc ul li .recruit-lis img").attr("src", "/Web/images/zxcr.jpg");
            $(this).children(".recruit-lis").removeClass("active")

        }
    })
    //��Ƹ6����Ŀ�л�
    $(".recruit-li ul li").click(function(){
        var index=$(this).index()
        $(".recruit-yc").eq(index).show().siblings(".recruit-yc").hide()
    })
    //�������Ǻ���ҵ���л�
    $(".core-q ul li").hover(function(){
        var index=$(this).index()
        $(".core-yc").eq(index).show().siblings(".core-yc").hide()
    })
    //�������Ƿ��������л�
    $(".advantage-nav ul li").click(function(){
        $(".advantage-nav ul li").removeClass("active")
        $(this).addClass("active")
        var index=$(this).index()
        $(".advantage-nav-yc").eq(index).show().siblings(".advantage-nav-yc").hide()
    })
    //רҵ�������ֵ����ʾ���
    var i=0;
    $(".services-two-img").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active")
            $(this).parent("li").children(".services-two-bottom").animate({
                height:190
            },500)
        }else{
            $(this).removeClass("active")
            $(this).parent("li").children(".services-two-bottom").animate({
                height:70
            },500)
        }
    })
    //רҵ����tab�л�
    $(".services-nav ul li").click(function(){
            $(".services-nav-li").removeClass("active")
            $(".services-nav-li p").removeClass("active")
            $(".services-nav-li span").removeClass("active")
            $(this).children(".services-nav-li").addClass("active")
            $(this).children(".services-nav-li").children("p").addClass("active")
            $(this).children(".services-nav-li").children("span").addClass("active")
             var index=$(this).index()
        $(".services-yc").eq(index).show().siblings(".services-yc").hide()
    })
    //���������л�
    $(".honor-nav span").click(function(){
        $(".honor-nav span").removeClass("active")
        $(this).addClass("active")
        var index=$(this).index()
        $(".honor-banner").eq(index).show().siblings(".honor-banner").hide()
    })
    //������ͼƬ��� �л���
    var i=0
    $(".cooperation-img img").click(function(){
        if(i==0){
            $(this).attr("src","img/icon-169.png")
            i=1
        }else{
            $(this).attr("src","img/icon-148.png")
            i=0
        }

    })
    //�������Ƿ�չ���

})
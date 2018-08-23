// JavaScript Document


$(function () {

    $("a").click(function(){
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });


    $(window).on('resize', function() {
        var $win = $(window);
        var winWidth = $win.width();

        if (winWidth <= 1024)
        {
            $(".modifylist").hide();
            $("#hideSideBar").css({
                "marginLeft":"0",
                "display":"block"

            });
            $("#mainContainer").css({
                "maxWidth":"100%",
                "marginLeft":"0"
            });
        }
        else
        {
            $(".modifylist").show().css({"width":"18%"});
            $("#hideSideBar").css({
                "marginLeft":"18%",
                "display":"none"
            });
            $("#mainContainer").css({
                "maxWidth":"82%",
                "marginLeft":"18%"
            });
        }
    });

    $("#hideSideBar").click(function () {
     $("#forwardbtn").toggleClass("changeDir");
        if( $(this).css("position") === "fixed") {
            $(".modifylist").css({"width": "100%"}).show(500);
            $(this).animate({
                "position": "absolute",
                "marginTop": "9px",
                "right": "0"
            }, 500).css({
                "position": "absolute",
                "marginTop": "9px",
                "right": "0"

            });

        }
        else
        {
            hideSideBa();

        }
    });


    $(".modifylist a").click(function () {
        if( $("#hideSideBar").css("display") !== "none"){
            hideSideBa();
        }
    });

    $("#groupbtn").click(function () {
        window.location.href = "group.html";

    });

    $("#chapterWiseTestBtn").click(function () {
       window.location.href = "chapter_wise_test.html";
    });
     $("#chpbtn2").click(function () {
       window.location.href = "chapter_wise_test.html";
    });





    $("#submitChaptBtn").click(function () {
        //$("iframe").attr("src",location.href("mcq_test.html"));
       // $("#submitChaptBtn").text("hi");
         window.location.href = "mcq_test.html";
    });

    $("#my_standing").click(function () {
        window.location.href = "my_standing.html";
    });


});

function hideSideBa() {
    $("#hideSideBar").animate({
        "position": "fixed",
        "right":"unset",
        "marginTop": "18%"


    }, 500).css({
        "right":"unset",
        "marginTop": "18%",
        "position": "fixed"

    });

    $(".modifylist").hide(500);
    $(".modifylist").css({"width": "18%"});
}

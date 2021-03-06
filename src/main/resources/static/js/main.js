/**
 * Created by Administrator on 2017/4/27.
 */

/* user */
/****************************************/

$(function () {
    $("#form-manage").click(function () {
        $(".loading").show();
        $.get("/approveForm/listClubActivity",function () {
            $(".content-body").load("/approveForm/listClubActivity",function () {
                $(".loading").hide();
            });
        });
    });
});
/* login */
$(function () {
   $("#login-btn").click(function () {
       var username = $("#username").val();
       var password = $("#password").val();
       if(username!=""&&password!=""){
           var data={
               "username":username,
               "password":password
           };
           $.ajax({
               type: "POST",
               url: "/user/login",
               data: data,
               dataType:"json",
               success: function(r){
                   if(r.status === 0){
                       window.location.href = "/index";
                       window.location.replace();
                   }else if(r.status === 1){
                       alert(r.message);
                   }

               },
               error: function(XMLHttpRequest, textStatus, errorThrown){
                   alert(XMLHttpRequest.status);
                   alert(XMLHttpRequest.readyState);
                   alert(textStatus);
               },
           });
       }
       else{
           alert("用户名密码不能为空");
       }
   }) ;
   $("#login-reset").click(function () {
      $("#login-form")[0].reset();
   });
});


/* tabset  */
/*******************************************/

$(function () {
   $("#form-view").click(function () {
       $(".content-body").html("");
       $(".loading").show();
       $(".content-body").load("/applyClubForm/listAllForm",function () {
           $(".loading").hide();
       }) ;
   });
});
$(function () {
    $("#f-list").click(function () {
        // $(".content-body").html("");
        $("#f-flow").show();$("#manage-a-show").hide();$("#public-news-").hide();$("#president-management").hide();$("#club-finance").hide()
    });
});
$(function () {
    $("#manage-a").click(function () {
        // $(".content-body").html("");
        $("#manage-a-show").show();$("#f-flow").hide();$("#public-news-").hide();$("#president-management").hide();$("#club-finance").hide()
    });
});
$(function () {
    $("#-president-management").click(function () {
        // $(".content-body").html("");
        $("#president-management").show();$("#f-flow").hide();$("#public-news-").hide();$("#manage-a-show").hide();$("#club-finance").hide()
    });
});
$(function () {
    $("#public-news").click(function () {
        // $(".content-body").html("");
        $("#public-news-").fadeIn();$("#f-flow").hide();$("#manage-a-show").hide();$("#president-management").hide();$("#club-finance").hide()
    });
});
$(function () {
    $("#-club-finance").click(function () {
        // $(".content-body").html("");
        $("#club-finance").fadeIn();$("#public-news-").hide();$("#f-flow").hide();$("#manage-a-show").hide();$("#president-management").hide();
    });
});

/* club */
/********************************/
function download() {
    var base64doc = btoa(unescape(encodeURIComponent(document.documentElement.innerHTML))),
        a = document.createElement('a'),
        e = new MouseEvent('click');
    a.download = 'form.doc';
    a.href = 'data:text/html;base64,' + base64doc;
    a.dispatchEvent(e);
}
$(function () {
   $("#club-load").click(function () {
       $(".approval-right").hide();
       $("#base-css").removeAttr('href');
       $("#common-css").removeAttr('href');
       $("#club-css").removeAttr('href');
       download();
       $(".approval-right").show();
       location.replace(location);
   });
});
/* application */
$(function () {
    $("#form-appli").click(function () {
        $(".loading").hide();
       $(".content-body").load("/applyClubForm/applyFormClubActivity");
       if( window.screen.width<767){
           $(document.body).height(1050);
       }
    });
});

/* approval */
$(function () {
    $("#club-entry").click(function () {
       $(".approval-form").toggle(300);
        var data={
            "formId": $("#formId").html(),
            "comment":"",
            "applySelfMoney":$("#applySelfMoney").html(),
            "applyReserveMoney":$("#applyReserveMoney").html()
        };
        $.ajax({
            type: "GET",
            url: "/approveForm/approve",
            data: data,
            dataType:"json",
            success: function(r){
                alert(r.message);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },
        });

    });
});

/* footer */

function heightListener() {
    var $height = $(window).height();
    if($height>$(document.body).height()){
        $("footer").css("position","fixed");
        $("footer").css("top", $height-53.2);
    }
    else{
        $("footer").css("position","static");
        $("footer").css("top", $(document.body).height()-53.2);
    }
}

$(function () {
    $(document).ready(heightListener());
    $(window).resize(heightListener());
});
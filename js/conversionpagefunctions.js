$(document).ready(function () {
    if((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (document.location.href.match(/[^\/]+$/)[0] == "index.html")) {
        window.location.href = "index-mobile.html";
    }

    $("#openNav").click(function () {
        document.getElementById("sideNav").style.width = "300px";
        document.getElementById("sideNav").style.opacity = "100";
    });

    $("#closeNav").click(function () {
        document.getElementById("sideNav").style.width = "0";
        document.getElementById("sideNav").style.opacity = "0";
    });

    function uidefaults() {
        $('.allresults').slideUp(50);
        $('.titlediv').animate({ marginTop: '180' })
        $('.title').animate({ fontSize: '36' })
        $('.titleversion').animate({ fontSize: '15' })
        $('.btn-lg').animate({ padding: '15', fontSize: '22' })
        $('.convertbuttons').animate({ marginTop: '35' })
        document.body.style.backgroundColor = "#2f2f2f ";
        $(".input-edit").css({
            backgroundColor: "#2f2f2f",
            color: "#fff"
        });
        $(".mycoloris-anim").css("color", "#9b9999");
        $("#openNav").css("color", "#fff");
    }

    $('#univinput').on('input propertychange paste', function () { // results are hidden with various animations (depending on the case)
        if (($('#univinput').val() != '') & ($('.allresults-error').css('display') === 'block')) {
            uidefaults();
        } else if ($('#univinput').val() != '') {
            $('.convertbuttons').slideDown("fast");
        } else {
            $('.convertbuttons').slideDown("fast");
            uidefaults();
        }
    });

    $("#rgb, #rgba, #hex, #cmyk, #hsl, #hsv").click(function () { // results are shown with various animations
        $('.titlediv').animate({ marginTop: '30' })
        $('.title').animate({ fontSize: '30' })
        $('.titleversion').animate({ fontSize: '16' })
        $('.btn-lg').animate({ padding: '7', fontSize: '16' })
        $('.convertbuttons').animate({ marginTop: '20' })
        $('.mycoloris-anim').animate({ fontSize: '22' })
        $('.allresults').slideDown(50);
    });
});

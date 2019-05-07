$(document).ready(function () {
    $("#openNav").click(function () {
        document.getElementById("sideNav").style.width = "300px";
        document.getElementById("sideNav").style.opacity = "100";
    });

    $("#closeNav").click(function () {
        document.getElementById("sideNav").style.width = "0";
        document.getElementById("sideNav").style.opacity = "0";
    });

    function clearfields() { /* Function that clears everything and reverts to defaults */
        $('.hex-result').attr('value', '');
        $('.rgb-result').attr('value', '');
        $('.rgba-result').attr('value', '');
        $('.cmyk-result').attr('value', '');
        $('.hsl-result').attr('value', '');
        $('.hsv-result').attr('value', '');
    }

    $('#univinput').on('input propertychange paste', function () { // results are hidden with various animations (depending on the case)
        if ($('#univinput').val() == '') {
            document.body.style.backgroundColor = "#2f2f2f ";
            $(".input-edit").css({
                backgroundColor: "#2f2f2f",
                color: "#fff"
            });
            $(".mycoloris-anim").css("color", "#9b9999");
            $("#openNav").css("color", "#fff");
            $('.allresults-error').css("display", "none");
            $('.input-group').css("opacity", "1");
            clearfields();
        }
    });
});
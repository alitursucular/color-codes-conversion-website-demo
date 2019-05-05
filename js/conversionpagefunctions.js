$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    jQuery('#univinput').on('input propertychange paste', function () {
        if ($('#univinput').val() != '') {
            $('.convertbuttons').slideDown(50); // open down convert buttons
        } else {
            $('.colorprevbox-anim').hide("fast");
            $('.convertbuttons').slideUp(50); // close up convert buttons
            $('.allresults').slideUp(50); // close up results
            $('.inputdiv').animate({marginTop: '180'}) // reset to the initial height
            $('.input-lg-anim').animate({ // reset input box
                width: '75%',
                height: '110',
                fontSize: '60'
            })
            $('.title').animate({fontSize: '36'})
            $('.titleversion').animate({fontSize: '15'})
            $('.btn-lg-anim').animate({
                padding: '15',
                fontSize: '22'
            })
            $('.convertbuttons').animate({marginTop: '35'}) // reset the height between input box and convert buttons
        }
    });

    $("#rgb, #rgba, #hex, #cmyk, #hsl, #hsv").click(function () {
        $('.inputdiv').animate({marginTop: '30'})
        $('.input-lg-anim').animate({
            width: '40%',
            height: '60',
            fontSize: '30'
        })

        $('.title').animate({fontSize: '30'})
        $('.titleversion').animate({fontSize: '16'})

        $('.btn-lg-anim').animate({
            padding: '7',
            fontSize: '16'
        })

        $('.convertbuttons').animate({marginTop: '20'})
        $('.mycoloris-anim').animate({fontSize: '22'})

        $('.allresults').slideDown(50); // show results
        $('.colorprevbox-anim').show("fast");
    });
});

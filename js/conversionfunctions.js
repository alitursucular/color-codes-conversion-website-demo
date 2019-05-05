/**
 * Created by Ali Tursucular.
 */

$(document).ready(function () {

    jQuery('#univinput').on('input propertychange paste', function () {
        clearerrors();
        if ($('#univinput').val() != '') {
            $('.convertbuttons').slideDown("fast");
            $('.allresults-error').css("display", "none");
            $('.input-group').css("opacity", "1");
        }
        else {
            $('.convertbuttons').slideUp("fast");
            clearfields();
        }
    });

    document.getElementById('univinput').focus(); // input field loads with focus

    //*************** Clear Fields Function ***************\\

    function clearfields() {
        $('.hex-result').attr('value', ''); // print to html
        $('.rgb-result').attr('value', ''); // print to html
        $('.rgba-result').attr('value', ''); // print to html
        $('.cmyk-result').attr('value', ''); // print to html
        $('.hsl-result').attr('value', ''); // print to html
        $('.hsv-result').attr('value', ''); // print to html
        $('.colorprevbox').css('background-color', '#2f2f2f'); // print to html
        $('.colorprevboxdata').attr('data-content', " "); // change attribute
    }

    //*************** Clear Fields Function ***************\\


    //*************** CMYK to RGB Functions ***************\\
    function cmyk_to_hex(c, m, y, k) {

        var r = Math.round(255 * (1 - c) * (1 - k));
        var g = Math.round(255 * (1 - m) * (1 - k));
        var b = Math.round(255 * (1 - y) * (1 - k));

        var rgb = [r, g, b];
        return rgb;
    }

    //*************** /CMYK to RGB Functions ***************\\


    //*************** HSV to RGB Functions ***************\\

    /**
     * Converts an HSV color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     * Assumes h, s, and v are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     * http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
     *
     * @param   Number  h       The hue
     * @param   Number  s       The saturation
     * @param   Number  v       The value
     * @return  Array           The RGB representation
     */
    function hsv_to_rgb(h, s, v) {

        var h = parseFloat(h.replace(/\s/g, "").replace(",", ".")); // convert decimal input to decimal number
        var s = parseFloat(s.replace(/\s/g, "").replace(",", ".")); // convert decimal input to decimal number
        var v = parseFloat(v.replace(/\s/g, "").replace(",", ".")); // convert decimal input to decimal number

        h = h / 360;
        s = s / 100;
        v = v / 100;

        var r, g, b;

        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        var rgb = [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        return rgb;
    }

    //*************** /HSV to RGB Functions ***************\\


    //*************** HSL to RGB Functions ***************\\
    /**
     * Converts an HSL color value to RGB.
     *
     * @param   Number  h       The hue
     * @param   Number  s       The saturation
     * @param   Number  l       The lightness
     * @return  Array           The RGB representation
     */

    function HueToRgb(m1, m2, hue) {
        var v;
        if (hue < 0)
            hue += 1;
        else if (hue > 1)
            hue -= 1;

        if (6 * hue < 1)
            v = m1 + (m2 - m1) * hue * 6;
        else if (2 * hue < 1)
            v = m2;
        else if (3 * hue < 2)
            v = m1 + (m2 - m1) * (2 / 3 - hue) * 6;
        else
            v = m1;

        return 255 * v;
    }

    function hsl_to_rgb(h, s, l) {
        var m1, m2, hue;
        var r, g, b
        s /= 100;
        l /= 100;
        if (s == 0)
            r = g = b = (l * 255);
        else {
            if (l <= 0.5)
                m2 = l * (s + 1);
            else
                m2 = l + s - l * s;
            m1 = l * 2 - m2;
            hue = h / 360;
            r = Math.round(HueToRgb(m1, m2, hue + 1 / 3));
            g = Math.round(HueToRgb(m1, m2, hue));
            b = Math.round(HueToRgb(m1, m2, hue - 1 / 3));
        }
        return [Math.round(HueToRgb(m1, m2, hue + 1 / 3)), Math.round(HueToRgb(m1, m2, hue)), Math.round(HueToRgb(m1, m2, hue - 1 / 3))];
    }


    //*************** /HSL to RGB Functions ***************\\


    //*************** RGB to HSV Functions ***************\\

    function rgb_to_hsv(r, g, b) {
        var computedH = 0;
        var computedS = 0;
        var computedV = 0;

        r = r / 255;
        g = g / 255;
        b = b / 255;

        var minRGB = Math.min(r, Math.min(g, b));
        var maxRGB = Math.max(r, Math.max(g, b));

        if (minRGB == maxRGB) { // Black-gray-white
            computedV = (minRGB * 100).toFixed(1);
            var hsv = 0 + ", " + 0 + "%, " + computedV + "%";
            return hsv;
        }

        // Colors other than black-gray-white:
        var d = (r == minRGB) ? g - b : ((b == minRGB) ? r - g : b - r);
        var h = (r == minRGB) ? 3 : ((b == minRGB) ? 1 : 5);
        computedH = Math.floor(60 * (h - d / (maxRGB - minRGB)));
        computedS = (((maxRGB - minRGB) / maxRGB) * 100).toFixed(1);
        computedV = (maxRGB * 100).toFixed(1);
        var hsv = computedH + ", " + computedS + "%, " + computedV + "%";
        return hsv;
    }

    //*************** /RGB to HSV Functions ***************\\


    //*************** RGB to CMYK Functions ***************\\
    function rgb_to_cmyk(r, g, b) {
        var computedC = 0;
        var computedM = 0;
        var computedY = 0;
        var computedK = 0;

        if (r == 0 && g == 0 && b == 0) { // for black conversion
            computedK = 1;
            computedC = computedC.toFixed(4); // only keep 4 decimals
            computedM = computedM.toFixed(4); // only keep 4 decimals
            computedY = computedY.toFixed(4); // only keep 4 decimals
            computedK = computedK.toFixed(4); // only keep 4 decimals
            var cmyk = [0 + ", " + 0 + ", " + 0 + ", " + 1];
            return cmyk;
        }

        computedC = 1 - (r / 255);
        computedM = 1 - (g / 255);
        computedY = 1 - (b / 255);

        var minCMY = Math.min(computedC, Math.min(computedM, computedY));
        computedC = (computedC - minCMY) / (1 - minCMY);
        computedM = (computedM - minCMY) / (1 - minCMY);
        computedY = (computedY - minCMY) / (1 - minCMY);
        computedK = minCMY;

        computedC = computedC.toFixed(4); // only keep 4 decimals
        computedM = computedM.toFixed(4); // only keep 4 decimals
        computedY = computedY.toFixed(4); // only keep 4 decimals
        computedK = computedK.toFixed(4); // only keep 4 decimals
        var cmyk = computedC + ", " + computedM + ", " + computedY + ", " + computedK;
        return cmyk;
    }

    //*************** /RGB to CMYK Functions ***************\\


    //*************** RGB to HSL Functions ***************\\

    function rgb_to_hsl(h) {

        var r = h.substr(0, h.indexOf(',')); // get all strings until first comma
        var g = h.substr(h.indexOf(',') + 1).substr(0, h.substr(h.indexOf(',') + 1).indexOf(',')); // get all strings until second comma
        var b = h.substr(h.indexOf(',') + 1).substr(h.substr(h.indexOf(',') + 1).indexOf(',') + 1); // get all strings until third comma

        var r = (r.replace(/[^0-9\.]/g, '')) / 255; // non-numeric character are removed & divided
        var g = (g.replace(/[^0-9\.]/g, '')) / 255; // non-numeric character are removed & divide
        var b = (b.replace(/[^0-9\.]/g, '')) / 255; // non-numeric character are removed & divide

        var min = Math.min(r, g, b); // min of rgb
        var max = Math.max(r, g, b); // max of rgb

        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        h = (Math.round(h * 360)).toString();
        s = (s * 100).toFixed(1);
        l = (l * 100).toFixed(1);

        var hsl = h + ", " + s + "%, " + l + "%";
        return hsl;
    }

    //*************** /RGB to HSL Functions ***************\\


    //*************** HEX to RGB Functions ***************\\

    function hex_seperator_convertor(a) { // r g b parts of 6-digit hex input is seperated, letters are converted to int and rgb is calculated
        var x = a.substr(0, 1);
        var y = a.substr(1, 1);

        if (Math.floor(x) == x && $.isNumeric(x)) { // check for numeric and integer - first half
            var numequofhex = parseInt(x);
        } else {
            var hexarray = ["A", "B", "C", "D", "E", "F"];
            var numequofhex = parseInt(hexarray.indexOf(x) + 10); // replace with number, add 10 for 10's, convert to int
        }

        if (Math.floor(y) == y && $.isNumeric(y)) { // check for numeric and integer - second half
            var numequofhex2 = parseInt(y);
        } else {
            var hexarray = ["A", "B", "C", "D", "E", "F"];
            var numequofhex2 = parseInt(hexarray.indexOf(y) + 10); // replace with number, add 10 for 10's, convert to int
        }
        var hex_r = (numequofhex * 16) + numequofhex2;
        return hex_r;
    }

    //*************** /HEX to RGB Functions ***************\\


    //*************** RGB to HEX Functions ***************\\

    function rgb_to_hex_convertor(rgb) { // function to convert rgb to hex
        var hex_int = parseInt(rgb / 16);
        var hex_dec = rgb - (hex_int * 16); // after division, quotinent and remainder is calculated
        var hex_int = hex_int.toString(); // quotinent is converted to a string
        var hex_dec = hex_dec.toString(); // remainder is converted to a string

        var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]; // hex array
        var hex_int = hex_int.replace(hex_int, hex[hex_int]); // hex equivalance of quotinent
        var hex_dec = hex_dec.replace(hex_dec, hex[hex_dec]); // hex equivalance of remainder
        var result = hex_int.concat(hex_dec);
        return result;
    }

    function rgb_to_hex_seperator(x) { // function that clears r value from non-numeric characters and checks min max limits
        var r = x[0];
        var g = x[1];
        var b = x[2];

        if ((r >= 0 && r <= 255) && (g >= 0 && g <= 255) && (b >= 0 && b <= 255)) {
            var final_hex = ("#" + rgb_to_hex_convertor(r) + rgb_to_hex_convertor(g) + rgb_to_hex_convertor(b));
            return final_hex;
        } else {
            return err_invalid_rgb_limits(); // r, g and b values must be between 0 and 255
        }
    }

    //*************** /RGB to HEX Functions ***************\\

    $("#rgb").click(function () {
        clearerrors();
        var univinput = ($('#univinput').val()).trim(); // remove the whitespace from the beginning and end of univinput
        var univinput = $('#univinput').val().replace(/[^0-9\,\ ]/g, ''); // remove everything except: space and comma
        if ((univinput.substr(0, univinput.indexOf(',')) != '') || (univinput.substr(0, univinput.indexOf(' ')) != '')) { // look for comma or space
            if (univinput.substr(0, univinput.indexOf(',')) != '') { // look for only comma seperation
                var univinput = univinput.replace(/\s/g, ''); // remove space
                var univinput = univinput.split(",");
            } else { // only look for spaces and seperate
                var univinput = univinput.replace(/,/g, ''); // remove comma
                var univinput = univinput.split(" ");
            }

            if (((univinput[0] != undefined) && (univinput[0].length > 0)) && ((univinput[1] != undefined) && (univinput[1].length > 0)) && ((univinput[2] != undefined) && (univinput[2].length > 0))) { // r g b not undefined and not empty
                if ((univinput[3] === undefined) || univinput[3].replace(/\s/g, "").length < 1) { // if alpha value is not defined or empty
                    console.log("alpha value NOT found");
                } else {
                    return err_rgba_in_rgb(); // your input seems like rgba, would you like us to compute rgba?
                }

                var rgb_to_hex_final = rgb_to_hex_seperator(univinput);
                var rgb = "rgb(" + univinput[0] + ", " + univinput[1] + ", " + univinput[2] + ")"; // form rgb
                var rgba = "rgba(" + univinput[0] + ", " + univinput[1] + ", " + univinput[2] + ", 1.0" + ")"; // form rgba
                var rgb_to_cmyk_final = rgb_to_cmyk(univinput[0], univinput[1], univinput[2]);
                var rgb_to_hsl_final = rgb_to_hsl(univinput[0] + "," + univinput[1] + "," + univinput[2]);
                var rgb_to_hsv_final = rgb_to_hsv(univinput[0], univinput[1], univinput[2]);

                $('.hex-result').attr('value', rgb_to_hex_final); // print to html
                $('.rgb-result').attr('value', rgb); // print to html
                $('.rgba-result').attr('value', rgba); // print to html
                $('.cmyk-result').attr('value', rgb_to_cmyk_final); // print to html
                $('.hsl-result').attr('value', rgb_to_hsl_final); // print to html
                $('.hsv-result').attr('value', rgb_to_hsv_final); // print to html
                $('.colorprevbox').css('background-color', rgb_to_hex_final + ";"); // change bg
                $('.colorprevboxdata').attr('data-content', "RGB: " + rgb); // change attribute
            } else {
                return err_rgb_value_missing(); // one of r g or b value is missing :(
            }
        } else {
            return err_invalid_rgb(); // not a valid rgb input!
        }
    });

    $("#rgba").click(function () {
        clearerrors();
        var univinput = ($('#univinput').val()).trim(); // remove the whitespace from the beginning and end of univinput
        var univinput = $('#univinput').val().replace(/[^0-9\,\ \.]/g, ''); // remove everything except: space and comma
        if ((univinput.substr(0, univinput.indexOf(',')) != '') || (univinput.substr(0, univinput.indexOf(' ')) != '')) { // look for comma or space
            if (univinput.substr(0, univinput.indexOf(',')) != '') { // look for only comma seperation
                var univinput = univinput.replace(/\s/g, ''); // remove space
                var univinput = univinput.split(",");
            } else { // only look for spaces and seperate
                var univinput = univinput.replace(/,/g, ''); // remove comma
                var univinput = univinput.split(" ");
            }

            if (((univinput[0] != undefined) && (univinput[0].length > 0)) && ((univinput[1] != undefined) && (univinput[1].length > 0)) && ((univinput[2] != undefined) && (univinput[2].length > 0))) { // r g b not undefined and not empty
                if ((univinput[3] === undefined) || univinput[3].replace(/\s/g, "").length < 1) { // if alpha value is not defined or empty
                    return err_alpha_not_found(); // alpha value NOT found
                }
                else if (univinput[3] >= 0 && univinput[3] <= 1) { // check for alpha limits
                    univinput[3] = univinput[3].replace(/[^0-9\.]/g, ''); // non-numeric characters are removed from the fourth array (a) of input
                } else {
                    return err_invalid_alpha_limits(); // alpha val not in correct range
                }

                var rgb_to_hex_final = rgb_to_hex_seperator(univinput);
                var rgb = "rgb(" + univinput[0] + ", " + univinput[1] + ", " + univinput[2] + ")"; // form rgb
                var rgba = "rgba(" + univinput[0] + ", " + univinput[1] + ", " + univinput[2] + ", " + univinput[3] + ")"; // form rgba
                var rgb_to_cmyk_final = rgb_to_cmyk(univinput[0], univinput[1], univinput[2]);
                var rgb_to_hsl_final = rgb_to_hsl(univinput[0] + "," + univinput[1] + "," + univinput[2]);
                var rgb_to_hsv_final = rgb_to_hsv(univinput[0], univinput[1], univinput[2]);

                $('.hex-result').attr('value', rgb_to_hex_final); // print to html
                $('.rgb-result').attr('value', rgb); // print to html
                $('.rgba-result').attr('value', rgba); // print to html
                $('.cmyk-result').attr('value', rgb_to_cmyk_final); // print to html
                $('.hsl-result').attr('value', rgb_to_hsl_final); // print to html
                $('.hsv-result').attr('value', rgb_to_hsv_final); // print to html
                $('.colorprevbox').css('background-color', rgb_to_hex_final + ";"); // change bg
                $('.colorprevboxdata').attr('data-content', "RGBA: " + rgba); // change attribute
            } else {
                return err_rgba_value_missing(); // one of r g or b value is missing :(
            }
        } else {
            return err_invalid_rgba(); // not a valid rgba input!
        }
    });

    $("#hex").click(function () {
        clearerrors();
        var univinput = $('#univinput').val().replace(/\s+/g, ''); // remove all whitespaces and assign to a variable
        var univinput = univinput.toUpperCase(); // convert lowercase letters to uppercase
        var hexinputvalidate = new RegExp(/[^a-fA-F\d\s:\#]/g); // regexp for every character except numbers, a,A, b,B, c,C, d,D, e,E, f,F and #

        if ((univinput.substr(0, 1) == '#' && univinput.length == 7) || univinput.length == 6) { // 6 digit hex input with # || without #
            if (univinput.substr(0, 1) == '#') {
                var univinput = univinput.substr(1, univinput.length);
            }

            if (!$('#univinput').val().match(hexinputvalidate)) { // check for defined regexp match
                var hex_raw_r = univinput.substr(0, 2); // r part of hex is subtracted
                var hex_raw_g = univinput.substr(2, 2); // g part of hex is subtracted
                var hex_raw_b = univinput.substr(4, 2); // b part of hex is subtracted
                var r_hex_to_rgb_final = hex_seperator_convertor(hex_raw_r); // r part of hex is sent to rgb seperator and convertor
                var g_hex_to_rgb_final = hex_seperator_convertor(hex_raw_g); // g part of hex is sent to rgb seperator and convertor
                var b_hex_to_rgb_final = hex_seperator_convertor(hex_raw_b); // b part of hex is sent to rgb seperator and convertor

                var hex_to_rgb_final = "rgb(" + r_hex_to_rgb_final + ", " + g_hex_to_rgb_final + ", " + b_hex_to_rgb_final + ")"; // form rgb
                var hex_to_rgba_final = "rgba(" + r_hex_to_rgb_final + ", " + g_hex_to_rgb_final + ", " + b_hex_to_rgb_final + ", 1.0" + ")"; // form rgba
                var rgb_to_hsl_final = rgb_to_hsl(r_hex_to_rgb_final + "," + g_hex_to_rgb_final + "," + b_hex_to_rgb_final);
                var rgb_to_cmyk_final = rgb_to_cmyk(r_hex_to_rgb_final, g_hex_to_rgb_final, b_hex_to_rgb_final);
                var rgb_to_hsv_final = rgb_to_hsv(r_hex_to_rgb_final, g_hex_to_rgb_final, b_hex_to_rgb_final);

                $('.hex-result').attr('value', "#" + univinput); // print to html
                $('.rgb-result').attr('value', hex_to_rgb_final); // print to html
                $('.rgba-result').attr('value', hex_to_rgba_final); // print to html
                $('.cmyk-result').attr('value', rgb_to_cmyk_final); // print to html
                $('.hsl-result').attr('value', rgb_to_hsl_final); // print to html
                $('.hsv-result').attr('value', rgb_to_hsv_final); // print to html
                $('.colorprevbox').css('background-color', hex_to_rgb_final + ";"); // change bg
                $('.colorprevboxdata').attr('data-content', "HEX: #" + univinput); // change attribute
            } else {
                return err_corrupted_hex_6(); // invalid 6 digit hex!
            }
        }
        else if ((univinput.substr(0, 1) == '#' && univinput.length == 4) || univinput.length == 3) { // 3 digit hex input with # || without #
            if (univinput.substr(0, 1) == '#') {
                var univinput = univinput.substr(1, univinput.length);
            }
            if (!$('#univinput').val().match(hexinputvalidate)) { // check for defined regexp match
                var hex_raw_r = univinput.substr(0, 1) + univinput.substr(0, 1); // r part of 3 digit hex is subtracted and cloned
                var hex_raw_g = univinput.substr(1, 1) + univinput.substr(1, 1); // g part of 3 digit hex is subtracted and cloned
                var hex_raw_b = univinput.substr(2, 1) + univinput.substr(2, 1); // b part of 3 digit hex is subtracted and cloned

                var r_hex_to_rgb_final = hex_seperator_convertor(hex_raw_r); // r part of hex is sent to seperator and convertor
                var g_hex_to_rgb_final = hex_seperator_convertor(hex_raw_g); // g part of hex is sent to seperator and convertor
                var b_hex_to_rgb_final = hex_seperator_convertor(hex_raw_b); // b part of hex is sent to seperator and convertor

                var hex_to_rgb_final = "rgb(" + r_hex_to_rgb_final + ", " + g_hex_to_rgb_final + ", " + b_hex_to_rgb_final + ")"; // form rgb
                var hex_to_rgba_final = "rgba(" + r_hex_to_rgb_final + ", " + g_hex_to_rgb_final + ", " + b_hex_to_rgb_final + ", 1.0" + ")"; // form rgba
                var rgb_to_hsl_final = rgb_to_hsl(r_hex_to_rgb_final + "," + g_hex_to_rgb_final + "," + b_hex_to_rgb_final);
                var rgb_to_cmyk_final = rgb_to_cmyk(r_hex_to_rgb_final, g_hex_to_rgb_final, b_hex_to_rgb_final);
                var rgb_to_hsv_final = rgb_to_hsv(r_hex_to_rgb_final, g_hex_to_rgb_final, b_hex_to_rgb_final);

                $('.hex-result').attr('value', "#" + hex_raw_r + hex_raw_g + hex_raw_b); // print to html
                $('.rgb-result').attr('value', hex_to_rgb_final); // print to html
                $('.rgba-result').attr('value', hex_to_rgba_final); // print to html
                $('.cmyk-result').attr('value', rgb_to_cmyk_final); // print to html
                $('.hsl-result').attr('value', rgb_to_hsl_final); // print to html
                $('.hsv-result').attr('value', rgb_to_hsv_final); // print to html
                $('.colorprevbox').css('background-color', hex_to_rgb_final + ";"); // change bg
                $('.colorprevboxdata').attr('data-content', "HEX: #" + univinput); // change attribute
            } else {
                return err_corrupted_hex_3(); // invalid 3 digit hex!
            }
        } else {
            return err_invalid_hex(); // invalid hex format!
        }
    });

    $("#cmyk").click(function () {
        clearerrors();
        var univinput = ($('#univinput').val()).trim(); // remove the whitespace from the beginning and end of univinput
        var univinput = $('#univinput').val().replace(/[^0-9\,\ \.]/g, ''); // remove everything except: space and comma
        if ((univinput.substr(0, univinput.indexOf(',')) != '') || (univinput.substr(0, univinput.indexOf(' ')) != '')) { // look for comma or space
            if (univinput.substr(0, univinput.indexOf(',')) != '') { // look for only comma seperation
                var univinput = univinput.replace(/\s/g, ''); // remove space
                var univinput = univinput.split(",");

            } else { // only look for spaces and seperate
                var univinput = univinput.replace(/,/g, ''); // remove comma
                var univinput = univinput.split(" ");
            }

            if (((univinput[0] != undefined) && (univinput[0].length > 0)) &&
                ((univinput[1] != undefined) && (univinput[1].length > 0)) &&
                ((univinput[2] != undefined) && (univinput[2].length > 0)) &&
                ((univinput[3] != undefined) && (univinput[3].length > 0))) { // c m y k not undefined and not empty
                if ((univinput[0] >= 0 && univinput[0] <= 1) && (univinput[1] >= 0 && univinput[1] <= 1) && (univinput[2] >= 0 && univinput[2] <= 1) && (univinput[3] >= 0 && univinput[3] <= 1)) {
                    var rgb_from_cmyk = cmyk_to_hex(univinput[0], univinput[1], univinput[2], univinput[3]);
                    var hex = "#" + rgb_to_hex_convertor(rgb_from_cmyk[0]) + rgb_to_hex_convertor(rgb_from_cmyk[1]) + rgb_to_hex_convertor(rgb_from_cmyk[2]); // form hex
                    var rgb = "rgb(" + rgb_from_cmyk[0] + ", " + rgb_from_cmyk[1] + ", " + rgb_from_cmyk[2] + ")"; // form rgb
                    var rgba = "rgba(" + rgb_from_cmyk[0] + ", " + rgb_from_cmyk[1] + ", " + rgb_from_cmyk[2] + ", 1.0" + ")"; // form rgba
                    var rgb_to_cmyk_final = univinput[0] + ", " + univinput[1] + ", " + univinput[2] + ", " + univinput[3]; // re-form cmyk
                    var rgb_to_hsl_final = rgb_to_hsl(rgb_from_cmyk[0] + "," + rgb_from_cmyk[1] + "," + rgb_from_cmyk[2]);
                    var rgb_to_hsv_final = rgb_to_hsv(rgb_from_cmyk[0], rgb_from_cmyk[1], rgb_from_cmyk[2]);

                    $('.hex-result').attr('value', hex); // print to html
                    $('.rgb-result').attr('value', rgb); // print to html
                    $('.rgba-result').attr('value', rgba); // print to html
                    $('.cmyk-result').attr('value', rgb_to_cmyk_final); // print to html
                    $('.hsl-result').attr('value', rgb_to_hsl_final); // print to html
                    $('.hsv-result').attr('value', rgb_to_hsv_final); // print to html
                    $('.colorprevbox').css('background-color', hex + ";"); // change bg
                    $('.colorprevboxdata').attr('data-content', "CMYK: " + rgb_to_cmyk_final); // change attribute
                } else {
                    return err_invalid_cmyk_limits(); // cmyk vals not in correct range / use . for decimals
                }
            } else {
                return err_cmyk_value_missing(); // one of c m y or k value is missing :(
            }
        } else {
            return err_invalid_cmyk(); // not a valid cmyk input!
        }
    });

    $("#hsl").click(function () {
        clearerrors();
        var univinput = ($('#univinput').val()).trim(); // remove the whitespace from the beginning and end of univinput
        var univinput = $('#univinput').val().replace(/[^0-9\,\ ]/g, ''); // remove everything except: space and comma
        if ((univinput.substr(0, univinput.indexOf(',')) != '') || (univinput.substr(0, univinput.indexOf(' ')) != '')) { // look for comma or space
            if (univinput.substr(0, univinput.indexOf(',')) != '') { // look for only comma seperation
                var univinput = univinput.replace(/\s/g, ''); // remove space
                var univinput = univinput.split(",");
            } else { // only look for spaces and seperate
                var univinput = univinput.replace(/,/g, ''); // remove comma
                var univinput = univinput.split(" ");
            }
            if (((univinput[0] != undefined) && (univinput[0].length > 0)) && ((univinput[1] != undefined) && (univinput[1].length > 0)) && ((univinput[2] != undefined) && (univinput[2].length > 0))) { // r g b not undefined and not empty
                if ((univinput[0] > 360) || (univinput[1] > 100) || (univinput[2] > 100)) {
                    return err_invalid_hsl_limits(); // hsl values must be 360 100 100
                } else {
                    var r = hsl_to_rgb(univinput[0], univinput[1], univinput[2])[0];
                    var g = hsl_to_rgb(univinput[0], univinput[1], univinput[2])[1];
                    var b = hsl_to_rgb(univinput[0], univinput[1], univinput[2])[2];
                    var rgb_to_hex_final = rgb_to_hex_seperator(hsl_to_rgb(univinput[0], univinput[1], univinput[2]));
                    var rgb = "rgb(" + r + ", " + g + ", " + b + ")"; // form rgb
                    var rgba = "rgba(" + r + ", " + g + ", " + b + ", 1.0" + ")"; // form rgba
                    var rgb_to_cmyk_final = rgb_to_cmyk(r, g, b);
                    var rgb_to_hsl_final = rgb_to_hsl(r + "," + g + "," + b);
                    var rgb_to_hsv_final = rgb_to_hsv(r, g, b);

                    $('.hex-result').attr('value', rgb_to_hex_final); // print to html
                    $('.rgb-result').attr('value', rgb); // print to html
                    $('.rgba-result').attr('value', rgba); // print to html
                    $('.cmyk-result').attr('value', rgb_to_cmyk_final); // print to html
                    $('.hsl-result').attr('value', rgb_to_hsl_final); // print to html
                    $('.hsv-result').attr('value', rgb_to_hsv_final); // print to html
                    $('.colorprevbox').css('background-color', rgb_to_hex_final + ";"); // change bg
                    $('.colorprevboxdata').attr('data-content', "HSL: " + rgb_to_hsl_final); // change attribute
                }
            } else {
                return err_hsl_value_missing(); // one of h s or l value is missing :(
            }
        } else {
            return err_invalid_hsl(); // not a valid hsl input!
        }
    });

    $("#hsv").click(function () {
        clearerrors();
        var univinput = ($('#univinput').val()).trim(); // remove the whitespace from the beginning and end of univinput
        var univinput = $('#univinput').val().replace(/[^0-9\,\ \.]/g, ''); // remove everything except: space, comma and dot
        if ((univinput.substr(0, univinput.indexOf(',')) != '') || (univinput.substr(0, univinput.indexOf(' ')) != '')) { // look for comma or space
            if (univinput.substr(0, univinput.indexOf(',')) != '') { // look for only comma seperation
                var univinput = univinput.replace(/\s/g, ''); // remove space
                var univinput = univinput.split(",");
            } else { // only look for spaces and seperate
                var univinput = univinput.replace(/,/g, ''); // remove comma
                var univinput = univinput.split(" ");
            }
            if (((univinput[0] != undefined) && (univinput[0].length > 0)) && ((univinput[1] != undefined) && (univinput[1].length > 0)) && ((univinput[2] != undefined) && (univinput[2].length > 0))) { // r g b not undefined and not empty

                if ((univinput[0] > 360) || (univinput[1] > 100) || (univinput[2] > 100)) {
                    return err_invalid_hsv_limits(); // hsv values must be 360 100 100
                } else {
                    var r = hsv_to_rgb(univinput[0], univinput[1], univinput[2])[0];
                    var g = hsv_to_rgb(univinput[0], univinput[1], univinput[2])[1];
                    var b = hsv_to_rgb(univinput[0], univinput[1], univinput[2])[2];

                    var rgb_to_hex_final = rgb_to_hex_seperator(hsv_to_rgb(univinput[0], univinput[1], univinput[2]));
                    var rgb = "rgb(" + r + ", " + g + ", " + b + ")"; // form rgb
                    var rgba = "rgba(" + r + ", " + g + ", " + b + ", 1.0" + ")"; // form rgba
                    var rgb_to_cmyk_final = rgb_to_cmyk(r, g, b);
                    var rgb_to_hsl_final = rgb_to_hsl(r + "," + g + "," + b);
                    var hsv = univinput[0] + ", " + univinput[1] + "%, " + univinput[2] + "%"; // orj input

                    $('.hex-result').attr('value', rgb_to_hex_final); // print to html
                    $('.rgb-result').attr('value', rgb); // print to html
                    $('.rgba-result').attr('value', rgba); // print to html
                    $('.cmyk-result').attr('value', rgb_to_cmyk_final); // print to html
                    $('.hsl-result').attr('value', rgb_to_hsl_final); // print to html
                    $('.hsv-result').attr('value', hsv); // print to html
                    $('.colorprevbox').css('background-color', rgb_to_hex_final + ";"); // change bg
                    $('.colorprevboxdata').attr('data-content', "HSB / HSV: " + hsv); // change attribute
                }
            } else {
                return err_hsv_value_missing(); // one of h s or b/v value is missing :(
            }
        } else {
            return err_invalid_hsv(); // not a valid hsb/hsv input!
        }
    });

    /**
     * All errors and related html changes are handled here.
     * Functions take no parameters.
     * This part of js runs when conversion hit error
     * Developed by Ali Turşucular. alitursucular@gmail.com
     */

    // HEX Errors
    function err_invalid_hex() { // invalid hex format
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>hex</b> format.<br><span style='font-size: 16px;'>accepted hex formats are: <b>#a23</b>, <b>#a23b56</b>, <b>a23</b>, <b>a23b56</b></span><br>");
        $('.error-nav').find('a').html('what is hex?');
        $('.error-nav').find('a').attr('href', 'what-is-hex.php');
    }

    function err_corrupted_hex_3() { // invalid 3 digit hex!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>3 digit hex</b>.<br><span style='font-size: 16px;'>accepted hex formats are: <b>#a23</b>, <b>#a23b56</b>, <b>a23</b>, <b>a23b56</b></span><br>");
        $('.error-nav').find('a').html('what is hex?');
        $('.error-nav').find('a').attr('href', 'what-is-hex.php');
    }

    function err_corrupted_hex_6() { // invalid 6 digit hex!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>6 digit hex</b>.<br><span style='font-size: 16px;'>accepted hex formats are: <b>#a23</b>, <b>#a23b56</b>, <b>a23</b>, <b>a23b56</b></span><br>");
        $('.error-nav').find('a').html('what is hex?');
        $('.error-nav').find('a').attr('href', 'what-is-hex.php');
    }

    // RGB Errors
    function err_rgba_in_rgb() { // your input seems like rgba, would you like us to compute rgba?
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Your input could be <b>rgba</b> ?<br><span style='font-size: 16px;'>accepted rgb formats are: <b>12, 65, 210</b>, <b>12 65 210</b>, <b>(12, 65, 210)</b>, <b>(12 65 210)</b>, <b>rgb(12, 65, 210)</b></span><br>");
        $('.error-nav').find('a').html('what is rgb?');
        $('.error-nav').find('a').attr('href', 'whatisrgb.php');
    }

    function err_rgb_value_missing() { // one of r g or b value is missing :(
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("One of <b>r</b>, <b>g</b> or <b>b</b> value is missing.<br><span style='font-size: 16px;'>accepted rgb formats are: <b>12, 65, 210</b>, <b>12 65 210</b>, <b>(12, 65, 210)</b>, <b>(12 65 210)</b>, <b>rgb(12, 65, 210)</b></span><br>");
        $('.error-nav').find('a').html('what is rgb?');
        $('.error-nav').find('a').attr('href', 'whatisrgb.php');
    }

    function err_invalid_rgb_limits() { // r, g and b values must be between 0 and 255
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("<b>r</b>, <b>g</b> and <b>b</b> values must be between <b>0</b> and <b>250<br>.<span style='font-size: 16px;'>accepted rgb formats are: <b>12, 65, 210</b>, <b>12 65 210</b>, <b>(12, 65, 210)</b>, <b>(12 65 210)</b>, <b>rgb(12, 65, 210)</b></span><br>");
        $('.error-nav').find('a').html('what is rgb?');
        $('.error-nav').find('a').attr('href', 'whatisrgb.php');
        return sad_face();
    }

    function err_invalid_rgb() { // not a valid rgb input!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>rgb</b> format.<br><span style='font-size: 16px;'>accepted rgb formats are: <b>12, 65, 210</b>, <b>12 65 210</b>, <b>(12, 65, 210)</b>, <b>(12 65 210)</b>, <b>rgb(12, 65, 210)</b></span><br>");
        $('.error-nav').find('a').html('what is rgb?');
        $('.error-nav').find('a').attr('href', 'whatisrgb.php');
    }

    // RGBA Errors
    function err_alpha_not_found() { // alpha value NOT found!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("<b>alpha</b> value (opacity) not found.<br><span style='font-size: 16px;'>accepted rgba formats are: <b>12, 65, 210, 0.4</b>, <b>12 65 210 0.4</b>, <b>(12, 65, 210, 0.4)</b>, <b>(12 65 210 0.4)</b>, <b>rgb(12, 65, 210 0.4)</b></span><br>");
        $('.error-nav').find('a').html('what is rgba?');
        $('.error-nav').find('a').attr('href', 'what-is-rgba.php');
    }

    function err_rgba_value_missing() { // one of r g or b value is missing :(
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("One of <b>r</b>, <b>g</b> or <b>a</b> value is missing.<br><span style='font-size: 16px;'>accepted rgba formats are: <b>12, 65, 210, 0.4</b>, <b>12 65 210 0.4</b>, <b>(12, 65, 210, 0.4)</b>, <b>(12 65 210 0.4)</b>, <b>rgb(12, 65, 210 0.4)</b></span><br>");
        $('.error-nav').find('a').html('what is rgba?');
        $('.error-nav').find('a').attr('href', 'what-is-rgba.php');
    }

    function err_invalid_rgba() { // not a valid rgba input!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>rgba</b> format.<br><span style='font-size: 16px;'>accepted rgba formats are: <b>12, 65, 210, 0.4</b>, <b>12 65 210 0.4</b>, <b>(12, 65, 210, 0.4)</b>, <b>(12 65 210 0.4)</b>, <b>rgb(12, 65, 210 0.4)</b></span><br>");
        $('.error-nav').find('a').html('what is rgba?');
        $('.error-nav').find('a').attr('href', 'what-is-rgba.php');
    }

    function err_invalid_alpha_limits() { // alpha val not in correct range
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>opacity (alpha)</b> value.<br><span style='font-size: 16px;'>opacity must be between <b>0</b> and <b>1</b>. Please use . (dot) for decimals. <b>i.e. rgba(254, 13, 120, 0.4)</b></span><br>");
        $('.error-nav').find('a').html('what is rgba?');
        $('.error-nav').find('a').attr('href', 'what-is-rgba.php');
    }

    // CMYK Errors
    function err_cmyk_value_missing() { // one of c m y or k value is missing :(
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("One of <b>c</b>, <b>m</b>, <b>y</b> or <b>k</b> value is missing.<br><span style='font-size: 16px;'>accepted cmyk formats are: <b>0.12, 0.65, 0.21, 0.467</b>, <b>0.12 0.65 0.21 0.467</b>, <b>(0.12, 0.65, 0.21, 0.467)</b>, <b>(0.12 0.65 0.21 0.467)</b>, <b>cmyk(0.12, 0.65, 0.21, 0.467)</b></span><br>");
        $('.error-nav').find('a').html('what is cmyk?');
        $('.error-nav').find('a').attr('href', 'what-is-cmyk.php');
    }

    function err_invalid_cmyk() { // not a valid cmyk input!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>cmyk</b> format.<br><span style='font-size: 16px;'>accepted cmyk formats are: <b>0.12, 0.65, 0.21, 0.467</b>, <b>0.12 0.65 0.21 0.467</b>, <b>(0.12, 0.65, 0.21, 0.467)</b>, <b>(0.12 0.65 0.21 0.467)</b>, <b>cmyk(0.12, 0.65, 0.21, 0.467)</b></span><br>");
        $('.error-nav').find('a').html('what is cmyk?');
        $('.error-nav').find('a').attr('href', 'what-is-cmyk.php');
    }

    function err_invalid_cmyk_limits() { // cmyk vals not in correct range / use . for decimals
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>cmyk</b> value limits.<br><span style='font-size: 16px;'>c, m, y, k values must be between <b>0</b> and <b>1</b>. Please use . (dot) for decimals. <b>i.e. 0.12 0.65 0.21 0.467</b></span><br>");
        $('.error-nav').find('a').html('what is cmyk?');
        $('.error-nav').find('a').attr('href', 'what-is-cmyk.php');
    }

    // HSL Errors
    function err_hsl_value_missing() { // one of h s or l value is missing :(
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("One of <b>h</b>, <b>s</b> or <b>l</b> value is missing.<br><span style='font-size: 16px;'>accepted hsl formats are: <b>359, 99, 34</b>, <b>359 99 34</b>, <b>(359, 99, 34)</b>, <b>(359 99 34)</b>, <b>hsl(359°, 99%, 34%)</b>, <b>hsl(359° 99% 34%)</b></span><br>");
        $('.error-nav').find('a').html('what is hsl?');
        $('.error-nav').find('a').attr('href', 'what-is-hsl.php');
    }

    function err_invalid_hsl() { // not a valid hsl input!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>hsl</b> format.<br><span style='font-size: 16px;'>accepted hsl formats are: <b>359, 99, 34</b>, <b>359 99 34</b>, <b>(359, 99, 34)</b>, <b>(359 99 34)</b>, <b>hsl(359°, 99%, 34%)</b>, <b>hsl(359° 99% 34%)</b></span><br>");
        $('.error-nav').find('a').html('what is hsl?');
        $('.error-nav').find('a').attr('href', 'what-is-hsl.php');
    }

    function err_invalid_hsl_limits() { // hsl values must be 360 100 100!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>h</b>, <b>s</b>, <b>l</b> value limits.<br><span style='font-size: 18px;'><b>H max: 360</b>, <b>S max: 100</b> and <b>L max: 100</b></span><br>");
        $('.error-nav').find('a').html('what is hsl?');
        $('.error-nav').find('a').attr('href', 'what-is-hsl.php');
    }


    // HSB/HSV Errors
    function err_hsv_value_missing() { // one of h s or b/v value is missing :(
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("One of <b>h</b>, <b>s</b> or <b>b/v</b> value is missing.<br><span style='font-size: 16px;'>accepted hsb/hsv formats are: <b>359, 99, 34</b>, <b>359 99 34</b>, <b>(359, 99, 34)</b>, <b>(359 99 34)</b>, <b>hsb(359°, 99%, 34%)</b>, <b>hsv(359°, 99%, 34%)</b></span><br>");
        $('.error-nav').find('a').html('what is hsb / hsv?');
        $('.error-nav').find('a').attr('href', 'what-is-hsb-hsv.php');
    }

    function err_invalid_hsv() { // not a valid hsb/hsv input!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>hsb / hsv</b> format.<br><span style='font-size: 16px;'>accepted hsb/hsv formats are: <b>359, 99, 34</b>, <b>359 99 34</b>, <b>(359, 99, 34)</b>, <b>(359 99 34)</b>, <b>hsb(359°, 99%, 34%)</b>, <b>hsv(359°, 99%, 34%)</b></span><br>");
        $('.error-nav').find('a').html('what is hsb / hsv?');
        $('.error-nav').find('a').attr('href', 'what-is-hsb-hsv.php');
    }

    function err_invalid_hsv_limits() { // hsv values must be 360 100 100!
        clearfields();
        $('.allresults-error').css("display", "block");
        $('.input-group').css("opacity", "0.1");
        $('.error-message').html("Invalid <b>h</b>, <b>s</b>, <b>b/v</b> value limits.<br><span style='font-size: 18px;'><b>H max: 360</b>, <b>S max: 100</b> and <b>B/V max: 100</b></span><br>");
        $('.error-nav').find('a').html('what is hsb / hsv?');
        $('.error-nav').find('a').attr('href', 'what-is-hsb-hsv.php');
    }

    function sad_face() { // print :( HALA OLMADI
        $('.hex-result').attr('value', ':(');
        $('.rgb-result').attr('value', ':(');
        $('.rgba-result').attr('value', ':(');
        $('.cmyk-result').attr('value', ':(');
        $('.hsl-result').attr('value', ':(');
        $('.hsv-result').attr('value', ':(');
    }

    function clearerrors() { // clear error screen
        $('.allresults-error').css("display", "none");
        $('.input-group').css("opacity", "1");
    }
});


<?php
$shortcut = array(
    'title' => 'What is HEX?',
    'url' => 'http://alitursucular.com/colorconversion/what-is-hex.php'
);
?>
<?php include '_headersubpages.php' ?>


<div class="row">
    <div class="col-md-12">
        <h1 class="text-center whatwhat">what is <b>HEX</b></h1>
    </div>
</div>

<div class="row">
    <div class="col-md-12 whatdetails">
        <p>A <b>hex triplet</b> is a six-digit, three-byte hexadecimal number used in HTML, CSS, SVG, and other
            computing applications to represent colors. The bytes represent the red, green and blue components of the color. One
            byte represents a number in the range 00 to FF (in hexadecimal notation), or 0 to 255 in decimal notation.
            This represents the least (0) to the most (255) intensity of each of the color components. Thus web colors
            specify colors in the True Color (24-bit RGB) color scheme. The hex triplet is formed by concatenating three
            bytes in hexadecimal notation, in the following order:
        <ul class="list-unstyled">
            <li>&nbsp;&nbsp; Byte 1: red value (color type red)</li>
            <li>&nbsp;&nbsp; Byte 2: green value (color type green)</li>
            <li>&nbsp;&nbsp; Byte 3: blue value (color type blue)</li>
        </ul>
        </p>
        <p>For example, consider the color where the red/green/blue values are decimal numbers: red=36, green=104,
            blue=160 (a greyish-blue color). The decimal numbers 36, 104 and 160 are equivalent to the hexadecimal
            numbers 24, 68 and A0 respectively. The hex triplet is obtained by concatenating the 6 hexadecimal digits
            together, 2468A0 in this example.</p>
        <p>Note that if any one of the three color values is less than 16 (decimal) or 10 (hex), it must be represented
            with a leading zero so that the triplet always has exactly six digits. For example, the decimal triplet 4,
            8, 16 would be represented by the hex digits 04, 08, 10, forming the hex triplet 040810.</p>
        <p>
            The number of colors that can be represented by this system is 256<sup>3</sup> or 2<sup>24</sup> or
            16<sup>6</sup> = 16,777,216.
        </p><br>

        <p><strong>Shorthand hexadecimal form</strong></p>

        <p>An abbreviated, three (hexadecimal)-digit form is sometimes used. Expanding this form to the six-digit
            form is as simple as doubling each digit: 09C becomes 0099CC as presented on the following CSS example:</p>

        <ul class="list-unstyled">
            <li>&nbsp;&nbsp; <code>.threedigit { color: #09C; }</code></li>
            <li>&nbsp;&nbsp; <code>.sixdigit { color: #0099CC; }</code><span><i style="color: grey;">&nbsp; /* same color as above */</i></span></li>
        </ul>

        <p>The three-digit form is described in the CSS specification, not in HTML. As a result, the three-digit form in
            an attribute other than "style" is not interpreted as a valid color in some browsers.</p>

        <p>This shorthand form reduces the palette to 4,096 colors, equivalent of 12-bit color as opposed to 24-bit
            color using the whole six-digit form (16,777,216 colors). However, this limitation is often sufficient for
            text based documents.</p><br>

        <blockquote class="blockquote-reverse">
            <small><cite title="Source Title">Source:</cite> https://en.wikipedia.org/wiki/Web_colors</small>
        </blockquote>
    </div>
</div>

<?php include '_footersubpages.php' ?>


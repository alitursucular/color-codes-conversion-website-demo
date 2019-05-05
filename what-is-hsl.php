<?php
$shortcut = array(
    'title' => 'What is HSL?',
    'url' => 'http://alitursucular.com/colorconversion/what-is-hsl.php'
);
?>
<?php include '_headersubpages.php' ?>


<div class="row">
    <div class="col-md-12">
        <h1 class="text-center whatwhat">what is <b>HSL</b></h1>
    </div>
</div>

<div class="row">
    <div class="col-md-12 whatdetails">
        <p>One of the most common ways to communicate color is through visual systems like charts, where each color has
            its own unique set of co-ordinates. For example, the RGB color system can be arranged as a cube with 255
            discrete points per side:</p><br>

        <p class="text-center">
            <img class="center-block" src="img/hsl_cube-300x225.png" alt="HSL Cube"/>
            <small>Image Source: Wikipedia</small>
        </p>

        <p>Although a cube may seem simple, it is actually fairly challenging to visualize the differences between
            colors. In addition, identifying complementary colors is neither easy nor intuitive. The Hue, Saturation,
            Lightness system was developed decades ago as a way to evolve the RGB color system by making it easier to
            visualize.</p>

        <p><strong>Hue</strong></p>

        <p>In HSL, the Hue determines what color of the rainbow something is. It’s represented in 360 degrees, like a
            traditional color wheel. One of the main advantages of HSL over RGB color is that complementary colors are
            located across from one another, which makes the whole system very intuitive.</p><br>

        <p class="text-center">
            <img class="center-block" src="img/colorwheel.jpg" alt="Color Wheel"/>
            <small>Image Source: StackOverflow.com</small>
        </p>

        <p><strong>Saturation</strong></p>

        <p>The distance from the middle of the color wheel is called the ‘Saturation’, or how much of a given hue is
            present. Looking closely at the color wheel above, it is apparent that the color becomes brighter and more
            vivid as one travels from the center of the circle to the edge.</p><br>

        <p><strong>Lightness</strong></p>

        <p>The Lightness value of an HSL color is actually in a third dimension, which actually makes the HSL system a
            cylinder:</p><br>

        <p class="text-center">
            <img class="center-block" src="img/HSL_color_solid_cylinder_alpha_lowgamma-300x225.png"
                 alt="HSL color solid cylinder alpha low gamma"/>
            <small>Image Source: Wikipedia</small>
        </p>

        <p>As shown in the above diagram, the ‘Lightness’ of a color is a gradient between black and white, where the
            ‘bottom’ of the cylinder is a total black, and the ‘top’ of the cylinder is totally white.</p><br>

        <p><strong>Disadvantages of the HSL Color System</strong></p>

        <p>Although the HSL system is convenient to use, it isn’t particularly representative of how the human eye
            actually views color – this means it doesn’t translate well into other systems that have more of a
            scientific basis.</p>

        <p>Charles Poynton, a digital video expert, explained the problems quite well:</p>

        <p><i>"HSB and HLS were developed to specify numerical Hue, Saturation and Brightness (or Hue, Lightness and
                Saturation) in an age when users had to specify colors numerically. The usual formulations of HSB and
                HLS are ﬂawed with respect to the properties of color vision. Now that users can choose colors visually,
                or choose colors related to other media … or use perceptually-based systems like L*u*v* and L*a*b*, HSB
                and HLS should be abandoned."</i></p>

        <blockquote class="blockquote-reverse">
            <small><cite title="Source Title">Source:</cite> https://nixsensor.com/what-is-hsl-color/</small>
        </blockquote>
    </div>
</div>

<?php include '_footersubpages.php' ?>


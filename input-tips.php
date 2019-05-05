<?php
$shortcut = array(
    'title' => 'Input Tips',
    'url' => 'http://alitursucular.com/colorconversion/input-tips.php'


);
?>
<?php include '_headersubpages.php' ?>

<style>
    .yellow {
        color: #D0B905;
    }

    .green {
        color: #42DB20;
    }
</style>


<div class="row">
    <div class="col-md-12">
        <h1 class="text-center whatwhat"><i style="color: #d0b905;" class="fa fa-lightbulb-o light"></i> Input Tips</h1>
    </div>
</div>

<div class="row">
    <div class="col-md-12 whatdetails">
        <h3><b>Basics:</b></h3>
        <ul>
            <li>In general, you don't have to type <b>#</b>, <b>rgb</b>, <b>rgba</b>, <b>cmyk</b>, <b>hsl</b> or <b>hsb
                    / hsv</b> while telling your color to colorconversion.co
            </li>
            <li>You can either use space or comma to seperate color values. i.e: <span class="yellow">255 255 255</span>
                or <span class="green">255, 255, 255</span></li>
            <li>Once you type your code (or simply copy & paste), please use buttons to tell what your color is.</li>
            <li>Dot (.) symbol is used to separate the integer part from the fractional part of a number written in
                decimal form. i.e: 255 123 54 <span class="yellow">0.4</span> (0.4 is the alpha value for the given
                color code)
            </li>
        </ul>
        <br>

        <h3>Input Examples:</h3>
        <ul>
            <li><span class="yellow">#12EFE5</span>,
                <span class="green">#14A</span>,
                <span class="yellow">12EFE5</span>,
                <span class="green">14A</span>, ...
            </li>
            <li><span class="green">rgb (254, 12, 98)</span>,
                <span class="yellow">(254, 12, 98)</span>,
                <span class="green">254, 12, 98</span>,
                <span class="yellow">254 12 98</span>, ...
            </li>
            <li><span class="yellow">cmyk (0.654, 0.603, 0.856, 0.296)</span>,
                <span class="green">(0.654, 0.603, 0.856, 0.296)</span>,
                <span class="yellow">0.654, 0.603, 0.856, 0.296</span>,
                <span class="green">0.654 0.603 0.856 0.296</span>, ...
            </li>
            <li><span class="green">hsl (357, 12%, 76%)</span>,
                <span class="yellow">(357, 12%, 76%)</span>,
                <span class="green">357, 12, 76</span> (it doesn't matter whether you use % symbol or not) ,
                <span class="yellow">357 12 76</span>, ...
            </li>
            <li><span class="yellow">hsb (321, 65%, 32%)</span>,
                <span class="green">(321, 65%, 32%)</span>,
                <span class="yellow">321, 65, 32</span>,
                <span class="green">321 65 32</span>, ...
            </li>
            <li><span class="green">hsv (321, 65%, 32%)</span>,
                <span class="yellow">(321, 65%, 32%)</span>,
                <span class="green">321, 65, 32</span>,
                <span class="yellow">321 65 32</span>, ...
            </li>
        </ul>


    </div>
</div>

<?php include '_footersubpages.php' ?>


<?php
$shortcut = array(
    'title' => 'Welcome to colorconversion.co!',
    'url' => 'http://alitursucular.com/colorconversion/colorconversion-mobile.php'
);
?>
<?php include '_header-mobile.php' ?>

<style>
    .form-group input {
        width: 100% !important;
        font-size: 30px;
        height: 70px;
        border: 1px solid #4f4f4f !important;
    }

    .btn-lg {
        padding: 10px;
        font-size: 22px;
        margin-bottom: 10px;
        width: 100%;
        border: 1px solid #4f4f4f !important;

    }

    .mycoloris {
        font-size: 22px;
    }

    .colorprevbox {
        width: 100% !important;
        height: 60px !important;
    }

    .convertbuttons_no_anim {
        margin-top: 30px !important;
    }
</style>

<div class="row">
    <div class="col-md-12 whatdetails text-center">
        <!--        <p>If you are experiencing problems for viewing the original animated page, you can simply use the below to-->
        <!--            convert your colors.-->
        <!--        </p>-->

        <div class="form-group" style="margin-top: 20px; width: 100%;">
            <input placeholder="Type your color value!" class="form-control input-lg text-center" id="univinput"
                   type="text" autocomplete="off">
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12 convertbuttons_no_anim text-center">
        <span class="mycoloris">My color is:</span>

        <div class="col-md-12" style="margin-top: 5px;">
            <button type="button" class="btn btn-default btn-custom btn-lg" id="rgb">RGB</button>
        </div>

        <div class="col-md-12">
            <button type="button" class="btn btn-default btn-custom btn-lg" id="rgba">RGBA</button>
        </div>

        <div class="col-md-12">
            <button type="button" class="btn btn-default btn-custom btn-lg" id="hex">HEX</button>
        </div>

        <div class="col-md-12">
            <button type="button" class="btn btn-default btn-custom btn-lg" id="cmyk">CMYK</button>
        </div>

        <div class="col-md-12">
            <button type="button" class="btn btn-default btn-custom btn-lg" id="hsl">HSL</button>
        </div>

        <div class="col-md-12">
            <button type="button" class="btn btn-default btn-custom btn-lg" id="hsv">HSB / HSV</button>
        </div>

        <div class="col-md-12">
            <a href="input-tips.php">
                <button type="button" class="btn btn-success btn-lg" id="idk">I don't know?</button>
            </a>
        </div>

    </div>
</div>

<div class="row allresults_no_anim">

    <div class="col-md-12" style="margin-top: 10px;">
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon cname">HEX</span>
                <input type="text" id="toclip-hex" value="" class="form-control hex-result">
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon cname">RGB</span>
                <input type="text" id="toclip-rgb" value="" class="form-control rgb-result">
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon cname">RGBA</span>
                <input type="text" id="toclip-rgba" value="" class="form-control rgba-result">
            </div>
        </div>
    </div>

    <div class="col-md-12">
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon cname">CMYK</span>
                <input type="text" id="toclip-cmyk" value="" class="form-control cmyk-result">
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon cname">HSL</span>
                <input type="text" id="toclip-hsl" value="" class="form-control hsl-result">
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon cname">HSV</span>
                <input type="text" id="toclip-hsv" value="" class="form-control hsv-result">
            </div>
        </div>
    </div>

    <div class="col-md-12 allresults-error">
        <ul class="list-unstyled">
            <li><span class="center-block"><img src="img/oops.png" alt="oops!"/></span></li>
            <li><span class="error-message"></span></li>
            <li class="error-nav"><a class="error-nav-a" href=""></a></li>
        </ul>
    </div>

    <div class="col-md-12">
        <span class="colorprevbox-anim" style="display: none;">
            <a href="#" class="colorprevboxdata" data-toggle="popover" title="Your color:"
               data-content="" data-placement="left">
                <div class="colorprevbox"></div>
            </a>
        </span>
    </div>

</div>

<?php include '_footer-mobile.php' ?>


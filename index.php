<?php
$shortcut = array(
    'title' => 'Welcome to colorconversion.co!',
    'url' => 'http://alitursucular.com/colorconversion/'
);
?>
<?php include '_header.php' ?>

<script type="text/javascript">
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        url = "http://alitursucular.com/colorconversion/colorconversion-mobile.php";
        window.location = url;
    }
</script>

<div class="row">
    <div class="col-md-12 inputdiv">
        <a href="index.php" class="index-logo">
            <p class="title text-center">
                <span class="titlename">
                    <span style="color:#686767;">c</span>
                    <span style="color:#6b6a6a;">o</span>
                    <span style="color:#6f6e6e;">l</span>
                    <span style="color:#727171;">o</span>
                    <span style="color:#767474;">r</span>
                    <span style="color:#797878;"> </span>
                    <span style="color:#7c7b7b;">c</span>
                    <span style="color:#807e7e;">o</span>
                    <span style="color:#838282;">n</span>
                    <span style="color:#878585;">v</span>
                    <span style="color:#8a8888;">e</span>
                    <span style="color:#8d8c8c;">r</span>
                    <span style="color:#918f8f;">s</span>
                    <span style="color:#949292;">i</span>
                    <span style="color:#989696;">o</span>
                    <span style="color:#9b9999;">n</span>
                 <span class="titleversion">v1.1</span>
            </p>
        </a>
        <div class="form-group">
            <input placeholder="Type your color value!" class="form-control input-lg text-center input-lg-anim" id="univinput" type="text" autocomplete="off">
        </div>

        <ul class="list-inline convertbuttons text-center" style="display: none;">
            <li class="mycoloris mycoloris-anim">My color is:</li>
            <li><button type="button" class="btn btn-default btn-custom btn-lg btn-lg-anim" id="rgb">RGB</button></li>
            <li><button type="button" class="btn btn-default btn-custom btn-lg btn-lg-anim" id="rgba">RGBA</button></li>
            <li><button type="button" class="btn btn-default btn-custom btn-lg btn-lg-anim" id="hex">HEX</button></li>
            <li><button type="button" class="btn btn-default btn-custom btn-lg btn-lg-anim" id="cmyk">CMYK</button></li>
            <li><button type="button" class="btn btn-default btn-custom btn-lg btn-lg-anim" id="hsl">HSL</button></li>
            <li><button type="button" class="btn btn-default btn-custom btn-lg btn-lg-anim" id="hsv">HSB / HSV</button></li>
            <li>
                <a href="input-tips.php">
                    <button type="button" class="btn btn-success btn-lg btn-lg-anim" id="idk">I don't know?</button>
                </a>
            </li>
        </ul>
    </div>
</div>

<div class="row allresults" style="display: none;">

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

</div>

<?php include '_footer.php' ?>


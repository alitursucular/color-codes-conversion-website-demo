<?php
$shortcut = array(
    'title' => 'Welcome to colorconversion.co!',
    'url' => 'http://alitursucular.com/colorconversion/colorconversion.php'
);
?>
<?php include '_headernoanim.php' ?>

<div class="row">
    <div class="col-md-12 whatdetails text-center">
        <!--        <p>If you are experiencing problems for viewing the original animated page, you can simply use the below to-->
        <!--            convert your colors.-->
        <!--        </p>-->

        <div class="form-group" style="margin-top: 50px;">
            <input placeholder="Type your color value!" class="form-control input-lg text-center" id="univinput"
                   type="text" autocomplete="off">
        </div>

        <ul class="list-inline convertbuttons_no_anim text-center">
            <li class="mycoloris">My color is:</li>
            <li>
                <button type="button" class="btn btn-default btn-custom btn-lg" id="rgb">RGB</button>
            </li>
            <li>
                <button type="button" class="btn btn-default btn-custom btn-lg" id="rgba">RGBA</button>
            </li>
            <li>
                <button type="button" class="btn btn-default btn-custom btn-lg" id="hex">HEX</button>
            </li>
            <li>
                <button type="button" class="btn btn-default btn-custom btn-lg" id="cmyk">CMYK</button>
            </li>
            <li>
                <button type="button" class="btn btn-default btn-custom btn-lg" id="hsl">HSL</button>
            </li>
            <li>
                <button type="button" class="btn btn-default btn-custom btn-lg" id="hsv">HSB / HSV</button>
            </li>
            <li>
                <a href="input-tips.php">
                    <button type="button" class="btn btn-success btn-lg" id="idk">I don't know?</button>
                </a>
            </li>
        </ul>

        <div class="row allresults_no_anim">

            <div class="col-md-12" style="margin-top: 10px;">
                <div class="col-md-4">
                    <div class="input-group">
                        <span class="input-group-addon cname">HEX</span>
                        <input type="text" id="toclip-hex" value="" class="form-control hex-result">
                        <button type="button" id="copy-hex" class="btn btn-default btn-xs tooltipcopied tooltip-1"
                                title="copy to clipboard">copy
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group">
                        <span class="input-group-addon cname">RGB</span>
                        <input type="text" id="toclip-rgb" value="" class="form-control rgb-result">
                        <button type="button" id="copy-rgb" class="btn btn-default btn-xs tooltipcopied tooltip-1"
                                title="copy to clipboard">copy
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group">
                        <span class="input-group-addon cname">RGBA</span>
                        <input type="text" id="toclip-rgba" value="" class="form-control rgba-result">
                        <button type="button" id="copy-rgba" class="btn btn-default btn-xs tooltipcopied tooltip-1"
                                title="copy to clipboard">copy
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="col-md-4">
                    <div class="input-group">
                        <span class="input-group-addon cname">CMYK</span>
                        <input type="text" id="toclip-cmyk" value="" class="form-control cmyk-result">
                        <button type="button" id="copy-cmyk" class="btn btn-default btn-xs tooltipcopied tooltip-1"
                                title="copy to clipboard">copy
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group">
                        <span class="input-group-addon cname">HSL</span>
                        <input type="text" id="toclip-hsl" value="" class="form-control hsl-result">
                        <button type="button" id="copy-hsl" class="btn btn-default btn-xs tooltipcopied tooltip-1"
                                title="copy to clipboard">copy
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group">
                        <span class="input-group-addon cname">HSV</span>
                        <input type="text" id="toclip-hsv" value="" class="form-control hsv-result">
                        <button type="button" id="copy-hsv" class="btn btn-default btn-xs tooltipcopied tooltip-1"
                                title="copy to clipboard">copy
                        </button>
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

    </div>
</div>

<?php include '_footer.php' ?>


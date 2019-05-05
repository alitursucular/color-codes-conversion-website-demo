<?php

$ROOT_URL = "http://colorconversion.co";

if (!isset($shortcut)) {
    $shortcut = array(
        'title' => '',
        'url' => ''
    );
}

if (!isset($shortcut['title'])) { $shortcut['title'] = 'Welcome to colorconversion.co!';}

?>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=9"/>
    <meta name="description" content="Colorconversion.co is the easiest way to convert colors!. You can convert between hex, rgb, rgba, cmyk, hsl, hsb and hsv on a single page in seconds.">
    <meta property="og:type" content="website">
    <meta property="author" content="https://www.facebook.com/alitursucular">
    <meta property="og:site_name" content="colorconversion">
    <meta property="og:description" content="Colorconversion.co is the easiest way to convert colors!. You can convert between hex, rgb, rgba, cmyk, hsl, hsb and hsv on a single page in seconds.">
    <meta property="og:title" content="<?php echo $shortcut['title'] ?>">
    <meta property="og:image" content="http://colorconversion.co/img/colorconversion-static-fb-logo.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="<?php echo $shortcut['url'] ?>">
    <meta name="copyright" content="Copyright  colorconversion.co. All rights reserved.">

    <title><?php echo $shortcut['title'] ?></title>

    <link rel="shortcut icon" href="img/cococo-favicon.ico" type="image/x-icon">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/font-awesome.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Roboto:100,300,400,500,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href="css/conversion.css" rel="stylesheet">
    <link href="css/modified_lightness_jquery-ui.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/conversionfunctions.js"></script>
    <script src="js/conversionpagefunctions.js"></script>
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
</head>

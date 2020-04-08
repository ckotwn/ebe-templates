<?php

    define('SITE_URL', dirname( $_SERVER['REQUEST_URI'] ) );

    $reqOrig  = $_SERVER['REQUEST_URI'];
    $is_index = ($reqOrig == '/');

?>
<html lang="zh">
    <head>
        <meta charset="UTF-8">
        <title>生態監測資料管理平台</title>
        <link rel="icon" type="image/png" href="<?= SITE_URL; ?>/favicon-16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="<?= SITE_URL; ?>/favicon-32.png" sizes="32x32">

        <meta name="description" content="生態監測資料管理平台">
        <meta name="keywords" content="海域 離岸風場 資料管理">
        <meta name="author" content="Terry Yip">
        <meta name="copyright" content="經濟部能源局">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:image" content="<?= SITE_URL; ?>/img/logo.png">
        <meta property="og:url" content="<?= SITE_URL; ?>">
        <meta property="og:title" content="生態監測資料管理平台">
        <meta property="og:description" content="生態監測資料管理平台">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta http-equiv="content-language" content="zh-tw">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta http-equiv="last-modified" content="<?= date('D, d M Y'); ?> 06:41:59 GMT">

        <link rel="canonical" href="<?= SITE_URL; ?>" />
        <link rel='shortlink' href='<?= SITE_URL; ?>' />

        <link rel='stylesheet' href='<?= SITE_URL; ?>/assets/fa5/css/fontawesome.css' type='text/css' media='all' />
        <link rel='stylesheet' href='<?= SITE_URL; ?>/assets/fa5/css/solid.css' type='text/css' media='all' />
        <link rel='stylesheet' href='<?= SITE_URL; ?>/assets/fa5/css/light.css' type='text/css' media='all' />
        <link rel='stylesheet' href='<?= SITE_URL; ?>/assets/fa5/css/brands.css' type='text/css' media='all' />
        <link rel='stylesheet' href='<?= SITE_URL; ?>/assets/fa5/css/regular.css' type='text/css' media='all' />

        <script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/jquery-3.4.1.min.js?ver=<?= rand(); ?>'></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script type='text/javascript' src='<?= SITE_URL; ?>/assets/legacy/js/web/layout.js?ver=<?= rand(); ?>'></script>

        <link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/reset.css' type='text/css' media='all' />
        <link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/ebe-main.css?ver=<?= rand(); ?>' type='text/css' media='all' />
        <script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-core.js?ver=<?= rand(); ?>'></script>

    </head>
    <body class="">
        <div class='container-full'>
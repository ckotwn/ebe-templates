<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>assets/lib/leaflet/leaflet.css' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/lib/leaflet/leaflet.js'></script>

<link rel="stylesheet" href="<?= SITE_URL; ?>assets/lib/mcs/jquery.mCustomScrollbar.min.css" />
<script src="<?= SITE_URL; ?>assets/lib/mcs/jquery.mCustomScrollbar.concat.min.js"></script>

<link rel='stylesheet' href='<?= SITE_URL; ?>assets/css/ebe-index.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-map.js?ver=<?= rand(); ?>'></script>
<script>
    $(window).on('load', Ebe.Page.Index.init );
</script>


<?php /* content start */ ?>
<div class="contentPane">


    <div id="indexMapPane">
        <div id="indexMap"></div>
        <div id="indexMapLayerPane">
            <div class="mapsetNamePane">
                <div class="nameBar">
                    <i class="icon far fa-map-marked-alt"></i>
                    <span></span>
                    <div class="dropbown -action-showMapsetList fa fa-caret-down"></div>
                </div>
                <div class="mapsetSelect"></div>
            </div>
            <div class="layerPane">
                <div class="content"></div>
            </div>
        </div>
        <div id="indexMapFnPane"></div>

    </div>


</div>
<?php /* content end */ ?>



<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
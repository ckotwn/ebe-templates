<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/lib/leaflet/leaflet.css' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/lib/leaflet/leaflet.js'></script>

<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/ebe-windfield.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-map.js?ver=<?= rand(); ?>'></script>
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-windfield.js?ver=<?= rand(); ?>'></script>

<script>
(function(){

    // 先不分頁，目前先做 50筆 應該夠用
    // 直接顯示 HTML 然後執行以下程式初始化地圖

    $(function(){
        Ebe.Page.WindfieldList.init();
    });

})();
</script>


<?php /* content start */ ?>
<div class="contentPane" id="MapListContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-wind"></i>
            <h1>風場</h1>
        </div>
        <div id="filterPanel">
            <div class="ebButton -s">新增風場</div>
        </div>
    </div>


    <div class="bodyPane hSplitContentPane">

        <div class="itemListPane" id="wfListPane">

        <div class="wfListItem" data-number="1"
                    data-lat="23.942292" data-lng="120.345986">
                <div class="icon"><img src="assets/img/mapIcon/number/1.png"></div>
                <div class="name">
                    <div>海洋竹南風力發電場</div>
                    <div class="vendor">海洋風力發電公司</div>
                </div>
                <div class="goto -action-centerMap">
                    <i class="fal fa-crosshairs"></i>
                </div>
                <div class="coord">
                    23.942292<br>120.345986
                </div>
                <div class="fn">
                    <div class="ebButton -n">編輯</div>
                    <div class="ebButton -n">停用</div>
                    <div class="ebButton -n -type-error">刪除</div>
                </div>
            </div>

            <div class="wfListItem" data-number="2"
                    data-lat="23.842292" data-lng="120.245986">
                <div class="icon"><img src="assets/img/mapIcon/number/2.png"></div>
                <div class="name">
                    <div>海洋竹南風力發電場</div>
                    <div class="vendor">海洋風力發電公司</div>
                </div>
                <div class="goto -action-centerMap">
                    <i class="fal fa-crosshairs"></i>
                </div>
                <div class="coord">
                    23.842292<br>120.245986
                </div>
                <div class="fn">
                    <div class="ebButton -n">編輯</div>
                    <div class="ebButton -n">停用</div>
                    <div class="ebButton -n -type-error">刪除</div>
                </div>
            </div>

        </div>

        <div class="mapPane" id="wfMapPane">
            <div id="wg1"></div>
        </div>

    </div>

</div>
<?php /* content end */ ?>

<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
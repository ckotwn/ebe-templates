<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/lib/leaflet/leaflet.css' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/lib/leaflet/leaflet.js'></script>

<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/ebe-port.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-map.js?ver=<?= rand(); ?>'></script>


<?php /* content start */ ?>
<div class="contentPane" id="MiscEditContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ship"></i>
            <h1>港口</h1>
        </div>
        <div class="subHeaderPanel">
            <h1>編輯港口</h1>
        </div>
    </div>

    <div id="bodyPane" class="formPane">

    <?php /* 計畫設定 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">

                <div class="fieldRow -required">
                    <div class="label">港口名稱</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 512px">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">經度</div>
                    <div class="field">
                        <input class="ebInput -data-coord -data-lat" type="text" style="width: 240px"
                                value="23.842292">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">緯度</div>
                    <div class="field">
                        <input class="ebInput -data-coord -data-lng" type="text" style="width: 240px"
                                value="120.245986">
                    </div>
                </div>

                <div class="fieldRow">
                    <div class="label"></div>
                    <div class="field">
                        <div id="wg1"></div>
                        <script>
                        (function(){

                            // 地圖的預設值吃上面 input 的預設值
                            // add 跟 edit 底下一樣

                            // ↓↓↓ 這邊先不要動
                            var wg = Ebe.Widget.SimpleMapBox.init('#wg1', { mapBaseType : 'GOOGLE_MAP'});
                            var portMarker;

                            $(function(){
                                $('.-data-coord').each(function(){
                                    $(this).on('focus', function(){
                                        $(this).select();
                                    });
                                });

                                $('.-data-lat').on( 'change', updateMapIcon );
                                $('.-data-lng').on( 'change', updateMapIcon );

                                var lat = $('.-data-lat').val();
                                var lng = $('.-data-lng').val();

                                portMarker = wg.addPoint( null,
                                        Ebe.Widget.MapIconConfig.PORT,
                                        [ lat, lng ],
                                        {
                                            onDragEnd: updateCoord
                                        });
                            });

                            function updateMapIcon(){
                                var lat = $('.-data-lat').val();
                                var lng = $('.-data-lng').val();

                                portMarker.setLatLng([ lat, lng ]);
                                wg.lfMap.panTo([ lat, lng ]);
                            }

                            function updateCoord( coord ){
                                $('.-data-lat').val( Number((coord.lat).toFixed(6)) );
                                $('.-data-lng').val( Number((coord.lng).toFixed(6)) );
                            }
                            // ↑↑↑ 這邊先不要動

                        })();
                        </script>
                    </div>
                </div>

                <div class="fieldSection">
                    <div class="fieldSet">
                        <div class="fieldRow -buttons">
                            <div class="ebButton">新增港口</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</div>
<?php /* content end */ ?>


<script>
</script>

<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
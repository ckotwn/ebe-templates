<?php include "htmlHeader.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>assets/lib/leaflet/leaflet.css' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/lib/leaflet/leaflet.js'></script>

<link rel='stylesheet' href='<?= SITE_URL; ?>assets/css/ebe-windfield.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-map.js?ver=<?= rand(); ?>'></script>


<?php /* content end */ ?>
<div class="contentPane" id="MiscEditContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ship"></i>
            <h1>風場</h1>
        </div>
        <div class="subHeaderPanel">
            <h1>新增風場</h1>
        </div>
    </div>

    <div id="bodyPane" class="formPane">

        <div class="fieldSection">
            <div class="fieldSet">

                <div class="fieldRow -required">
                    <div class="label">風場名稱</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 512px">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">營運廠商</div>
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
                                        Ebe.Widget.MapIconConfig.WINDFIELD,
                                        [ lat, lng ],
                                        {
                                            onDragEnd: updateCoord
                                        });
                            });

                            function updateMapIcon(){
                                var lat = $('.-data-lat').val();
                                var lng = $('.-data-lng').val();

                                if( lat >  90 || lat <  -90 ) return;
                                if( lng > 180 || lng < -180 ) return;

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

                <div class="fieldRow -required">
                    <div class="label">圖輯資料</div>
                    <div class="field">
                        <div class="ebFileUpload">
                            <div class="ebButton -s">選擇檔案</div>
                            <div class="fileName">尚未選擇檔案</div>
                            <div class="input"><input class="input" type="file"></div>
                        </div>
                        <div class="note">請上傳風場的 Shapefile（.shp）</div>
                    </div>
                </div>

                <div class="fieldSection">
                    <div class="fieldSet">
                        <div class="fieldRow -buttons">
                            <div class="ebButton">新增風場</div>
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
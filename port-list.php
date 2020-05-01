<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/lib/leaflet/leaflet.css' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/lib/leaflet/leaflet.js'></script>

<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/ebe-port.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-map.js?ver=<?= rand(); ?>'></script>
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-port.js?ver=<?= rand(); ?>'></script>

<script>
(function(){

    // 先不分頁，目前先做 50筆 應該夠用
    // 直接顯示 HTML 然後先放入以下 HTML

    // ↓↓↓ 這邊先不要動
    $(function(){

        var wg = Ebe.Widget.SimpleMapBox.init('#wg1', { mapBaseType : 'GOOGLE_MAP'});

        $('.portListItem').each(function(){
            var $this = $(this);

            var n   = $this.attr('data-number');
            var lat = $this.attr('data-lat');
            var lng = $this.attr('data-lng');

            // add map marker
            portMarker = wg.addPoint( null,
                Ebe.Widget.MapIconConfig.numberIcon(n),
                [ lat, lng ], );

            $this.find('.-action-centerMap').on('click', function(){
                var $this = $(this).parents('.portListItem');
                var lat = $this.attr('data-lat');
                var lng = $this.attr('data-lng');

                wg.lfMap.panTo([ lat, lng ]);
            });
        });

    });
    // ↑↑↑ 這邊先不要動

})();
</script>


<?php /* content start */ ?>
<div class="contentPane" id="MiscEditContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ship"></i>
            <h1>港口</h1>
        </div>
    </div>


    <div class="bodyPane hSplitContentPane">

        <div class="itemListPane" id="portListPane">

            <div class="portListItem" data-number="1"
                    data-lat="23.942292" data-lng="120.345986">
                <div class="icon"><img src="assets/img/mapIcon/number/1.png"></div>
                <div class="name">港口名稱1</div>
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

            <div class="portListItem" data-number="2"
                    data-lat="23.842292" data-lng="120.245986">
                <div class="icon"><img src="assets/img/mapIcon/number/2.png"></div>
                <div class="name">港口名稱2</div>
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

            <div class="portListItem" data-number="3"
                    data-lat="23.642292" data-lng="120.145986">
                <div class="icon"><img src="assets/img/mapIcon/number/3.png"></div>
                <div class="name">港口名稱3</div>
                <div class="goto -action-centerMap">
                    <i class="fal fa-crosshairs"></i>
                </div>
                <div class="coord">
                    23.642292<br>120.145986
                </div>
                <div class="fn">
                    <div class="ebButton -n">編輯</div>
                    <div class="ebButton -n">停用</div>
                    <div class="ebButton -n -type-error">刪除</div>
                </div>
            </div>

            <div class="portListItem" data-number="4"
                    data-lat="23.642292" data-lng="120.345986">
                <div class="icon"><img src="assets/img/mapIcon/number/4.png"></div>
                <div class="name">港口名稱4</div>
                <div class="goto -action-centerMap">
                    <i class="fal fa-crosshairs"></i>
                </div>
                <div class="coord">
                    23.642292<br>120.345986
                </div>
                <div class="fn">
                    <div class="ebButton -n">編輯</div>
                    <div class="ebButton -n">停用</div>
                    <div class="ebButton -n -type-error">刪除</div>
                </div>
            </div>

            <div class="portListItem" data-number="5"
                    data-lat="23.142292" data-lng="120.045986">
                <div class="icon"><img src="assets/img/mapIcon/number/5.png"></div>
                <div class="name">港口名稱5</div>
                <div class="goto -action-centerMap">
                    <i class="fal fa-crosshairs"></i>
                </div>
                <div class="coord">
                    23.142292<br>120.045986
                </div>
                <div class="fn">
                    <div class="ebButton -n">編輯</div>
                    <div class="ebButton -n">停用</div>
                    <div class="ebButton -n -type-error">刪除</div>
                </div>
            </div>

        </div>

        <div class="mapPane" id="portMapPane">
            <div id="wg1"></div>
        </div>

    </div>

</div>
<?php /* content end */ ?>


<script>
</script>

<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
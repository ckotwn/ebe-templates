<?php include "htmlHeader.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>assets/css/ebe-project.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-widget.js?ver=<?= rand(); ?>'></script>
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-project.js?ver=<?= rand(); ?>'></script>



<?php /* content start */ ?>
<div class="contentPane" id="ProjectCreateContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ballot-check"></i>
            <h1>監測計畫</h1>
        </div>

        <div class="subHeaderPanel">
            <h1>[計畫名稱]</h1>
        </div>
    </div>

    <div id="bodyPane" class="formPane">

        <?php /* 計畫設定 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">

                <div class="fieldTitle">計畫設定</div>

                <div class="fieldRow -required">
                    <div class="label">計畫名稱</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 512px">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">計畫簡稱</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 240px">
                        <span class="note">最多 4 字</span>
                    </div>
                </div>

                <div class="fieldRow">
                    <div class="label">作業類群</div>
                    <div class="field ebSelectGroup">
                        <div class="ebDisplayText -hilight">鳥類</div>
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">執行期間</div>
                    <div class="field">
                        <input class="ebInput -type-date" type="text" style="width: 160px">
                        <span class="icon fal fa-calendar-alt"></span>
                        <span class="tilde">~</span>
                        <input class="ebInput -type-date" type="text" style="width: 160px">
                        <span class="icon fal fa-calendar-alt"></span>
                    </div>
                </div>

                <div class="fieldRow">
                    <div class="label">風場</div>
                    <div class="field ebSelectGroup">
                        <div class="ebDisplayText -hilight">海洋竹南風力發電場</div>
                    </div>
                </div>

            </div>
        </div>

        <?php /* 計劃管理員 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">計劃管理員</div>
                    <div class="field">
                        <div class="widgetBox wgProjectUserViewBox">
                            <div class="listPane">
                                <table>
                                    <thead>
                                        <tr><th width=160>名字</th><th>電子郵件</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>名字</td>
                                            <td>name@email.com</td>
                                        </tr>
                                        <tr>
                                            <td>名字</td>
                                            <td>name@email.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php /* 計劃管理員 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">計劃管理員</div>
                    <div class="field">
                        <div id="wg0"></div>
                        <script>
                        (function(){

                            // ebe-widget.js
                            // window.Ebe.Widget.ProjectUserManageBox

                            // 建立元件
                            var $wg = Ebe.Widget.ProjectUserManageBox.init('#wg0');

                            // 查詢 email (這裡導向 ajax )
                            // 會自動帶入 email
                            $wg.setAddItemHandler(function( email ){

                                // 這裡請進行其他 ajax 查詢
                                // ...

                                // 成功後請如以下呼叫：
                                addItem({
                                    id    : null,
                                    name  : '名字',
                                    email : email
                                });
                            });

                            // 取得資料請執行以下：
                            // $wg.getList();

                            // 測試用新增資料
                            $wg.addRow({
                                id : null,
                                name : '第1位',
                                email : 'some@email.com'
                            });

                            $wg.addRow({
                                id : null,
                                name : '第2位',
                                email : 'another@email.com'
                            });
                        })();
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <?php /* 計畫成員 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">計畫成員</div>
                    <div class="field">
                        <div id="wg1"></div>
                        <ul class="note">
                            <li>請使用電子郵址加入計畫管理員。</li>
                            <li>若員尚未加入任何計畫，系統將送出邀請連結，請提醒收件者注意垃圾信箱。</li>
                            <li>一般計畫成員由計畫管理員新增之。</li>
                        </ul>
                    </div>
                    <script>
                    (function(){

                        // ebe-widget.js
                        // window.Ebe.Widget.ProjectUserManageBox

                        // 建立元件
                        var $wg = Ebe.Widget.ProjectUserManageBox.init('#wg1');

                        // 查詢 email (這裡導向 ajax )
                        // 會自動帶入 email
                        $wg.setAddItemHandler(function( email ){

                            // 這裡請進行其他 ajax 查詢
                            // ...

                            // 成功後請如以下呼叫：
                            addItem({
                                id    : null,
                                name  : '名字',
                                email : email
                            });
                        });

                        // 取得資料請執行以下：
                        // $wg.getList();

                        // 測試用新增資料
                        $wg.addRow({
                            id : null,
                            name : '第1位',
                            email : 'some@email.com'
                        });

                        $wg.addRow({
                            id : null,
                            name : '第2位',
                            email : 'another@email.com'
                        });
                    })();
                    </script>
                </div>
            </div>
        </div>

        <?php /* 作業地點 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">作業地點</div>
                    <div class="field">
                        <div id="wg2"></div>
                    </div>
                    <script>
                    (function(){

                        // ebe-widget.js
                        // Ebe.Widget.ProjectStationManageBox

                        // 表格設定
                        // 列表欄位設定
                        // Ebe.Widget.Station.TABLE_CONFIG.AVES      // 鳥類
                        // Ebe.Widget.Station.TABLE_CONFIG.BENTHOS   // 底棲生物
                        // Ebe.Widget.Station.TABLE_CONFIG.FISH      // 魚類
                        // Ebe.Widget.Station.TABLE_CONFIG.UNOISE    // 水下噪音
                        // 新增欄位設定
                        // Ebe.Widget.Station.ADDFORM_CONFIG.AVES    // 鳥類
                        // Ebe.Widget.Station.ADDFORM_CONFIG.BENTHOS // 底棲生物
                        // Ebe.Widget.Station.ADDFORM_CONFIG.FISH    // 魚類
                        // Ebe.Widget.Station.ADDFORM_CONFIG.UNOISE  // 水下噪音
                        // 如果有其他的也可以直接另外定義


                        // 建立元件
                        var wg = Ebe.Widget.ProjectStationManageBox.init(
                            '#wg2',
                            Ebe.Widget.Station.TABLE_CONFIG.AVES,
                            Ebe.Widget.Station.ADDFORM_CONFIG.AVES
                        );

                        // 建立港口清單
                        wg.setPortList([
                            { id: 1, name: "港口1號" },
                            { id: 2, name: "港口2號" }
                        ]);

                        // 建立大地基準清單
                        wg.setDatumList([ 'TWD97', 'WGS84' ]);

                        // 新增 (由這裡導向 ajax)
                        wg.setAddItemHandler(function( stationData ){

                            /* stationData 資料格式
                                {
                                    ref_no
                                    name
                                    port_id
                                    latitude
                                    longitude
                                    datum
                                    device
                                }
                            */

                            // 成功後請如以下呼叫：
                            wg.addItem({
                                id        : 2,
                                ref_no    : "AAA123",
                                name      : "芳苑海堤",
                                port      : "外埔漁港",
                                latitude  : "121.000000",
                                longitude : "24.000000",
                                datum     : "TWD97",
                                device    : "雷達"
                            });

                            // 或是呼叫 :
                            Ebe.Widget.ProjectStationManageBox.addItem( '#wg2', {
                                id        : 3,
                                ref_no    : "AAA123",
                                name      : "芳苑海堤",
                                port      : "外埔漁港",
                                latitude  : "121.000000",
                                longitude : "24.000000",
                                datum     : "TWD97",
                                device    : "雷達"
                            });
                        });

                        // 刪除 (由這裡導向 ajax)
                        wg.setRemoveItemHandler(function( stationId ){

                            // 成功後請如以下呼叫 :
                            wg.removeItem( stationId );

                            // 或是呼叫 :
                            Ebe.Widget.ProjectStationManageBox.removeItem( '#wg2', stationId);
                        });

                        // 取得資料請執行以下：
                        // wg.getList();

                        // 測試用新增資料
                        wg.addRow({
                            id        : 1,
                            ref_no    : "AAA123",
                            name      : "芳苑海堤",
                            port      : "外埔漁港",
                            latitude  : "121.000000",
                            longitude : "24.000000",
                            datum     : "TWD97",
                            device    : "雷達"
                        });
                    })();
                    </script>
                </div>
            </div>
        </div>

        <?php /* 備註 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">備註</div>
                    <div class="field">
                        <textarea class="ebTextarea" style="width: 640px; height: 128px;"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow -buttons">
                    <div class="ebButton">更新計畫</div>
                </div>
            </div>
        </div>

    </div>

</div>
<?php /* content end */ ?>



<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
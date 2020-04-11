<?php include "htmlHeader.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/ebe-project.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-widget.js?ver=<?= rand(); ?>'></script>
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-project.js?ver=<?= rand(); ?>'></script>



<?php /* content start */ ?>
<div class="contentPane" id="SurvayCreateContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ballot-check"></i>
            <h1>監測計畫</h1>
        </div>

        <div class="subHeaderPanel">
            <h1>新增作業規劃</h1>
        </div>
    </div>

    <div id="bodyPane" class="formPane">

        <div class="fieldSection fixedTopSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">計畫名稱</div>
                    <div class="field">
                        <div class="ebDisplayText -hilight">離岸風場鯨豚生態調查監測標準作業建立與實施</div>
                    </div>
                </div>
                <div class="fieldRow">
                    <div class="label">作業類群</div>
                    <div class="field">
                        <div class="ebDisplayText -hilight">鯨豚</div>
                    </div>
                </div>
            </div>
        </div>

        <?php /* 作業規畫 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">

                <div class="fieldTitle">作業規畫</div>

                <div class="fieldRow">
                    <div class="label">作業種類</div>
                    <div class="field ebSelectGroup">
                        <label class="ebRadio"><input type="radio"><span>調查作業</span></label>
                        <label class="ebRadio"><input type="radio"><span>儀器架設</span></label>
                        <label class="ebRadio"><input type="radio"><span>水下聲學</span></label>
                        <label class="ebRadio"><input type="radio"><span>其它</span>
                            <input class="ebInput" type="text">
                        </label>
                    </div>
                </div>

                <div class="fieldRow">
                    <div class="label">發報器種類</div>
                    <div class="field ebSelectGroup">
                        <label class="ebCheckbox"><input type="checkbox"><span>Argos 衛星發報器</span></label>
                        <label class="ebCheckbox"><input type="checkbox"><span>Motus VHF</span></label>
                        <label class="ebCheckbox"><input type="checkbox"><span>GPS-GSM</span></label>
                        <label class="ebCheckbox"><input type="checkbox"><span>GPS-radio</span></label>
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">作業日期</div>
                    <div class="field">
                        <input class="ebInput -type-date" type="text" style="width: 160px">
                        <span class="icon fal fa-calendar-alt"></span>
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">預定時數</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 160px">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">風場</div>
                    <div class="field">
                        <select class="ebSelect" type="text" style="width: 320px">
                            <option>選項1</option>
                        </select>
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">出海港口</div>
                    <div class="field">
                        <select class="ebSelect" type="text" style="width: 320px">
                            <option>選項1</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>

        <?php /* 作業地點 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">作業地點</div>
                    <div class="field">
                        <div id="wg1"></div>
                    </div>
                    <script>
                    (function(){

                        // ebe-widget.js
                        // Ebe.Widget.SelectorBox

                        // 建立元件
                        var wg = Ebe.Widget.SelectorBox.init('#wg1', Ebe.Widget.Station.TABLE_CONFIG.AVES );

                        // 取得選取的欄位請執行以下：
                        // wg.getSelected();

                        // 測試用新增資料
                        wg.addRow({
                            id        : 1234,
                            ref_no    : 'AAA001',
                            name      : '芳苑海堤1',
                            port_name : '外埔漁港',
                            latitude  : '121.1',
                            longitude : '24.1',
                            datum     : 'TWD97',
                            device    : '雷達'
                        });

                        wg.addRow({
                            id        : 5678,
                            ref_no    : 'AAA002',
                            name      : '芳苑海堤2',
                            port_name : '外埔漁港',
                            latitude  : '121.2',
                            longitude : '24.0',
                            datum     : 'TWD97',
                            device    : ''
                        });

                        wg.addRow({
                            id        : 9012,
                            ref_no    : 'AAA003',
                            name      : '芳苑海堤3',
                            port_name : '外埔漁港',
                            latitude  : '121.3',
                            longitude : '23.9',
                            datum     : 'TWD97',
                            device    : ''
                        });
                    })();
                    </script>
                </div>
            </div>
        </div>

        <?php /* 參與此作業的計畫成員 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">參與此作業的<br>計畫成員</div>
                    <div class="field">
                        <div id="wg2"></div>
                    </div>
                    <script>
                    (function(){

                        // ebe-widget.js
                        // Ebe.Widget.SelectorBox

                        // 建立元件
                        var wgConfig = {
                            cols : [
                                {
                                    ref     : 'name',
                                    label   : '名字',
                                    width   : 32
                                },
                                {
                                    ref     : 'email',
                                    label   : 'E-Mail',
                                    width   : null
                                }
                            ]
                        };

                        var wg = Ebe.Widget.SelectorBox.init('#wg2', wgConfig);

                        // 取得選取的欄位請執行以下：
                        // wg.getSelected();

                        // 測試用新增資料
                        wg.addRow({
                            id        : 1234,
                            name      : 'paggyemi',
                            email     : 'emipaggy@gmail.com',
                        });

                        wg.addRow({
                            id        : 1234,
                            name      : 'HungChung-Hang',
                            email     : 'chrancor@gmail.com',
                        });

                        wg.addRow({
                            id        : 1234,
                            name      : 'ChiangDec',
                            email     : 'dec@twsg.org',
                        });

                        wg.addRow({
                            id        : 1234,
                            name      : 'LinC. S.',
                            email     : 'toby@twsg.org',
                        });
                    })();
                    </script>
                </div>
            </div>
        </div>

        <?php /* 隨行人員 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">隨行人員</div>
                    <div class="field">
                        <div id="wg3"></div>
                    </div>
                    <script>
                    (function(){

                        // ebe-widget.js
                        // Ebe.Widget.EntourageManageBox

                        // 建立元件
                        var wg = Ebe.Widget.EntourageManageBox.init('#wg3');

                        // 查詢 (這裡導向 ajax )
                        // 會自動帶入資料
                        wg.setAddItemHandler(function( entourageList ){

                            /* entourageList 資料格式
                                {
                                    name
                                    phone
                                    email
                                }
                            */

                            // 這裡請進行其他 ajax 查詢
                            // ...

                            // 成功後請如以下呼叫：
                            wg.addItem({
                                name      : '王大哥',
                                phone     : '0912345678',
                                email     : 'emipaggy@gmail.com',
                            });

                            // 或是呼叫
                            Ebe.Widget.EntourageManageBox.addItem( '#wg3', {
                                name      : '王大哥',
                                phone     : '0912345678',
                                email     : 'emipaggy@gmail.com',
                            });
                        });

                        // 取得選取的欄位請執行以下：
                        // wg.getList();

                        // 測試用新增資料
                        wg.addItem({
                            name      : '王大哥',
                            phone     : '0912345678',
                            email     : 'emipaggy@gmail.com',
                        });
                    })();
                    </script>
                </div>
            </div>
        </div>

        <?php /* 計畫設定 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">

                <div class="fieldTitle">計畫設定</div>

                <div class="fieldRow -required">
                    <div class="label">聯絡窗口</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 192px">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">聯絡電話</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 192px">
                    </div>
                </div>

                <div class="fieldRow">
                    <div class="label">執行內容簡要說明</div>
                    <div class="field">
                        <textarea class="ebTextarea" style="width: 640px; height: 128px;"></textarea>
                    </div>
                </div>

                <div class="fieldSection">
                    <div class="fieldSet">
                        <div class="fieldRow -buttons">
                            <div class="ebButton">新增作業規劃</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</div>
<?php /* content end */ ?>



<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
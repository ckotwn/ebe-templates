<?php include "htmlHeader.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>assets/css/ebe-project.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-widget.js?ver=<?= rand(); ?>'></script>
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-project.js?ver=<?= rand(); ?>'></script>



<?php /* content start */ ?>
<div class="contentPane" id="SurvayCreateContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ballot-check"></i>
            <h1>監測計畫</h1>
        </div>

        <div class="subHeaderPanel">
            <h1>作業回報</h1>
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
                <div class="fieldRow">
                    <div class="label">作業規劃</div>
                    <div class="field">
                        <div class="ebDisplayText -hilight">2020-04-15  調查作業</div>
                    </div>
                </div>
            </div>
        </div>

        <?php /* 基本資料 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">

                <div class="fieldRow">
                    <div class="label">狀態</div>
                    <div class="field ebSelectGroup">
                        <label class="ebRadio"><input type="radio"><span>已執行</span></label>
                        <label class="ebRadio"><input type="radio"><span>資料上傳（完成）</span></label>
                        <label class="ebRadio"><input type="radio"><span>已檢核</span></label>
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">出港時間</div>
                    <div class="field">
                        <input class="ebInput -type-time" type="number" min="0" max="23" value="8" > :
                        <input class="ebInput -type-time" type="number" min="0" max="59" value="30">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">進港時間</div>
                    <div class="field">
                        <input class="ebInput -type-time" type="number" min="0" max="23" value="17"> :
                        <input class="ebInput -type-time" type="number" min="0" max="59" value="30">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">作業開始時間</div>
                    <div class="field">
                        <input class="ebInput -type-time" type="number" min="0" max="23" value="10"> :
                        <input class="ebInput -type-time" type="number" min="0" max="59" value="30">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">作業結束時間</div>
                    <div class="field">
                        <input class="ebInput -type-time" type="number" min="0" max="23" value="13"> :
                        <input class="ebInput -type-time" type="number" min="0" max="59" value="30">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">出海文件</div>
                    <div class="field">
                        <div class="ebFileUpload">
                            <div class="ebButton -s">選擇檔案</div>
                            <div class="fileName">尚未選擇檔案</div>
                            <div class="input"><input class="input" type="file"></div>
                        </div>
                        <div class="note">請上傳出海文件，可接受之格式為 JPG、PNG、PDF。</div>
                    </div>
                </div>

            </div>
        </div>

        <?php /* 檔案上傳 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">檔案上傳</div>
                    <div class="field">
                        <div id="wg4"></div>
                    </div>
                    <script>
                    (function(){

                        // ebe-widget.js
                        // Ebe.Widget.FolderListBox

                        // 建立元件
                        var wg = Ebe.Widget.FolderListBox.init('#wg4');

                        // 取得選取的欄位請執行以下：
                        // wg.getSelected();

                        // 測試用新增資料
                        wg.addFolderTree({
                            type          : 'google-drive',
                            name          : '2020-04-15  調查作業',
                            showLink      : true,
                            link          : '#',
                            subFolderList : [
                                {
                                    name          : '圖籍資料 geospatial-data',
                                    showLink      : false,
                                    link          : '#',
                                    subFolderList : [
                                        {
                                            name     : '觀測 observations',
                                            showLink : true,
                                            link     : '#'
                                        },
                                        {
                                            name     : '雷達追蹤 radar-tracing',
                                            showLink : true,
                                            link     : '#'
                                        },
                                        {
                                            name     : '測站 stations',
                                            showLink : true,
                                            link     : '#'
                                        },
                                        {
                                            name     : '航跡 tracks',
                                            showLink : true,
                                            link     : '#'
                                        }
                                    ]
                                },{
                                    name          : '文件 documents',
                                    showLink      : false,
                                    link          : '#',
                                    subFolderList : [
                                        {
                                            name     : '資料表 data-sheets',
                                            showLink : true,
                                            link     : '#'
                                        }
                                    ]
                                }
                            ]
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
                        <div id="wg1"></div>
                    </div>
                    <script>
                    (function(){

                        // ebe-widget.js
                        // Ebe.Widget.SelectorBox

                        // 建立元件

                        var wg = Ebe.Widget.SelectorBox.init('#wg1', Ebe.Widget.Station.TABLE_CONFIG.AVES);

                        // 取得選取的欄位請執行以下：
                        // wg.getSelected();

                        // 測試用新增資料
                        wg.addRow({
                            checked   : true,
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
                            checked   : false,
                            id        : 5678,
                            ref_no    : 'AAA002',
                            name      : '芳苑海堤2',
                            port_name : '外埔漁港',
                            latitude  : '121.2',
                            longitude : '24.0',
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
                        wg.setAddItemHandler(function( entourageData ){

                            /*  entourageData = {
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

                        // 移除 (如果沒設定，就直接 UI 移除)
                        wg.setRemoveItemHandler(function( entourageId ){

                            console.log( 'remove action' );
                            // 這裡請進行其他 ajax 查詢
                            // ...

                            // 成功後請如以下呼叫：
                            wg.removeItem( entourageId );
                        });

                        // 取得選取的欄位請執行以下：
                        // wg.getList();

                        // 移除隨行人員

                        // 測試用新增資料
                        wg.addItem({
                            id        : 22,
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

            </div>
        </div>


        <?php /* 按鈕 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow -text">
                    <ul class="note">
                        <li>請確認「文件 > 出海證明」資料夾中已上傳出海證明。</li>
                        <li>請確認「影像 > 工作照」資料夾中已上傳工作照。</li>
                        <li>請確認「影像 > 觀測紀錄照」資料夾中已上傳觀測紀錄照。</li>
                    </ul>
                </div>
                <div class="fieldRow -buttons">
                    <div class="ebButton"><i class="fal fa-sync"></i>更新作業回報</div>
                </div>
            </div>
        </div>

    </div>

</div>
<?php /* content end */ ?>



<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
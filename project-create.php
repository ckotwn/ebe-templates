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
            <h1>新增監測計畫</h1>
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
                        <label class="ebCheckbox"><input type="checkbox"><span>鳥類</span></label>
                        <label class="ebCheckbox"><input type="checkbox"><span>底棲生物</span></label>
                        <label class="ebCheckbox"><input type="checkbox"><span>鯨豚</span></label>
                        <label class="ebCheckbox"><input type="checkbox"><span>魚類</span></label>
                        <label class="ebCheckbox"><input type="checkbox"><span>水下噪音</span></label>
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
            </div>
        </div>

        <?php /* 計畫管理員 */ ?>
        <div class="fieldSection">
            <div class="fieldSet">
                <div class="fieldRow">
                    <div class="label">計劃管理員</div>
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
                        var wg = Ebe.Widget.ProjectUserManageBox.init('#wg1');

                        // 查詢 email (這裡導向 ajax )
                        // 會自動帶入 email
                        wg.setAddItemHandler(function( email ){

                            // 這裡請進行其他 ajax 查詢
                            // ...

                            // 成功後請如以下呼叫：
                            wg.addItem({
                                id    : null,
                                name  : '名字',
                                email : email
                            });

                            // 或是呼叫
                            Ebe.Widget.ProjectUserManageBox.addItem( '#wg1', {
                                id    : null,
                                name  : '名字',
                                email : email
                            });
                        });

                        // 取得資料請執行以下：
                        // wg.getList();

                        // 測試用新增資料
                        wg.addRow({
                            id : null,
                            name : '第1位',
                            email : 'some@email.com'
                        });

                        wg.addRow({
                            id : null,
                            name : '第2位',
                            email : 'another@email.com'
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
                    <div class="ebButton">新增計畫</div>
                </div>
            </div>
        </div>

    </div>

</div>
<?php /* content end */ ?>



<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
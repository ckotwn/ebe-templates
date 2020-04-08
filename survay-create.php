<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/ebe-project.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-project.js?ver=<?= rand(); ?>'></script>



<?php /* content start */ ?>
<div class="contentPane" id="ProjectHomeContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ballot-check"></i>
            <h1>監測計畫</h1>
        </div>

        <div class="subHeaderPanel">
            <h1>編輯作業規畫</h1>
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
            </div>
        </div>


    </div>

</div>
<?php /* content end */ ?>



<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
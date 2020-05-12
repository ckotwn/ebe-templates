<?php include "htmlHeader.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>assets/css/ebe-boat.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-widget.js?ver=<?= rand(); ?>'></script>


<?php /* content start */ ?>
<div class="contentPane" id="MiscEditContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ship"></i>
            <h1>工作船</h1>
        </div>
        <div class="subHeaderPanel">
            <h1>新增工作船</h1>
        </div>
    </div>

    <div id="bodyPane" class="formPane">

        <div class="fieldSection">
            <div class="fieldSet">

            <div class="fieldRow -required">
                <div class="label">名稱</div>
                <div class="field">
                    <input class="ebInput" type="text" style="width: 256px;">
                </div>
            </div>

            <div class="fieldRow -required">
                <div class="label">編號</div>
                <div class="field">
                    <input class="ebInput" type="text" style="width: 256px;">
                </div>
            </div>

            <div class="fieldRow -required">
                <div class="label">工作船照片</div>
                <div class="field">
                    <div class="ebImageUpload">
                        <div class="ebButton -s">選擇檔案</div>
                        <div class="fileName">尚未選擇檔案</div>
                        <div class="preview"></div>
                        <div class="input"><input class="input" type="file"></div>
                    </div>
                    <div class="note">請上傳工作船照片，可接受之格式為 JPG、PNG。</div>
                </div>
            </div>

                <div class="fieldSection">
                    <div class="fieldSet">
                        <div class="fieldRow -buttons">
                            <div class="ebButton">新增工作船</div>
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
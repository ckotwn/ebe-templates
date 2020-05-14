<?php include "htmlHeader.php" ?>
<?php include "header.v2.php" ?>



<?php /* content start */ ?>
<div class="contentPane MiscEditContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-user"></i>
            <h1>使用者</h1>
        </div>
    </div>

    <div id="bodyPane" class="formPane">

        <div class="fieldSection">
            <div class="fieldSet">

                <div class="fieldTitle">更新帳號資料</div>

                <div class="fieldRow -required">
                    <div class="label">姓名</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 256px">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">登入 E-Mail</div>
                    <div class="field">
                        <input class="ebInput" type="text" style="width: 512px">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">新登入密碼</div>
                    <div class="field">
                        <input class="ebInput" type="password" style="width: 256px">
                    </div>
                </div>

                <div class="fieldRow -required">
                    <div class="label">新登入密碼確認</div>
                    <div class="field">
                        <input class="ebInput" type="password" style="width: 256px">
                    </div>
                </div>

                <div class="fieldSection">
                    <div class="fieldSet">
                        <div class="fieldRow -buttons">
                            <div class="ebButton">更新帳號資料</div>
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
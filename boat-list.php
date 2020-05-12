<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>assets/css/ebe-boat.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-boat.js?ver=<?= rand(); ?>'></script>


<script>
(function(){

    // 這一頁都是靜態的
    // 資料很少不做分頁

})();
</script>


<?php /* content start */ ?>
<div class="contentPane" id="MapListContentPane">

    <div id="headerPane">
        <div class="titlePanel">
            <i class="fa fal fa-ship"></i>
            <h1>工作船</h1>
        </div>
        <div id="filterPanel">
            <a href="#" class="ebButton -s">新增工作船</a>
        </div>
    </div>


    <div class="bodyPane" id="boatListPane">

        <div class="boatListItem">
            <div class="wrapper">
                <div class="name">工作船名稱</div>
                <div class="photo" style="background-image: url(https://static.vesselfinder.net/images/media/4c9d55571071e7468e42d77d01d8f9bf.jpg)"></div>
                <div class="adminLink">
                    <a class="ebButton" href="#">編輯</a>
                    <a class="ebButton -type-error" href="#">停用</a>
                    <a class="ebButton -type-error" href="#">刪除</a>
                </div>
            </div>
        </div>

        <div class="boatListItem">
            <div class="wrapper">
                <div class="name">工作船名稱</div>
                <div class="photo" style="background-image: url(https://static.vesselfinder.net/images/media/4c9d55571071e7468e42d77d01d8f9bf.jpg)"></div>
                <div class="adminLink">
                    <a class="ebButton" href="#">編輯</a>
                    <a class="ebButton -type-error" href="#">停用</a>
                    <a class="ebButton -type-error" href="#">刪除</a>
                </div>
            </div>
        </div>

        <div class="boatListItem">
            <div class="wrapper">
                <div class="name">工作船名稱</div>
                <div class="photo" style="background-image: url(https://static.vesselfinder.net/images/media/4c9d55571071e7468e42d77d01d8f9bf.jpg)"></div>
                <div class="adminLink">
                    <a class="ebButton" href="#">編輯</a>
                    <a class="ebButton -type-error" href="#">停用</a>
                    <a class="ebButton -type-error" href="#">刪除</a>
                </div>
            </div>
        </div>

        <div class="boatListItem">
            <div class="wrapper">
                <div class="name">工作船名稱</div>
                <div class="photo" style="background-image: url(https://static.vesselfinder.net/images/media/4c9d55571071e7468e42d77d01d8f9bf.jpg)"></div>
                <div class="adminLink">
                    <a class="ebButton" href="#">編輯</a>
                    <a class="ebButton -type-error" href="#">停用</a>
                    <a class="ebButton -type-error" href="#">刪除</a>
                </div>
            </div>
        </div>

    </div>

</div>
<?php /* content end */ ?>






<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/ebe-project.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-project.js?ver=<?= rand(); ?>'></script>


<?php /* content start */ ?>
<div class="contentPane" id="ProjectHomeContentPane">

    <div id="headerPane" class="-expend">
        <div class="titlePanel">
            <i class="fa fal fa-ballot-check"></i>
            <h1>計畫總覽</h1>
        </div>
        <div class="filterPanel">

            <div class="filterItemGroup">

                <div class="filterItem" style="width: 112px;">
                    <div class="label">類群</div>
                    <div class="input">
                        <select class="ebInput -block -i-type">
                            <option value="all">全部</option>
                            <option value="Aves">鳥類</option>
                            <option value="Benthos">底棲生物</option>
                            <option value="Cetacean">鯨豚</option>
                            <option value="Fish">魚類</option>
                            <option value="UNoise">水下噪音</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem" style="width:224px;">
                    <div class="label">風場</div>
                    <div class="input">
                        <select class="ebInput -block -i-windfield">
                            <option value="all">全部</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem" style="width: 112px;">
                    <div class="label">關鍵字</div>
                    <div class="input">
                        <input class="ebInput -block -i-keyword">
                    </div>
                </div>

            </div>

            <div class="filterItemGroup">

                <div class="filterItem" style="width: 80px;">
                    <div class="label">狀態</div>
                    <div class="input">
                        <select class="ebInput -block -i-status">
                            <option value="all">全部</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem" style="width: 112px;">
                    <div class="label">開始日期</div>
                    <div class="input">
                        <input class="ebInput -block -type-date -i-dateStart">
                    </div>
                </div>

                <div class="filterItem" style="width: 112px;">
                    <div class="label">結束日期</div>
                    <div class="input">
                        <input class="ebInput -block -type-date -i-dateEnd">
                    </div>
                </div>

            </div>

            <div class="filterItemGroup">
                <div class="filterItem -submit">
                    <div class="button">
                        <div class="ebButton -action-search">
                            <i class="fa fas fa-search"></i>搜尋
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div id="projectPaneGroup">

        <div id="pProjectListPane">

            <div class="projectItemList">

                <div class="projectItem" data-status="進行中">
                    <div class="col1">
                        <div class="status">
                            <div class="statusText">進行中</div>
                            <div class="projectNo">#P000123</div>
                        </div>
                        <div class="name">離岸風場鳥類生態調查監測標準作業 建立計畫</div>
                        <div class="period">
                            <div class="label">計畫期間</div>
                            <div class="value">2018-02-01 - 2018-12-10</div>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="type">
                            <div class="label">調查類型</div>
                            <div class="value">鳥類</div>
                        </div>
                        <div class="windfield">
                            <div class="label">風　　場</div>
                            <div class="value">海洋竹南風力發電場</div>
                        </div>
                        <div class="openFolder">
                            <a class="ebButton -s" target="_blank" href="#">
                                <i class="fab fa-google-drive"></i>開啟計畫檔案資料夾<i class="fa fal fa-external-link tail"></i>
                            </a>
                        </div>
                    </div>
                    <div class="openDetial">
                        <div class="icon fa fal fa-arrow-right"></div>
                        <div class="label">詳情</div>
                    </div>
                </div>

            </div>

            <div class="addProjectItem">

            </div>

        </div>

        <div id="pProjectDetailPane">

            <div class="emptyMessage">
                <div class="label">點選左側清單<br>檢視計劃詳情</div>
            </div>
        </div>

        <div id="pSurvayDetailPane">
        </div>

    </div>

</div>
<?php /* content end */ ?>



<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
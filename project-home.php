<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>/assets/css/ebe-project.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-widget.js?ver=<?= rand(); ?>'></script>
<script type='text/javascript' src='<?= SITE_URL; ?>/assets/js/ebe-project.js?ver=<?= rand(); ?>'></script>
<script>
    $(window).on('load', Ebe.Page.ProjectHome.init );
</script>


<?php /* content start */ ?>
<div class="contentPane" id="ProjectHomeContentPane">

    <div id="headerPane" class="-expend">
        <div class="titlePanel">
            <i class="fa fal fa-ballot-check"></i>
            <h1>計畫總覽</h1>
        </div>
        <div id="filterPanel">

            <div class="filterItemGroup">

                <div class="filterItem" style="width: 112px;">
                    <div class="label">類群</div>
                    <div class="input">
                        <select class="ebInput -block -i-type">
                            <option value="ALL">全部</option>
                            <option value="AVES">鳥類</option>
                            <option value="BENTHOS">底棲生物</option>
                            <option value="CETACEAN">鯨豚</option>
                            <option value="FISH">魚類</option>
                            <option value="UNOISE">水下噪音</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem" style="width:224px;">
                    <div class="label">風場</div>
                    <div class="input">
                        <select class="ebInput -block -i-windfield">
                            <option value="ALL">全部</option>
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
                            <option value="ALL">全部</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem" style="width: 112px;">
                    <div class="label">開始日期</div>
                    <div class="input">
                        <div class="ebDatePicker -block">
                            <input type="text" class="-type-date -i-start_date">
                        </div>
                    </div>
                </div>

                <div class="filterItem" style="width: 112px;">
                    <div class="label">結束日期</div>
                    <div class="input">
                        <div class="ebDatePicker -block">
                            <input type="text" class="-type-date -i-end_date">
                        </div>
                    </div>
                </div>

            </div>

            <div class="filterItemGroup">
                <div class="filterItem -submit">
                    <div class="button">
                        <div class="ebButton -action-query">
                            <i class="fa fas fa-search"></i>查詢
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div id="projectPaneGroup">

        <div id="pProjectListPane">

            <div class="projectItemListPane">

                <div class="projectItem" eb-status="進行中">
                    <div class="col1">
                        <div class="status">
                            <div class="statusText">進行中</div>
                            <div class="projectNo">#P000123</div>
                        </div>
                        <div class="name -f-name">離岸風場鳥類生態調查監測標準作業 建立計畫</div>
                        <div class="period">
                            <div class="label">計畫期間</div>
                            <div class="value"><span class="-f-start_date">2018-02-01</span>
                                    - <span class="-f-end_date">2018-12-10<span></div>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="type">
                            <div class="label">調查類型</div>
                            <div class="value -f-type">鳥類</div>
                        </div>
                        <div class="windfield">
                            <div class="label">風　　場</div>
                            <div class="value -f-windfield_name">海洋竹南風力發電場</div>
                        </div>
                        <div class="openFolder">
                            <a class="ebButton -s -f-storageLink" target="_blank" href="#">
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

            <div class="messagePane">
                <div class="messageBody">
                    <div class="icon fal fa-info-circle"></div>
                    <div class="text"></div>
                </div>
            </div>

            <div class="floatButtons">
                <a class="ebFloatButton -action-goCreate fal fa-plus" target="_blank"
                        href="#">
                    <div class="bubbleLabel">建立新計畫</div>
                </a>
            </div>

        </div>

        <div id="pProjectDetailPane">

            <div class="projectDetailPane">

                <div class="projectDetailContentPane">
                    <div class="infoCard">
                        <div class="col1">
                            <div class="statusText -f-status_text">進行中</div>
                            <div class="projectNo -f-project_id">AAA0001</div>
                        </div>
                        <div class="col2">
                            <div class="name -f-name">離岸風場鳥類生態調查監測標準作業 建立計畫</div>
                            <div class="fn">
                                <div class="ebButton">編輯</div>
                                <div class="ebButton -type-error">刪除</div>
                            </div>
                        </div>
                    </div>

                    <div class="group -g-info" eb-collapse="expend">
                        <div class="titlebar">計畫屬性</div>
                        <div class="itemList">

                        </div>
                    </div>
                    <div class="group -g-adminList" eb-collapse="expend">
                        <div class="titlebar">計畫管理員</div>
                        <div class="itemList">
                            <table class="listTable -f-admin_list">
                                <thead><tr><th>名字</th><th>電子郵件</th></tr></thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                    <div class="group -g-userList" eb-collapse="expend">
                        <div class="titlebar">計畫成員</div>
                        <div class="itemList">
                            <table class="listTable -f-user_list">
                                <thead><tr><th>名字</th><th>電子郵件</th></tr></thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                    <div class="group -g-survayList" eb-collapse="expend">
                        <div class="titlebar">調查規劃</div>
                        <div class="itemList">
                            <table class="listTable -f-survay_list">
                                <thead><tr>
                                    <th>日期</th><th>類型</th>
                                    <th>狀態</th><th>檔案管理</th>
                                    <th></th>
                                </tr></thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="messagePane">
                <div class="messageBody">
                    <div class="icon fal fa-hand-point-left"></div>
                    <div class="text">由左側清單選取計畫<br>以檢視詳情</div>
                </div>
            </div>

        </div>

        <div id="pSurvayDetailPane">
        </div>

    </div>

</div>
<?php /* content end */ ?>


<script>

    // 設定 ajax
    // - 讀取計畫清單
    Ebe.Project.setGetListHandler(function( conds, handlers ){

        /* 資料格式
            conds = {
                type       : string 類群
                windfield  : string 風場
                keyword    : string 關鍵字
                status     : string 狀態
                start_date : string 開始日期
                end_date   : string 結束日期
                page       : number 分頁
                perPage    : number 每頁
            };

            handlers = {
                success : function( projectList ) array 專案物件列表
                failed  : function( [message] ) string 要顯示的訊息，預設為 "網路發生錯誤"
            }

            project = {
                id              :
                status          : string 狀態代碼
                status_text     : string 狀態文字
                project_id      : string 專案代碼
                name            :
                start_date      :
                end_date        :
                typeTextList    : array 類型的顯示文字 (鳥類等)
                windfield_name  : 風場名稱
                storageLink     : google 連結的網址
            }
        */

        // 執行查詢的 ajax
        // ...

        // 執行後呼叫
        // - 成功的話
        handlers.success([]);
        // - 失敗的話呼叫
        //     ICON 為 fontawesome
        //     - 錯誤請使用 exclamation-triangle
        //     - 訊息請使用 info-circle
        // handlers.failed( '連線發生錯誤', [ICON] );
    });

    // - 讀取計畫內容
    Ebe.Project.setGetDetailHandler(function( project_id, handlers ){

    });


    // 示範資料
    var SAMPLE_PROJECT_LIST = [
        {
            id              : 1,
            status          : "進行中",
            status_text     : "進行中",
            project_id      : "P000123",
            name            : "離岸風場鳥類生態調查監測標準作業 建立計畫",
            start_date      : "2018-02-01",
            end_date        : "2018-12-10",
            typeTextList    : [ "鳥類", "鯨豚" ],
            windfield_name  : "海洋竹南風力發電場",
            storageLink     : "#",
        },
        {
            id              : 2,
            status          : "進行中",
            status_text     : "進行中",
            project_id      : "P000123",
            name            : "離岸風場鳥類生態調查監測標準作業 建立計畫 2",
            start_date      : "2018-02-01",
            end_date        : "2018-12-10",
            typeTextList    : [ "鳥類", "鯨豚" ],
            windfield_name  : "海洋竹南風力發電場",
            storageLink     : "#",
        }
    ]; // SAMPLE_PROJECT_LIST

    var SAMPLE_PROJECT_DATA = {

        // 基本參數
        id              : 1,
        status          : "進行中",
        status_text     : "進行中",
        project_id      : "P000123",
        name            : "離岸風場鳥類生態調查監測標準作業 建立計畫",
        start_date      : "2018-02-01",
        end_date        : "2018-12-10",
        typeTextList    : [ "鳥類", "鯨豚" ],
        windfield_name  : "海洋竹南風力發電場",
        storageLink     : "#",
        note            : "",

        // 管理員
        admin_list : [
            {
                id    : 1,
                name  : "王大明",
                email : "some@email.com"
            },{
                id    : 2,
                name  : "王小明",
                email : "50me@email.com"
            }
        ],

        // 成員
        user_list : [
            {
                id    : 1,
                name  : "王大明",
                email : "some@email.com"
            },{
                id    : 2,
                name  : "王小明",
                email : "50me@email.com"
            }
        ],

        // 調查規劃
        survay_list : [
            {
                id          : 1,
                date        : "2020-01-01",
                name        : "儀器架設",
                status      : "進行中",
                status_text : "進行中",
                storageLink : "#",
            },
        ]
    }; // SAMPLE_PROJECT_DATA

    var SAMPLE_SURVAY_DATA = {};


</script>



<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
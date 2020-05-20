<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>assets/css/ebe-statistics.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-widget.js?ver=<?= rand(); ?>'></script>
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-statistics.js?ver=<?= rand(); ?>'></script>



<script>
$(function(){


    Ebe.Page.Statistics.init();


    // 示範資料
    var SAMPLE_SURVAY_LIST = [
        {
            id             : 11,
            status_text    : '執行中',
            type_text      : '儀器架設',
            date           : '2020-01-01',
            total_hour     : 5,
            port_name      : '港口',
            boat_name      : '黃金梅利號',
            note           : '說明',
            contact_name   : '王先生',
            note           : '說明',
            project : {
                id             : '12313',
                type           : 'Aves',
                type_text      : '鳥類',
                abbreviation   : '計畫短名',
                windfield_name : '海洋竹南風力發電場',
            },
            report         : {
                departure_time : '10:15',
                inbound_time   : '17:30',
            }
        },
        {
            id             : 12,
            status_text    : '執行中',
            type_text      : '儀器架設',
            date           : '2020-01-01',
            total_hour     : 5,
            port_name      : '港口',
            boat_name      : '黃金梅利號',
            note           : '說明',
            contact_name   : '王先生',
            note           : '說明',
            project : {
                id             : '12313',
                type           : 'Aves',
                type_text      : '鳥類',
                abbreviation   : '計畫短名',
                windfield_name : '海洋竹南風力發電場',
            },
            report         : {
                departure_time : '10:15',
                inbound_time   : '17:30',
            }
        },
        {
            id             : 13,
            status_text    : '執行中',
            type_text      : '儀器架設',
            date           : '2020-01-01',
            total_hour     : 5,
            port_name      : '港口',
            boat_name      : '黃金梅利號',
            note           : '說明',
            contact_name   : '王先生',
            note           : '說明',
            project : {
                id             : '12313',
                type           : 'Aves',
                type_text      : '鳥類',
                abbreviation   : '計畫短名',
                windfield_name : '海洋竹南風力發電場',
            },
            report         : {
                departure_time : '10:15',
                inbound_time   : '17:30',
            }
        }
    ]; // SAMPLE_SURVAY_LIST


    // 設定 ajax
    // - 讀取計畫清單
    Ebe.Page.Statistics.setQueryHandler('getSurvayList', function( conds, handlers ){

        console.log( 'getSurvayList', conds );

        /* 資料格式
            conds = {
                status     :
                type       :
                windfield  :
                port       :
                boat       :
                start_date :
                end_date   :
                order_by   : {
                    col    : 欄位
                    dir    : 方向 [asc|desc]
                }
                page       : number 分頁
                perPage    : number 每頁
            };

            conds.order_by.col = [
                status                : 狀態
                project_name          : 名稱，順序 = project.type, project.abbreviation
                survay_type           :
                date                  :
                total_hour            :
                windfield             :
                port                  :
                boat                  :
                contact_name          :
                report_departure_time : 時間，順序 = departure_time, inbound_time
            ]

            handlers = {
                success : function( projectList, pager ) array 專案物件列表
                failed  : function( [message] ) string 要顯示的訊息，預設為 "網路發生錯誤"
            }

            pager = {
                numRec   : 總筆數
                currPage : 目前頁碼 (1開始)
                perPage  : 每頁筆數 (50p)
            }

        */


        // 執行查詢的 ajax
        // ...


        // 執行後呼叫
        // - 成功的話
        var pager = {
            numRec    : 188,
            currPage  : conds.page,
            perPage   : 50
        }
        handlers.success( SAMPLE_SURVAY_LIST, pager );

        // - 沒結果就塞空白陣列
        // handlers.success([]);

        // - 失敗的話呼叫
        // handlers.failed( '連線發生錯誤', [ICON] );
        // handlers.failed( '連線發生錯誤', 'exclamation-triangle' );
        //     ICON 為 fontawesome
        //     - 錯誤請使用 exclamation-triangle
        //     - 訊息請使用 info-circle
    });

    // - 一開始先讀取一些資料
    Ebe.Page.Statistics.query();

});
</script>


<?php /* content start */ ?>
<div class="contentPane" id="ProjectHomeContentPane">

    <div id="headerPane" class="-expend">
        <div class="titlePanel">
            <i class="fa fal fa-clipboard-list-check"></i>
            <h1>執行現況</h1>
        </div>

        <div id="filterPanel">

            <div class="filterItemGroup">

                <div class="filterItem" style="width: 80px;">
                    <div class="label">狀態</div>
                    <div class="input">
                        <select class="ebInput -block -i-status">
                            <option value="ALL">全部</option>
                            <option value="執行中">執行中</option>
                            <option value="待執行">待執行</option>
                            <option value="已完成">已完成</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem" style="width: 96px;">
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

                <div class="filterItem" style="width:192px;">
                    <div class="label">風場</div>
                    <div class="input">
                        <select class="ebInput -block -i-windfield">
                            <option value="ALL">全部</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem" style="width: 96px;">
                    <div class="label">港口</div>
                    <div class="input">
                        <select class="ebInput -block -i-port">
                            <option value="ALL">全部</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem" style="width: 96px;">
                    <div class="label">船隻</div>
                    <div class="input">
                        <select class="ebInput -block -i-boat">
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


    <div id="bodyPane" class="statisticsBodyPane">

        <div class="contentScrollPane statisticsContentPane">

            <table class="listTable" id="survayListTable">
                <thead>
                    <tr>
                        <th class="-action-sort" data-sort-col="status" data-sort-dir="null" style="width:  64px">狀態</th>
                        <th class="-action-sort" data-sort-col="project_name" data-sort-dir="null" style="width: 128px">作業規劃</th>
                        <th class="-action-sort" data-sort-col="survay_type" data-sort-dir="null" style="width:  88px">監測計畫</th>
                        <th class="-action-sort" data-sort-col="date" data-sort-dir="null" style="width:  96px">日期</th>
                        <th class="-action-sort" data-sort-col="total_hour" data-sort-dir="null" style="width:  80px">預計時間</th>
                        <th class="-action-sort" data-sort-col="windfield" data-sort-dir="null" style="width: 176px">風場</th>
                        <th class="-action-sort" data-sort-col="port" data-sort-dir="null" style="width:  88px">港口</th>
                        <th class="-action-sort" data-sort-col="boat" data-sort-dir="null" style="width:  88px">船隻</th>
                        <th class="-action-sort" data-sort-col="report_departure_time" data-sort-dir="null" style="width:  88px">進出港時間</th>
                        <th style="width:  auto">執行內容</th>
                        <th class="-action-sort" data-sort-col="contact_name" data-sort-dir="null" style="width:  80px">聯絡人</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

            <div class="messagePane">
                <div class="messageBody">
                    <div class="icon fal fa-info-circle"></div>
                    <div class="text"></div>
                </div>
            </div>

        </div>

        <div class="contentControlPane statisticsControlPane">
            <div class="statisticsPane">
                <div class="stGroup">
                    <div class="lable">作業規畫</div>
                    <div class="stItem" data-prop="執行中" onclick="Ebe.Page.Statistics.setFilter('status', '執行中')">執行中 <i>0</i></div>
                    <div class="stItem" data-prop="待執行" onclick="Ebe.Page.Statistics.setFilter('status', '待執行')">待執行 <i>0</i></div>
                    <div class="stItem" data-prop="已完成" onclick="Ebe.Page.Statistics.setFilter('status', '已完成')">已完成 <i>0</i></div>
                    <div class="stItem" data-prop="TOTAL" onclick="Ebe.Page.Statistics.setFilter('status', 'ALL')">總數 <i>0</i></div>
                </div>
                <div class="stGroup">
                    <div class="stItem">港口 <i>0</i></div>
                    <div class="stItem">船隻 <i>0</i></div>
                    <div class="stItem">風場 <i>0</i></div>
                </div>

            </div>
            <div class="pagerPane" id="pagerPane">
            </div>
        </div>

        <div class="messagePane"></div>

    </div>

</div>


<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
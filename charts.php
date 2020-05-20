<?php include "htmlHeader.appMode.php" ?>
<?php include "header.v2.php" ?>


<link rel='stylesheet' href='<?= SITE_URL; ?>assets/css/ebe-chart.css?ver=<?= rand(); ?>' type='text/css' media='all' />
<script type='text/javascript' src='<?= SITE_URL; ?>assets/js/ebe-chart.js?ver=<?= rand(); ?>'></script>

<script>
$(function(){
    Ebe.Page.Chart.init();
});
</script>


<div class="contentPane" id="chartContentPane">

    <div id="headerPane" class="-expend">
        <div class="titlePanel">
            <i class="fa fal fa-analytics"></i>
            <h1>統計圖表</h1>
        </div>

        <div id="filterPanel">

            <div class="filterItemGroup">

                <div class="filterItem" style="width: 80px;">
                    <div class="label">時間</div>
                    <div class="input">
                        <select class="ebInput -block -i-year_begin">
                            <option value="NOT_SET">不限</option>
                            <option value="2019">2019 年</option>
                            <option value="2018">2018 年</option>
                        </select>
                    </div>
                </div>

                <div class="filterItem -to">
                    <div class="label">&nbsp;</div>
                    <div class="input">~</div>
                </div>

                <div class="filterItem" style="width: 80px;">
                    <div class="label">&nbsp;</div>
                    <div class="input">
                        <select class="ebInput -block -i-year_begin">
                            <option value="NOT_SET">不限</option>
                            <option value="2019">2019 年</option>
                            <option value="2018">2018 年</option>
                        </select>
                    </div>
                </div>

            </div>
            <div class="filterItemGroup">

                <div class="filterItem" style="width: 192px;">
                    <div class="label">風場</div>
                    <div class="input">
                            <select class="ebInput -block -i-windfield">
                                <option value="ALL">全部</option>
                            </select>
                    </div>
                </div>

            </div>
            <div class="filterItemGroup">

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

            </div>
            <div class="filterItemGroup">
                <div class="filterItem -submit">
                    <div class="button">
                        <div class="ebButton -action-query">
                            <i class="fa fas fa-analytics"></i>顯示圖表
                        </div>
                        <div class="ebButton -action-query">
                            <i class="fa fas fa-cloud-download"></i>下載資料
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="bodyPane" class="chartBodyPane">

        <div class="contentScrollPane">

            <div id="chartPane">
                <div id="chartCanvasWrapper">
                    <div id="chartCanvasWrapper2">
                        <div id="chartCanvas" style="width: 900px; height: 600px">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5EAAAEsCAYAAABaGTc9AAAgAElEQVR4Xu3df6xkV10A8ON/24iYTdcqabrQTUOJiRTZzQN/BasGWNKii6EqaGOgWF2ljbasBXZZyi4UgY3pohsrFRNUgm1kEzGKDYpGMdLskqJoBOsWa2oRt908FLv/Yc5N7uS+2XnvnffeOW9mvvOZf9q378z33vP5zjdzvu/cufNN3/jGN76RPAgQIECAAAECBAgQIECAQIHAN2kiC5QMIUCAAAECBAgQIECAAIFOQBPphUCAAAECBAgQIECAAAECxQKayGIqAwkQIECAAAECBAgQIEBAE+k1QIAAAQIECBAgQIAAAQLFAprIYioDCRAgQIAAAQIECBAgQEAT6TVAgAABAgQIECBAgAABAsUCmshiKgMJECBAgAABAgQIECBAQBPpNUCAAAECBAgQIECAAAECxQKayGIqAwkQIECAAAECBAgQIEBAE+k1QIAAAQIECBAgQIAAAQLFAprIYioDCRAgQIAAAQIECBAgQEAT6TVAgAABAgQIECBAgAABAsUCmshiKgMJECBAgAABAgQIECBAQBPpNUCAAAECBAgQIECAAAECxQKayGIqAwkQIECAAAECBAgQIEBAE+k1QIAAAQIECBAgQIAAAQLFAprIYioDCRAgQIAAAQIECBAgQEAT6TVAgAABAgQIECBAgAABAsUCmshiKgMJECBAgAABAgQIECBAQBPpNUCAAAECBAgQIECAAAECxQKayGIqAwkQIECAAAECBAgQIEBAE+k1QIAAAQIECBAgQIAAAQLFAprIYioDF1HgM5/5TPq93/u99Ou//uvpsssu6wieeeaZ9Mu//MvpB37gB9LrX//6FSzHjh1L73jHO7p/u/XWW9Ozn/3s9P73v38i3d/+7d+m7/u+71tEVnMmQIAAAQIECBCYYwFN5Bwnr/TU/+AP/iD99E//9LrDr7vuuvSHf/iH6dprrx2Nzc/9m7/5mxVN1GqBnnrqqa6p+vM///NVjzXpGLlRy81XPtbll18+eu6kBi7/suQ4r3jFK0bxvvjFL6af+ImfSJ///OdXnFdu8n78x388vfzlL+/+fficScd56KGH0h/90R+l++67b0Wc4ZzyPPbs2ZP27duXfud3fifdfffdXfOZ5/L93//9abXGMc/pl37pl9I73/nOzj+f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">
                        </div>
                    </div>
                </div>
            </div>

            <div id="tablePane">

                <table class="listTable" id="chartDataTable">
                    <thead>
                        <tr>
                            <th>欄位名稱</th>
                            <th>數量</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                        <tr>
                            <td>欄位名稱</td>
                            <td>數量</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</div>


<?php include "footer.v2.php" ?>
<?php include "htmlFooter.php" ?>
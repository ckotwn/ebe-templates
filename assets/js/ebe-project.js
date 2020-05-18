(function(){


    window.Ebe.Project = (function(){
        var _getListHandler   = null;
        var _getDetailHandler = null;

        function setGetListHandler( handler ){
            _getListHandler = handler;
        }


        function setGetDetailHandler( handler ){
            _getDetailHandler = handler;
        }


        function queryProject( conds, handler ){
            X.getList( conds, handler );
        }


        function getDetail( project_id, handler ){
            X.getDetail( project_id, handler );
        }


        var X = (function(){

            function getList( conds, handler ){
                _getListHandler( conds, handler );
            }

            function getDetail( project_id, handler ){
                _getDetailHandler( project_id, handler );
            }

            return {
                getList   : getList,
                getDetail : getDetail
            }
        })();


        return {
            X : X,
            setGetListHandler   : setGetListHandler,
            setGetDetailHandler : setGetDetailHandler,
            queryProject        : queryProject,
            getDetail           : getDetail
        };
    })();


    window.Ebe.Survay = (function(){
        var _getDetailHandler = null;


        function setGetDetailHandler( handlerFn ){
            _getDetailHandler = handlerFn;
        }


        function getDetail( project_id, handler ){
            X.getDetail( project_id, handler );
        }


        var X = (function(){

            function getDetail( survay_id, handler ){
                _getDetailHandler( survay_id, handler );
            }

            return {
                getDetail        : getDetail
            }
        })();


        return {
            X : X,
            getDetail : getDetail,
            setGetDetailHandler : setGetDetailHandler,
        }
    })();


    window.Ebe.Page.ProjectHome = (function(){

        var Pane = {};

        var $filter;

        var currentProjectId = null;
        var condsUpdated     = false;
        var lastQueryConds   = null;

        // 初始化
        function init(){

            // assign button
            $('.-action-query').on('click', queryClickHandler);
        }


        function queryClickHandler( e ){
            query();
        }


        function query( conds ){

            if( conds == undefined ){
                $filter = $('#filterPanel');

                var conds = {
                    type       : $filter.find('.-i-type')     .val(),
                    windfield  : $filter.find('.-i-windfield').val(),
                    keyword    : $filter.find('.-i-keyword')  .val(),
                    status     : $filter.find('.-i-status')   .val(),
                    start_date : $filter.find('.-i-start_date').val(),
                    end_date   : $filter.find('.-i-end_date')  .val(),
                    page       : 1,
                    perPage    : Pane.ProjectList.DEFAULT_PER_PAGE
                };
            }

            if( conds.perPage == undefined || parseInt(conds.perPage) == 0 ){
                conds.perPage = Pane.ProjectList.DEFAULT_PER_PAGE
            }

            condsUpdated = true;
            doQuery( conds );
        }


        function doQuery( conds ){

            lastQueryConds = conds;

            Pane.ProjectList.clear();
            Pane.ProjectList.showMessage( "查詢中", "search" );
            Ebe.Project.queryProject( conds, {
                success : Pane.ProjectList.setItemArray,
                failed  : Pane.ProjectList.showMessage,
            });
        }


        function viewProjectDetail( project_id ){

            currentProjectId = project_id;
            $('.-project-' +  project_id ).addClass('-active')
                    .siblings().removeClass('-active');

            Ebe.Project.getDetail( project_id, {
                success : Pane.ProjectDetail.setContent,
                failed  : Pane.ProjectDetail.showMessage,
            });
        }


        function viewSurvayDetail( survay_id ){

            $('#projectPaneGroup').addClass('-mode-viewSurvay');

            $('.-survay-' +  survay_id ).addClass('-active')
                    .siblings().removeClass('-active');

            Ebe.Survay.getDetail( survay_id, {
                success : Pane.SurvayDetail.setContent,
                failed  : Pane.SurvayDetail.showMessage,
            });

        }


        function getCurrentProjectId(){
            return currentProjectId;
        }


        Pane.ProjectList = (function(){

            var DEFAULT_PER_PAGE = 50;

            var Pager = (function(){

                var currPager = {
                    total    : 1,
                    currPage : 1,
                    perPage  : DEFAULT_PER_PAGE
                };

                function init(){

                    $el = $('.projectItemListPager');
                    $el.find('.-action-goBack').on('click',  goBack );
                    $el.find('.-action-goNext').on('click',  goNext );
                    $el.find('.-action-goPage').on('change', function(e){ goPage( $(e.currentTarget).val() ) });
                }
                $(window).on('load', function(){
                    if( $('.projectItemListPager').length >= 1 ){
                        init();
                    }
                });

                function getPager(){
                    return currPager;
                }

                function update( pager ){
                    if( pager        == undefined ){
                        $('.projectItemListPager').hide();
                        return;
                    }

                    currPager = pager;
                    if( condsUpdated == false ) return;

                    if( pager.total > 1 ){

                        pager.totalPage = Math.ceil( pager.total / pager.perPage );

                        // build pager
                        $('.projectItemListPager select').empty();
                        for( var p = 1; p <= pager.totalPage; p++ ){
                            var $o = $('<option>').val( p ).text( '第' + p + ' 頁');
                            if( p == pager.currPage ) $o.prop( 'selected', true );
                            $('.projectItemListPager select').append( $o );
                        }

                        // total page
                        $('.projectItemListPager .totalPage').text('共 '+ pager.totalPage +' 頁 / '+ pager.total +' 筆');

                        $('.projectItemListPager').show();
                    }else{
                        $('.projectItemListPager').hide();
                    }
                }

                function goBack(){
                    var pHome = Ebe.Page.ProjectHome;
                    var pList = Ebe.Page.ProjectHome.Pane.ProjectList;
                    var currPager = pList.Pager.getPager();

                    if( currPager.currPage == 1 ) return;
                    var nextPage = parseInt(currPager.currPage) - 1;

                    newQueryConds = $.extend( {}, lastQueryConds );
                    newQueryConds.page = nextPage;

                    $('.projectItemListPager select').val( nextPage );
                    pHome.doQuery( newQueryConds );
                }

                function goNext(){

                    var pHome = Ebe.Page.ProjectHome;
                    var pList = Ebe.Page.ProjectHome.Pane.ProjectList;
                    var currPager = pList.Pager.getPager();

                    if( currPager.currPage == currPager.totalPage ) return;
                    var nextPage = parseInt(currPager.currPage) + 1;

                    newQueryConds = $.extend( {}, lastQueryConds );
                    newQueryConds.page = nextPage;

                    $('.projectItemListPager select').val( nextPage );
                    pHome.doQuery( newQueryConds );
                }

                function goPage( page ){
                    var pHome = Ebe.Page.ProjectHome;
                    var pList = Ebe.Page.ProjectHome.Pane.ProjectList;
                    var currPager = pList.Pager.getPager();

                    newQueryConds = $.extend( {}, lastQueryConds );
                    newQueryConds.page = parseInt( page );

                    pHome.doQuery( newQueryConds );
                }

                return {
                    init     : init,
                    getPager : getPager,
                    update   : update,
                    goBack   : goBack,
                    goNext   : goNext,
                    goPage   : goPage
                };
            })();


            function clear(){
                $('#pProjectListPane .projectItemListPane').empty();
            }

            function setItemArray( projectList, pager ){

                Pager.update( pager );

                if( currentProjectId == null ){
                    Pane.ProjectDetail.showMessage( '由左側清單選取計畫<br>以檢視詳情', 'hand-point-left' );
                }

                if( projectList.length == 0 ){
                    showMessage( "沒有符合條件的項目" );
                    return;
                }

                for( var i in projectList ){
                    var row = projectList[i];
                    addRow( row );
                }
                hideMessage();
                $('#pProjectListPane .projectItemListPane').show();
            }

            function addRow( row ){

                var $row = $('<div class="projectItem">'
                        + '<div class="col1">'
                        + '<div class="status">'
                            + '<div class="statusText -f-status_text"></div>'
                            + '<div class="projectNo -f-project_id"></div>'
                        + '</div>'
                        + '<div class="name -f-name"></div>'
                        + '<div class="period">'
                            + '<div class="label">計畫期間</div>'
                            + '<div class="value"><span class="-f-start_date"></span> - <span class="-f-end_date"><span></div>'
                        + '</div>'
                    + '</div>'
                    + '<div class="col2">'
                        + '<div class="type"><div class="label">調查類型</div><div class="value -f-type_list"></div></div>'
                        + '<div class="windfield"><div class="label">風　　場</div><div class="value -f-windfield_name"></div></div>'
                        + '<div class="openFolder">'
                            + '<a class="ebButton -s -f-storageLink" target="_blank" href="#">'
                                + '<i class="fab fa-google-drive"></i>開啟計畫檔案資料夾<i class="fa fal fa-external-link tail"></i>'
                            + '</a>'
                        + '</div>'
                    + '</div>'
                    + '<div class="openDetial -action-viewProjectDetail">'
                        + '<div class="icon fa fal fa-arrow-right"></div>'
                        + '<div class="label">詳情</div>'
                    + '</div>'
                + '</div>');

                $row.addClass('-project-' + row.id);
                $row.data('srcData', row);
                $row.attr({
                    'data-id'     : row.id,
                    'data-status' : row.status
                });
                $row.find('.-f-status_text')   .text( row.status_text );
                $row.find('.-f-project_id')    .text( row.project_id );
                $row.find('.-f-type_list')     .text( row.typeTextList.join('、') );
                $row.find('.-f-name')          .text( row.name );
                $row.find('.-f-start_date')    .text( row.start_date );
                $row.find('.-f-end_date')      .text( row.end_date );
                $row.find('.-f-windfield_name').text( row.windfield_name );
                $row.find('.-f-storageLink')   .prop( 'href', row.storageLink );

                $row.find('.-action-viewProjectDetail').on( 'click', function(){
                    var $row = $(this).parents('.projectItem');

                    $row.addClass('-active').siblings().removeClass('-active');
                    currentProject = project_id;

                    var project_id = $row.attr( "data-id" );
                    viewProjectDetail( project_id );
                });

                $('#pProjectListPane .projectItemListPane').append( $row );
            }

            function showMessage( message, icon ){
                if( message == undefined ) mesage = '發生錯誤';

                var $list    = $('#pProjectListPane .projectItemListPane');
                var $msg     = $('#pProjectListPane .messagePane');
                var $msgText = $msg.find('.text');
                var $msgIcon = $msg.find('.icon');

                $list.empty().hide();

                $msg.show();
                $msgText.html( message );$msgIcon.show()
                $msgIcon.removeClass(function(i,c){return (c.match (/(^|\s)fa-\S+/g) || []).join(' ')});

                if( icon != undefined ){
                    $msgIcon.show().addClass('fa-' + icon);
                }else{
                    $msgIcon.hide();
                }
            }

            function hideMessage(){
                $('#pProjectListPane .messagePane').hide();
            }

            return {
                DEFAULT_PER_PAGE : DEFAULT_PER_PAGE,
                Pager        : Pager,
                clear        : clear,
                addRow       : addRow,
                setItemArray : setItemArray,
                showMessage  : showMessage,
                hideMessage  : hideMessage
            };
        })();


        Pane.ProjectDetail = (function(){

            function setContent( projectData ){

                var $w = $('#pProjectDetailPane .projectDetailContentPane');

                // 計畫屬性
                $w.attr( 'data-status', projectData.status );
                $w.find('.-f-name')          .text( projectData.name );
                $w.find('.-f-project_id')    .text( projectData.project_id );
                $w.find('.-f-status_text')   .text( projectData.status_text );
                $w.find('.-f-start_date')    .text( projectData.start_date );
                $w.find('.-f-end_date')      .text( projectData.end_date );
                $w.find('.-f-typeTextList')  .text( projectData.typeTextList.join('、') );
                $w.find('.-f-windfield_name').text( projectData.windfield_name );
                $w.find('.-f-note')          .text( projectData.note );
                $w.find('.-f-storageLink')   .attr( 'href', projectData.storageLink );

                if( projectData.editLink ){ $w.find('.-f-editLink').attr( 'href', projectData.editLink ).show(); }
                else{ $w.find('.-f-editLink').attr( 'href', '#' ).hide(); }

                if( projectData.deleteLink ){ $w.find('.-f-deleteLink').attr( 'href', projectData.deleteLink ).show(); }
                else{ $w.find('.-f-deleteLink').attr( 'href', '#' ).hide(); }

                if( projectData.createSurvayLink ){ $w.find('.-f-createSurvayLink').attr( 'href', projectData.createSurvayLink ).show(); }
                else{ $w.find('.-f-createSurvayLink').attr( 'href', '#' ).hide(); }

                $w.find('.-f-admin_list tbody') .empty();
                $w.find('.-f-user_list tbody')  .empty();
                $w.find('.-f-survay_list tbody').empty();

                // 計畫管理員清單
                for( var i in projectData.admin_list ){
                    var a = projectData.admin_list[i];
                    var $r = $('<tr><td>'+ a.name +'</td><td>'+ a.email +'</td><td width=48></td></tr>');
                    $r.attr('data-id', a.id);
                    $w.find('.-f-admin_list tbody').append($r);
                }

                // 計畫成員清單
                for( var i in projectData.user_list ){
                    var u = projectData.user_list[i];
                    var $r = $('<tr><td>'+ u.name +'</td><td>'+ u.email +'</td><td width=48></td></tr>');
                    $r.attr('data-id', u.id);
                    $w.find('.-f-user_list tbody').append($r);
                }

                // 調查規劃清單
                for( var i in projectData.survay_list ){
                    var s = projectData.survay_list[i];
                    var $r = $('<tr>'
                            + '<td>'+ s.date +'</td>'
                            + '<td>'+ s.name +'</td>'
                            + '<td>'+ s.status_text +'</td>'
                            + '<td>'
                                + '<a class="ebButton -s -f-storageLink" target="_blank" href="'+ s.storageLink +'">'
                                    + '<i class="fab fa-google-drive"></i>開啟計畫檔案資料夾<i class="fa fal fa-external-link tail"></i>'
                                + '</a>'
                            + '</td>'
                            + '<td width=48 aligh=right>'
                                + '<div class="-link -action-viewSurvayDetail">詳情 <i class="fal fa-arrow-right"></i></div>'
                            + '</td>'
                        + '</tr>');
                    $r.addClass('-survay-' + s.id);
                    $r.attr('data-id', s.id);
                    $r.find('.-action-viewSurvayDetail').on('click', function(){ viewSurvayDetail( $(this).parents('tr').attr('data-id') ) })

                    $w.find('.-f-survay_list tbody').append($r);
                }

                hideMessage();
                $w.show();
            }

            function showMessage( mesage, icon ){
                if( mesage == undefined ) mesage = '發生錯誤';

                var $content = $('#pProjectDetailPane .projectDetailContentPane');
                var $msg     = $('#pProjectDetailPane .messagePane');
                var $msgText = $msg.find('.text');
                var $msgIcon = $msg.find('.icon');

                $content.hide();

                $msg.show();
                $msgText.html( mesage );$msgIcon.show()
                $msgIcon.removeClass(function(i,c){return (c.match (/(^|\s)fa-\S+/g) || []).join(' ')});

                if( icon != undefined ){
                    $msgIcon.show().addClass('fa-' + icon);
                }else{
                    $msgIcon.hide();
                }
            }

            function hideMessage(){
                $('#pProjectDetailPane .messagePane').hide();
            }

            return {
                setContent   : setContent,
                showMessage  : showMessage,
                hideMessage  : hideMessage
            }
        })();


        Pane.SurvayDetail = (function(){

            $(window).on('load', function(){
                $('#pSurvayDetailPane .-action-closeSurvayDetail').on('click', function(){
                    $('#projectPaneGroup').removeClass('-mode-viewSurvay');
                });
            })

            function setContent( survayData ){

                var $w = $('#pSurvayDetailPane .survayDetailContentPane');

                // 計畫屬性
                $w.attr( 'data-status', survayData.status );
                $w.find('.-f-name')          .text( survayData.name );
                $w.find('.-f-survay_id')     .text( survayData.survay_id );
                $w.find('.-f-status_text')   .text( survayData.status_text );
                $w.find('.-f-date')          .text( survayData.date );
                $w.find('.-f-total_hour')    .text( survayData.total_hour );
                $w.find('.-f-contact_name')  .text( survayData.contact_name );
                $w.find('.-f-contact_phone') .text( survayData.contact_phone );
                $w.find('.-f-note')          .text( survayData.note );
                $w.find('.-f-boat_name')     .text( survayData.boat_name );

                if( survayData.editLink ){ $w.find('.-f-editLink').attr( 'href', survayData.editLink ).show(); }
                else{ $w.find('.-f-editLink').attr( 'href', '#' ).hide(); }

                if( survayData.deleteLink ){ $w.find('.-f-reportLink').attr( 'href', survayData.reportLink ).show(); }
                else{ $w.find('.-f-reportLink').attr( 'href', '#' ).hide(); }

                if( survayData.deleteLink ){ $w.find('.-f-deleteLink').attr( 'href', survayData.deleteLink ).show(); }
                else{ $w.find('.-f-deleteLink').attr( 'href', '#' ).hide(); }

                $w.find('.-f-user_list tbody')  .empty();
                $w.find('.-f-entourage_list tbody').empty();

                // 檔案
                var wg1 = Ebe.Widget.FolderListBox.init('#swg1');
                wg1.addFolderTree(survayData.folder_list);

                // 計畫成員清單
                for( var i in survayData.user_list ){
                    var u = survayData.user_list[i];
                    var $r = $('<tr><td>'+ u.name +'</td><td>'+ u.email +'</td><td width=48></td></tr>');
                    $r.attr('data-id', u.id);
                    $w.find('.-f-user_list tbody').append($r);
                }

                // 計畫成員清單
                for( var i in survayData.entourage_list ){
                    var u = survayData.entourage_list[i];
                    var $r = $('<tr><td>'+ u.name +'</td><td>'+ u.phone +'</td><td>'+ u.email +'</td><td width=48></td></tr>');
                    $w.find('.-f-entourage_list tbody').append($r);
                }

                // 測站
                var wg4 = Ebe.Widget.ListBox.init('#swg4', Ebe.Widget.Station.TABLE_CONFIG[ survayData.station_list_type ]);
                wg4.addRowArray( survayData.station_list );

                hideMessage();
                $w.show();
            }

            function showMessage( message, icon ){
                if( message == undefined ) message = '發生錯誤';

                var $content = $('#pProjectDetailPane .projectDetailContentPane');
                var $msg     = $('#pProjectDetailPane .messagePane');
                var $msgText = $msg.find('.text');
                var $msgIcon = $msg.find('.icon');

                $content.hide();

                $msg.show();
                $msgText.html( message );
                $msgIcon.show()
                $msgIcon.removeClass(function(i,c){return (c.match (/(^|\s)fa-\S+/g) || []).join(' ')});

                if( icon != undefined ){
                    $msgIcon.show().addClass('fa-' + icon);
                }else{
                    $msgIcon.hide();
                }
            }

            function hideMessage(){
                $('#pProjectDetailPane .messagePane').hide();
            }

            return {
                setContent   : setContent,
                showMessage  : showMessage,
                hideMessage  : hideMessage
            }
        })();


        return {
            Pane    : Pane,
            init    : init,
            query   : query,
            doQuery : doQuery,
            getCurrentProjectId : getCurrentProjectId,
            viewProjectDetail   : viewProjectDetail,
            viewSurvayDetail    : viewSurvayDetail
        }
    })();


})();
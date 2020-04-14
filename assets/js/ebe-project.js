(function(){


    window.Ebe.Project = (function(){
        var _getListHandler   = null;
        var _getDetailHandler = null;

        function setGetListHandler( handlerFn ){
            _getListHandler = handlerFn;
        }


        function setGetDetailHandler( handlerFn ){
            _getDetailHandler = handlerFn;
        }


        function queryProject( conds, handler ){
            X.getList( conds, handler );
        }


        function getProjectDetail( project_id ){
            X._getDetailHandler( project_id );
        }


        var X = (function(){

            function getList( conds, handler ){
                _getListHandler( conds, handler );
            }

            function getDetail( project_id ){
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
            getProjectDetail    : getProjectDetail
        };
    })();


    window.Ebe.Survay = (function(){
        var _getDetailHandler = null;


        function setGetDetailHandler( handlerFn ){
            _getDetailHandler = handlerFn;
        }


        var X = (function(){

            function getDetail( survay_id ){
                _getDetailHandler( survay_id, handler );
            }

            return {
                getDetail        : getDetail
            }
        })();


        return {
            X : X,
            setGetDetailHandler : setGetDetailHandler,
        }
    })();


    window.Ebe.Page.ProjectHome = (function(){

        var Pane = {};

        var $filter;

        var currentProject;


        // 初始化
        function init(){

            // assign button
            $('.-action-query').on('click', queryClickHandler);
        }


        function queryClickHandler( e ){
            $filter = $('#filterPanel');

            var conds = {
                type       : $filter.find('.-i-type')     .val(),
                windfield  : $filter.find('.-i-windfield').val(),
                keyword    : $filter.find('.-i-keyword')  .val(),
                status     : $filter.find('.-i-status')   .val(),
                start_date : $filter.find('.-i-start_date').val(),
                end_date   : $filter.find('.-i-end_date')  .val(),
                page       : 1,
                perPage    : 50
            };

            Pane.ProjectList.clear();
            Pane.ProjectList.showMessage( "查詢中", "search" );
            Ebe.Project.queryProject( conds, {
                success : Pane.ProjectList.setItemArray,
                failed  : Pane.ProjectList.showMessage,
            });
        }


        Pane.ProjectList = (function(){

            function clear(){
                $('#pProjectListPane .projectItemListPane').empty();
            }

            function setItemArray( projectList ){

                if( projectList.length == 0 ){
                    showMessage( "沒有符合條件的項目" );
                    return;
                }

                for( var i in projectList ){
                    var row = projectList[i];
                    addRow( row );
                }

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

                $row.data('srcData', row);
                $row.attr({
                    'eb-id'     : row.id,
                    'eb-status' : row.status
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

                    var project_id = $row.attr( "eb-id" );
                    Ebe.Project.getProjectDetail( project_id );
                });

                $('#pProjectListPane .projectItemListPane').append( $row );
            }

            function showMessage( mesage, icon ){
                if( mesage == undefined ) mesage = '發生錯誤';

                var $list    = $('#pProjectListPane .projectItemListPane');
                var $msg     = $('#pProjectListPane .messagePane');
                var $msgText = $msg.find('.text');
                var $msgIcon = $msg.find('.icon');

                $list.empty().hide();

                $msg.show();
                $msgText.html( mesage );$msgIcon.show()
                $msgIcon.removeClass(function(i,c){return (c.match (/(^|\s)fa-\S+/g) || []).join(' ')});

                if( icon != undefined ){
                    $msgIcon.show().addClass('fa-' + icon);
                }else{
                    $msgIcon.hide();
                }
            }

            return {
                clear        : clear,
                addRow       : addRow,
                setItemArray : setItemArray,
                showMessage  : showMessage
            };
        })();


        Pane.ProjectDetail = (function(){

            function setContent(){

            }

        })();


        Pane.SurvayDetail = (function(){
        })();


        return {
            init : init
        }
    })();


})();
(function(){
    window.Ebe.Page = window.Ebe.Page || {};


    window.Ebe.Page.Statistics = (function(){


        var Pane  = {};
        var Pager = null;

        var queryHandler = {};

        var condsUpdated     = false;
        var lastQueryConds   = null;

        var DEFAULT_PER_PAGE = 50;


        function init(){

            Pager = Ebe.Widget.Pager.init('#pagerPane');

            Pager.pageChangeHandler = function( pager ){

                var newQueryConds = $.extend( {}, lastQueryConds );
                newQueryConds.page = pager.currPage;
                doQuery( newQueryConds );
            };

            // assign button
            $('.-action-query').on('click', queryClickHandler);
        }


        function queryClickHandler( e ){
            query();
        }


        function query( conds ){

            if( conds == undefined ){
                var $filter = $('#filterPanel');

                var conds = {
                    status     : $filter.find('.-i-status')    .val(),
                    type       : $filter.find('.-i-type')      .val(),
                    windfield  : $filter.find('.-i-windfield') .val(),
                    port       : $filter.find('.-i-port')      .val(),
                    boat       : $filter.find('.-i-boat')      .val(),
                    start_date : $filter.find('.-i-start_date').val(),
                    end_date   : $filter.find('.-i-end_date')  .val(),
                    page       : 1,
                    perPage    : DEFAULT_PER_PAGE
                };
            }

            if( conds.perPage == undefined || parseInt(conds.perPage) == 0 ){
                conds.perPage = DEFAULT_PER_PAGE;
            }

            condsUpdated = true;
            doQuery( conds );
        }


        function doQuery( conds ){

            lastQueryConds = conds;

            Pane.ListPane.clear();
            Pane.ListPane.showMessage( "查詢中", "search" );
            X.getSurvayList( conds, {
                success : Pane.ListPane.setContent,
                failed  : Pane.ListPane.showMessage,
            });
        }


        function setFilter( fieldName, value ){
            var $filter = $('#filterPanel');
            $filter.find('.-i-' + fieldName).val( value );
            query();
        }


        function setQueryHandler( handlerName, handler ){
            queryHandler[ handlerName ] = handler;
        }


        Pane.ListPane = (function(){

            function show(){
                $('#survayListTable').show();
            }

            function hide(){
                $('#survayListTable').hide();
            }

            function clear(){
                $('#survayListTable tbody').empty();
            }

            function addRow( row ){

                var survay_time_text = "--";
                if( row.report.departure_time != null || row.report.inbound_time != null ){
                    survay_time_text = row.report.departure_time + "~" + row.report.inbound_time;
                }

                var $row = $('<tr>'
                            + '<td data-datatype="text">' + row.status_text + '</td>'
                            + '<td data-datatype="text">' + row.project.type_text + '-'+ row.project.abbreviation +'</td>'
                            + '<td data-datatype="text">' + row.type_text + '</td>'
                            + '<td data-datatype="text">' + row.date + '</td>'
                            + '<td data-datatype="text">' + row.total_hour + ' 小時</td>'
                            + '<td data-datatype="text">' + row.project.windfield_name + '</td>'
                            + '<td data-datatype="text">' + row.port_name + '</td>'
                            + '<td data-datatype="text">' + row.boat_name + '</td>'
                            + '<td data-datatype="text">' + survay_time_text + '</td>'
                            + '<td data-datatype="text">' + row.note + '</td>'
                            + '<td data-datatype="text">' + row.contact_name + '</td>'
                        +'</tr>');

                $('#survayListTable tbody').append( $row );
            }

            function setContent( itemList, pager ){

                Pager.update( pager );

                if( itemList.length == 0 ){
                    console.log( 1 );
                    showMessage( "沒有符合條件的項目" );
                    return;
                }

                for( var i in itemList ){
                    var row = itemList[i];
                    addRow( row );
                }
                hideMessage();

                $('#survayListTable').show();
            }

            function showMessage( message, icon ){
                if( message == undefined ) message = '發生錯誤';

                var $msg     = $('.statisticsContentPane .messagePane');
                var $msgText = $msg.find('.text');
                var $msgIcon = $msg.find('.icon');

                $msg.show();
                $msgText.html( message );
                $msgIcon.show()
                $msgIcon.removeClass(function(i,c){return (c.match (/(^|\s)fa-\S+/g) || []).join(' ')});

                if( icon != undefined ){
                    $msgIcon.show().addClass('fa-' + icon);
                }else{
                    $msgIcon.hide();
                }

                $('.statisticsContentPane .messagePane').show();
                $('#survayListTable').hide();
            }

            function hideMessage(){
                $('.statisticsContentPane .messagePane').hide();
            }

            return {
                show         : show,
                hide         : hide,
                clear        : clear,
                addRow       : addRow,
                setContent   : setContent,
                showMessage  : showMessage,
                hideMessage  : hideMessage
            }
        })();


        var X = (function(){

            function getSurvayList( conds, handlers ){
                queryHandler['getSurvayList']( conds, handlers );
            }

            return {
                getSurvayList : getSurvayList
            }
        })();


        return {
            Pane            : Pane,
            init            : init,
            query           : query,
            setFilter       : setFilter,
            setQueryHandler : setQueryHandler
        };
    })();


})();
(function(){

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

            Pane.ListPane.init();
            Pane.ListPane.setSortChangeCallback( setOrderAndQuery );

            // assign button
            $('.-action-query').on('click', queryClickHandler);
        }


        function queryClickHandler( e ){
            newQuery();
        }


        function newQuery(){

            var $filter = $('#filterPanel');

            var conds = {
                status     : $filter.find('.-i-status')    .val(),
                type       : $filter.find('.-i-type')      .val(),
                windfield  : $filter.find('.-i-windfield') .val(),
                port       : $filter.find('.-i-port')      .val(),
                boat       : $filter.find('.-i-boat')      .val(),
                start_date : $filter.find('.-i-start_date').val(),
                end_date   : $filter.find('.-i-end_date')  .val(),
                order_by   : Pane.ListPane.getOrder(),
                page       : 1,
                perPage    : DEFAULT_PER_PAGE
            };

            condsUpdated = true;
            doQuery( conds );
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
                    order_by   : Pane.ListPane.getOrder(),
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


        function setOrderAndQuery( conds ){

            conds = lastQueryConds;
            conds.order_by = Pane.ListPane.getOrder();

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


        function setQueryHandler( handlerName, handlerFn ){
            queryHandler[ handlerName ] = handlerFn;
        }


        Pane.ListPane = (function(){

            var sortChangeCallback = null;
            var queryOrder = {
                col : null,
                dir : null,
            };

            function init(){
                $('#survayListTable .-action-sort').prepend(
                            $('<span class="sort"><i class="sort-null fas fa-sort"></i><i class="sort-asc fas fa-sort-up"></i><i class="sort-desc fas fa-sort-down"></i></span>')
                        );

                $('#survayListTable .-action-sort').on('click', tableHeaderClickHandler);
            }

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
                            + '<td data-datatype="text" class="-f-status"><span>' + row.status_text + '</span></td>'
                            + '<td data-datatype="text">' + row.project.type_text + '-'+ row.project.abbreviation +'</td>'
                            + '<td data-datatype="text">' + row.type_text + '</td>'
                            + '<td data-datatype="datePeriod">' + row.date + '</td>'
                            + '<td data-datatype="text">' + row.total_hour + ' 小時</td>'
                            + '<td data-datatype="text">' + row.project.windfield_name + '</td>'
                            + '<td data-datatype="text">' + row.port_name + '</td>'
                            + '<td data-datatype="text">' + row.boat_name + '</td>'
                            + '<td data-datatype="datePeriod">' + survay_time_text + '</td>'
                            + '<td data-datatype="text">' + row.note + '</td>'
                            + '<td data-datatype="text">' + row.contact_name + '</td>'
                        +'</tr>');

                $row.attr('data-status_text', row.status_text);

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

            function tableHeaderClickHandler( e ){
                var $th = $(e.currentTarget);
                var col = $th.attr('data-sort-col');
                var dir = $th.attr('data-sort-dir');

                if( dir != "desc" ){ dir = "desc"; }
                else{ dir = "asc"; }
                $th.attr('data-sort-dir', dir);

                setOrder( col, dir );
            }

            function setOrder( col, dir ){
                queryOrder.col = col;
                queryOrder.dir = dir;

                sortChangeCallback( col, dir );
            }

            function getOrder(){
                return queryOrder;
            }

            function setSortChangeCallback( callback ){
                sortChangeCallback = callback;
            }

            return {
                init                  : init,
                show                  : show,
                hide                  : hide,
                clear                 : clear,
                addRow                : addRow,
                setContent            : setContent,
                showMessage           : showMessage,
                hideMessage           : hideMessage,
                getOrder              : getOrder,
                setSortChangeCallback : setSortChangeCallback
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
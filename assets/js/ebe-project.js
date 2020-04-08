(function(){

    window.Ebe.Project = (function(){


        function init(){

        }


        function getList(){
            var $filter = $('#ProjectHomeContentPane .filterPanel');
            var filter = {
                type      : $filter.find('.-i-type').val(),
                windfield : $filter.find('.-i-windfield').val(),
                keyword   : $filter.find('.-i-keyword').val(),
                status    : $filter.find('.-i-status').val(),
                dateStart : $filter.find('.-i-dateStart').val(),
                dateEnd   : $filter.find('.-i-dateEnd').val()
            };

            AJAX.getList( getList, UI.buildList );

        }

        function getDetail( projId ){

        }


        var UI = (function(){

            function buildList( projectList ){

            }

            function buildListItem( project ){

            }

            return {
                buildList : buildList
            };
        })();


        var AJAX = (function(){

            function getList( filter ){

            }

            function getDetail( projId ){

            }

            return {
                getList : getList,
                getDetail : getDetail
            };
        })();


        // reg button
        $(window).ready(function(){
            $('#ProjectHomeContentPane .filterPanel .-action-search').on( 'click', getList );
        });


        return {
            getList   : getList,
            getDetail : getDetail,
        }
    })();


    window.Ebe.Survey = (function(){

    })();
})();
(function(){

    window.Ebe.Widget = {};


    // 選擇框
    window.Ebe.Widget.SelectorBox = (function(){

        var $instance;

        function init( el, tableConfig ){}


        function setTable( tableConfig ){}


        function addRow( row ){}


        function addRowArray( rowList ){}


        function getSelected(){}


        return {
            init        : init,
            setTable    : setTable,
            addRow      : addRow,
            addRowArray : addRowArray,
            getSelected : getSelected
        }
    })();


    // 隨行人員編輯框
    window.Ebe.Widget.EntourageManageBox = (function(){

        var $instance;

        function init( el ){
            return $instance;
        }


        function addRow( row ){}


        function addRowArray( rowList ){}


        function addItem(){}


        function removeItemHandler( e ){}


        function addItemClickHandler( e ){}


        function getList(){}

    })();


    // 計劃管理員管理
    window.Ebe.Widget.ProjectManagerManageBox = (function(){

        var $instance;
        var addItemHandler;

        function init( elName ){

            var $container = $( elName );
            $instance = $('<div class="widgetBox wgProjectManagerManageBox">'
                + '<div class="listPane">'
                    + '<table>'
                    + '<thead><tr><th width=160>名字</th><th>電子郵件</th><th width=56></th></tr></thead>'
                    + '<tbody></tbody>'
                    + '</table>'
                + '</div>'
                + '<div class="addPane">'
                    + '<div class="emailField"><input class="-f-email" type="text" placeHolder="請輸入電子郵址新增計畫管理員"></div>'
                    + '<div class="ebButton -action-addItem">新增</div>'
                + '</div>'
                + '</div>' );

                $instance.find('.-action-addItem').on('click', addItemClickHandler);

            $container.append( $instance );

            return Ebe.Widget.ProjectManagerManageBox;
        }


        function setAddItemHandler( fn ){
            addItemHandler = fn;
        }


        function addItemClickHandler( e ){
            var email = $instance.find('.addPane .-f-email').val();
            var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if( email == '' ) return;
            if( emailRe.test( email) == false ){
                alert( 'E-Mail 格式錯誤' );
                return false;
            }

            if( typeof addItemHandler == "function" ){
                return addItemHandler( email );
            }
        }


        function addItem( row ){
            $instance.find('.addPane .-f-email').val('');
            addRow( row );
        }


        function addRow( row ){
            var $row = $('<tr data-id="">'
                + '<td class="-f-name"></td>'
                + '<td class="-f-email"></td>'
                + '<td class="fn"><div class="ebButton -color-warn -action-removeItem">移除</div></td>'
                + '</tr>' );

            $row.attr('data-id', row.id );
            $row.find('.-f-name') .attr('data-name',  row.name ) .text( row.name ) ;
            $row.find('.-f-email').attr('data-email', row.email ).text( row.email );
            $row.find('.-action-removeItem').on('click', removeItemHandler);

            $instance.find('tbody').append( $row );
        }


        function addRowArray( rowList ){
            for( var i in rowList ){
                var row = rowList[i];
                addRow( row );
            }
        }


        function removeItemHandler( e ){
            var $row = $( e.currentTarget ).parents('tr');
            $row.remove();
        }


        function getList(){
            var userList = [];
            $instance.find('tbody tr').each(function(){
                var $row = $(this);
                userList.push({
                    name  : $row.find('.-f-name') .attr('data-name'),
                    email : $row.find('.-f-email').attr('data-email')
                });
            });

            return userList;
        }

        return {
            init              : init,
            setAddItemHandler : setAddItemHandler,
            addRow            : addRow,
            addRowArray       : addRowArray,
            addItem           : addItem,
            getList           : getList
        };
    })();


})();
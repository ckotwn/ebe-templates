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


    // 作業地點
    window.Ebe.Widget.ProjectStationManageBox = (function(){

        var wgList  = {}

        function init( elName ){

            var $wrapper = $( elName );

            var $wg = $('<div class="widgetBox wgProjectStationManageBox">'
                + '<div class="listPane">'
                    + '<table>'
                    + '<thead><tr>'
                        + '<th>編號</th><th>名稱</th><th>出入港口</th>'
                        + '<th>經度</th><th>緯度</th><th>大地基準</th>'
                        + '<th>儀器</th>'
                        + '</tr></thead>'
                    + '<tbody></tbody>'
                    + '</table>'
                + '</div>'
                + '<div class="addPane">'
                    + '<div class="ebButton -action-openAddForm">新增</div>'
                + '</div>'
                + '<div class="addFormPane">'
                    + '<div class="title">新增測站</div>'
                    + '<div class="close fal fa-times -action-closeAddForm"></div>'
                    + '<div class="line"></div>'
                    + '<div class="button"><div class="ebButton -action-addItem">新增</div></div>'
                    + '<div class="wgFieldRow -r-ref_no"   ><div class="wgLabel">編號</div><div class="wgField"><input  class="ebInput -f-ref_no"   ></div></div>'
                    + '<div class="wgFieldRow -r-name"     ><div class="wgLabel">名稱</div><div class="wgField"><input  class="ebInput -f-name"     ></div></div>'
                    + '<div class="wgFieldRow -r-port"     ><div class="wgLabel">出入港口</div><div class="wgField"><select class="ebSelect -f-port"     ></select></div></div>'
                    + '<div class="wgFieldRow -r-latitude" ><div class="wgLabel">經度</div><div class="wgField"><input  class="ebInput -f-latitude" ></div></div>'
                    + '<div class="wgFieldRow -r-longitude"><div class="wgLabel">緯度</div><div class="wgField"><input  class="ebInput -f-longitude"></div></div>'
                    + '<div class="wgFieldRow -r-datum"    ><div class="wgLabel">大地基準</div><div class="wgField"><select class="ebSelect -f-datum"    ></select></div></div>'
                    + '<div class="wgFieldRow -r-device"   ><div class="wgLabel">儀器架設<br>方式</div><div class="wgField"><input class="ebInput -f-device"   ></div></div>'
                + '</div>'
                + '<div class="messagePane">'
                    + '<div class="messageText"></div>'
                + '</div>'
                + '</div>' );

            $wg.find('.-action-openAddForm').on('click', openAddFormClickHandler);
            $wg.find('.-action-closeAddForm').on('click', closeAddFormClickHandler);
            $wg.find('.-action-addItem').on('click', addItemClickHandler);

            $wrapper.append( $wg );

            wgObj = {
                $wg               : $wg,
                addItemHandler    : null,
                setAddItemHandler : setAddItemHandler,
                addRow            : addRow,
                addRowList        : addRowList,
                addItem           : addItem,
                showMessage       : showMessage,
                hideMessage       : hideMessage,
                openAddForm       : openAddForm,
                closeAddForm      : closeAddForm,
                setPortList       : setPortList,
                setDatumList      : setDatumList
            };

            $wg.data( 'obj',  wgObj );
            wgList[ elName ] = wgObj;

            return wgObj;
        }


        function setAddItemHandler( fn ){
            this.addItemHandler = fn;
        }


        function openAddFormClickHandler( e ){
            var $wg = $(e.currentTarget).parents('.widgetBox');
            var wg  = $wg.data( 'obj' );

            wg.openAddForm();
        }


        function closeAddFormClickHandler( e ){
            var $wg = $(e.currentTarget).parents('.widgetBox');
            var wg  = $wg.data( 'obj' );

            wg.closeAddForm();
        }


        function addItemClickHandler( e ){
            var $wg = $(e.currentTarget).parents('.widgetBox');
            var wg  = $wg.data( 'obj' );
            var $addForm = $wg.find('.addFormPane');

            var data = {
                ref_no    : $addForm.find('.-f-ref_no').val(),
                name      : $addForm.find('.-f-name').val(),
                port_id   : $addForm.find('.-f-port option:selected').val(),
                latitude  : $addForm.find('.-f-latitude').val(),
                longitude : $addForm.find('.-f-longitude').val(),
                datum     : $addForm.find('.-f-datum option:selected').val(),
                device    : $addForm.find('.-f-device').val()
            };

            // 都要填
            if( data.ref_no == '' || data.name == '' || data.latitude == ''
                    || data.longitude == '' || data.device == '' ){
                alert( '請填寫所有欄位。' );
                return false;
            }

            // 執行新增
            if( typeof wg.addItemHandler == "function" ){
                wg.showMessage('請稍後');
                return wg.addItemHandler( data );
            }
        }


        function addItem( row ){
            var $wg = this.$wg;
            var wg  = $wg.data( 'obj' );

            wg.hideMessage();
            wg.closeAddForm();
            wg.addRow( row );
        }


        function addItemGlobal( elName, row ){
            var wg  = wgList[ elName ];

            wg.addItem( row );
        }


        function addRow( row ){
            var $wg = this.$wg;

            var $row = $('<tr data-id="">'
                + '<td class="-f-ref_no"></td>'
                + '<td class="-f-name"></td>'
                + '<td class="-f-port"></td>'
                + '<td class="-f-latitude"></td>'
                + '<td class="-f-longitude"></td>'
                + '<td class="-f-datum"></td>'
                + '<td class="-f-device"></td>'
                + '<td class="fn"><div class="ebButton -n -color-warn -action-removeItem fal fa-times"></div></td>'
                + '</tr>' );

            $row.attr('data-id', row.id )
                .attr('data-ref_no',    row.ref_no)
                .attr('data-name',      row.name)
                .attr('data-port',      row.port)
                .attr('data-latitude',  row.latitude)
                .attr('data-longitude', row.longitude)
                .attr('data-datum',     row.datum)
                .attr('data-device',    row.device);

            $row.find('.-f-ref_no')     .text( row.ref_no );
            $row.find('.-f-name')     .text( row.name );
            $row.find('.-f-port')     .text( row.port );
            $row.find('.-f-latitude') .text( row.latitude );
            $row.find('.-f-longitude').text( row.longitude );
            $row.find('.-f-datum')    .text( row.datum );
            $row.find('.-f-device')   .text( row.device );
            $row.find('.-action-removeItem').on('click', removeItemHandler);

            $wg.find('tbody').append( $row );
        }


        function addRowList( rowList ){
            for( var i in rowList ){
                var row = rowList[i];
                this.addRow( row );
            }
        }


        function showMessage( messageHtml ){
            var $wg = this.$wg;
            $wg.find('.messageText').html( messageHtml );
            $wg.find('.messagePane').show();
        }


        function hideMessage(){
            var $wg = this.$wg;
            $wg.find('.messagePane').hide();
            $wg.find('.messageText').empty();
        }


        function openAddForm(){
            var $wg = this.$wg;

            $wg.find('.addFormPane').show();
        }


        function closeAddForm(){
            var $wg = this.$wg;

            $wg.find('.addFormPane').hide();
            $wg.find('.addFormPane input').val("");
            $wg.find('.addFormPane select').each(function(){
                $(this).find('option:eq(0)').prop('selected', 'true');
            });
        }


        function setPortList( portList ){
            var $wg = this.$wg;
            var $s  = $wg.find('.-f-port');

            $s.empty();

            for( var i in portList ){
                var port = portList[i];
                var $opt = $('<option>');
                $opt.prop('value', port.id );
                $opt.text( port.name );

                $s.append( $opt );
            }
        }


        function setDatumList( datumList ){
            var $wg = this.$wg;
            var $s  = $wg.find('.-f-datum');

            $s.empty();

            for( var i in datumList ){
                var datum = datumList[i];
                var $opt = $('<option>');
                $opt.prop('value', datum );
                $opt.text( datum );

                $s.append( $opt );
            }
        }


        function removeItemHandler( e ){
            var $row = $( e.currentTarget ).parents('tr');
            $row.remove();
        }


        function getList(){
            var $wg = this.$wg;

            var userList = [];
            $wg.find('tbody tr').each(function(){
                var $row = $(this);
                userList.push({
                });
            });

            return userList;
        }


        return {
            init : init,
            addItem : addItemGlobal
        }
    })();


    // 隨行人員編輯框
    window.Ebe.Widget.EntourageManageBox = (function(){

    })();


    // 計劃管理員管理
    window.Ebe.Widget.ProjectUserManageBox = (function(){

        var wgList  = {}

        function init( elName ){

            var $wrapper = $( elName );
            var $wg = $('<div class="widgetBox wgProjectUserManageBox">'
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
                + '<div class="messagePane">'
                    + '<div class="messageText"></div>'
                + '</div>'
                + '</div>' );

                $wg.find('.-action-addItem').on('click', addItemClickHandler);

                $wrapper.append( $wg );

                wgObj = {
                    $wg               : $wg,
                    setAddItemHandler : setAddItemHandler,
                    addRow            : addRow,
                    addRowList        : addRowList,
                    addItem           : addItem,
                    showMessage       : showMessage,
                    hideMessage       : hideMessage,
                    getList           : getList
                }

                $wg.data( 'obj',  wgObj );
                wgList[ elName ] = wgObj;

            return wgObj;
        }


        function setAddItemHandler( fn ){
            this.addItemHandler = fn;
        }


        function addItemClickHandler( e ){
            var $wg = $(e.currentTarget).parents('.widgetBox');
            var wg  = $wg.data( 'obj' );

            var email = $wg.find('.addPane .-f-email').val();
            var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if( email == '' ) return;
            if( emailRe.test( email) == false ){
                alert( 'E-Mail 格式錯誤' );
                return false;
            }

            if( typeof wg.addItemHandler == "function" ){
                wg.showMessage('請稍後');
                return wg.addItemHandler( email );
            }
        }


        function addItem( row ){
            var $wg = this.$wg;
            var wg  = $wg.data( 'obj' );

            wg.hideMessage();

            $wg.find('.addPane .-f-email').val('');
            wg.addRow( row );
        }


        function addItemGlobal( elName, row ){
            var wg  = wgList[ elName ];

            wg.addItem( row );
        }


        function addRow( row ){
            var $wg = this.$wg;

            var $row = $('<tr data-id="">'
                + '<td class="-f-name"></td>'
                + '<td class="-f-email"></td>'
                + '<td class="fn"><div class="ebButton -color-warn -action-removeItem">移除</div></td>'
                + '</tr>' );

            $row.attr('data-id',    row.id )
                .attr('data-name',  row.name )
                .attr('data-email', row.email );

            $row.find('.-f-name') .text( row.name ) ;
            $row.find('.-f-email').text( row.email );
            $row.find('.-action-removeItem').on('click', removeItemHandler);

            $wg.find('tbody').append( $row );
        }


        function addRowList( rowList ){
            for( var i in rowList ){
                var row = rowList[i];
                this.addRow( row );
            }
        }


        function showMessage( messageHtml ){
            var $wg = this.$wg;
            $wg.find('.messageText').html( messageHtml );
            $wg.find('.messagePane').show();
        }


        function hideMessage(){
            var $wg = this.$wg;
            $wg.find('.messagePane').hide();
            $wg.find('.messageText').empty();
        }


        function removeItemHandler( e ){
            var $row = $( e.currentTarget ).parents('tr');
            $row.remove();
        }


        function getList(){
            var $wg = this.$wg;

            var userList = [];
            $wg.find('tbody tr').each(function(){
                var $row = $(this);
                userList.push({
                    name  : $row.attr('data-name'),
                    email : $row.attr('data-email')
                });
            });

            return userList;
        }

        return {
            init    : init,
            addItem : addItemGlobal
        };
    })();


})();
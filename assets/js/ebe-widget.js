(function(){


    window.Ebe.Control = window.Ebe.Control || {};
    window.Ebe.Widget  = window.Ebe.Widget  || {};


    $.datetimepicker.setLocale('zh-TW');


    window.Ebe.Control.FileUpload = (function(){

        var STRING = {
            NOT_SELECT : '尚未選擇檔案'
        };

        $(window).on('load', function(){
            init('.ebFileUpload');
        });

        function init( elQuery ){

            $( elQuery ).each(function(){
                var $ctrl     = $(this);
                var $fileName = $(this).find('.fileName');
                var $input    = $(this).find('input[type="file"]');

                $ctrl.attr('data-inited', 1);

                $input.on('change', function(e){
                    var files = e.currentTarget.files;
                    if( files.length == 0 ){
                        $fileName.text( STRING.NOT_SELECT );
                    }else{
                        $fileName.text( files[0].name );
                    }
                })
            });
        }

        return {
            init : init
        }
    })();


    window.Ebe.Control.DateTimePicker = (function(){

        $(window).on('load', function(){

            $('input.-type-date').each(function(){
                var $input = $(this);

                $input.datetimepicker({
                    timepicker : false,
                    format     : 'Y-m-d'
                });
            });
        });

    })();


    // 作業地點設定
    window.Ebe.Widget.Station = (function(){

        var TABLE_CONFIG = {
            AVES     : {  // 鳥類
                cols : [
                    { ref : 'ref_no',    label : '編號',     width : 32 },
                    { ref : 'name',      label : '名稱',     width : null },
                    { ref : 'port_name', label : '出入港口',  width : null },
                    { ref : 'latitude',  label : '經度',      width : null },
                    { ref : 'longitude', label : '緯度',      width : null },
                    { ref : 'datum' ,    label : '大地基準',  width : null },
                    { ref : 'device',    label : '儀器',      width : null }
                ],
                addFormFields : [
                    {
                        ref          : 'ref_no',
                        label        : '編號',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'name',
                        label        : '名稱',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'port',
                        label        : '出入港口',
                        controlType  : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'latitude',
                        label        : '經度',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'longitude',
                        label        : '緯度',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'datum' ,
                        label        : '大地基準',
                        controlType  : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'device',
                        label        : '儀器架設<br>方式',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 192
                    }
                ]
            },
            BENTHOS  : {  // 底棲生物
                cols : [
                    { ref : 'ref_no',    label : '編號',     width : 32 },
                    { ref : 'name',      label : '名稱',     width : null },
                    { ref : 'port_name', label : '出入港口',  width : null },
                    { ref : 'latitude',  label : '經度',      width : null },
                    { ref : 'longitude', label : '緯度',      width : null },
                    { ref : 'datum' ,    label : '大地基準',  width : null },
                ],
                addFormFields : [
                    {
                        ref          : 'ref_no',
                        label        : '編號',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'name',
                        label        : '名稱',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'port',
                        label        : '出入港口',
                        control      : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'latitude',
                        label        : '經度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'longitude',
                        label        : '緯度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'datum' ,
                        label        : '大地基準',
                        control      : "select",
                        controlWidth : 192
                    }
                ]
            },
            FISH     : {  // 魚類
                cols : [
                    { ref : 'ref_no',    label : '編號',     width : 32 },
                    { ref : 'name',      label : '名稱',     width : null },
                    { ref : 'port_name', label : '出入港口',  width : null },
                    { ref : 'latitude',  label : '經度',      width : null },
                    { ref : 'longitude', label : '緯度',      width : null },
                    { ref : 'datum' ,    label : '大地基準',  width : null }
                ],
                addFormFields : [
                    {
                        ref          : 'ref_no',
                        label        : '編號',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'name',
                        label        : '名稱',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'port',
                        label        : '出入港口',
                        control      : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'latitude',
                        label        : '經度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'longitude',
                        label        : '緯度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'datum' ,
                        label        : '大地基準',
                        control      : "select",
                        controlWidth : 192
                    }
                ]
            },
            UNOISE   : {  // 水下噪音
                cols : [
                    { ref : 'ref_no',    label : '編號',     width : 32 },
                    { ref : 'name',      label : '名稱',     width : null },
                    { ref : 'port_name', label : '出入港口',  width : null },
                    { ref : 'latitude',  label : '經度',      width : null },
                    { ref : 'longitude', label : '緯度',      width : null },
                    { ref : 'datum' ,    label : '大地基準',  width : null }
                ],
                addFormFields : [
                    {
                        ref          : 'ref_no',
                        label        : '編號',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'name',
                        label        : '名稱',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'port',
                        label        : '出入港口',
                        control      : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'latitude',
                        label        : '經度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'longitude',
                        label        : '緯度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'datum' ,
                        label        : '大地基準',
                        control      : "select",
                        controlWidth : 192
                    }
                ]
            }
        };

        var ADDFORM_CONFIG = {
            AVES     : {  // 鳥類
                cols : [
                    {
                        ref          : 'ref_no',
                        label        : '編號',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'name',
                        label        : '名稱',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'port',
                        label        : '出入港口',
                        controlType  : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'latitude',
                        label        : '經度',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'longitude',
                        label        : '緯度',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'datum' ,
                        label        : '大地基準',
                        controlType  : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'device',
                        label        : '儀器架設<br>方式',
                        controlType  : "input",
                        inputType    : "text",
                        controlWidth : 192
                    }
                ]
            },
            BENTHOS  : {  // 底棲生物
                cols : [
                    {
                        ref          : 'ref_no',
                        label        : '編號',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'name',
                        label        : '名稱',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'port',
                        label        : '出入港口',
                        control      : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'latitude',
                        label        : '經度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'longitude',
                        label        : '緯度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'datum' ,
                        label        : '大地基準',
                        control      : "select",
                        controlWidth : 192
                    }
                ]
            },
            FISH     : {  // 魚類
                cols : [
                    {
                        ref          : 'ref_no',
                        label        : '編號',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'name',
                        label        : '名稱',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'port',
                        label        : '出入港口',
                        control      : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'latitude',
                        label        : '經度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'longitude',
                        label        : '緯度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'datum' ,
                        label        : '大地基準',
                        control      : "select",
                        controlWidth : 192
                    }
                ]
            },
            UNOISE   : {  // 水下噪音
                cols : [
                    {
                        ref          : 'ref_no',
                        label        : '編號',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'name',
                        label        : '名稱',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 192
                    },
                    {
                        ref          : 'port',
                        label        : '出入港口',
                        control      : "select",
                        controlWidth : 192
                    },
                    {
                        ref          : 'latitude',
                        label        : '經度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'longitude',
                        label        : '緯度',
                        control      : "input",
                        controlType  : "text",
                        controlWidth : 128
                    },
                    {
                        ref          : 'datum' ,
                        label        : '大地基準',
                        control      : "select",
                        controlWidth : 192
                    }
                ]
            }
        };

        return {
            TABLE_CONFIG   : TABLE_CONFIG,
            ADDFORM_CONFIG : ADDFORM_CONFIG
        }

    })();


    // 彈出框管理
    window.Ebe.Widget.PopupWrapper = (function(){

    })();


    // 通用瀏覽框
    window.Ebe.Widget.ListBox = (function(){

        var wgList = {};

        function init( elName, config ){

            var $wrapper = $( elName );
            var $wg = $('<div class="widgetBox wgSelectorBox">'
                + '<div class="listPane">'
                    + '<table>'
                    + '<thead></thead>'
                    + '<tbody></tbody>'
                    + '</table>'
                + '</div>'
                + '<div class="messagePane">'
                    + '<div class="messageText"></div>'
                + '</div>'
                + '</div>' );

            // gen table header
            var $theadRow = $('<tr></tr>');
            for( var i in config.cols ){
                var colConfig = config.cols[ i ];
                $theadRow.append( $('<th></th>').text( colConfig.label ) );
            }
            $wg.find('thead').append( $theadRow );

            $wrapper.empty();
            $wrapper.append( $wg );

            wgObj = {
                config      : config,
                $wg         : $wg,
                addRow      : addRow,
                addRowArray : addRowArray,
                showMessage : showMessage,
                hideMessage : hideMessage,
                getSelected : getSelected
            }

            $wg.data( 'obj',  wgObj );
            wgList[ elName ] = wgObj;

            return wgObj;
        }


        function getInstance( elName ){
            return wgList[ elName ];
        }


        function addRow( row ){
            var $wg = this.$wg;
            var cfg = this.config;

            var $row = $('<tr></tr>');
            $row.attr( 'data-id',  row.id );
            $row.data( 'row', row );

            for( var i in cfg.cols ){
                var colCfg = cfg.cols[ i ];
                var ref    = colCfg.ref;

                $tr = $('<td></td>');
                $tr.text( row[ ref ] );
                $row.append( $tr );
            }

            $wg.find('tbody').append( $row );
        }


        function addRowArray( rowList ){
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


        function getSelected(){
            var $wg = this.$wg;
            var stationList = [];

            $wg.find('tbody tr').each(function(){
                var $this = $(this);
                if( $(this).find('input[type="checkbox"]').prop('checked') == false ) return;
                stationList.push( $(this).attr( 'data-id') );
            });

            return stationList;
        }


        return {
            init        : init,
            getInstance : getInstance
        }
    })();


    // 通用選擇框
    window.Ebe.Widget.SelectorBox = (function(){

        var wgList = {};

        function init( elName, config ){

            var $wrapper = $( elName );
            var $wg = $('<div class="widgetBox wgSelectorBox">'
                + '<div class="listPane">'
                    + '<table>'
                    + '<thead></thead>'
                    + '<tbody></tbody>'
                    + '</table>'
                + '</div>'
                + '<div class="messagePane">'
                    + '<div class="messageText"></div>'
                + '</div>'
                + '</div>' );

            // gen table header
            var $theadRow = $('<tr><th></th></tr>');
            for( var i in config.cols ){
                var colConfig = config.cols[ i ];
                $theadRow.append( $('<th></th>').text( colConfig.label ) );
            }
            $wg.find('thead').append( $theadRow );

            $wrapper.empty();
            $wrapper.append( $wg );

            wgObj = {
                config      : config,
                $wg         : $wg,
                addRow      : addRow,
                addRowArray : addRowArray,
                showMessage : showMessage,
                hideMessage : hideMessage,
                getSelected : getSelected
            }

            $wg.data( 'obj',  wgObj );
            wgList[ elName ] = wgObj;

            return wgObj;
        }


        function getInstance( elName ){
            return wgList[ elName ];
        }


        function addRow( row ){
            var $wg = this.$wg;
            var cfg = this.config;

            var $row = $('<tr></tr>');
            $row.attr( 'data-id',  row.id );
            $row.data( 'row', row );
            $row.on('click', function(){
                var $chk   = $(this).find('input[type="checkbox"]');
                $chk.prop('checked', !$chk.prop('checked'));
            })

            var $chk = $('<td><label class="wgSelectCheckbox"><input type="checkbox"></label></td>');

            $row.append( $chk );

            if( row.checked != undefined && row.checked == true ){
                $chk.find('input[type="checkbox"]').prop('checked', true);
            }

            for( var i in cfg.cols ){
                var colCfg = cfg.cols[ i ];
                var ref    = colCfg.ref;

                $tr = $('<td></td>');
                $tr.text( row[ ref ] );
                $row.append( $tr );
            }

            $wg.find('tbody').append( $row );
        }


        function addRowArray( rowList ){
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


        function getSelected(){
            var $wg = this.$wg;
            var stationList = [];

            $wg.find('tbody tr').each(function(){
                var $this = $(this);
                if( $(this).find('input[type="checkbox"]').prop('checked') == false ) return;
                stationList.push( $(this).attr( 'data-id') );
            });

            return stationList;
        }


        return {
            init        : init,
            getInstance : getInstance
        }
    })();


    // 作業地點
    window.Ebe.Widget.ProjectStationManageBox = (function(){

        var wgList  = {}

        function init( elName, tableConfig, addFormConfig, options ){

            if( options != undefined ) options = {};

            var $wrapper = $( elName );

            var $wg = $('<div class="widgetBox wgProjectStationManageBox">'
                + '<div class="listPane">'
                    + '<table>'
                    + '<thead></thead>'
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
                + '</div>'
                + '<div class="messagePane">'
                    + '<div class="messageText"></div>'
                + '</div>'
                + '</div>' );

            // gen table header
            var $theadRow = $('<tr></tr>');
            for( var i in tableConfig.cols ){
                var colConfig = tableConfig.cols[ i ];
                $theadRow.append( $('<th></th>').text( colConfig.label ) );
            }
            $theadRow.append( $('<th width=48></th>') );
            $wg.find('thead').append( $theadRow );

            // gen addform
            var $addFormPane = $wg.find('.addFormPane');
            for( var i in addFormConfig.cols ){
                var fieldConfig = addFormConfig.cols[ i ];
                var $inputField = $('<div class="wgFieldRow"><div class="wgLabel"></div><div class="wgField"></div></div>');
                $inputField.addClass('-r-'+ i );
                $inputField.find('.wgLabel').html( fieldConfig.label );
                var $input;
                if( fieldConfig.controlType == 'input' ){
                    $input = $('<input class="ebInput">');
                    $input.prop('type', fieldConfig.inputType );
                };
                if( fieldConfig.controlType == 'select' ){
                    $input = $('<select class="ebSelect"></select>');
                }

                $input.css({ width: fieldConfig.controlWidth + 'px' });
                $input.addClass('-f-' + fieldConfig.ref );
                $inputField.find('.wgField').append( $input );

                $addFormPane.append( $inputField );
            }


            $wg.find('.-action-openAddForm').on('click', openAddFormClickHandler);
            $wg.find('.-action-closeAddForm').on('click', closeAddFormClickHandler);
            $wg.find('.-action-addItem').on('click', addItemClickHandler);

            $wrapper.empty();
            $wrapper.append( $wg );

            wgObj = {
                tableConfig          : tableConfig,
                addFormConfig        : addFormConfig,
                options              : options,
                $wg                  : $wg,
                addItemHandler       : null,
                removeItemHandler    : null,
                setAddItemHandler    : setAddItemHandler,
                setRemoveItemHandler : setRemoveItemHandler,
                addRow               : addRow,
                addRowList           : addRowList,
                addItem              : addItem,
                removeItem           : removeItem,
                showMessage          : showMessage,
                hideMessage          : hideMessage,
                openAddForm          : openAddForm,
                closeAddForm         : closeAddForm,
                setPortList          : setPortList,
                setDatumList         : setDatumList,
                getList              : getList
            };

            $wg.data( 'obj',  wgObj );
            wgList[ elName ] = wgObj;

            return wgObj;
        }


        function getInstance( elName ){
            return wgList[ elName ];
        }


        function setAddItemHandler( fn ){
            this.addItemHandler = fn;
        }


        function setRemoveItemHandler( fn ){
            this.removeItemHandler = fn;
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
                + '<td class="fn"><div class="ebButton -n -color-warn -action-rowRemoveItem fal fa-times"></div></td>'
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
            $row.find('.-action-rowRemoveItem').on('click', rowRemoveItemHandler);

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

            // switch add form type
            if( this.options.usePopupAddForm != undefined
                    && this.options.usePopupAddForm == true ){

                // add popup
                if( $('body > .wgPopupWrapper').length == 0 ){
                    Ebe.Widget.PopupWrapper.show( $wg.find('.addFormPane') );
                }
            }else{
                $wg.find('.addFormPane').show();
            }
        }


        function closeAddForm(){
            var $wg = this.$wg;
            var $addFormPane;

            if( this.options.usePopupAddForm != undefined
                    && this.options.usePopupAddForm == true ){
                Ebe.Widget.PopupWrapper.hide();
                $addFormPane = Ebe.Widget.PopupWrapper.getEl();
            }else{
                $addFormPane = $wg.find('.addFormPane');
                $wg.find('.addFormPane').hide();
            }

            $addFormPane.find('input').val("");
            $addFormPane.find('select').each(function(){
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


        function rowRemoveItemHandler( e ){
            var $wg = $(e.currentTarget).parents('.widgetBox');
            var wg  = $wg.data( 'obj' );

            var $row  = $( e.currentTarget ).parents('tr');
            var rowId = $row.attr('data-id');

            // 執行
            if( typeof wg.removeItemHandler == "function" ){
                wg.showMessage('請稍後');
                return wg.removeItemHandler( rowId );
            }
        }


        function removeItem( rowId ){
            var $wg = this.$wg;
            var $row = $wg.find('tbody tr[data-id="' + rowId +'"]');

            this.hideMessage();
            $row.remove();
        }


        function removeItemGlobal( elName, rowId ){
            var wg  = wgList[ elName ];

            wg.removeItem( rowId );
        }


        function getList(){
            var $wg = this.$wg;

            var userList = [];
            $wg.find('tbody tr').each(function(){
                var $row = $(this);
                userList.push( $row.attr('data-id' ) );
            });

            return userList;
        }


        return {
            init        : init,
            getInstance : getInstance,
            addItem     : addItemGlobal,
            removeItem  : removeItemGlobal
        }
    })();


    // 隨行人員編輯框
    window.Ebe.Widget.EntourageManageBox = (function(){

        var wgList  = {}

        function init( elName ){

            var $wrapper = $( elName );
            var $wg = $('<div class="widgetBox wgEntourageManageBox">'
                + '<div class="listPane">'
                    + '<table>'
                    + '<thead><tr><th width=96>名字</th><th width=144>手機</th><th>電子郵件</th><th width=40></th></tr></thead>'
                    + '<tbody></tbody>'
                    + '</table>'
                + '</div>'
                + '<div class="addPane">'
                    + '<div class="nameField" ><input class="-f-name"  type="text" placeHolder="名字"></div>'
                    + '<div class="phoneField"><input class="-f-phone" type="text" placeHolder="電話"></div>'
                    + '<div class="emailField"><input class="-f-email" type="text" placeHolder="E-Mail"></div>'
                    + '<div class="ebButton -action-addItem">新增</div>'
                + '</div>'
                + '<div class="messagePane">'
                    + '<div class="messageText"></div>'
                + '</div>'
                + '</div>' );

            $wg.find('.-action-addItem').on('click', addItemClickHandler);

            $wrapper.empty();
            $wrapper.append( $wg );

            wgObj = {
                $wg                  : $wg,
                addItemHandler       : null,
                removeItemHandler    : null,
                setAddItemHandler    : setAddItemHandler,
                setRemoveItemHandler : setRemoveItemHandler,
                addRow               : addRow,
                addRowList           : addRowList,
                addItem              : addItem,
                removeItem           : removeItem,
                showMessage          : showMessage,
                hideMessage          : hideMessage,
                getList              : getList
            }

            $wg.data( 'obj',  wgObj );
            wgList[ elName ] = wgObj;

            return wgObj;
        }


        function getInstance( elName ){
            return wgList[ elName ];
        }


        function setAddItemHandler( fn ){
            this.addItemHandler = fn;
        }


        function setRemoveItemHandler( fn ){
            this.removeItemHandler = fn;
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

            var entourageData = {
                name  : $wg.find('.addPane .-f-name').val(),
                phone : $wg.find('.addPane .-f-phone').val(),
                email : email,
            };

            if( typeof wg.addItemHandler == "function" ){
                wg.showMessage('請稍後');
                return wg.addItemHandler( entourageData );
            }else{
                wg.addItem( entourageData );
            }
        }


        function addItem( row ){
            var $wg = this.$wg;
            var wg  = $wg.data( 'obj' );

            wg.hideMessage();

            $wg.find('.addPane .-f-name' ).val('');
            $wg.find('.addPane .-f-phone').val('');
            $wg.find('.addPane .-f-email').val('');
            wg.addRow( row );
        }


        function addItemGlobal( elName, row ){
            var wg = wgList[ elName ];

            wg.addItem( row );
        }


        function addRow( row ){
            var $wg = this.$wg;

            var $row = $('<tr data-id="">'
                + '<td class="-f-name"></td>'
                + '<td class="-f-phone"></td>'
                + '<td class="-f-email"></td>'
                + '<td class="fn"><div class="ebButton -color-warn -n -action-rowRemoveItem fal fa-times"></div></td>'
                + '</tr>' );

            $row.attr('data-id',  row.id )
                .data('data-row', row );

            $row.find('.-f-name') .text( row.name ) ;
            $row.find('.-f-phone').text( row.phone );
            $row.find('.-f-email').text( row.email );
            $row.find('.-action-rowRemoveItem').on('click', rowRemoveItemHandler);

            $wg.find('tbody').append( $row );
        }


        function removeItem( row_id ){
            var $wg = this.$wg;

            var $row = $wg.find('tr[data-id="'+ row_id +'"]');
            $row.remove();

            this.hideMessage();
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


        function rowRemoveItemHandler( e ){
            var $wg = $(e.currentTarget).parents('.widgetBox');
            var wg  = $wg.data( 'obj' );
            var $row = $( e.currentTarget ).parents('tr');
            var entourageData = $row.data('data-row');

            if( typeof wg.removeItemHandler == "function" ){
                wg.showMessage('請稍後');
                return wg.removeItemHandler( entourageData.id, entourageData );
            }else{
                $row.remove();
            }
        }


        function getList(){
            var $wg = this.$wg;

            var entourageList = [];
            $wg.find('tbody tr').each(function(){
                var $row = $(this);
                entourageList.push( $row.data('data-row') );
            });

            return entourageList;
        }

        return {
            init        : init,
            getInstance : getInstance,
            addItem     : addItemGlobal
        };

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

            $wrapper.empty();
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


        function getInstance( elName ){
            return wgList[ elName ];
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
            init        : init,
            getInstance : getInstance,
            addItem     : addItemGlobal
        };
    })();


    // 資料夾列表
    window.Ebe.Widget.FolderListBox = (function(){

        var wgList = {};

        function init( elName ){

            var $wrapper = $( elName );
            var $wg = $('<div class="widgetBox wgFolderListBox">'
                + '<div class="titlePane">'
                    + '<div class="icon fab"></div>'
                    + '<div class="name"></div>'
                    + '<a class="link fal fa-external-link" target="_blank"></a>'
                + '</div>'
                + '<div class="folderListPane"></div>'
                + '<div class="messagePane">'
                    + '<div class="messageText"></div>'
                + '</div>'
                + '</div>' );

            $wrapper.empty();
            $wrapper.append( $wg );

            wgObj = {
                $wg           : $wg,
                addFolderTree : addFolderTree,
                showMessage   : showMessage,
                hideMessage   : hideMessage
            }

            $wg.data( 'obj',  wgObj );
            wgList[ elName ] = wgObj;

            return wgObj;
        }


        function getInstance( elName ){
            return wgList[ elName ];
        }


        function addFolderTree( folderTree ){
            var $wg = this.$wg;

            // set title
            var $title = $wg.find('.titlePane');
            $title.find('.icon').addClass( 'fa-' + folderTree.type );
            $title.find('.name').text( folderTree.name );
            $title.find('.link').attr( 'href', folderTree.link );

            // set folder list
            var $folderList = [];
            var $folderListPane = $wg.find('.folderListPane');
            buildFolderEl( $folderList, folderTree.subFolderList );

            $folderListPane.append( $folderList );
        }


        function buildFolderEl( $folderList, folderList, level ){

            if( level == undefined ){
                var level = 0;
            }
            var nextLevel = level + 1;

            for( var i in folderList ){
                var folder = folderList[i];

                var $el = $( '<div class="folderItem">'
                    + '<div class="lines"></div>'
                    + '<div class="icon fal fa-folder-open"></div>'
                    + '<div class="name"></div>'
                    + '<a class="link fal fa-external-link" target="_blank"></a>'
                );

                $el.addClass('-level-' + level);
                $el.find('.name').text( folder.name );
                if( folder.showLink != undefined && folder.showLink == true ){
                    $el.find('.link').attr( 'href', folder.link );
                }else{
                    $el.find('.link').hide();
                }

                $folderList.push( $el );

                if( folder.subFolderList != undefined
                        && Array.isArray( folder.subFolderList ) ){
                    buildFolderEl( $folderList, folder.subFolderList, nextLevel );
                }
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


        return {
            init        : init,
            getInstance : getInstance
        }
    })();


})();
;(function(){


    window.Ebe = (function(){

        var _base = '/';

        function setBase( base ){
            _base = base;
        }

        function getBase(){
           return _base;
        }

        return {
            setBase : setBase,
            getBase : getBase
        };
    })();


    window.Ebe.Control = window.Ebe.Control || {};
    window.Ebe.Widget  = window.Ebe.Widget  || {};
    window.Ebe.Page    = window.Ebe.Page    || {};


    window.Ebe.Utility = (function(){

        var Url = (function(){

            function setHash( pairs ){
                var hashArr    = [];
                for( var i in pairs ){
                    hashArrItem = i + '=' + encodeURIComponent( pairs[i] );
                    hashArr.push( hashArrItem );
                }

                window.location.hash = hashArr.join( '&' );
            }

            function getHash(){

            }

            function popStateHandler( event ){

            }

            window.addEventListener( 'popstate', popStateHandler );

            return {
                setHash : setHash,
                getHash : getHash
            };
        })();


        return {
            Url : Url
        };
    })();


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


    window.Ebe.Control.ImageUpload = (function(){

        var STRING = {
            NOT_SELECT : '尚未選擇檔案'
        };

        $(window).on('load', function(){
            init('.ebImageUpload');
        });

        function init( elQuery ){


            $( elQuery ).each(function(){
                var $ctrl     = $(this);
                var $fileName = $(this).find('.fileName');
                var $preview  = $(this).find('.preview');
                var $input    = $(this).find('input[type="file"]');
                var input     = $input[0];

                $ctrl.attr('data-inited', 1);

                $input.on('change', function(e){
                    var files = e.currentTarget.files;
                    if( files.length == 0 ){
                        $fileName.text( STRING.NOT_SELECT );
                        $preview.css('background-image', '');
                    }else{
                        $fileName.text( files[0].name );
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $preview.css('background-image', 'url(' +  e.target.result  + ')');
                        }
                        reader.readAsDataURL(input.files[0]);
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


    window.Ebe.Widget.Pager = (function(){

        var DEFAULT_LIST_PER_PAGE  = 50;
        var DEFAULT_THUMB_PER_PAGE = 20;


        var wgList = {};


        function init( elName, handlers ){

            var $wrapper = $( elName );
            var $wg = $('<div class="ebPager -disabled">'
                        + '<div class="pager -action-goPrev fal fa-angle-left"></div>'
                        + '<div class="pagerSelect">'
                            + '前往：<select class="-action-goPage"><option>--</option></select>'
                        + '</div>'
                        + '<div class="numPage">共 <i class="p">--</i> 頁 / <i class="r">--</i> 筆</div>'
                        + '<div class="pager -action-goNext fal fa-angle-right"></div>'
                    + '</div>');

            $wg.find('.-action-goPrev').on('click', goPrevPageHandler);
            $wg.find('.-action-goNext').on('click', goNextPageHandler);
            $wg.find('.-action-goPage').on('change', goPageHandler);

            wgObj = {
                $wg         : $wg,
                dataLength  : 0,
                currPage    : 0,
                perPage     : DEFAULT_LIST_PER_PAGE,
                numPage     : 0,
                update      : update,
                getStatus   : getStatus,
                goPage      : goPage,

                pageChangeHandler     : null,
            };

            if( handlers != undefined ){
                if( handlers.pageChangeHandler != undefined ){
                    wgObj.pageChangeHandler = handlers.pageChangeHandler;
                }
            }

            $wg.data( 'obj',  wgObj );
            wgList[ elName ] = wgObj;

            $wrapper.empty();
            $wrapper.append( $wg );

            return wgObj;
        }


        function goPage( nextPage, noNeedUpdateSelect ){
            var wg  = this;

            wg.currPage = nextPage;

            if( noNeedUpdateSelect != undefined && noNeedUpdateSelect == true ){
                wg.$wg.find('select').val( nextPage );
            }

            if( typeof wg.pageChangeHandler == "function" ){
                wg.pageChangeHandler( wg.getStatus() );
            }
        }


        function goPrevPageHandler( e ){
            var $wg = $(e.currentTarget).parents('.ebPager');
            var wg  = $wg.data( 'obj' );

            var nextPage = wg.currPage;
            if( nextPage > 1 ){
                nextPage -= 1;
            }else{
                return;
            }

            wg.goPage( nextPage );
        }


        function goNextPageHandler( e ){
            var $wg = $(e.currentTarget).parents('.ebPager');
            var wg  = $wg.data( 'obj' );

            var nextPage = wg.currPage;
            if( nextPage < wg.numPage ){
                nextPage += 1;
            }else{
                return;
            }

            wg.goPage( nextPage );
        }


        function goPageHandler( e ){
            var $wg = $(e.currentTarget).parents('.ebPager');
            var wg  = $wg.data( 'obj' );

            var nextPage = e.currentTarget.value;

            wg.goPage( nextPage, true );
        }


        function getInstance( elName ){
            return wgList[ elName ];
        }


        function update( pager ){
            var $wg = this.$wg;
            var  wg = this;

            var $select      = $wg.find('select');
            var $numPageDisp = $wg.find('.numPage .p');
            var $numRecDisp  = $wg.find('.numPage .r');

            // clear wg
            $select.empty();
            $numPageDisp.text("");

            // no result
            if( pager == undefined || pager.numRec == 0 ){
                $wg.addClass('-disabled');
                $select.prop('disabled', true);
                $numPageDisp.text( '0' );
                $select.append( $('<option>--</option>') );
                return;
            }

            // build el
            wg.numRec   = pager.numRec;
            wg.currPage = pager.currPage;
            wg.perPage  = pager.perPage;
            wg.numPage  = Math.ceil( wg.numRec / wg.perPage );

            $wg.removeClass('-disabled');
            $numPageDisp.text( wg.numPage );
            $numRecDisp.text( wg.numRec );

            for( var p = 1; p <= wg.numPage; p ++ ){
                var $o = $('<option>').val( p ).text( '第' + p + ' 頁');
                if( p == wg.currPage ) $o.prop( 'selected', true );
                $select.append( $o );
            }

            $select.val( wg.currPage );

            if( wg.numPage > 1 ){
                $select.prop('disabled', false);
            }else{
                $select.prop('disabled', true);
            }
        }


        function getStatus(){
            return {
                numRec     : this.numRec,
                currPage   : this.currPage,
                perPage    : this.perPage
            }
        }


        return {
            init : init,
            getInstance : getInstance
        };
    })();


})();
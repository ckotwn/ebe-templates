(function(){


    window.Ebe.Widget = window.Ebe.Widget || {};


    window.Ebe.Widget.MapIconConfig = (function(){

        var base = Ebe.getBase();

        var SHIP       = {
            iconUrl     : base + 'assets/img/mapIcon/ship.png',
            iconSize    : [ 40,  40],
            iconAnchor  : [ 20,  39],
            popupAnchor : [  0, -41]
        };

        var PORT       = {
            iconUrl     : base + 'assets/img/mapIcon/port.png',
            iconSize    : [ 40,  40],
            iconAnchor  : [ 20,  39],
            popupAnchor : [  0, -41]
        };

        var WINDFIELD = {
            iconUrl     : base + 'assets/img/mapIcon/windfield.png',
            iconSize    : [ 40,  40],
            iconAnchor  : [ 20,  39],
            popupAnchor : [  0, -41]
        };

        function numberIcon( n ){
            return {
                iconUrl     : base + 'assets/img/mapIcon/number/'+ n +'.png',
                iconSize    : [ 40,  40],
                iconAnchor  : [ 20,  39],
                popupAnchor : [  0, -41]
            }
        }

        function alphabetIcon( a ){
            return {
                iconUrl     : base + 'assets/img/mapIcon/alphabet/'+ a +'.png',
                iconSize    : [ 40,  40],
                iconAnchor  : [ 20,  39],
                popupAnchor : [  0, -41]
            }
        }

        return {
            SHIP         : SHIP,
            PORT         : PORT,
            WINDFIELD    : WINDFIELD,
            numberIcon   : numberIcon,
            alphabetIcon : alphabetIcon
        }
    })();


    window.Ebe.Widget.SimpleMapBox = (function(){

        var wgList = {};

        function init( elName, config ){

            var $wrapper  = $( elName );
            var mapElName = 'lfmap' + mapElName;

            // create container
            var $wg = $('<div class="widgetBox wgSimpleMapBox">');
            $wg.attr('id', mapElName);

            $wrapper.append( $wg );

            var wg = {
                elName               : elName,
                mapElName            : mapElName,
                config               : config,
                $wg                  : $wg,
                addPoint             : addPoint,
                removePoint          : removePoint,
                clearAllPoints       : clearAllPoints
            };

            initMap( wg );

            wgList[ elName ] = wg;

            return wg;
        }


        function initMap( wg ){

            // init lfmap
            var lfMap = L.map( wg.mapElName, {
                zoom              : 10,
                scrollWheelZoom   : true,
                fullscreenControl : false,
                center            : [ 23.842292, 120.245986 ]
            });
            lfMap.zoomControl.setPosition( 'bottomright' );

            // init map base
            var mapType = 'OPEN_STREET_MAP';
            if( wg.config != undefined && wg.config.mapBaseType != undefined ){
                mapType = wg.config.mapBaseType;
            }

            var mapBase;
            if( mapType == 'GOOGLE_MAP' ){
                mapBase = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
                    maxZoom: 20,
                    subdomains:['mt0','mt1','mt2','mt3']
                });
            }else{
                mapBase = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                    maxZoom: 20,
                    attribution: '&copy; Openstreetmap | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                });
            }

            mapBase.addTo( lfMap );
            // L.tileLayer.provider( 'CartoDB.VoyagerLabelsUnder' ).addTo( lfMap );

            wg.lfMap = lfMap;
        }


        function addPoint( name, mapIconConfig, coord, handler ){

            var markerConfig = {
                title     : '',
                clickable : true,
                draggable : true,
                icon      : L.icon( mapIconConfig )
            };

            var marker = new L.Marker(coord, markerConfig );
            marker.addTo( this.lfMap );

            if( handler != undefined && typeof handler.onDragEnd == "function" ){
                marker.on('dragend', function( e ){
                    handler.onDragEnd( e.target.getLatLng() )
                });
            }

            if( name != null ) marker.bindPopup( name );

            return marker;
        }


        function removePoint(){

        }


        function clearAllPoints(){

        }


        return {
            init : init
        }
    })();


    window.Ebe.Page.Index = (function(){

        var $wg, $map, $layerPane, $fnPane;

        var mapsetListSrc = null;
        var mapsetSrc     = [];

        var mapsetList    = {};


        function init(){

            var mapsetListFile = "/mapset/mapset-list.json";

            // init wg
            $wg        = $('#indexMapPane');
            $map       = $('#indexMap');
            $layerPane = $('#indexMapLayerPane');
            $fnPane    = $('#indexMapFnPane');

            // init mapcore
            MapCore.init("indexMap");

            // scroll
            $("#indexMapLayerPane .layerPane").mCustomScrollbar({
                theme : "dark-3",
                scrollInertia : 250
            });

            // load map
            loadMapsetList( mapsetListFile );

            MapSelectPane.init();
        }


        function loadMapsetList( mapsetListFile ){

            $.ajax( mapsetListFile, {
                dataType: 'json'
            }).done(function( data ) {
                mapsetListSrc = data;
                loadMapsetListComplete();
            })
            .fail(function(){})
            .always(function(){});
        }


        function loadMapsetListComplete(){
            MapSelectPane.setOptions( mapsetListSrc );
            loadMapset();
        }


        function loadMapset( mapsetId ){

            if( mapsetId == undefined ){
                mapsetId = Object.keys( mapsetListSrc )[0];
            }

            if( mapsetListSrc[mapsetId] == undefined ){
                return;
            }

            LayerControlPane.setName( mapsetListSrc[mapsetId].name );
            LayerControlPane.clearAll();
            MapCore.clearAll();
            MapCore.panTo( mapsetListSrc[mapsetId].mapCenter );

            if( mapsetSrc[mapsetId] != undefined ){
                return loadMapsetComplete( mapsetId );
            }

            $.ajax( mapsetListSrc[mapsetId].file, {
                dataType: 'json'
            }).done(function( data ) {
                mapsetSrc[mapsetId] = data;
                loadMapsetComplete( mapsetId );
            })
            .fail(function(){})
            .always(function(){});
        }


        function loadMapsetComplete( mapsetId ){

            var data = mapsetSrc[mapsetId];
            for( var i in data ){
                initLayer( null, data[i] );
            }
        }

        function initLayer( $parent, layerConfig ){

            // init map
            var mapLayer = null;
            if( layerConfig.type != "group" ){
                MapCore.addLayer( layerConfig );
            }

            // init layer pane
            var $layerItem = LayerControlPane.addLayer( $parent, layerConfig );

            if( layerConfig.children != undefined ){
                for( var i in layerConfig.children ){
                    initLayer( $layerItem, layerConfig.children[i] );
                }
            }
        }


        // Leaflet 地圖核心
        var MapCore = (function(){

            var lfMap;
            var mapsetContainer;
            var layer = {};

            function init( elName ){

                // init lfmap
                lfMap = L.map( elName, {
                    zoom              : 11,
                    scrollWheelZoom   : true,
                    fullscreenControl : false,
                    center            : [ 23.842292, 120.245986 ]
                });
                lfMap.zoomControl.setPosition( 'bottomright' );

                mapsetContainer = L.layerGroup();
                mapsetContainer.addTo( lfMap );

                mapBase = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
                    maxZoom: 20,
                    subdomains:['mt0','mt1','mt2','mt3']
                });

                mapBase.addTo( lfMap );
            }

            function panTo( coord ){
                lfMap.panTo( coord );
            }

            function panToLayer( layerCode ){

                var layerObj = layer[layerCode];
                if( layerObj == undefined ) return;

                var lfLayer = layerObj.lfLayer;

                if( layerObj.config.graphType == "point" ){
                    lfMap.panTo( lfLayer.getLayers()[0].getLatLng() );
                }

                if( layerObj.config.graphType == "polygon"
                        || layerObj.config.graphType == "path" ){
                    lfMap.panTo( lfLayer.getBounds().getCenter() );
                }
            }

            function clearAll(){
                var layers = mapsetContainer.getLayers();
                for( var i in layers ){
                    mapsetContainer.removeLayer( layers[i] );
                }
            }

            function addLayer( layerConfig ){

                // 建立地圖圖層
                var lFLayer = (function(){

                    var geoJsonOption = {
                        config : layerConfig,
                        onEachFeature : function( feature, layer ){},
                        pointToLayer : function( feature, latlng ) {
                            var pointType = layerConfig.style.point.type;
                            if( pointType == "image" ){
                                return L.marker( latlng, {
                                    icon : L.icon( layerConfig.style.point.option )
                                });
                            }
                            if( pointType == undefined || pointType == "circle" ){
                                return L.circleMarker( latlng, layerConfig.style.point.option );
                            }
                        }
                    };

                    if( layerConfig.graphType == "polygon" || layerConfig.graphType == "path" ){
                        geoJsonOption.style = layerConfig.style.path.option;
                    }

                    var lFLayer = L.geoJson( null, geoJsonOption );
                    lFLayer.name = layerConfig.name;

                    $.getJSON( layerConfig.file, function( data ) {
                        lFLayer.addData( data );
                    });

                    lFLayer.on("add", function( e ){
                        var lfLayer     = e.target;
                        var layerConfig = e.target.options.config;
                    });
                    lFLayer.addTo( mapsetContainer );

                    return lFLayer;
                })();

                layer[layerConfig.file] = {
                    lfLayer : lFLayer,
                    config  : layerConfig
                };
            }

            function removeLayer(){}

            function showLayer( layerCode ){

                var layerObj = layer[layerCode];
                if( layerObj == undefined ) return;

                var lfLayer = layerObj.lfLayer;

                lfMap.addLayer( lfLayer );
            }

            function hideLayer( layerCode ){

                var layerObj = layer[layerCode];
                if( layerObj == undefined ) return;

                var lfLayer = layerObj.lfLayer;

                lfMap.removeLayer( lfLayer );
            }

            return {
                init        : init,
                panTo       : panTo,
                panToLayer  : panToLayer,
                clearAll    : clearAll,
                addLayer    : addLayer,
                removeLayer : removeLayer,
                showLayer   : showLayer,
                hideLayer   : hideLayer,
            };
        })();


        var MapSelectPane = (function(){

            function init(){
                $('.-action-showMapsetList').on('click', showMenu);
            }

            function showMenu( e ){
                $('.mapsetSelect').addClass('-active');
                $(window).on('click', hideMenu);
                e.stopPropagation();
            }

            function hideMenu( e ){
                $('.mapsetSelect').removeClass('-active');
                $(window).off('click', hideMenu);
                e.stopPropagation();
            }

            function setOptions( mapsetList ){

                for( var i in mapsetList ){
                    var $o = $('<div class="option">')
                                .attr('data-index', i)
                                .text(mapsetList[i].name);

                    $o.on('click', mapSelectHandler);

                    $layerPane.find('.mapsetNamePane .mapsetSelect').append( $o );
                }
            }

            function mapSelectHandler( e ){
                var index = $(this).attr('data-index');
                loadMapset( index );
                hideMenu( e );
            }

            return {
                init             : init,
                setOptions       : setOptions,
                mapSelectHandler : mapSelectHandler
            }
        })();


        // 圖層控制
        var LayerControlPane = (function(){


            var $LAYER_EL_TPL = $('<div class="layerItem" data-level="" data-type="layer" data-visible="1">'
                                + '<div class="infoBar">'
                                    + '<div class="legend"></div>'
                                    + '<div class="name"></div>'
                                    + '<div class="visibleToggle -action-toggleLayer">'
                                        + '<div class="icon fal fa-eye"></div>'
                                        + '<div class="icon fal fa-eye-slash"></div>'
                                    + '</div>'
                                + '</div>'
                                + '<div class="children"></div>'
                            + '</div>'
                            );

            var $GROUP_EL_TPL = $('<div class="layerItem" data-level="1" data-type="group" data-visible="1">'
                                + '<div class="infoBar">'
                                    + '<div class="legend"><div class="icon fal fa-folder-open"></div></div>'
                                    + '<div class="name"></div>'
                                    + '<div class="visibleToggle -action-toggleLayer">'
                                        + '<div class="icon fal fa-eye"></div>'
                                        + '<div class="icon fal fa-eye-slash"></div>'
                                    + '</div>'
                                + '</div>'
                                + '<div class="children"></div>'
                            + '</div>'
                            );

            function setName( name ){
                $layerPane.find('.nameBar span').text( name );
            }

            function clearAll(){
                $layerPane.find('.content').empty();
            }

            function addLayer( $parent, layerConfig ){

                var level = "1";
                if( $parent != undefined ){
                    var parentLevel = parseInt( $parent.attr('data-level') ) + 1;
                    if( !isNaN( parentLevel ) && parentLevel > 1 ) level = parentLevel.toString();
                }

                var type  = "layer";
                if( layerConfig.type  != undefined ) type  = layerConfig.type;

                if( type == "layer" ){ $layerItem = $LAYER_EL_TPL.clone(); }
                if( type == "group" ){ $layerItem = $GROUP_EL_TPL.clone(); }

                $layerItem.attr('data-level',   level);
                $layerItem.attr('data-type',    type);
                $layerItem.attr('data-visible', layerConfig.visible);
                $layerItem.find('> .infoBar .name').text( layerConfig.name );

                // create legend
                if( type == "layer" ){
                    var $legend;

                    if( layerConfig.graphType == "polygon" ){
                        $legend = $('<div class="legend-polygon"></div>');
                        $legend.css({
                                'border-color'     : layerConfig.style.path.option.color,
                                'background-color' : layerConfig.style.path.option.fillColor
                            });
                    }

                    if( layerConfig.graphType == "path" ){
                        $legend = $('<div class="legend-path"></div>');
                        $legend.css({
                                'border-width' : layerConfig.style.path.option.weight,
                                'border-color' : layerConfig.style.path.option.color
                            });
                    }

                    if( layerConfig.graphType == "point" ){
                        if( layerConfig.style.point.type == 'circle' ){
                            $legend = $('<div class="legend-point-circle"></div>');
                            $legend.css({
                                    'border-color' : layerConfig.style.point.option.color,
                                    'background-color' : layerConfig.style.point.option.fillColor
                                });
                        }
                        if( layerConfig.style.point.type == 'image' ){
                            $legend = $('<div class="legend-point-image"></div>');
                            $legend.css({
                                    'background-image' : 'url(' + layerConfig.style.point.option.iconUrl + ')'
                                });
                        }
                    }
                    $layerItem.find('> .infobar .legend').append( $legend );
                }

                // bind event
                $layerItem.find('> .infoBar .-action-toggleLayer').on('click', toggleLayerHandler);

                if( type == "layer" ){
                    $layerItem.attr('data-file', layerConfig.file);
                    $layerItem.find('> .infoBar .name').on('click', infoBarClickHandler);
                }

                if( $parent != null ){
                    $parent.find('> .children').append( $layerItem );
                }else{
                    $layerPane.find('.content').append( $layerItem );
                }

                return $layerItem;
            }

            function toggleLayerHandler( e ){
                var $layerItem = $(e.currentTarget).parent().parent();

                var visible = $layerItem.attr('data-visible');
                var file    = $layerItem.attr('data-file');

                if( visible == "1" ){
                    MapCore.hideLayer( file );
                    $layerItem.attr('data-visible', "0");
                }else{
                    MapCore.showLayer( file )
                    $layerItem.attr('data-visible', "1");
                }

            }

            function infoBarClickHandler(e){
                var $layerItem = $(e.currentTarget).parent().parent();
                var file = $layerItem.attr('data-file');

                MapCore.panToLayer( file );
            }

            function showMessage( message ){}

            function hideMessage(){}

            return {
                setName     : setName,
                clearAll    : clearAll,
                addLayer    : addLayer,
                showMessage : showMessage,
                hideMessage : hideMessage
            };
        })();


        return {
            init : init
        }
    })();


})();
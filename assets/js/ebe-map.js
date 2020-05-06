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


    window.Ebe.Widget.MuitiMapBox = (function(){

    })();


})();
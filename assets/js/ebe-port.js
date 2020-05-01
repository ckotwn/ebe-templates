(function(){


    window.Ebe.Page.PortAdd = (function(){

        function init(){}


    })();


    window.Ebe.Page.PortEdit = (function(){

        function init(){}


    })();


    window.Ebe.Page.PortList = (function(){

        function init(){

            var wg = Ebe.Widget.SimpleMapBox.init('#wg1', { mapBaseType : 'GOOGLE_MAP'});

            $('.portListItem').each(function(){
                var $this = $(this);

                var n   = $this.attr('data-number');
                var lat = $this.attr('data-lat');
                var lng = $this.attr('data-lng');

                // add map marker
                portMarker = wg.addPoint( null,
                    Ebe.Widget.MapIconConfig.numberIcon(n),
                    [ lat, lng ], );

                $this.find('.-action-centerMap').on('click', function(){
                    var $this = $(this).parents('.portListItem');
                    var lat = $this.attr('data-lat');
                    var lng = $this.attr('data-lng');

                    wg.lfMap.panTo([ lat, lng ]);
                });
            });
        }

        return {
            init : init
        }
    })();


})();
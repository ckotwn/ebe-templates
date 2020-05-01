(function(){


    window.Ebe.Page.WindfieldAdd = (function(){

        function init(){}


    })();


    window.Ebe.Page.WindfieldEdit = (function(){

        function init(){}


    })();


    window.Ebe.Page.WindfieldList = (function(){

        function init(){

            var wg = Ebe.Widget.SimpleMapBox.init('#wg1', { mapBaseType : 'GOOGLE_MAP'});

            $('.wfListItem').each(function(){
                var $this = $(this);

                var n   = $this.attr('data-number');
                var lat = $this.attr('data-lat');
                var lng = $this.attr('data-lng');

                // add map marker
                var wfMarker = wg.addPoint( null,
                    Ebe.Widget.MapIconConfig.numberIcon(n),
                    [ lat, lng ], );

                $this.find('.-action-centerMap').on('click', function(){
                    var $this = $(this).parents('.wfListItem');
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
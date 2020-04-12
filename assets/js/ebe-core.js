;(function(){
    window.Ebe = {};


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


    (function(){})();


})();
(function(){

    window.Ebe.Page.Chart = (function(){

        function init(){
            updateChartSize();

            $(window).on('resize', updateChartSize);
            $(document).on('scroll', updateChartSize);

        }

        function updateChartSize(){
            var $chartCanvasWrapper = $('#chartCanvasWrapper2');
            var $chartCanvas = $('#chartCanvas');

            var chartScale = $chartCanvasWrapper.width() / 900;

            console.log( chartScale );

            $chartCanvas.css({ transform: 'scale(' + chartScale + ')' });
        }

        return {
            init : init
        };
    })();

})();
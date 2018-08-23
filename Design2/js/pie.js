$(function () {

    var chart = {
        type: 'pie',
        title:'',
        width:280,
        height:280,
         plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    };



    var plotOptions = {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false

            },
            startAngle: -90,
            endAngle: 90

        },

        series: {
            pointWidth: 25

        }
    };

    var title= {
        text: ''
    };



    var series = [{
        name: 'Share',
        type: 'pie',
        className:'Hero',
        innerSize: '50%',

        data: [
            { name: 'Progress', y: 60 ,color:'#00d600'},
            {name:"back",y:40,color:'#d2d2d2'}
        ],
        enableMouseTracking:false
    }];


    var json = {};
    json.chart = chart;
    json.plotOptions = plotOptions;
    json.series = series;
    json.title = title;
    json.exporting = {enabled:false};

    $('#progressMeter').highcharts(json);

});
$(function () {

    var chart = {
        type: 'column',
        height: 240,
        zoomType: 'x'


    };

    var progress = [20, 30, 10, 80, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ndata = [];
    var title = {
        text: ''
    };

    var xAxis = {
        plotBands: [{ // mark the weekend
            color: '#FCFFC5'
        }],
        categories: ['CH1', 'CH2', 'CH3', 'CH4', 'CH5', 'CH6'
            , 'CH7', 'CH8', 'CH9', 'CH10', 'CH11', 'CH12', 'CH13', 'CH14', 'CH15', 'CH16', 'CH17', 'CH18', 'CH19', 'CH20', 'CH21', 'CH22']
    };

    var yAxis = {
        stackLabels: {
            enabled: false
        },
        title: {
            text: ''
        },
        visible: false,
        max: 100

    };

    var plotOptions = {
        column: {
            stacking: 'normal',
            pointPadding: 0,
            groupPadding: 0,
            pointMargin: 0,
            groupMargin: 0,
            dataLabels: {
                enabled: true,
                formatter: function () {
                    if (this.y > 0)
                        return this.y + ' %';
                    else
                        return '';
                }
            }
        },
        series: {
            pointWidth: 25
        }
    };

    var temp = [];
    for (var i = 0; i < 22; i++) {
        var temp2 = {};
        temp2.name = 'Chapter ' + (i + 1);
        temp2.color = getColor(progress[i]);
        temp2.y = progress[i];
        temp.push(temp2);
        ndata.push({color: '#E7E5E5', y: 100 - progress[i]});
    }


    var series = [
        {
            data: ndata,
            legendIndex: 1,
            name: '',
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false,
            showInLegend: false,
            index: 1

        },
        {
            data: temp,
            legendIndex: 0,
            name: 'Chapter Wise Progress',
            dataLabels: {
                color: '#000000',
                inside: false,
                style: {
                    textOutline: '0px contrast'
                }
            },
            showInLegend: false,
            index: 2
        }, /*,
         {
         type:'line',
         color:'#e20900',
         enableMouseTracking:false,
         marker:{
         enabled:false
         },
         step:'center',
         data: temp,
         dataLabels:{
         color:'#000000',
         inside:false,
         style:{
         textOutline:'0px contrast'
         }
         },
         showInLegend:false
         }*/
        {
            type: 'line',
            color: '#101eff',
            name: 'Overall',
            enableMouseTracking: false,
            marker: {
                enabled: false
            },
            data: [85, 85, 40, 40, 45, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            dataLabels: {
                color: '#000000',
                inside: false,
                style: {
                    textOutline: '0px contrast'
                }
            },
            showInLegend: true
        }
    ];

    responsive = {
        rules: [{

                 plotOptions:{
                     column: {
                         pointWidth: 5
                     },

               series:{
                   pointWidth:5

            }


        }}]
    };


    var json = {};
    json.chart = chart;
    json.title = title;
    json.xAxis = xAxis;
    json.plotOptions = plotOptions;
    json.yAxis = yAxis;
    json.series = series;
    json.responsive = responsive;
    json.exporting = {enabled: false};

    $('#journeymap').highcharts(json);

    function getColor(value) {
        if (value < 50) {
            return '#e20900';
        }
        else if (value === 50)
            return '#e27600';
        else
            return '#00d600';
    }


});
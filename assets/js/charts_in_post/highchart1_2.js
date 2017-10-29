var myChart = Highcharts.chart('container',
    {
        chart: {
            type: 'column',
        },
        title: {
            text: 'Grouped gesture count/percentage (by command)'
        },
        colors: ['#d48893', '#969cbc', '#a798a9', '#d3cfca', '#8085e9',
        '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
        xAxis: {
            title: {
                text: 'Commands in interaction'
            },
            categories: ['Accept', 'Reject', 'Gesture On', 'Gesture Off', 'Open', 'Close', 'Volume Up', 'Zoom In', 'Zoom Out', 'Back', 'Delete', 'Help', 'Menu Access', 'Move', 'Pan']
        },
        yAxis: {
            title: {
                text: '%'
            },
            min: 0,
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Object-centric',
            data: data_binding_oc
        }, {
            name: 'World-dependent',
            data: data_binding_wd
        }, {
            name: 'World-independent',
            data: data_binding_wi
        }, {
            name: 'n/a',
            data: data_null
        }]
    });

var myChart2 = Highcharts.chart('container2',
    {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Distinct gesture count & Agreement rate for commands'
        },
        colors: ['#d48893', '#969cbc', '#a798a9', '#d3cfca', '#8085e9',
        '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
        xAxis: {
            title: {
                text: 'Commands in interaction'
            },
            categories: ['Accept', 'Reject', 'Gesture On', 'Gesture Off', 'Open', 'Close', 'Volume Up', 'Zoom In', 'Zoom Out', 'Back', 'Delete', 'Help', 'Menu Access', 'Move', 'Pan']
        },
        yAxis: [{
            title: {
                text: 'Count'
            },
            min: 0,
        }, {
            title: {
                text: 'Agreement rate'
            },
            min: 0,
            opposite:true,
        }],
        tooltip: {
            shared: true
        },
        legend: {
            shadow: false
        },
        plotOptions: {
            bar: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Agreement rate',
            data: [0.073, 0.063, 0.134, 0.040, 0.306, 0.065, 0.116, 0.252, 0.202, 0.136, 0.100, 0.041, 0.054, 0.196, 0.424],
            pointPadding: 0.05,
            
            yAxis: 1,
        },{
            name: 'Count',
            data: [46, 50, 47, 47, 46, 46, 45, 48, 47, 48, 46, 46, 46, 44, 48],
            pointPadding: 0.3,
            //pointPlacement: -0.5,
            
        }, ]
    });


function fun(cd,canvas,maxWidth) {
    var code =
    cd,

        chart;

    if (chart) {
        chart.clean();
    }

    chart = flowchart.parse(code);
    chart.drawSVG(canvas, {
        //'x': 30,
        // 'y': 50,
        'line-width': 3,
        'maxWidth': maxWidth,//ensures the flowcharts fits within a certian width
        'line-length': 20,
        'text-margin': 20,
        'font-size': 14,
        'font': 'normal',
        'font-family': 'Helvetica',
        'font-weight': 'normal',
        'font-color': 'black',
        'line-color': 'grey',
        'element-color': 'white',
        'fill': 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block',
        'scale': 1,
        'symbols': {
            'start': {
                //'font-color': 'grey',
                //'element-color': 'green',
                //'fill': 'yellow',
            },
            'end': {
                'class': 'end-element',
            },
            'inputoutput': {
                'maxWidth': 300,
            }
        },
        'flowstate': {
            'past': { 'fill': '#d4e976' },
            'current': { 'fill': 'yellow', 'font-color': 'red', 'font-weight': 'bold' },
            'future': { 'fill': '#FFFF99' },
            'request': { 'fill': '#fee17c' },
            'invalid': { 'fill': '#444444' },
            'approved': { 'fill': '#fea17d', 'font-color': 'white' },
            'rejected': { 'fill': '#C45879', 'font-size': 12, 'yes-text': 'n/a', 'no-text': 'REJECTED' }
        }
    });

};
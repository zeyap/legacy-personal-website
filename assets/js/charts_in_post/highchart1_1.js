var data_binding_oc = [4, 3, 5, 2, 45, 2, 4, 0, 0, 5, 39, 2, 1, 43, 5],
    data_binding_wd = [23, 19, 5, 18, 0, 17, 18, 16, 18, 13, 0, 18, 23, 0, 7],
    data_binding_wi = [20, 28, 37, 27, 1, 27, 23, 32, 29, 30, 7, 26, 22, 1, 36],
    data_form_s = [4, 3, 5, 2, 45, 2, 4, 0, 0, 5, 39, 2, 1, 43, 5],
    data_form_d = [23, 19, 5, 18, 0, 17, 18, 16, 18, 13, 0, 18, 23, 0, 7],
    data_bodyparts_f = [20, 28, 37, 27, 1, 27, 23, 32, 29, 30, 7, 26, 22, 1, 36],
    data_bodyparts_2 = [4, 3, 5, 2, 45, 2, 4, 0, 0, 5, 39, 2, 1, 43, 5],
    data_bodyparts_1 = [23, 19, 5, 18, 0, 17, 18, 16, 18, 13, 0, 18, 23, 0, 7],
    data_nature_abs = [20, 28, 37, 27, 1, 27, 23, 32, 29, 30, 7, 26, 22, 1, 36],
    data_nature_met = [4, 3, 5, 2, 45, 2, 4, 0, 0, 5, 39, 2, 1, 43, 5],
    data_nature_sym = [23, 19, 5, 18, 0, 17, 18, 16, 18, 13, 0, 18, 23, 0, 7],
    data_nature_phy = [20, 28, 37, 27, 1, 27, 23, 32, 29, 30, 7, 26, 22, 1, 36],
    data_null = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function selectInput(oSelect) {
    var currVal = oSelect.value;
    if (currVal == 'Binding') {
        myChart.series[0].update({
            name: 'Object-centric',
            data: data_binding_oc
        });
        myChart.series[1].update({
            name: 'World-dependent',
            data: data_binding_wd
        });
        myChart.series[2].update({
            name: 'World-independent',
            data: data_binding_wi
        });
        myChart.series[3].update({
            name: 'n/a',
            data: data_null
        });
    } else if (currVal == 'Form') {
        myChart.series[0].update({
            name: 'Static',
            data: data_form_s
        });
        myChart.series[1].update({
            name: 'Dynamic',
            data: data_form_d
        });
        myChart.series[2].update({
            name: 'n/a',
            data: data_null
        });
        myChart.series[3].update({
            name: 'n/a',
            data: data_null
        });
    } else if (currVal == 'Body Parts') {
        myChart.series[0].update({
            name: 'Full body',
            data: data_bodyparts_f
        });
        myChart.series[1].update({
            name: 'Two hands',
            data: data_bodyparts_2
        });
        myChart.series[2].update({
            name: 'One hand',
            data: data_bodyparts_1
        });
        myChart.series[3].update({
            name: 'n/a',
            data: data_null
        });
    } else if (currVal == 'Nature') {
        myChart.series[0].update({
            name: 'Abstract',
            data: data_nature_abs
        });
        myChart.series[1].update({
            name: 'Metaphorical',
            data: data_nature_met
        });
        myChart.series[2].update({
            name: 'Symbolic',
            data: data_nature_sym
        });
        myChart.series[3].update({
            name: 'Physical',
            data: data_nature_phy
        });
    }

    //else {
    // document.getElementById('taxodropdown').value = '01';​​​​​​​​​​
    //}
}
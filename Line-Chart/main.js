var trace1 = {
    x: [1, 2, 3],
    y: [2, 4, 6],
    type: 'scatter'
}

var trace2 = {
    x: [3, 2, 1],
    y: [1, 3, 5],
    type: 'scatter'
}

var data = [ trace1, trace2 ]

var layout = {
    title: "Line Charts"
}

Plotly.newPlot('line-chart', data, layout)

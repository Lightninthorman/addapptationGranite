function granite_heatmap(heatmapBlock, jsonTheme){
    const id = heatmapBlock.id;
    const cssId = "#" + heatmapBlock.id;
    const chartId = 'chart-' + id;
    const o = heatmapBlock.options;
    const r = heatmapBlock.records;
    const t = jsonTheme;
    /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
    var heatmapStyles = document.createElement('style');
    heatmapStyles.innerHTML = `
    html, body, ${cssId} {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    `
    document.head.appendChild(heatmapStyles);
    // create a chart and set the data
    var chart = anychart.heatMap(r);

    // set the chart title
    chart.title(o.title);

    // set the container id
    chart.container(id);

    // initiate drawing the chart
    chart.draw();
}
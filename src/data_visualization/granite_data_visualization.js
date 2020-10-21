function granite_data_visualization(dataVisualizationBlock, jsonTheme){
  console.log(("data: v1"))
    const id = dataVisualizationBlock.id;
    const cssId = "#" + dataVisualizationBlock.id;
    const o = dataVisualizationBlock.options;
    const r = dataVisualizationBlock.records;
    const t = jsonTheme
    let viewportWidth = window.innerWidth;

    /*---------------------------------------------
    Add Font Family To Header
    ---------------------------------------------*/
    if(o.chart_type === "line"){
      const labelCount = o.x_axis_labels.length;
      const recordCount = r.length;
      if(labelCount === recordCount){
        console.log("Labels and records align")
      } else if (labelCount > recordCount){
        console.log("More Labels than records")
      }
      else if (recordCount > labelCount){
        console.log("More records than labels")
      }
    }

    /*---------------------------------------------
    Add Font Family To Header
    ---------------------------------------------*/
    const font_include = document.getElementById('g__font_stylesheet');
    if (!font_include){
        var head = document.head;
        var fontLink = document.createElement("link");
        fontLink.type = "text/css";
        fontLink.rel = "stylesheet";
        fontLink.id = "g__font_stylesheet";
        fontLink.href = "https://use.typekit.net/ihq4dbs.css";
        head.appendChild(fontLink);
    }
    /*---------------------------------------------
    AnyChart Script
    ---------------------------------------------*/
    var anyChartScript = document.createElement('script');
    anyChartScript.type = 'text/javascript';
    anyChartScript.id = "granite-anychart"
    anyChartScript.src = 'https://cdn.anychart.com/releases/8.9.0/js/anychart-bundle.min.js';
    document.head.appendChild(anyChartScript);
    const anychart_include = document.getElementById('granite-anychart');

    /*---------------------------------------------
    Theme Variables
    ---------------------------------------------*/
    var g__container = document.getElementById(id);
    g__container.setAttribute('mode', t.mode);
    const background_color = t.mode === "midnight" ? "#101010" : "#ffffff";
    const font_color = t.mode === "midnight" ? "#ffffff" : "#101010";
    const font_color_reverse = t.mode === "midnight" ? "#000000" : "#ffffff";
    const tooltip_background = t.mode === "midnight" ? "#ffffff" : "#000000";
    /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
    var dataVisualizationStyles = document.createElement('style');
    dataVisualizationStyles.innerHTML = `
    ${cssId}{
      --font-hairline: hero-new-hairline, sans-serif;
      --font-regular: hero-new, sans-serif;
      --font-bold: hero-new, sans-serif;
      --background: #ffffff;
      --background-reverse: #000000;
      --font-color-reverse: #ffffff;
      --border: 1px solid #5d5d5d;
      --font-color: #5d5d5d;

    }
    ${cssId}[mode="midnight"]{
      --background: #101010;
      --reverse: #ffffff;
      --background-reverse: #ffffff;
      --font-color-reverse: #000000;
      --border: 1px solid #ffffff;
      --font-color: #ffffff;
    }
    ${cssId} {
      height: 600px;
      width: auto;
      margin: 15px;;
    }
    ${cssId} .g__action_container{
      padding-bottom: 25px;
      margin-bottom: 25px;
      border-bottom: 1px solid #BFBFBF;
    }
    ${cssId} .g__action_header{
      font-family: var(--font-hairline);
      font-weight: 100;
      font-size: 32px;
      color: ${font_color};
      margin-bottom: 25px;
    }
    ${cssId} .g__action_description{
      font-family: var(--font-regular);
      font-weight: 300;
      font-size: 16px;
      color: ${font_color};;
      margin-bottom: 25px;
    }
    /*--------------------------
    Export Buttons
    --------------------------*/
    ${cssId} .g__btn_wrapper{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    ${cssId} .g__export_btn{
      font-family: var(--font-regular);
      font-weight: 300;
      font-size: 16px;
      background: rgba(255, 255, 255, 0.15);
      padding: 5px 25px;
      color: var(--font-color);
      border: var(--border);
      box-sizing: border-box;
      letter-spacing: 0.05em;
      border-radius: 2px;
      margin-left: 25px;
    }
    /*--------------------------
    Desktop Tooltip
    --------------------------*/
    .anychart-tooltip {
      border-radius: 3px;
      padding: 5px 10px;
      background: var(--background-reverse);
      display: inline-block;
      box-sizing: border-box;
      letter-spacing: normal;
      color: var(--font-color-reverse);
      font-weight: 300;
      border: var(--border);
      font-family: var(--font-regular);
      font-size: 14px;
      position: absolute;
      pointer-events: none;
      white-space: nowrap;
      margin: 10px;
    }
    .anychart-tooltip-separator {
      color: var(--font-color-reverse);;
      border: none;
      height: 1px;
      margin: 5px 0;
    }

    .anychart-tooltip-title{
      font-size: 14px;
      color: var(--font-color-reverse);
    }
    /*--------------------------
    Mobile Styles
    --------------------------*/
    @media (max-width: 768px) {
      .anychart-tooltip {
        position: absolute;
        bottom: 0;
        top: 80% !important;
        left: 0;
        width: 100%;
        right: 0;
      }
    }

    `
    document.head.appendChild(dataVisualizationStyles);
    /*---------------------------------------------
    Action Row
    ---------------------------------------------*/
    const action_row_container = document.createElement('div');
    action_row_container.setAttribute('class', 'g__action_container')

    const action_content = document.createElement('div');
    action_content.setAttribute('class', 'g__action_content')

    if(!!o.action_header){
      const action_header = document.createElement('h2');
      action_header.setAttribute('class', 'g__action_header');
      action_header.innerHTML = o.action_header;
      action_content.appendChild(action_header);
    }
    if(!!o.action_description){
      const action_description = document.createElement('p');
      action_description.setAttribute('class', 'g__action_description');
      action_description.innerHTML = o.action_description;
      action_content.appendChild(action_description);
    }

    const action_utility = document.createElement('div');
    action_utility.setAttribute('class', 'g__action_utility');

    if (o.export_excel || o.export_pdf || o.print){
      const btn_wrapper = document.createElement('div');
      btn_wrapper.setAttribute('class', 'g__btn_wrapper')
      if(o.export_excel){
        const export_excel = document.createElement('button');
        export_excel.setAttribute('id', 'g__export_excel');
        export_excel.setAttribute('class', 'g__export_btn');
        export_excel.innerHTML = "Excel"
        btn_wrapper.appendChild(export_excel);
      }
      if(o.export_pdf){
        const export_pdf = document.createElement('button');
        export_pdf.setAttribute('id', 'g__export_pdf');
        export_pdf.setAttribute('class', 'g__export_btn');
        export_pdf.innerHTML = "PDF"
        btn_wrapper.appendChild(export_pdf);
      }
      action_utility.appendChild(btn_wrapper);
    }



    action_row_container.appendChild(action_content);
    action_row_container.appendChild(action_utility);

    document.getElementById(id).appendChild(action_row_container);





    const LISTENER_DOUBLE_CLICK = "double_click";
    const LISTENER_POINT_SELECT = "point_select";
    const CHART_TYPE_LINE = "line";
    const CHART_TYPE_BAR = "bar";
    const CHART_TYPE_PIE = "pie";
    const CHART_TYPE_DRILLDOWN = "drilldown";
    const CHART_TYPE_VERTICAL_BAR = "vertical";
    const CHART_TYPE_COLUMN = "column";
    const CHART_TYPE_PYRAMID = "pyramid"

    let attr__container_id = id || '';
    let attr__records = dataVisualizationBlock.records || [];
    let attr__title = dataVisualizationBlock.options.title || '';
    let attr__title_color = dataVisualizationBlock.options.title_color || '#212529';
    let attr__title2 = dataVisualizationBlock.options.title2 || '';                       // used with drilldown chart
    let attr__title2_color = dataVisualizationBlock.options.title2_color || '#212529';    // used with drilldown chart
    let attr__label = dataVisualizationBlock.options.label || '';
    let attr__label_color = dataVisualizationBlock.options.label_color || '#60727b';
    let attr__inner_radius = dataVisualizationBlock.options.inner_radius || '';
    let attr__label_position = dataVisualizationBlock.options.label_position || 'outside';
    let attr__listener = dataVisualizationBlock.options.listener || '';
    let attr__chart_type = dataVisualizationBlock.options.chart_type || 'pie';
    let attr__bar_chart_vertical = dataVisualizationBlock.options.bar_chart_vertical || false;
    let attr__drilldown_chart_types = dataVisualizationBlock.options.drilldown_chart_types || []; // used with drilldown chart
    let attr__drilldown_details_field_name = dataVisualizationBlock.options.drilldown_details_field_name || "total";
    let attr__enable_legend = dataVisualizationBlock.options.enable_legend || true;
    let attr__legend_color = '';
    let attr__series_titles = dataVisualizationBlock.options.series_titles || [];
    let attr__series_name = dataVisualizationBlock.options.series_name || '';
    let attr__xAxis_title = dataVisualizationBlock.options.x_axis_title || '';
    let attr__yAxis_title = dataVisualizationBlock.options.y_axis_title || '';

    anychart.onDocumentLoad(function () {

      anychart.graphics.useAbsoluteReferences(false);

      if (!!o.colors){
        var testColors = o.colors;
      } else {
        var testColors = ['#D44697','#FF8BCD','#FDDBEE','#FFB866', '#FFA08C'];
      }


        // create an instance of a pie chart
        var chart;
        var data;
        var stage;
        var draw_chart = true; // We might have to draw our charts in a custom function

        const process_selected_fill = function(my_chart, chart_type, fill_color) {
            // Deal with selected state fill colors.
            switch(chart_type) {
              case CHART_TYPE_COLUMN:
              case CHART_TYPE_BAR:
              case CHART_TYPE_VERTICAL_BAR:
                var i=0;
                // create a loop
                while (my_chart.getSeriesAt(i)){
                  // rename each series
                  my_chart.getSeriesAt(i).selected().fill(fill_color);
                  i++;
                }
                break;
              default:
               // do nothing
            }
        }

        switch(attr__chart_type) {
          case CHART_TYPE_LINE:
            const new_data = [];
            const labels = o.x_axis_labels;
            const data_sets = attr__records;

            // Push the first values into the new array - x axis labels
            for(var i = 0; i < labels.length; i++){
              new_data.push([labels[i]])
            }
            // Push the second value for tooltip alingment.
            for(var i = 0; i < attr__records.length; i++){
              new_data[i].push(attr__records[i].x);
            }

            // loop through each record and align the values with anycharts structure
            for(var i = 0; i < attr__records.length; i++){
              attr__records[i].line_values.forEach((val, count)=>{
                new_data[count].push(val);
              })
            }
            // assign the data to anycharts
            console.table(new_data);
            chart = anychart.line();
            var data = anychart.data.set(new_data);
            for(var i = 0; i < new_data.length; i++){
              let series = chart.line(data.mapAs({x: 0, value: i+2})).stroke({color: testColors[i],  thickness: 3});
              series.hovered().markers().enabled(true).type('circle').size(5)
              series.name(new_data[i][1]);
            }
            // .name(new_data[i][1])
            // set scale mode - no space for beginning and end x labels
            chart.xScale().mode('continuous');

            // set the titles of the axes
            if(!!attr__xAxis_title) {
              let xAxis = chart.xAxis();
              xAxis.title(attr__xAxis_title);
              xAxis.title(attr__yAxis_title);
              xAxis.title().fontSize(18);
              xAxis.title().fontColor(font_color);
              xAxis.title().fontWeight(300);
              xAxis.title().fontFamily("hero-new, sans-serif");
            }
            if(!!attr__yAxis_title) {
              let yAxis = chart.yAxis();
              yAxis.title(attr__yAxis_title);
              yAxis.title().fontSize(18);
              yAxis.title().fontColor(font_color);
              yAxis.title().fontWeight(300);
              yAxis.title().fontFamily("hero-new, sans-serif");
            }
            var xLabels = chart.xAxis().labels();
            xLabels.fontFamily("hero-new, sans-serif");
            xLabels.fontColor(font_color);
            xLabels.padding(3);

            var yLabels = chart.yAxis().labels();
            yLabels.fontFamily("hero-new, sans-serif");
            yLabels.fontColor(font_color);
            yLabels.padding(10);
            // Tooltip settings
            // if(o.show_tooltip){
            //   chart.tooltip().useHtml(true);
            //   chart.tooltip().format('<span>{%name}{%value}<br></span>');
            // }
          break;
          case CHART_TYPE_PIE:
            chart = anychart.pie();
            // set the data. The 'normal' key with the 'fill' option sets the color of the bars
            chart.data(attr__records);

            // configure outlines
            chart.normal().outline().enabled(true);
            chart.normal().outline().width("0");
            chart.hovered().outline().width("0");
            chart.selected().outline().width("3");
            chart.selected().outline().fill(font_color);
            chart.selected().outline().stroke(font_color);
            chart.selected().outline().offset(0);

            // set the position of labels
            chart.labels().position(attr__label_position);
            chart.labels().fontSize(18);
            chart.labels().fontColor(font_color);
            chart.labels().fontWeight(300);
            chart.labels().fontFamily("hero-new, sans-serif");
            chart.connectorStroke({color: "#595959", thickness: 0, dash:"2 2"});

            if(!!attr__inner_radius) {
              //set the inner radius to form the doughnut shape
              chart.innerRadius(attr__inner_radius);
            }
            if(viewportWidth < 768){
              chart.labels().position("inside");
            }

          break;
          case CHART_TYPE_COLUMN:
            const column_data = [];
            const column_labels = o.x_axis_labels;
            const column_data_sets = attr__records;
            // Push the first values into the new array - x axis labels
            for(var i = 0; i < column_labels.length; i++){
              column_data.push([column_labels[i]])
            }
            // Push the second value for tooltip alingment.
            for(var i = 0; i < attr__records.length; i++){
              column_data[i].push(attr__records[i].x);
            }
            // loop through each record and align the values with anycharts structure
            for(var i = 0; i < attr__records.length; i++){
              attr__records[i].line_values.forEach((val, count)=>{
                column_data[count].push(val);
              })
            }
            // assign the data to anycharts
            chart = anychart.column();
            var data = anychart.data.set(column_data);
            for(var i = 0; i < column_data.length; i++){
              let series = chart.column(data.mapAs({x: 0, value: i+2}));
              series.name(column_data[i][1]);
            }

            // set the titles of the axes
            if(!!attr__xAxis_title) {
              let xAxis = chart.xAxis();
              xAxis.title(attr__xAxis_title);
            }
            if(!!attr__yAxis_title) {
              let yAxis = chart.yAxis();
              yAxis.title(attr__yAxis_title);
            }
            // Tooltip settings
            // if(o.show_tooltip){
            //   chart.tooltip().useHtml(true);
            //   chart.tooltip().format('<span>{%name}{%value}<br></span>');
            // }

          break;
          case CHART_TYPE_BAR:
            const bar_data = [];
            const bar_labels = o.x_axis_labels;
            const bar_data_sets = attr__records;
            // Push the first values into the new array - x axis labels
            for(var i = 0; i < bar_labels.length; i++){
              bar_data.push([bar_labels[i]])
            }
            // Push the second value for tooltip alingment.
            for(var i = 0; i < attr__records.length; i++){
              bar_data[i].push(attr__records[i].x);
            }
            // loop through each record and align the values with anycharts structure
            for(var i = 0; i < attr__records.length; i++){
              attr__records[i].line_values.forEach((val, count)=>{
                bar_data[count].push(val);
              })
            }
            // assign the data to anycharts
            chart = anychart.bar();
            var data = anychart.data.set(bar_data);
            for(var i = 0; i < bar_data.length; i++){
              let series = chart.bar(data.mapAs({x: 0, value: i+2}));
              series.name(bar_data[i][1]);
            }

            // set the titles of the axes
            if(!!attr__xAxis_title) {
              let xAxis = chart.xAxis();
              xAxis.title(attr__xAxis_title);
            }
            if(!!attr__yAxis_title) {
              let yAxis = chart.yAxis();
              yAxis.title(attr__yAxis_title);
            }
            // Tooltip settings
            // if(o.show_tooltip){
            //   chart.tooltip().useHtml(true);
            //   chart.tooltip().format('<span>{%name}{%value}<br></span>');
            // }

          break;
          case CHART_TYPE_VERTICAL_BAR:
            chart = anychart.vertical();
            data = anychart.data.set(attr__records);



            console.log("vertical bar chart data set:");
            console.log(attr__records);

            var series = chart.bar(data);
              series.name(attr__series_name);

              // disable the stroke
            series.stroke("none");

          break;
          case CHART_TYPE_PYRAMID:
            var data = anychart.data.set(attr__records);
            var chart = anychart.pyramid(data);

          // Set connector stroke.
          chart.connectorStroke('#607D8B', 1.5, '5 2', 'round');

          break;
          case CHART_TYPE_DRILLDOWN:
            let details_chart;
            let chart_type_main = attr__drilldown_chart_types[0];
            let chart_type_details = attr__drilldown_chart_types[1];

            let drillDownFunction = function() {
                // clear the chart with details
                details_chart.removeAllSeries();

                // points = e.points;
                points = chart.getSelectedPoints();

                console.log(points[0].get(attr__drilldown_details_field_name));
                console.log("about to get points for " + attr__drilldown_details_field_name);

                // go through selected points and add proper data
                for (i=0;i<points.length;i++){
                  switch(chart_type_details) {
                    case CHART_TYPE_LINE:
                      details_chart.line(points[i].get(attr__drilldown_details_field_name)).name(points[i].get('x'));
                      break;
                    case CHART_TYPE_BAR:
                      details_chart.bar(points[i].get(attr__drilldown_details_field_name)).name(points[i].get('x'));
                      break;
                    default:
                      // do nothing
                  }
                };
            }

            stage = anychart.graphics.create(attr__container_id);

            switch(chart_type_main) {
              case CHART_TYPE_BAR:
                chart = anychart.bar();
                chart.bar(attr__records); // .name("Subject Interactions:");
              break;
              case CHART_TYPE_COLUMN:
                chart = anychart.column();
                chart.column(attr__records); // .name("Subject Interactions:");
              break;
              case CHART_TYPE_PIE:
                chart = anychart.pie();
                // set the data. The 'normal' key with the 'fill' option sets the color of the bars
                chart.data(attr__records);


                // set the start angle
                chart.startAngle(-90);

                // configure connectors
                chart.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});

                if(!!attr__inner_radius) {
                  //set the inner radius to form the doughnut shape
                  chart.innerRadius(attr__inner_radius);
                }
              break;
              default:
                // do nothing
            }

            process_selected_fill(chart, chart_type_main, "none");

            // Everything we normally do to chart outside of the select, we have to do here for the details chart.
            switch(chart_type_details) {
              case CHART_TYPE_LINE:
                details_chart = anychart.line();
              break;
              case CHART_TYPE_BAR:
                details_chart = anychart.bar();
              break;
              default:
                // do nothing
            }

            // Details chart config
            if(!!attr__title2) {
              details_chart.title(attr__title2);
            }
            if(!!attr__enable_legend) {
              details_chart.legend(true);
            }
            else {
              details_chart.legend(false);
            }
            //dissable credits watermark
            details_chart.credits().enabled(false);

            // Bind some listeners to the chart
            switch(attr__listener) {
              case LISTENER_POINT_SELECT:
                  //add a listener
                  chart.listen("pointsSelect", drillDownFunction);
                break;
              default:
                // do nothing
            }

            chart.bounds("0", "0", "40%", "100%");
            details_chart.bounds("50%", "0", "40%", "100%");

            chart.container(stage).draw();
            details_chart.container(stage).draw();
            draw_chart = false;

            // select a point and draw for the first time
            switch(chart_type_main) {
              case CHART_TYPE_PIE:
                chart.select(0);
                break;
              case CHART_TYPE_BAR:
                chart.getSeries(0).select(0);
                break;
              case CHART_TYPE_COLUMN:
                chart.getSeries(0).select(0);
                break;
              default:
            }
            drillDownFunction();

          break;
          default:
            chart = anychart.pie();
        }

        /*---------------------------------------------
        Global Elements
        ---------------------------------------------*/
        //Color Pallette
        chart.palette().items(testColors);

        // background color
        chart.background(background_color);

        // Tooltip settings
        if(o.show_tooltip && ((o.chart_type === "pie") || (o.chart_type === "pyramid"))){
          chart.tooltip().useHtml(true);
          chart.tooltip().format("<span>{%x}: {%value}<br></span>");
        }

        // Title Settings
        if(!!attr__title) {
          var title = chart.title();
          title.enabled(true);
          title.text(attr__title);
          title.fontFamily('hero-new', 'sans-serif', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji')
          title.fontWeight(300);
          title.fontColor(font_color);
          title.fontSize(30);
          //dissable credits watermark
          var credits = chart.credits();
          credits.enabled(false);
        }
        // Label Settings
        if(!!attr__label) {
          var label = anychart.standalones.label();
          //set the inner percentage display
          label.text(attr__label);
          label.width("100%");
          label.height("100%");
          title.fontFamily('hero-new', 'sans-serif', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji')
          title.fontWeight(300);
          label.fontColor(attr__label_color);
          label.fontSize(18);
          label.hAlign("center");
          label.vAlign("middle");
          // set the label as the center content
          chart.center().content(label);
        }
        // Lengend Settings
        var legend = chart.legend();
        if(!!attr__enable_legend) {
            legend = chart.legend();
            legend.enabled(true);
            legend.itemsLayout("horizontal");
            legend.position("center");
            legend.align("center");
            legend.itemsSpacing(100);
            if(viewportWidth < 768){
              legend.itemsLayout("horizontal-expandable");
              legend.position("center");
              legend.align("center");
              legend.itemsSpacing(20);
            }

            legend.fontColor(font_color);
            legend.fontSize(18);
            legend.fontWeight(300);
            legend.fontFamily("hero-new, sans-serif");
        }
        else {
          legend.enabled(false);
        }

        if(!!attr__listener) {
          // Bind some listeners to the chart
          switch(attr__listener) {
            case LISTENER_DOUBLE_CLICK:
                //add a listener
                chart.listen("pointDblClick", function(e){
                    var new_value = e.iterator.get("url");
                    window.open(new_value,"_self");
                });
              break;
            default:
              // do nothing
          }
        }

        process_selected_fill(chart, attr__chart_type, "none");

    /*---------------------------------------------
    Draw The Chart
    ---------------------------------------------*/
    if(draw_chart) {
      chart.container(attr__container_id);
      chart.draw();
    }

    /*---------------------------------------------
    Action Row Buttons Click Events
    ---------------------------------------------*/
    if(o.export_pdf){
      const pdf = document.getElementById('g__export_pdf');
      pdf.addEventListener('click', () => { chart.saveAsPdf(); });
    }

    if(o.export_excel){
      const excel = document.getElementById('g__export_excel');
      excel.addEventListener('click', () => { chart.saveAsCsv() });
    }


    });
};
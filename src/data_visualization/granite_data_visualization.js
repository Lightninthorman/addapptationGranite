function granite_data_visualization(dataVisualizationBlock, jsonTheme){
    const id = dataVisualizationBlock.id;
    const cssId = "#" + dataVisualizationBlock.id;
    console.log(dataVisualizationBlock);
    const chartId = 'chart-' + id;
    const o = dataVisualizationBlock.options;
    const r = dataVisualizationBlock.records;
    const t = jsonTheme;
    let viewportWidth = window.innerWidth;
    let attr__container_id = id || '';
    let attr__chart_height = o.chart_height || '500px';
    let attr__series_data = o.series_data || false;
    let attr__records = dataVisualizationBlock.records || [];
    let attr__title = dataVisualizationBlock.options.title || '';
    let attr__title_color = dataVisualizationBlock.options.title_color || '#212529';
    let attr__title2 = dataVisualizationBlock.options.title2 || '';                       // used with drilldown chart
    let attr__title2_color = dataVisualizationBlock.options.title2_color || '#212529';    // used with drilldown chart
    let attr__label = dataVisualizationBlock.options.label || '';
    let attr__label_color = dataVisualizationBlock.options.label_color || '#60727b';
    let attr__inner_radius = dataVisualizationBlock.options.inner_radius || '';
    let attr__label_position = dataVisualizationBlock.options.label_position || 'outside';
    let attr__listener = dataVisualizationBlock.options.listener || 'point_select';
    let attr__chart_type = dataVisualizationBlock.options.chart_type || 'pie';
    let attr__bar_chart_vertical = dataVisualizationBlock.options.bar_chart_vertical || false;
    let attr__drilldown_chart_types = dataVisualizationBlock.options.drilldown_chart_types || []; // used with drilldown chart
    let attr__drilldown_details_field_name = dataVisualizationBlock.options.drilldown_details_field_name || "drilldown_data";
    let attr__enable_legend = dataVisualizationBlock.options.enable_legend || true;
    let attr__legend_color = '';
    let attr__series_titles = dataVisualizationBlock.options.series_titles || [];
    let attr__series_name = dataVisualizationBlock.options.series_name || '';
    let attr__xAxis_title = dataVisualizationBlock.options.x_axis_title || '';
    let attr__yAxis_title = dataVisualizationBlock.options.y_axis_title || '';
    let attr__yAxis_format = dataVisualizationBlock.options.y_axis_format || '';
    // Drilldown
    let attr___drilldown_chart_one = dataVisualizationBlock.options.drilldown_chart_one || "pie"
    let attr___drilldown_chart_two = dataVisualizationBlock.options.drilldown_chart_two || "bar"
    // Legend Items
    let attr__legend_horizontal_position = dataVisualizationBlock.options.legend_horizontal_position || 'center';
    let attr__legend_vertical_position = dataVisualizationBlock.options.legend_vertical_position || 'center';
    let attr__legend_items_layout = dataVisualizationBlock.options.legend_items_layout || 'horizontal';
    let attr__legend_items_spacing = dataVisualizationBlock.options.legend_items_spacing || 50;

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
    ${cssId}{
      padding-left: 15px;
      padding-right: 15px;
    }
    #${chartId} {
      width: 100%;
      height: ${attr__chart_height};
      margin: 0;
      padding: 0;
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
    if (o.custom_buttom_1_text){
      const custom_btn_1 = document.createElement('button');
      custom_btn_1.setAttribute('href', o.custom_button_1_href);
      custom_btn_1.setAttribute('class', 'g__custom_btn');
      custom_btn_1.innerHTML = o.custom_button_1_text
    }


    action_row_container.appendChild(action_content);
    action_row_container.appendChild(action_utility);

    document.getElementById(id).appendChild(action_row_container);

    /*---------------------------------------------
    Chart Container
    ---------------------------------------------*/
    const chart_container = document.createElement('div');
    chart_container.setAttribute('id', chartId);
    chart_container.setAttribute('class', 'g__chart_container');

    document.getElementById(id).appendChild(chart_container);


    const LISTENER_DOUBLE_CLICK = "double_click";
    const LISTENER_POINT_SELECT = "point_select";
    const CHART_TYPE_LINE = "line";
    const CHART_TYPE_BAR = "bar";
    const CHART_TYPE_PIE = "pie";
    const CHART_TYPE_DRILLDOWN = "drilldown";
    const CHART_TYPE_VERTICAL_BAR = "vertical";
    const CHART_TYPE_COLUMN = "column";
    const CHART_TYPE_PYRAMID = "pyramid"



    anychart.onDocumentLoad(function () {

      anychart.graphics.useAbsoluteReferences(false);
      if (!!o.colors){
        var palette = o.colors;
      } else {
        var palette = ['#D44697','#FF8BCD','#FDDBEE','#FFB866', '#FFA08C'];
      }


        // create an instance of a pie chart
        var chart;
        var data;
        var stage;
        var draw_chart = true; // We might have to draw our charts in a custom function

        // const process_selected_fill = function(my_chart, chart_type, fill_color) {
        //     // Deal with selected state fill colors.
        //     switch(chart_type) {
        //       case CHART_TYPE_COLUMN:
        //       case CHART_TYPE_BAR:
        //       case CHART_TYPE_VERTICAL_BAR:
        //         var i=0;
        //         // create a loop
        //         while (my_chart.getSeriesAt(i)){
        //           // rename each series
        //           my_chart.getSeriesAt(i).selected().fill(fill_color);
        //           i++;
        //         }
        //         break;
        //       default:
        //        // do nothing
        //     }
        // }

        switch(attr__chart_type) {
          /*---------------------------------------------
          Line
          ---------------------------------------------*/
          case CHART_TYPE_LINE:
            if(attr__series_data){
              let line_data = [];
              let labels = o.x_axis_labels;
              if (typeof labels === 'string'){
                let labels_no_brackets = labels.substring(1, labels.length-1);
                let labels_clean = labels_no_brackets.replace(new RegExp('"', 'g'), '');
                console.log(labels_clean);
                labels = labels_clean.split(',');
              }
              let line_data_points = attr__records[0].series_values;
              let line_data_count;
              if (typeof line_data_points === 'string'){
                const line_data_no_brackets = line_data_points.substring(1, line_data_points.length-1);
                const line_data_points_array = line_data_no_brackets.split(',');
                line_data_count = line_data_points_array.length;
              }else{
                line_data_count = line_data_points.length;
              }
              // Push the first values into the new array - x axis labels
              for(var i = 0; i < line_data_count; i++){
                if(!!labels[i]){
                  line_data.push([labels[i]]);
                } else {
                  line_data.push(["No X Label"]);
                }
              }
              // Push the second value for tooltip alingment.
              for(var i = 0; i < line_data_count; i++){
                let line_label = !!attr__records[i] ? true : false;
                if(line_label){
                  line_data[i].push(attr__records[i].x);
                } else {
                  line_data[i].push("No Label");
                }

              }
              // loop through each record and align the values with anycharts structure
              for(var i = 0; i < attr__records.length; i++){
                let series_values = attr__records[i].series_values;
                if (typeof series_values === 'string'){
                  var remove_brackets = series_values.substring(1, series_values.length-1);
                  var series_array = remove_brackets.split(',');
                  series_values = series_array;
                }
                series_values.forEach((val, count)=>{
                  line_data[count].push(val);
                })
              }

              // assign the data to anycharts
              chart = anychart.line();
              var data = anychart.data.set(line_data);
              for(var i = 0; i < attr__records.length; i++){
                let series = chart.line(data.mapAs({x: 0, value: i+2})).stroke({color: palette[i],  thickness: 6});
                series.hovered().markers().enabled(true).type('circle').size(5);
                series.name(line_data[i][1]);
              }
              // set scale mode - no space for beginning and end x labels
              chart.xScale().mode('continuous');
            } else {
              // create a data set
              var dataSet = anychart.data.set(attr__records);

              // map the data
              var mapping1 = dataSet.mapAs({x: 0, value: 1});

              // create a chart
              var chart = anychart.line();

              // create the first series and set the data
              var series1 = chart.line(mapping1);
              series1.hovered().markers().enabled(true).type('circle').size(5);
              series1.name(attr__series_name);
              chart.xScale().mode('continuous');
          }

          break;
          /*---------------------------------------------
          Pie
          ---------------------------------------------*/
          case CHART_TYPE_PIE:
            chart = anychart.pie();
            // set the data. The 'normal' key with the 'fill' option sets the color of the bars
            chart.data(attr__records);

            chart.palette().items(palette);

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
          /*---------------------------------------------
          Column
          ---------------------------------------------*/
          case CHART_TYPE_COLUMN:
            if(attr__series_data){
              let column_data = [];
              let column_labels = o.x_axis_labels;
              if (typeof column_labels === 'string'){
                let labels_no_brackets = column_labels.substring(1, column_labels.length-1);
                let labels_clean = labels_no_brackets.replace(new RegExp('"', 'g'), '');
                column_labels = labels_clean.split(',');
              }
              let column_data_points = attr__records[0].series_values;
              let column_data_count;
              if (typeof column_data_points === 'string'){
                let column_data_no_brackets = column_data_points.substring(1, column_data_points.length-1);
                let column_data_points_array = column_data_no_brackets.split(',');
                column_data_count = column_data_points_array.length;
              }else{
                column_data_count = column_data_points.length;
              }
              // Push the first values into the new array - x axis labels
              for(var i = 0; i < column_data_count; i++){
                if(!!column_labels[i]){
                  column_data.push([column_labels[i]]);
                } else {
                  column_data.push(["No X Label"]);
                }
              }
              // Push the second value for tooltip alingment.
              for(var i = 0; i < column_data_count; i++){
                let line_label = !!attr__records[i] ? true : false;
                if(line_label){
                  column_data[i].push(attr__records[i].x);
                } else {
                  column_data[i].push("No Label");
                }

              }
              // loop through each record and align the values with anycharts structure
              for(var i = 0; i < attr__records.length; i++){
                let series_values = attr__records[i].series_values;
                if (typeof series_values === 'string'){
                  var remove_brackets = series_values.substring(1, series_values.length-1);
                  var series_array = remove_brackets.split(',');
                  series_values = series_array;
                }
                series_values.forEach((val, count)=>{
                  column_data[count].push(val);
                })
              }


              // assign the data to anycharts
              chart = anychart.column();
              var data = anychart.data.set(column_data);
              for(var i = 0; i < attr__records.length; i++){
                let series = chart.column(data.mapAs({x: 0, value: i+2})).stroke({color: palette[i],  thickness: 3});
                series.hovered().markers().enabled(true).type('circle').size(5);
                series.name(column_data[i][1]);
              }
            } else {
              // create a data set
              var dataSet = anychart.data.set(attr__records);

              // map the data
              var mapping1 = dataSet.mapAs({x: 0, value: 1});

              // create a chart
              var chart = anychart.column();

              // create the first series and set the data
              var series1 = chart.column(mapping1);
              series1.name(attr__series_name);
            }


          break;
          /*---------------------------------------------
          Bar
          ---------------------------------------------*/
          case CHART_TYPE_BAR:
          if(attr__series_data){
            let bar_data = [];
            let bar_labels = o.x_axis_labels;
            if (typeof bar_labels === 'string'){
              let labels_no_brackets = bar_labels.substring(1, bar_labels.length-1);
              let labels_clean = labels_no_brackets.replace(new RegExp('"', 'g'), '');
              console.log(labels_clean);
              bar_labels = labels_clean.split(',');
            }
            let bar_data_points = attr__records[0].series_values;
            let bar_data_count;
            if (typeof bar_data_points === 'string'){
              let bar_data_no_brackets = bar_data_points.substring(1, bar_data_points.length-1);
              let bar_data_points_array = bar_data_no_brackets.split(',');
              bar_data_count = bar_data_points_array.length;
            }else{
              bar_data_count = bar_data_points.length;
            }
            // Push the first values into the new array - x axis labels
            for(var i = 0; i < bar_data_count; i++){
              if(!!bar_labels[i]){
                bar_data.push([bar_labels[i]]);
              } else {
                bar_data.push(["No X Label"]);
              }
            }
            // Push the second value for tooltip alingment.
            for(var i = 0; i < bar_data_count; i++){
              let line_label = !!attr__records[i] ? true : false;
              if(line_label){
                bar_data[i].push(attr__records[i].x);
              } else {
                bar_data[i].push("No Label");
              }

            }
            // loop through each record and align the values with anycharts structure
            for(var i = 0; i < attr__records.length; i++){
              let series_values = attr__records[i].series_values;
              if (typeof series_values === 'string'){
                var remove_brackets = series_values.substring(1, series_values.length-1);
                var series_array = remove_brackets.split(',');
                series_values = series_array;
              }
              series_values.forEach((val, count)=>{
                bar_data[count].push(val);
              })
            }


            // assign the data to anycharts
            chart = anychart.bar();
            var data = anychart.data.set(bar_data);
            for(var i = 0; i < attr__records.length; i++){
              let series = chart.bar(data.mapAs({x: 0, value: i+2})).stroke({color: palette[i],  thickness: 3});
              series.hovered().markers().enabled(true).type('circle').size(5);
              series.name(bar_data[i][1]);

            }
          } else {
            // create a data set
            var dataSet = anychart.data.set(attr__records);

            // map the data
            var mapping1 = dataSet.mapAs({x: 0, value: 1});

            // create a chart
            var chart = anychart.bar();

            // create the first series and set the data
            var series1 = chart.bar(mapping1);
            series1.normal().stroke(0);
            series1.name(attr__series_name);
          }

          break;
          /*---------------------------------------------
          Pyramid
          ---------------------------------------------*/
          case CHART_TYPE_PYRAMID:
            var data = anychart.data.set(attr__records);
            var chart = anychart.pyramid(data);

          // Set connector stroke.
          chart.connectorStroke('#607D8B', 1.5, '5 2', 'round');

          break;
          /*---------------------------------------------
          Drilldown
          ---------------------------------------------*/
          case CHART_TYPE_DRILLDOWN:
            let details_chart;
            let chart_type_main = attr___drilldown_chart_one;
            let chart_type_details = attr___drilldown_chart_two;

            for(var i = 0; i < attr__records.length; i++){
              var drilldown_data = attr__records[i].drilldown_data;
              if(typeof(drilldown_data) != "object"){
                attr__records[i].drilldown_data = JSON.parse(drilldown_data);
              }
            }
            let drillDownFunction = function() {
                // clear the chart with details
                details_chart.removeAllSeries();

                // points = e.points;
                points = chart.getSelectedPoints();

                // go through selected points and add proper data
                for (i=0;i<points.length;i++){
                  switch(chart_type_details) {
                    case CHART_TYPE_LINE:
                      details_chart.line(points[i].get("drilldown_data")).name(points[i].get('x'));
                      details_chart.background(background_color);
                      details_chart.palette().items(palette);
                      // set the titles of the axes
                      if(!!attr__xAxis_title) {
                        let xAxis = details_chart.xAxis();
                        xAxis.title(attr__xAxis_title);
                        xAxis.title().fontSize(18);
                        xAxis.title().fontColor(font_color);
                        xAxis.title().fontWeight(300);
                        xAxis.title().fontFamily("hero-new, sans-serif");
                      }
                      if(!!attr__yAxis_title) {
                        let yAxis = details_chart.yAxis();
                        yAxis.title(attr__yAxis_title);
                        yAxis.title().fontSize(18);
                        yAxis.title().fontColor(font_color);
                        yAxis.title().fontWeight(300);
                        yAxis.title().fontFamily("hero-new, sans-serif");
                      }
                      var xLabels = details_chart.xAxis().labels();
                      xLabels.fontFamily("hero-new, sans-serif");
                      xLabels.fontColor(font_color);
                      xLabels.padding(3);

                      var yLabels = details_chart.yAxis().labels();
                      yLabels.fontFamily("hero-new, sans-serif");
                      yLabels.fontColor(font_color);
                      yLabels.padding(10);
                      break;
                    case CHART_TYPE_BAR:
                      details_chart.bar(points[i].get("drilldown_data")).name(points[i].get('x'));
                      details_chart.background(background_color);
                      details_chart.palette().items(palette);
                      break;
                    default:
                      // do nothing
                  }

                };
            }


            stage = anychart.graphics.create(chartId);

            switch(chart_type_main) {
              case CHART_TYPE_BAR:
                chart = anychart.bar();
                var chart_main_series = chart.bar(attr__records); // .name("Subject Interactions:");
                chart_main_series.normal().fill(palette[0], 0.3);
                chart_main_series.selected().fill(palette[0], 0.5);
                chart_main_series.hovered().fill(palette[0], 0.1);
                chart_main_series.normal().stroke(palette[0], 1);
                chart_main_series.hovered().stroke(palette[0], 1);
                chart_main_series.selected().stroke(palette[0], .5);
                chart_main_series.name(attr__series_name);
              break;
              case CHART_TYPE_COLUMN:
                chart = anychart.column();
                var chart_main_series = chart.column(attr__records); // .name("Subject Interactions:");
                chart_main_series.normal().fill("#00cc99", 0.3);
                chart_main_series.selected().fill("#00cc99", 0.5);
                chart_main_series.hovered().fill("#00cc99", 0.1);
                chart_main_series.normal().stroke("#00cc99", 1);
                chart_main_series.hovered().stroke("#00cc99", 1);
                chart_main_series.selected().stroke("#00cc99", .5);
                chart_main_series.name(attr__series_name);
                chart.palette().items(palette);
              break;
              case CHART_TYPE_PIE:
                chart = anychart.pie();
                // set the data. The 'normal' key with the 'fill' option sets the color of the bars
                chart.data(attr__records);

                // set the start angle
                chart.startAngle(-90);
                // configure connectors
                chart.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});
                chart.palette().items(palette);
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
                if(!!attr__inner_radius) {
                  //set the inner radius to form the doughnut shape
                  chart.innerRadius(attr__inner_radius);
                }
              break;
              default:
                // do nothing
            }

            // process_selected_fill(chart, chart_type_main, "none");

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
              var title2 = details_chart.title();
              title2.enabled(true);
              title2.text(attr__title2);
              title2.fontFamily('hero-new', 'sans-serif', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji')
              title2.fontWeight(300);
              title2.fontColor(font_color);
              title2.fontSize(30);
            }
            if(!!attr__enable_legend) {
              var legend2 = details_chart.legend(true);

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
        chart.palette().items(palette);

        // background color
        chart.background(background_color);

        // Tooltip settings
        chart.tooltip().useHtml(true);

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
        if(attr__enable_legend) {
            legend = chart.legend();
            legend.enabled(true);
            legend.itemsLayout(attr__legend_items_layout);
            legend.position(attr__legend_horizontal_position);
            legend.align(attr__legend_vertical_position);
            legend.itemsSpacing(attr__legend_items_spacing);
            legend.itemsSpacing(20);
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
        // set the titles of the axes
        if(attr__chart_type === "column" || attr__chart_type ===  "bar" || attr__chart_type === "line"){
          if(!!attr__xAxis_title) {
            let xAxis = chart.xAxis();
            xAxis.title(attr__xAxis_title);
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
            if(attr__yAxis_format === "%"){
              yAxis.labels().format("{%value}" + attr__yAxis_format);
            }else{
              yAxis.labels().format(attr__yAxis_format + "{%value}");
            }

          }
          var xLabels = chart.xAxis().labels();
          xLabels.fontFamily("hero-new, sans-serif");
          xLabels.fontColor(font_color);
          xLabels.padding(3);

          var yLabels = chart.yAxis().labels();
          yLabels.fontFamily("hero-new, sans-serif");
          yLabels.fontColor(font_color);
          yLabels.padding(10);
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

        // process_selected_fill(chart, attr__chart_type, "none");

    /*---------------------------------------------
    Draw The Chart
    ---------------------------------------------*/
    if(draw_chart) {
      chart.container(chartId);
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
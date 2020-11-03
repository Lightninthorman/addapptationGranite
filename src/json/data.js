/*---------------------------------------------
Themes and Mode
---------------------------------------------*/
let jsonTheme = {
    "primary": "#df0284",
    "secondary": "#3fd0d4",
    "mode": "midnight"
}
if(jsonTheme.mode === "midnight"){
    document.body.style.backgroundColor = "#101010";
}

/*---------------------------------------------
Template Sample
---------------------------------------------*/
let templateBlock = {
    "id": "granite-template",
    "feature": "template",
    "options": {
    "header": "Options Header"
    },
    "records": [
        {
            "header": "Record 1"
        },
        {
            "header": "Record 2"
        },
        {
            "header": "Record 3"
        }
    ]
};
/*---------------------------------------------
Navigation
---------------------------------------------*/
let navigationBlock = {
  "id": "granite-navigation",
  "feature": "navigation",
  // "records": [
  //     {"href": "addappter-nav-test.html", "label": "Home", "icon": ""},
  //     {"href": "addappter-table-test.html", "label": "Table"},
  //     {"href": "addappter-form-test.html", "label": "Form", "icon": ""},
  //     {"label": "Libraries 1", "icon": "", "submenu_header": true},
  //         {"href": "#sign_out", "icon": "", "label": "Sign Out", "submenu": true, "hide_if": "#{@hide_sign_out}"},
  //         {"href": "#sign_in", "icon": "", "label": "Sign In", "submenu": true},
  //         {"href": "#calendar", "icon": "", "label": "Calendar", "submenu": true},
  //     {"label": "Libraries 2", "submenu_header": true},
  //         {"href": "#architecture", "icon": "", "label": "Architecture", "submenu": true},
  //         {"href": "#credentials", "icon": "", "label": "Credentials", "submenu": true},
  //         {"href": "#design", "icon": "", "label": "Design", "submenu": true},
  //         {"href": "#schema_builder", "icon": "", "label": "Schema Builder", "submenu": true},
  //         {"href": "#roadmap", "icon": "", "label": "Roadmap", "submenu": true},
  //     {"href": "https://teamaddapptation.github.io/granite/js/sidepane/sidepane.html", "label": "Sidepane", "icon": ""},
  //     {"href": "addappter-tabs-test.html", "label": "Tabs", "icon": ""},
  //     ],
  "records": [
      {"href": "addappter-nav-test.html", "label": "Home", "icon": "fal fa-home", "classes": "custom_class_link"},
      {"href": "addappter-form-test.html", "type":"external", "label": "Form with a long label", "icon": "fal fa-clipboard-list-check"},
      {"label": "Libraries 1 with a long link name", "icon": "fal fa-toolbox", "submenu_header": true},
          {"href": "#sign_out", "icon": "fal fa-sign-out", "label": "Sign Out", "submenu": true, "hide_if": "#{@hide_sign_out}"},
          {"href": "#sign_in", "icon": "fal fa-sign-in", "label": "Sign In", "submenu": true},
          {"href": "#calendar", "icon": "", "label": "Calendar with some more text and more", "submenu": true},
      {"href": "https://teamaddapptation.github.io/granite/js/sidepane/sidepane.html", "label": "Sidepane", "icon": "fal fa-window-restore"},
      {"label": "Libraries 2", "submenu_header": true},
          {"href": "#architecture", "icon": "fal fa-sitemap", "label": "Architecture", "submenu": true},
          {"href": "#credentials", "icon": "fal fa-unlock-alt", "label": "Credentials", "submenu": true},
          {"href": "#design", "icon": "fal fa-palette", "label": "Design", "submenu": true},
          {"href": "#schema_builder", "icon": "fal fa-folder-tree", "label": "Schema Builder", "submenu": true},
          {"href": "#roadmap", "icon": "fal fa-map-marked", "label": "Roadmap", "submenu": true},
      {"href": "addappter-tabs-test.html", "label": "Tabs", "icon": "fal fa-layer-group"},
      ],
  // "records": [
  //     {"href": "addappter-nav-test.html", "label": "", "icon": "fal fa-home"},
  //     {"href": "addappter-form-test.html", "label": "", "icon": "fal fa-clipboard-list-check"},
  //     {"label": "", "icon": "fal fa-toolbox", "submenu_header": true},
  //         {"href": "#sign_out", "icon": "fal fa-sign-out", "label": "", "submenu": true, "hide_if": "#{@hide_sign_out}"},
  //         {"href": "#sign_in", "icon": "fal fa-sign-in", "label": "", "submenu": true},
  //         {"href": "#calendar", "icon": "fal fa-sign-in", "label": "", "submenu": true},
  //     {"label": "", "icon": "fal fa-sign-in", "submenu_header": true},
  //         {"href": "#architecture", "icon": "fal fa-sitemap", "label": "", "submenu": true},
  //         {"href": "#credentials", "icon": "fal fa-unlock-alt", "label": "", "submenu": true},
  //         {"href": "#design", "icon": "fal fa-palette", "label": "", "submenu": true},
  //         {"href": "#schema_builder", "icon": "fal fa-folder-tree", "label": "Schema ", "submenu": true},
  //         {"href": "#roadmap", "icon": "fal fa-map-marked", "label": "", "submenu": true},
  //     {"href": "https://teamaddapptation.github.io/granite/js/sidepane/sidepane.html", "label": "", "icon": "fal fa-window-restore"},
  //     {"href": "addappter-tabs-test.html", "label": "", "icon": "fal fa-layer-group"},
  //     ],
  "options": {
    "type": "topbar",
    "background": "#3c4c8c",
    "background_opacity": "",
    "mobile_menu": "topbar",
    "font_color": "#ffffff",
    "mobile_breakpoint": "550px",
    "font_size": "18px",
    "topbar_padding_right": "",
    "topbar_padding_left": "",
    "dropdown_font_size": "12px",
    "highlight": "",
    "no_break_link_item": true,
    "topbar_position": "right",
    "topbar_over_content": false,
    "topbar_font_size": "10px",
    "button_style": "transparentWhite",
    "cta_button_padding": "",
    "single_submenu": true,
    "hide_mobile_nav": false,
    "header_label": "<span id='addapptation'>addapptation</span>",
    "header_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    "header_link": "#test",
    "wrap_logo": false,
    "footer": "&copy; 2020 addapptation<br><a href='sign-out'>Sign Out</a>",
    "gradient": "",
    "topbar_gradient": "",
    "searching": false,
    "link_label": "Sign In",
    "link_url": "#",
    "link_target": false,
    "cta_link_left_margin": "300px",
    "cta_label": "Edit",
    "cta_url": "#",
    "cta_target": false,
    "hide_on": [],
    "item_height": "65px",
    "menu": false,
    // "menu_items": [
    //   {"label": "Menu Item Number 1", "icon": "search", "href": "#menu=1"},
    //   {"label": "Menu Item Number 2", "icon": "clipboard", "href": "#menu=2"},
    //   {"label": "Menu Item Number 3", "icon": "list", "href": "#menu=3"},
    //   {"label": "Menu Item Number 4", "icon": "home", "href": "#menu=4"},
    //   {"label": "Menu Item Number 5", "icon": "tools", "href": "#menu=5"},
    //   {"label": "Menu Item Number 6", "icon": "hammer", "href": "#menu=6"},
    // ],
    "menu_items": [
      {"label": "Menu Item Number 1", "icon": "search", "href": "#menu=1"},
      {"label": "Menu Item Number 2", "icon": "clipboard", "href": "#menu=2"},
      {"label": "Menu Item Number 3", "icon": "list", "href": "#menu=3"},
      {"label": "Menu Item Number 4", "icon": "home", "href": "#menu=4"},
      {"label": "Menu Item Number 5", "icon": "tools", "href": "#menu=5"},
      {"label": "Menu Item Number 6", "icon": "hammer", "href": "#menu=6"},
    ],
    // menu_1_label: "Menu Item Number 1",
    // menu_1_icon: "search",
    // menu_1_href: "/?menu=1",
    // menu_2_label: "Menu Item Number 2",
    // menu_2_icon: "clipboard",
    // menu_2_href: "/?menu=2",
    // menu_3_label: "Menu Item Number 3",
    // menu_3_icon: "list",
    // menu_3_href: "/?menu=3",
    // menu_4_label: "Menu Item Number 4",
    // menu_4_icon: "home",
    // menu_4_href: "/?menu=4",
    // menu_5_label: "Menu Item Number 5",
    // menu_5_icon: "tools",
    // menu_5_href: "/?menu=5",
    // menu_6_label: "Menu Item Number 6",
    // menu_6_icon: "hammer",
    // menu_6_href: "/?menu=6",
    "use_recent_items": true,
    "search_url": "search"
  }
};
/*---------------------------------------------
Hero
---------------------------------------------*/
let heroBlock = {
    "id": "hero-granite",
    "feature": "hero",
    "options": {
    "height": "",
    "header": "Header Text",
    "header_color": "",
    "description_color": "",
    "line_height": "",
    "desc": "Pellentesque aliquam velit ut iaculis scelerisque. Nullam vel pulvinar diam, non pellentesque ipsum. Aenean non euismod nunc, pellentesque placerat leo. Curabitur non massa hendrerit, vehicula elit quis, ornare nisi. Proin mattis condimentum mollis. Pellentesque a elit et turpis faucibus fermentum.",
    "align_text": "center",
    "header_size": "",
    "header_bottom_margin": "",
    "desc_size": "",
    "background_image": "",
    "align_background_image": "right top",
    "background_color": "#202020",
    "button_top_margin": "200px",
    "button_url": "https://addapptation.com/",
    "button_text": "Hero Button",
    "same_window": true,
    "theme": "custom",
    "overlay_color": "red",
    "overlay_opacity": "",
    "button_style": "pink",
    "top_border_width": "",
    "top_border_color": "",
    "bottom_border_width": "",
    "bottom_border_color": ""
    },
    "records": [{}]
};
/*---------------------------------------------
Carousel
---------------------------------------------*/
let carouselBlock = {
    "id": "granite-carousel",
    "feature": "carousel",
    "options": {
      "background_color": "red",
    },
    "records": [
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/aerial.png",
        "description": "Image Description 1"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/asia.png",
        "description": "Image Description 2"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/backlit.png",
        "description": "Image Description 3"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/bridge.png",
        "description": "Image Description 4"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/deganwy.png",
        "description": "Image Description 5"
      },
      {
        "image": "https://addapptation.blob.core.windows.net/pictures/nature/italy.png",
        "description": "Image Description 6"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/backlit.png",
        "description": "Image Description 3"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/bridge.png",
        "description": "Image Description 4"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/deganwy.png",
        "description": "Image Description 5"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/italy.png",
        "description": "Image Description 6"
      },
    ]
    };
/*---------------------------------------------
Data 1
---------------------------------------------*/
let dataVisualizationBlock_1 = {
  "id": "data_visualization-granite",
  "classes": "",
  "options": {
    "title": "2019 Sales",
    "height": "500px",
    "ytitle": "Sales",
    "xtitle": "Quarter",
    "animate": true,
    "data_format": "currency",
    "bar_chart_vertical": true,
    "chart_style": "line",
    "ymax": 60,
    "palette": ["#EA386E","#BF458A","#FF8BCD","#FFA08C","#FFB866","#CCF0E8","#00B28B","#D44697","#FDDBEE"]
  },
  "records": [
    {"x": "Apples", "value": "68.84", "fill": "green"},
    {"x": "Oranges", "value": "128.14", "fill": "orange"},
  ]
}
/*---------------------------------------------
Data 2
---------------------------------------------*/
let dataVisualizationBlock = {
  "id": "data_visualization-granite",
  "classes": "",
  "options": {
    "title": "Granite Chart",
    "chart_type": "drilldown",
    "chart_height": "600px",
    "series_data": true,
    "colors": ["#C492B1", "#AF3B6E","#BCE7FD", "#424651", "#21FA90"],
    // "colors":"",
    "inner_radius": "20%",
    "show_tooltip": true,
    "enable_legend": false,
    "label_position": "outside",
    "series_titles": [],
    "attr__series_titles": "Test Title",
    "export_excel": true,
    "export_pdf": true,
    "x_axis_title": "Month",
    "y_axis_title": "Sales",
    "y_axis_format": "$",
    "series_name": "November Sales",
    // Drilldown
    "drilldown_details_field_name": "drilldown",
    "drilldown_chart_one": "pie",
    "drilldown_chart_two": "line",
    "drilldown_chart_types": ["pie", "bar"],
    "listener": "point_select",
    "title2": "Interaction Type",
    // Legend
    "legend_horizontal_position": "right",
    "legend_vertical_position": "center",
    "legend_items_layout": "vertical",
    // x axis labels
    "x_axis_labels": '["January", "February", "March", "April", "May", "June"]',
    // action row
    "action_header": "Action Row Header",
    "action_description": "Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna.Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna. Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna.Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna. Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna.Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna. Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna.",
    // custom btn
    "custom_buttom_1_text": "New Button",
    "custom_buttom_1_url": "#"
  },
  "records": [
  //   {"x": "Microsoft", "value": "518.84", "fill": "#ffbe0b"},
  //   {"x": "Oracle", "value": "128.14", "fill": "#fb5607"},
  //   {"x": "HP", "value": "328.14", "fill": "#ff006e"},
  //   {"x": "Dell", "value": "328.14", "fill": "#8338ec"}
    {"x": "Microsoft", "value": "518.84", "series_values": [120, 356, 45, 100, 276, 437], "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [10000, 9500, 12000, 7000], "drilldown_data": [
      {"x": "Q1", "value": 792026},
      {"x": "Q2", "value": 610501},
      {"x": "Q3", "value": 441843},
      {"x": "Q4", "value": 350711}
  ]},
    {"x": "Oracle", "value": "128.14", "series_values": "[543, 256, 345, 346, 472, 100]", "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [5000, 8900, 10000, 6000], "drilldown_data": [
      {"x": "Q1", "value": 1378786},
      {"x": "Q2", "value": 571063},
      {"x": "Q3", "value": 510493},
      {"x": "Q4", "value": 797105}
  ]},
    {"x": "HP", "value": "328.14", "series_values": [234, 763, 134, 872, 145, 592], "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [9000, 9500, 6000, 10000], "drilldown_data": [
      {"x": "Q1", "value": 499299},
      {"x": "Q2", "value": 649963},
      {"x": "Q3", "value": 571176},
      {"x": "Q4", "value": 242969}
    ]},
  {"x": "Dell", "value": "328.14", "series_values": [434, 863, 20, 348, 243, 46], "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [9800, 9000, 10000, 5000], "drilldown_data": '[{"x": "Q1", "value": 50},{"x": "Q2", "value": 600},{"x": "Q3", "value": 200},{"x": "Q4", "value": 320}]'},
  {"x": "Lenovo", "value": "328.14", "series_values": [34, 363, 720, 348, 453, 642], "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [4000, 9000, 7000, 6400], "drilldown_data": '[{"x": "Q1", "value": 50},{"x": "Q2", "value": 600},{"x": "Q3", "value": 200},{"x": "Q4", "value": 320}]'}
  ]};

/*---------------------------------------------
Tiles
---------------------------------------------*/
let tilesBlock = {
  "id": "granite-tiles",
  "feature": "tiles",
  "class": "a_custom",
    "options": {
      "title": "Header",
      // "description": "Etiam dapibus semper nisi, sit amet commodo quam elementum vitae. In hac habitasse platea dictumst. Curabitur sed erat quis nisi imperdiet molestie a ut massa. Phasellus lacinia ante eu risus rhoncus, at accumsan nisl viverra. Nam convallis magna sed lobortis auctor. Phasellus et nisl purus. Duis hendrerit justo eu sapien eleifend, quis maximus massa sodales. Vivamus a fringilla nisl, vel laoreet mauris. In a lacinia leo. Praesent sit amet massa dapibus, dictum lorem eu, elementum tortor.",
      "description_hover": false,
      "customOverlay": false,
      "container_top_padding": "350px",
      "container_bottom_padding": "250px",
      "body_content_top_padding": "30px",
      "layout": "center", //picklist: left, center, right
      "theme": "custom",
      "header_color": "",
      "header_size": "30px", //small, medium, large
      "description_color": "",
      "description_size": "", //small, medium, large
      "icon_color": "red",
      "columns": "4",
      "fillRow": true,
      "full_width": true,
      "icon_size": "",
      "height": "200px",
      "no_overlay": false,
      "filter_one": "",
      "filter_one_opacity": ".8",
      "filter_two": "",
      "filter_two_opacity": "0",
      "search": false,
      "classes": "tabs-class",
      "hover_color": "",
      "padding": "5px",
      "border_radius": "",
      "border": "",
      "border_color": "",
//             "buttons":[
//                 {"label": "Button 1", "href": "/datatables_dev_temp?selection=button1", "sidepane": "true"},
//                 {"label": "Button 2", "href": "/datatables_dev_temp?selection=button2", "sidepane": "false"}
//             ],
      "filter_label": "",
      "filter_tag_options": ["All", "Atlantic Ocean", "Pacific Ocean", "No Coastline"],
      "action_header_size": "50px",
      "action_header_color": "red",
      "action_header_bottom_margin": "50px",
      "action_description_size": "16px",
      "action_description_color": "orange",
      "action_description_bottom_margin": "50px",
      "action_description_line_height": "18px",
    },
    "records": [
      {
        "title":"kristina",
        "font_size":"",
        "title_color":"#fefcff",
        "background_color":"red",
        "background_image": "",
        "border":"2px solid #fff",
        "height":"150px",
        "description":"This is description text",
        "text_color":"#101010",
        "icon":"",
        "icon_size":"",
        "icon_color":"",
        "link_name":"",
        "href":"",
        "target":"",
        "tags": ["Atlantic Ocean"],
        "hover_color":"light",
        "classes":"",
        "addapptation_component":"true",
        "addapptation_name":"Tile",
        "addapptation_type":"tile",
        "addapptation_code_id":"a0R1I000004BjOfUAK",
        "addapptation_id":"03091813838320976",
        "addapptation_navigation":"",
        "hover":"false",
        "center":"false",
        "side_pane":"false",
        "action":"hash_builder"
      },
      {
        "title":"Chris",
        "font_size":"",
        "title_color":"#fefcff",
        "background_color":"#6c13b3",
        "background_image": "",
        "border":"2px solid #fff",
        "height":"150px",
        "description":"",
        "text_color":"#101010",
        "icon":"",
        "icon_size":"",
        "icon_color":"",
        "tags": ["Pacific Ocean"],
        "link_name":"",
        "href":"/application?id=Augsburg",
        "target":"",
        "hover_color":"custom",
        "classes":"",
      },
      {
        "title": "Adam",
        "description": "",
        "background_color": "#6312a3",
        "background_image": "",
        "href": "",
        "link_name": "",
        "center": false,
        "buttons": [{"name": "View", "href": "/cards?selection=view"}],
        "icon": "",
        "icon_color": "",
        "icon_size": "",
        "title_color": "",
        "title_size": "",
        "description_color": "",
        "description_size": "",
        "hover_color": "",
        "target": false,
        "classes": "a__record_class"
      },
      {
        "title": "Sample",
        "description": "This is a description",
        "background_color": "#6c13b3",
        "background_image": "",
        "href": "https://addapptation.com/",
        "link_name": "Button",
        "center": false,
        "buttons": [{"name": "View", "href": "/cards?selection=view"}],
        "icon": "fas fa-dog",
        "icon_color": "",
        "icon_size": "30px",
        "title_color": "",
        "title_size": "",
        "description_color": "",
        "description_size": "",
        "hover_color": "#333",
        "target": false,
        "classes": "a__record_class"
      },
      {
        "title": "California",
        "description": "Vivamus justo nisi, convallis id volutpat ac, aliquet non massa.",
        "background_color": "#6312a3",
        "tags": ["apple", "orange", "banana"],
        "background_image": "",
        "padded_image": "",
        "href": "https://addapptation.com/",
        "link_name": "Button",
        "center": false,
        "icon": "fas fa-check",
        "target": false
      },
      {
        "title": "",
        "description": "",
        "background_color": "#6312a3",
        "background_image": "",
        "padded_image": "",
        "href": "https://addapptation.com/",
        "link_name": "Button",
        "center": false,
        "buttons": [
          {"name": "Download", "href": "/cards?selection=view"},
          {"name": "Learn More", "href": "/cards?selection=view"}
        ],
        "icon": "",
        "center_image": "",
        "target": false
      }
    ]
};
/*---------------------------------------------
Cards
---------------------------------------------*/
let cardsBlock = {
  "id": "granite-cards",
  "feature": "cards",
  "class": "a_custom",
    "options": {
      "style": "basic",
      "action_header": "Action Row",
      "action_header_size": "30px",
      "action_header_color": "",
      "action_header_bottom_margin": "20px",
      "action_description": "Pellentesque aliquam velit ut iaculis scelerisque. Nullam vel pulvinar diam, non pellentesque ipsum. Aenean non euismod nunc, pellentesque placerat leo. Curabitur non massa hendrerit, vehicula elit quis, ornare nisi. Proin mattis condimentum mollis. Pellentesque a elit et turpis faucibus fermentum.",
      "action_description_size": "16px",
      "action_description_color": "",
      "action_description_bottom_margin": "20px",
      "action_align_text": "left",
      "action_border": true,
      "align_content": "right", //picklist: left, center, right
      "top_height": "250px",
      "theme": "custom",
      "header_color": "#333",
      "align_header_text": "center",
      "match_height": false,
      "align_buttons_bottom": true,
      "inside_top_bottom_padding": "15px",
      "inside_left_right_padding": "45px",
      "bottom_background_color": "#5051c3",
      "border_color": "#333333",
      "header_size": "28px", //small, medium, large
      "description_color": "red",
      "description_size": "16px", //small, medium, large
      "button_top_margin": "20px",
      "button_style": "pink",
      "icon_color": "",
      "columns": "3",
      "fillRow": false,
      "icon_size": "",
      "height": "300px",
      "filter_one": "",
      "filter_two": "",
      "search": false,
      "classes": "tabs-class",
      "hover_color": "",
      "padding": "small",
      "border_radius": "",
      "border": "",
      "border_color": "#ff0f3f",
      "micro_top_padding": "50px",
      "micro_bottom_padding": "50px",
      "bottom_button_text": "Bottom Button",
      "bottom_buttom_link": "https://addapptation.com/",
      "bottom_button_target": true,
      "bottom_button_style": "pink",
      "bottom_button_top_margin": "50px",
      "bottom_button_align": "center"

    },
    "records": [
      {
        "header": "Amsterdam",
        "description": "Aliquam dictum purus vitae lorem lobortis, in laoreet lacus vulputate. Mauris in varius mi, non aliquam nisi.",
        "background_image": "",
        "thumb_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
        "background_color": "",
        "button_link": "https://addapptation.com/",
        "align_background_image": "center center",
        "button_text": "Hero Button",
        "target": true,
        "opacity_background": "black",
        "background_opacity": ".98",
        "overlay_color": "",
        "overlay_opacity": "",
      },
      {
        "header": "Amsterdam",
        "description": "Mauris in varius mi, non aliquam nisi.",
        "background_image": "",
        "thumb_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
        "background_color": "linear-gradient(133deg, rgba(163,69,123,1) 0%, rgba(208,98,143,1) 100%)",
        "button_link": "",
        "button_text": "Hero Button",
        "target": true,

      },
      {
        "header": "Amsterdam",
        "description": "",
        "background_image": "",
        "thumb_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
        "background_color": "linear-gradient(133deg, rgba(163,69,123,1) 0%, rgba(208,98,143,1) 100%)",
        "button_link": "https://addapptation.com/",
        "button_text": "Hero Button",
        "target": true,

      }
    ]
};
/*---------------------------------------------
Content
---------------------------------------------*/
let contentBlock = {
  "id": "granite-content",
  "feature": "content",
  "options": {
    "height": "",
    "columns": "1",
    "fillRow": false,
    "top_padding": "50px",
    "bottom_padding": "50px",
    "left_padding": "50px",
    "right_padding": "50px",
    "body_top_padding": "50px",
    "background_image": "https://cdn.addapptation.com/addapptation-customer-assets/addapptation-micros/addapptation-micros-emerson/Rectangle%2027.png",
    "align_background_image": "center center",
    "background_color": "darkblue",
    "theme": "custom",
    "mobile_reverse_column": true,
    "overlay_color": "orange",
    "overlay_opacity": ".7",
    "mobile_margin_top": "50px",
    "mobile_margin_bottom": "50px",
    "action_header": "Action Row",
    "action_header_size": "30px",
    "action_header_color": "white",
    "action_header_bottom_margin": "20px",
    "action_align_text": "left",
    "action_description": "Pellentesque aliquam velit ut iaculis scelerisque. Nullam vel pulvinar diam, non pellentesque ipsum. Aenean non euismod nunc, pellentesque placerat leo. Curabitur non massa hendrerit, vehicula elit quis, ornare nisi. Proin mattis condimentum mollis. Pellentesque a elit et turpis faucibus fermentum.",
    "action_description_size": "16px",
    "action_description_color": "white",
    "action_description_bottom_margin": "20px",
    "action_align_text": "left",
    "action_border": true

  },
  "records": [
    {
      "align_content": "center",
      "align_text": "left",
      "max-width": "100%",
      "content_left_padding": "50px",
      "content_right_padding": "50px",
      "content_top_padding": "",
      "content_bottom_padding": "",
      "header": "Section 1",
      "header_size": "35px",
      "header_color": "",
      "header_bottom_margin": "25px",
      "description": "Pellentesque aliquam velit ut iaculis scelerisque. Nullam vel pulvinar diam, non pellentesque ipsum. Aenean non euismod nunc, pellentesque placerat leo. Curabitur non massa hendrerit, vehicula elit quis, ornare nisi. Proin mattis condimentum mollis. Pellentesque a elit et turpis faucibus fermentum.",
      "description_size": "18px",
      "description_color": "",
      "description_line_height": "25px",
      "description_bottom_margin": "25px",
      "button_style": "transparentWhite",
      "button_url": "https://addapptation.com/",
      "button_text": "Hero Button",
      "same_window": true,
      "button_top_margin": "50px",
      "button_align": "flex-start",
      "featured_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
      "featured_image_link": "",
      "featured_image_horizontal_align": "center",
      "featured_image_vertical_align": "center",
      "featured_image_max_width": "100px",
      "featured_image_bottom_margin": "25px",
      "featured_image_target": true,

    },

    // {
    //   "align_content": "center",
    //   "align_text": "left",
    //   "content_left_padding": "50px",
    //   "content_right_padding": "50px",
    //   "featured_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    //   "featured_image_link": "https://addapptation.com/",
    //   "featured_image_horizontal_align": "center",
    //   "featured_image_vertical_align": "center",
    //   "featured_image_max_width": "300px",
    //   "featured_image_bottom_margin": "25px",
    //   "featured_image_targer": false,

    // },
    {
      "align_content": "center",
      "align_text": "left",
      "max-width": "100%",
      "content_left_padding": "50px",
      "content_right_padding": "50px",
      "content_top_padding": "100px",
      "content_bottom_padding": "",
      "header": "Section 2",
      "header_size": "35px",
      "header_color": "",
      "header_bottom_margin": "25px",
      "description": "Aenean non euismod nunc, pellentesque placerat leo. Curabitur non massa hendrerit, vehicula elit quis, ornare nisi. Proin mattis condimentum mollis. Pellentesque a elit et turpis faucibus fermentum.",
      "description_size": "18px",
      "description_color": "green",
      "description_line_height": "25px",
      "description_bottom_margin": "25px",
      "button_style": "color",
      "button_url": "https://addapptation.com/",
      "button_text": "",
      "same_window": true,
      "button_top_margin": "50px",
      "button_align": "flex-start",
      "featured_image": "",
      "featured_image_link": "https://addapptation.com/",
      "featured_image_horizontal_align": "center",
      "featured_image_vertical_align": "center",
      "featured_image_max_width": "100px",
      "featured_image_bottom_margin": "25px",
      "featured_image_targer": false,

    },
    // {
    //   "align_content": "center",
    //   "align_text": "left",
    //   "content_left_padding": "50px",
    //   "content_right_padding": "50px",
    //   "content_top_padding": "100px",
    //   "content_bottom_padding": "",
    //   "featured_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    //   "featured_image_link": "https://addapptation.com/",
    //   "featured_image_horizontal_align": "center",
    //   "featured_image_vertical_align": "center",
    //   "featured_image_max_width": "300px",
    //   "featured_image_bottom_margin": "25px",
    //   "featured_image_targer": false,

    // }
  ]
  };
/*---------------------------------------------
Heat Map
---------------------------------------------*/
let heatmapBlock = {
  "id": "granite-heatmap",
  "options": {
    "title": "Granite Heat Map"
  },
  "records": [
    {x: "2010", y: "A", heat: 15},
    {x: "2011", y: "A", heat: 17},
    {x: "2012", y: "A", heat: 21},
    {x: "2010", y: "B", heat: 34},
    {x: "2011", y: "B", heat: 33},
    {x: "2012", y: "B", heat: 32},
    {x: "2010", y: "C", heat: 51},
    {x: "2011", y: "C", heat: 50},
    {x: "2012", y: "C", heat: 47}
  ]
}



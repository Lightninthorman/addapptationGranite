function granite_content(jsonContent, jsonTheme){
    var json = jsonContent;
    var ID = json['id'];
    var graniteID = "g__" + json['id'];
    var cssID = "#g__" + json['id'];
    var o = json.options;
    var r = json.records;
    var t = jsonTheme;
    var height = !!o.height ? o.height : "50vh";
    var content = (document.getElementById(ID).innerHTML).trim();
    if (content !== ""){
      return;
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
    Theme Variables
    ---------------------------------------------*/
    function hexToRgb(hex){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return [(c>>16)&255, (c>>8)&255, c&255].join(',');
        }
        return `${hex} is not a valid Hex code.`;
    }
    /*---------------------------------------------
    CSS Values
    ---------------------------------------------*/
    var overlay_opacity = !!o.overlay_opacity ? o.overlay_opacity : ".7";
    var button_text_size = !!o.button_text_size ? o.button_text_size : "14px";
    /*---------------------------------------------
    Layout Case Block
    ---------------------------------------------*/
    switch (o.align_content){
        case "center":
            var container_position = "center";
            var content_align = "center";
            var desc_align = "center";
            var content_width = !!o.content_width ? o.content_width : "80%"
        break;
        case "right":
            var container_position = "flex-end";
            var content_align = "flex-start";
            var desc_align = "left";
            var content_width = !!o.content_width ? o.content_width : "50%"
        break;
        default:
            var container_position = "flex-start";
            var content_align = "flex-start";
            var desc_align = "left";
            var content_width = !!o.content_width ? o.content_width : "50%"
        break;
    }
    /*---------------------------------------------
    Layout
    ---------------------------------------------*/
    var columns;
    switch (o.columns){
      case "1":
        columns = "100%";
      break;
      case "2":
        columns = "50%";
      break;
      case "3":
        columns = "33.33%";
      break;
      case "4":
        columns = "25%";
      break;
      case "5":
        columns = "20%";
      break;
      case "6":
        columns = "16.66%";
      break;
      case "7":
        columns = "14.28%";
      break;
      case "8":
        columns = "12.5%";
      break;
      default:
        columns = "50%";
      break;
    }
    if(o.fillRow){
      var fillRow = 1;
    } else {
      var fillRow = 0;
    }
    var contentCss = document.createElement('style');
    contentCss.innerHTML = `
    ${cssID}.g__content_wrapper{
        --primary: 212, 70, 151;
        --background: #ffffff;
        --bottom-background: #ffffff;
        --font-color: #101010;
        --header-color: #101010;
        --description-color: #101010;
        --overlay: #ffffff;
        --border-color: #bfbfbf;
        --font-hairline: hero-new-hairline, sans-serif;
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
    }
    ${cssID}.g__content_wrapper[mode="midnight"]{
        --primary: 212, 70, 151;
        --bottom-background: #101010;
        --background: #101010;
        --font-color: #ffffff;
        --header-color: #ffffff;
        --description-color: #ffffff;
        --overlay: #000000;
        --border-color: #BFBFBF;
        --box-shadow: -10px 0 10px 0px #101010;
        --font-hairline: hero-new-hairline, sans-serif;
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
    }
    ${cssID}.g__content_wrapper{
        min-height: ${height};
        position: relative;
        font-family: var(--font-regular);
        background-size: cover;
        background-position: center center;
        display:flex;
        padding-top: ${o.top_padding};
        padding-bottom: ${o.bottom_padding};
        padding-left: ${o.left_padding};
        padding-right: ${o.right_padding};
        justify-content: ${container_position};
        flex-direction: column;
    }
    ${cssID} .g__content_body{
        display:flex;
        flex-direction: row;
        padding-top: ${o.body_top_padding};
        flex-wrap: wrap;
    }
    ${cssID} .g__content_container{
        display: flex;
        flex: ${fillRow} 0 ${columns};
        flex-direction: column;
        z-index: 5;
    }
    ${cssID}.g__content_wrapper.theme_color:after {
        content: '';
        background-color: var(--overlay);
        opacity: ${o.overlay_opacity};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    ${cssID}.g__content_wrapper.theme_custom:after {
        content: '';
        background-color: ${o.overlay_color};
        opacity: ${o.overlay_opacity};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    /* Action Row */
    ${cssID} .g__action_container{
        display: flex;
        flex-direction: column;
    }
    ${cssID} .g__action_header{
        font-style: var(--font-hairline);
        font-weight: 100;
        font-size:${o.action_header_size};
        color:${o.action_header_color};
        margin-bottom:${o.action_header_bottom_margin};
        text-align:${o.action_align_text};
    }
    ${cssID} .g__action_description{
        font-weight: 300;
        letter-spacing: .7px;
        font-size:${o.action_description_size};
        color:${o.action_description_color};
        margin-bottom:${o.action_description_bottom_margin};
        text-align:${o.action_align_text};
    }
    ${cssID} .g__action_border{
        border-bottom: 1px solid #BFBFBF;
    }
    ${cssID} .g__content_header{
        font-style: var(--font-hairline);
        font-weight: 100;
        z-index: 1;
    }
    ${cssID} .g__content_desc{
        z-index: 1;
        font-weight: 300;
        letter-spacing: .7px;
        margin-bottom:0;
    }
    ${cssID} .g__button_container{
        display: flex;
    }
    /* --- Button Styles --- */
    ${cssID} .g__content_btn{
        z-index: 1;
        border-radius: 2px;
        font-family: var(--font-regular);
        font-weight: 300;
        text-decoration: none;
    }
    /* Color button */
    ${cssID} .g__content_btn.g__cta_button_color{
        color: #ffffff;
        background-color: rgba(var(--primary), 1);
        border: 1px solid rgba(var(--primary), 1);
        font-family: var(--font-regular);
        transition: all .5s;
    }
    ${cssID} .g__content_btn.g__cta_button_color:hover{
        color: #ffffff;
        background-color: rgba(var(--primary), .6);
        border: 1px solid rgba(var(--primary), 1);
        text-decoration: none;
        border-radius: 2px;
    }
    ${cssID} .g__content_btn.g__cta_button_color:active{
        color: #ffffff;
        background-color: rgba(var(--primary), 1);
        border: 1px solid rgba(var(--primary), 1);
        text-decoration: none;
        border-radius: 2px;
    }
    /* White button */
    ${cssID} .g__content_btn.g__cta_button_white{
        color: #D44697;
        background-color: #ffffff;
        border: 1px solid #D44697;
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${cssID} .g__content_btn.g__cta_button_white:hover{
        color:#ffffff;
        background-color: #D44697;
        border: 1px solid #D44697;
    }
    ${cssID} .g__content_btn.g__cta_button_white:active{
        color:#ffffff;
        border: 1px solid #fff;
    }
    /* Transparent White */
    ${cssID} .g__content_btn.g__cta_button_transparent_white{
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0);
        border: 1px solid #ffffff;
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${cssID} .g__content_btn.g__cta_button_transparent_white:hover{
        background-color: rgba(255, 255, 255, .3);
    }
    ${cssID} .g__content_btn.g__cta_button_transparent_white:active{
        background-color: rgba(255, 255, 255, .5);
    }
    /* Transparent Pink */
    ${cssID} .g__content_btn.g__cta_button_transparent_pink{
        color: #ffffff;
        background: rgba(212, 70, 151, 0.75);
        border: 1px solid rgba(212, 70, 151, 0.75);
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${cssID} .g__content_btn.g__cta_button_transparent_pink:hover{
        background: #D44697;
        border: 1px solid #D44697;
    }
    ${cssID} .g__content_btn.g__cta_button_transparent_pink:active{
        background: #D44697;
        border: 1px solid #FFFFFF;
    }


    ${cssID} .g__content_img{
        max-width: 100px;
    }
    @media (max-width: 991.98px) {
        ${cssID}.g__content_wrapper{
                flex-direction: column;
                padding-left: 15px;
                padding-right: 15px;
            }
            ${cssID} .g__content_container{
                width: 80%;
                padding: ${o.mobile_margin_top_bottom} 15px;
            }
    }
    @media (max-width: 991.98px) {
        ${cssID} .img-fluid{
            max-width: 100% !important;
        }
        ${cssID}.g__content_wrapper{
            padding-left: 15px;
            padding-right: 15px;
        }
        ${cssID} .g__content_container{
            width: 100%;
            padding-top: ${o.mobile_margin_top};
            padding-bottom: ${o.mobile_margin_bottom};
            padding-right: 15px !important;
            padding-left: 15px !important;
        }
        ${cssID} .g__content_body{
            flex-direction: ${o.mobile_reverse_column ? "column-reverse" : "column"};
        }
        ${cssID} .g__content_btn.outline_btn,
        ${cssID} .g__content_btn.color_btn,
        ${cssID} .g__content_btn.white_btn{
            text-align: center;
        }
    }
    `
    document.head.appendChild(contentCss);
    /* content Wrapper */
    var content_wrapper = document.createElement('div');
    content_wrapper.setAttribute('id', graniteID);
    content_wrapper.setAttribute('class','g__content_wrapper');
    content_wrapper.setAttribute('style', contentBkg(o));
    content_wrapper.setAttribute('mode', mode(t));
    content_wrapper.classList.add( themeStyle(o) );

    if(!!o.action_header || !!o.action_description){
        /* Action RowContainer*/
        var action_container = document.createElement('div');
        action_container.setAttribute('class',`g__action_container ${o.action_border ? "g__action_border" : "g__action_no_border"}`);
        content_wrapper.appendChild(action_container);
        /* Action Row Content */
        if(!!o.action_header){
            var action_header = document.createElement('h2');
            action_header.setAttribute('class','g__action_header');
            action_header.innerHTML = o.action_header;
            action_container.appendChild(action_header);
        }
        /* Action Row Description */
        if(!!o.action_description){
            var action_description = document.createElement('p');
            action_description.setAttribute('class','g__action_description');
            action_description.innerHTML = o.action_description;
            action_container.appendChild(action_description);
        }
    }

    var card_body = document.createElement('div');
    card_body.setAttribute('class','g__content_body');
    content_wrapper.appendChild(card_body);

    /* Content Column */
    r.forEach(function(r, val){
        /* Content Container*/
        var content_container = document.createElement('div');
        content_container.setAttribute('class','g__content_container');
        content_container.setAttribute('style',`align-items:${r.align_content}; justify-content:${r.vertical_align}; padding-top:${r.content_top_padding}; padding-bottom:${r.content_bottom_padding}; padding-left:${r.content_left_padding}; padding-right:${r.content_right_padding};`);
        card_body.appendChild(content_container);
        /* Content Block */
        var content_block = document.createElement('div');
        content_block.setAttribute('class','g__content');
        content_container.appendChild(content_block);
        /* Image */
        if(!!r.featured_image){
            /* Image Container*/
            var image_container = document.createElement('div');
            image_container.setAttribute('class','g__image_container');
            image_container.setAttribute('style',`margin-bottom:${r.featured_image_bottom_margin}; text-align:${r.align_text};`);
            content_block.appendChild(image_container);

            /* Image Link */
            if(!!r.featured_image_link){
                var image_link = document.createElement('a');
                image_link.setAttribute('class','g__image_link');
                image_link.setAttribute('target',`${r.featured_image_target ? "_blank" : "_self"}`);
                image_link.setAttribute('href',`${r.featured_image_link}`);
                image_container.appendChild(image_link);
            }

            /* Image */
            var content_image = document.createElement('img');
            content_image.setAttribute('src', r.featured_image);
            content_image.setAttribute('class', "img-fluid");
            content_image.setAttribute('style',`max-width:${r.featured_image_max_width};`);
            if(!!r.featured_image_link){
                image_link.appendChild(content_image)
            } else {
                image_container.appendChild(content_image)
            }

        }
        /* Header */
        if(!!r.header){
            var content_header = document.createElement('h2');
            content_header.setAttribute('class','g__content_header');
            content_header.setAttribute('style',`font-size:${r.header_size}; color:${!!r.header_color ? r.header_color : "var(--header-color)"} !important; margin-bottom:${r.header_bottom_margin}; text-align:${r.align_text};`);
            content_header.innerHTML = r.header;
            content_block.appendChild(content_header);
        }
        /* Body Copy */
        if(!!r.description){
            var content_body = document.createElement('p');
            content_body.setAttribute('class','g__content_desc');
            content_body.setAttribute('style',`font-size:${r.description_size}; color:${!!r.description_color ? r.description_color : "var(--description-color)"} !important; line-height: ${r.description_line_height}; text-align:${r.align_text}; margin-bottom:${r.description_bottom_margin};`);
            content_body.innerHTML = r.description;
            content_block.appendChild(content_body)
        }
        ;
        /* content Button */
        if(!!r.button_text){
            var button_left_right_padding = !!r.button_left_right_padding ? r.button_left_right_padding : "48px";

            /* Button Container*/
            var button_container = document.createElement('div');
            button_container.setAttribute('class','g__button_container');
            button_container.setAttribute('style',`margin-top:${r.button_top_margin}; justify-content: ${r.button_align};`);
            content_block.appendChild(button_container);

            var content_btn = document.createElement('a');
            content_btn.setAttribute('href', r.button_url);
            content_btn.setAttribute('class','g__content_btn');
            content_btn.setAttribute('style',`font-size: ${r.button_text_size}; padding: 10px ${button_left_right_padding};`);
            content_btn.setAttribute('target', r.button_target ? "_blank" : "_self" );
            content_btn.classList.add( btnStyle(r) );
            content_btn.innerHTML = r.button_text;
            button_container.appendChild(content_btn);
        }
    })



    /*---------------------------------------------
    Functions
    ---------------------------------------------*/
    function contentBkg(o){
        return    !!o.background_image ? `background: url(${o.background_image}); background-size:cover;`
                : !!o.background_color ? `background:${o.background_color}`
                : "background:transparent";
    }
    function target(r){
        return r.target ? "_blank" : "_self";
    }
    function btnStyle(r){
        return    r.button_style === "transparentWhite" ? "g__cta_button_transparent_white"
                : r.button_style === "transparentPink" ? "g__cta_button_transparent_pink"
                : r.button_style === "color"   ? "g__cta_button_color"
                : "g__cta_button_white";
    }
    function themeStyle(o){
        return !!o.background_image ? "theme_custom" : "no_overlay";
    }
    function mode(t){
      if(t.mode === "standard"){
          return "light"
      }else{
          return "midnight"
      }
    }
    /*---------------------------------------------
    Append content
    ---------------------------------------------*/
    document.getElementById(ID).appendChild(content_wrapper);
    /*---------------------------------------------
    CSS Variable Overrides
    ---------------------------------------------*/
    var selector = cssID.substring(1);
    var main_css = document.getElementById(selector);
    !!t.primary ? main_css.style.setProperty('--primary', hexToRgb(t.primary)) : "212, 70, 151";
    !!t.secondary ? main_css.style.setProperty('--secondary', hexToRgb(t.secondary)) : "255, 139, 205";
}
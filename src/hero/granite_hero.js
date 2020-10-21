function granite_hero(jsonHero, jsonTheme){
    var json = jsonHero;
    var jsonTheme = jsonTheme;
    var id = json.id;
    var graniteID = "g__" + json['id'];
    var cssID = "#g__" + json['id'];
    var o = json.options;
    var r = json.records;
    var t = jsonTheme;
    var height = !!o.height ? o.height : "50vh";
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
    Convert Hex to RGB
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
    Static CSS
    ---------------------------------------------*/
    var line_height = !!o.line_height ? o.line_height : "36px";
    var header_size = !!o.header_size ? o.header_size : "48px";
    var description_size = !!o.description_size ? o.description_size : "28px";
    var button_top_margin = !!o.button_top_margin ? o.button_top_margin : "30px";
    var button_text_size = !!o.button_text_size ? o.button_text_size : "18px";
    var button_left_right_padding = !!o.button_left_right_padding ? o.button_left_right_padding : "48px";
    var overlay_opacity = !!o.overlay_opacity ? o.overlay_opacity : ".7";
    var header_bottom_margin = !!o.header_bottom_margin ? o.header_bottom_margin : "15px";
    var top_border_width = !!o.top_border_width ? o.top_border_width : "0";
    var top_border_color = !!o.top_border_color ? o.top_border_color : "transparent";
    var bottom_border_width = !!o.bottom_border_width ? o.bottom_border_width : "0";
    var bottom_border_color = !!o.bottom_border_color ? o.bottom_border_color : "transparent";

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
    CSS Block
    ---------------------------------------------*/
    var heroCss = document.createElement('style');
    heroCss.innerHTML = `
    ${cssID}.g__hero_wrapper{
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
    ${cssID}.g__hero_wrapper[mode="midnight"]{
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
    ${cssID}.g__hero_wrapper{
        min-height: ${height};
        position: relative;
        display:flex;
        align-items: center;
        padding: 25px 0;
        font-family: var(--font-regular);
        justify-content: ${container_position};
        border-top: ${top_border_width} solid ${top_border_color};
        border-bottom: ${bottom_border_width} solid ${bottom_border_color};
    }
    ${cssID}.g__hero_wrapper.theme_color:after {
        content: '';
        background-color: var(--overlay);
        opacity: ${overlay_opacity};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    ${cssID}.g__hero_wrapper.theme_custom:after {
        content: '';
        background-color: ${o.overlay_color};
        opacity: ${overlay_opacity};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    ${cssID} .g__hero_container{
        display: flex;
        flex-direction: column;
        align-items: ${content_align};
        justify-content: center;
        width: ${content_width};
        padding: 20px 100px;
    }
    ${cssID} .g__hero_header{
        font-size: ${header_size};
        font-style: var(--font-hairline);
        font-weight: 100;
        z-index: 1;
        color: var(--header-color);
        margin-bottom: ${header_bottom_margin};
    }
    ${cssID} .g__hero_desc{
        z-index: 1;
        font-size: ${description_size};
        line-height: ${line_height};
        font-weight: 300;
        letter-spacing: .7px;
        color: var(--description-color);
        text-align: ${desc_align};
        margin-bottom:0;
    }
    ${cssID} .g__hero_btn{
        z-index: 1;
        font-size: ${button_text_size};
        padding: 10px ${button_left_right_padding};
        border-radius: 2px;
        text-decoration: none;
        font-weight: 400;
        margin-top: ${button_top_margin};
    }

    /* --- Button Styles --- */
    /* Color button */
    ${cssID} .g__hero_btn.g__cta_button_color{
        color: #ffffff;
        background-color: rgba(var(--primary), 1);
        border: 1px solid rgba(var(--primary), 1);
        font-family: var(--font-regular);
        transition: all .5s;
    }
    ${cssID} .g__hero_btn.g__cta_button_color:hover{
        color: #ffffff;
        background-color: rgba(var(--primary), .6);
        border: 1px solid rgba(var(--primary), 1);
        text-decoration: none;
        border-radius: 2px;
    }
    ${cssID} .g__hero_btn.g__cta_button_color:active{
        color: #ffffff;
        background-color: rgba(var(--primary), 1);
        border: 1px solid rgba(var(--primary), 1);
        text-decoration: none;
        border-radius: 2px;
    }
    /* White button */
    ${cssID} .g__hero_btn.g__cta_button_white{
        color: #D44697;
        background-color: #ffffff;
        border: 1px solid #D44697;
        font-family: var(--font-regular);
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${cssID} .g__hero_btn.g__cta_button_white:hover{
        color:#ffffff;
        background-color: #D44697;
        border: 1px solid #D44697;
    }
    ${cssID} .g__hero_btn.g__cta_button_white:active{
        color:#ffffff;
        border: 1px solid #fff;
    }
    /* Transparent White */
    ${cssID} .g__hero_btn.g__cta_button_transparent_white{
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0);
        border: 1px solid #ffffff;
        font-family: var(--font-regular);
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${cssID} .g__hero_btn.g__cta_button_transparent_white:hover{
        background-color: rgba(255, 255, 255, .3);
    }
    ${cssID} .g__hero_btn.g__cta_button_transparent_white:active{
        background-color: rgba(255, 255, 255, .5);
    }
    /* Transparent Pink */
    ${cssID} .g__hero_btn.g__cta_button_transparent_pink{
        color: #ffffff;
        background: rgba(212, 70, 151, 0.75);
        border: 1px solid rgba(212, 70, 151, 0.75);
        font-family: var(--font-regular);
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${cssID} .g__hero_btn.g__cta_button_transparent_pink:hover{
        background: #D44697;
        border: 1px solid #D44697;
    }
    ${cssID} .g__hero_btn.g__cta_button_transparent_pink:active{
        background: #D44697;
        border: 1px solid #FFFFFF;
    }
    @media (max-width: 991.98px) {
        ${cssID} .g__hero_container{
            width: 80%;
            padding: 25px 40px;
        }
    }
    @media (max-width: 767.98px) {
        ${cssID} .g__hero_container{
            width: 100%;
            padding: 25px 40px;
        }
        ${cssID} .g__hero_btn.outline_btn,
        ${cssID} .g__hero_btn.color_btn,
        ${cssID} .g__hero_btn.white_btn{
            text-align: center;
        }
        ${cssID} .g__hero_btn{
            padding: 10px;
        }
        ${cssID} .g__hero_header{
            font-size: 42px;
        }
    }
    `
    document.head.appendChild(heroCss);
    /* Hero Wrapper */
    var hero_wrapper = document.createElement('div');
    hero_wrapper.setAttribute('id', graniteID);
    hero_wrapper.setAttribute('class','g__hero_wrapper');
    hero_wrapper.setAttribute('style', heroBkg(o) );
    hero_wrapper.setAttribute('mode', mode(t) );
    hero_wrapper.classList.add( themeStyle(t) );
    /* Hero Container */
    var hero_container = document.createElement('div');
    hero_container.setAttribute('class','g__hero_container');
    hero_wrapper.appendChild(hero_container);
    /* Header */
    if(!!o.header){
        var hero_header = document.createElement('h2');
        hero_header.setAttribute('class','g__hero_header');
        hero_header.innerHTML = o.header;
        hero_container.appendChild(hero_header);
    }
    /* Body Copy */
    if(!!o.desc){
        var hero_body = document.createElement('p');
        hero_body.setAttribute('class','g__hero_desc');
        hero_body.innerHTML = o.desc;
        hero_container.appendChild(hero_body)
    }
    ;
    /* Hero Button */
    if(!!o.button_text){
        var hero_btn = document.createElement('a');
        hero_btn.setAttribute('href', o.button_url);
        hero_btn.setAttribute('class','g__hero_btn');
        hero_btn.setAttribute('target', target(o) );
        hero_btn.classList.add( btnStyle(o) );
        hero_btn.innerHTML = o.button_text;
        hero_container.appendChild(hero_btn);
    }
    /*---------------------------------------------
    Functions
    ---------------------------------------------*/
    function heroBkg(o){
        return    o.background_image ? `background: url(${o.background_image}) ${o.align_background_image}; background-size: cover;`
                : o.background_color ? `background: ${o.background_color};`
                : "background:transparent";
    }
    function target(o){
        return o.target ? "_blank" : "_self";
    }
    function btnStyle(o){
        return    o.button_style === "transparentWhite" ? "g__cta_button_transparent_white"
                : o.button_style === "transparentPink" ? "g__cta_button_transparent_pink"
                : o.button_style === "pink"   ? "g__cta_button_color"
                : "g__cta_button_white";
    }
    function themeStyle(t){
        if( !!o.overlay_color && !!o.background_image ){
            return "theme_custom";
        }else if( (t.mode === "midnight") && !!o.background_image ){
            return "theme_color";
        }else if( (t.mode === "standard") && !!o.background_image ){
            return "theme_color";
        }else{
            if(!!o.background_image){
                return "theme_custom";
            }else{
                return "no_overlay";
            }

        }
    }
    function mode(t){
        if(t.mode === "standard"){
            return "light"
        }else{
            return "midnight"
        }
      }
    /*---------------------------------------------
    Append Hero
    ---------------------------------------------*/
    document.getElementById(id).appendChild(hero_wrapper);
    /*---------------------------------------------
    CSS Variable Overrides
    ---------------------------------------------*/
    var selector = cssID.substring(1);
    var main_css = document.getElementById(selector);
    !!t.primary ? main_css.style.setProperty('--primary', hexToRgb(t.primary)) : "212, 70, 151";
    !!t.secondary ? main_css.style.setProperty('--secondary', hexToRgb(t.secondary)) : "255, 139, 205";
    !!o.header_color ? main_css.style.setProperty('--header-color', o.header_color): "";
    !!o.description_color ? main_css.style.setProperty('--description-color', o.description_color) : "";

}
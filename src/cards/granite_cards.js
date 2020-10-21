function granite_cards(jsonCards, jsonTheme) {
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    var json = jsonCards;
    var id = json.id;
    var css_class = ".a__" + id;
    var css_id = "#" + id;
    var o = json['options'];
    var r = json['records'];
    var t = jsonTheme;
    var style = !!o.style ? o.style : "bottom_slide";
    let root = document.documentElement;
    /*---------------------------------------------
    Prevent Micro From Running Twice
    ---------------------------------------------*/
    var content = (document.getElementById(id).innerHTML).trim();
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
    Static CSS
    ---------------------------------------------*/
    !!o.bottom_background_color ? document.documentElement.style.setProperty('--background', o.bottom_background_color) : "";
    var button_text_size = !!o.button_text_size ? o.button_text_size : "14px";
    var bottom_button_text_size = !!o.bottom_button_text_size ? o.bottom_button_text_size : "14px";
    var bottom_button_left_right_padding = !!o.button_left_right_padding ? o.button_left_right_padding : "48px";
    /*---------------------------------------------
    Padding Size
    ---------------------------------------------*/
    switch (o.padding){
        case "small":
            var padding = "5px";
            var shadow = "0px 0px 4px 2px rgba(0, 0, 0, 0.15);";
        break;
        case "large":
            var padding = "15px";
            var shadow = "0px 0px 10px 5px rgba(0, 0, 0, 0.15);";
        break;
        default:
            var padding = "10px";
            var shadow = "0px 0px 7px 5px rgba(0, 0, 0, 0.15);";
        break;
    }
    /*---------------------------------------------
    Layout Case Block
    ---------------------------------------------*/
    switch (o.layout){
        case "center":
            var container_position = "center";
            var content_align = "center";
            var desc_align = "center";
        break;
        case "right":
            var container_position = "flex-end";
            var content_align = "flex-start";
            var desc_align = "left";
        break;
        default:
            var container_position = "flex-start";
            var content_align = "flex-start";
            var desc_align = "left";
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
        columns = "25%";
      break;
    }
    if(o.fill_row){
      var fillRow = 1;
    } else {
      var fillRow = 0;
    }
    /*---------------------------------------------
    Block Level CSS
    ---------------------------------------------*/
    var cardCss = document.createElement('style');
    cardCss.innerHTML = `
    /*---------------------------------------------
    No Records
    ---------------------------------------------*/
    .a__no-records{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #BFBFBF;
        height: 225px;
        margin-top: 50px;
        border: 2px dashed #707070;
    }
    /*---------------------------------------------
    Basic Layout
    ---------------------------------------------*/
    /* Main Structure */
    .a__card_wrapper{
        --primary: 212, 70, 151;
        --background: #ffffff;
        --bottom-background: #ffffff;
        --font-color: #101010;
        --header-color: #101010;
        --description-color: #101010;
        --border-color: #bfbfbf;
        --font-hairline: hero-new-hairline, sans-serif;
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
    }
    .a__card_wrapper[theme="dark"]{
        --primary: 212, 70, 151;
        --bottom-background: #101010;
        --background: #101010;
        --font-color: #ffffff;
        --header-color: #ffffff;
        --description-color: #ffffff;
        --border-color: #BFBFBF;
        --box-shadow: -10px 0 10px 0px #101010;
        --font-hairline: hero-new-hairline, sans-serif;
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
    }
    ${css_class}.a__card_wrapper {
        margin-right: 15px;
        margin-left: 15px;
        padding-top:${o.micro_top_padding};
        padding-bottom:${o.micro_bottom_padding};
    }
    /*---------------------------------------------
    Containers
    ---------------------------------------------*/
    ${css_class} .g__container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    ${css_class} .a__card_container{
        display: flex;
        flex-wrap: wrap;
    }
    ${css_class} .a__card_single{
        flex: ${fillRow} 0 ${columns};
        overflow: hidden;
      }
    /*---------------------------------------------
    Card Styles
    ---------------------------------------------*/
    ${css_class} .a__card_single{
        box-sizing: border-box;
        padding: ${padding}
    }
    ${css_class} .a__card_single .card:hover {
        box-shadow: ${shadow};
        transition: box-shadow .5s;
    }
    .card-img-top {
        max-height: 200px;
        padding: 10px;
        display: block;
        width: auto;
        margin: auto;
    }
    .card > a {
        border-bottom: 1px solid lightgray;
    }
    .a__card_single .card{
        height: calc(225px + 80px);
        overflow: hidden;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        border: 2px solid var(--border-color);
    }
    .a__card_single .a__card_top{
        height: 225px;
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 25px;
    }
    .a__card_single .a__card_top i{
        font-size:  30px;
        color: #27b07d;
    }

    .a__card_single .a__card_body{
        overflow: auto;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 225px;
        padding: 10px;
        width: 100%;
        height: 80px;
        background: var(--background);
        border-top: var(--border-color);
        transition: all .4s;
    }
    .a__card_single .a__card_body.active{
        overflow: hidden;
        padding:10px;
        position: absolute;
        top: 0;
        border-top: 1px solid #fff;
        background: var(--background);
        height: 100%;
    }
    .a__card_single .a__card_img{
        max-height: 100%;
        max-width: 100%;
    }
    ${css_class} .a__card_single .a__card_body .a__card_header{
        font-size: 18px;
        margin-top: -5px;
        font-family: var(--font-regular);
        font-weight: 300;
        text-align: ${o.align_header_text};
        font-weight: 400;
        margin-bottom: 0;
        color: var(--header-color);
    }

    .a__card_single .a__card_body .a__card_desc{
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 0;
        color: var(--description-color);
        font-family: var(--font-regular);
        font-weight: 300;
        overflow: hidden;
        max-height: 210px;
        height: 20px;
        padding-right: 15px;
        width: fit-content;
        transition: height .4s;
    }
    .a__card_single .a__card_body.active .a__card_desc{
        overflow: auto;
        height: 210px;
    }
    .a__card_single .a__show_more {
        display: none;
        position: absolute;
        bottom: 1px;
        right: 0;
        cursor: pointer;
        color: var(--font-color);
        font-size: 14px;
        background: var(--background);
        padding: 0 10px 10px 10px;
        box-shadow: var(--box-shadow);
    }
    .a__card_single .a__card_body.active .a__show_more {
        position: absolute;
        top: 0px;
        right: 6px;
        cursor: pointer;
        color: var(--font-color);
        font-size: 30px;
        background: transparent;
        padding: 0 10px 10px 10px;
        box-shadow: 0 0 0 0 var(--font-color);
    }
    .a__card_single .a__show_more.show {
        display: block;
    }
    .a__card_single .a__white_btn{
        opacity: 0;
        z-index: 5;
        border: 1px solid #fff;
        padding: 5px;
        width: 200px;
        text-align: center;
        background: transparent;
        cursor: pointer;
        font-weight: 400;
        border-radius: 5px;
        text-decoration: none;
        color: #fff;
        margin: 10px;
        transition: opacity .4s;
    }
    .a__card_single .a__white_btn:hover{
        background: rgba(0, 0, 0, .50);
        cursor: pointer;
    }
    .a__card_single .a__filter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 225px;
        content: '';
        background: rgba(0, 0, 0, .50);
        transition: opacity .4s;
    }
    .a__card_single .a__card_top:hover .a__filter,
    .a__card_single .a__card_top:hover .a__white_btn{
        opacity: 1;
    }
    /*----------
    Overlays
    ----------*/
    .a__overlay{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background:black;
        opacity: .5;
    }
    /*---------------------------------------------
    Action Row
    ---------------------------------------------*/
    .a__card_action{
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    margin-bottom: 15px;
    }
    ${css_class} .g__bottom-border{
        border-bottom: 1px solid #a1a1a1;
    }
    ${css_class} .g__action_header{
        font-family: var(--font-hairline);
        font-weight: 100;
        font-size:${o.action_header_size};
        color:${!!o.action_header_color ? o.action_header_color : "var(--font-color)"};
        margin-bottom:${o.action_header_bottom_margin};
        text-align:${o.action_align_text};
    }
    ${css_class} .g__action_description{
        font-family: var(--font-regular);
        font-weight: 300;
        font-size:${o.action_description_size};
        color:${!!o.action_description_color ? o.action_description_color : "var(--font-color)"};
        margin-bottom:${o.action_description_bottom_margin};
        text-align:${o.action_align_text};
    }
    .a__seach_row {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    }
    .search-container {
    position: relative;
    margin-left: auto;
    margin-top: 10px;
    }
    .search-container input#a__search_input {
    height: 30px;
    width: 300px;
    color: transparent;
    font-size: .825rem;
    font-family: arial;
    background: #fff;
    border: 1px solid #b4b4b4;
    padding-left: 2rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    }
    .search-container .icon {
    transition: all 0.3s ease;
    position: absolute;
    z-index: 1;
    top: 5px;
    left: 9px;
    }
    .search-container.active .icon {
    transform: scaleX(0) rotate(45deg);
    }
    .search-container.active input#a__search_input {
    padding-left: 1rem;
    }
    .search-container.active input#a__search_input.active {
    color: #101010;
    }
    .search-container input#a__search_input:hover,
    .search-container input#a__search_input:focus,
    .search-container input#a__search_input:active{
    outline:none;
    background: #f5f5f5;
    }
    .search-container input#a__search_input:focus {
    background: #fff;
    }
    /*---------------------------------------------
    Baisc Card Style
    ---------------------------------------------*/
    ${css_class} .g__basic_top{
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${o.top_height};
        background: var(--background);
        padding:25px;
        color: transparent;
        text-decoration: none;
        border-top: 1px solid ${!!o.border_color ? o.border_color : "var(--border-color)"};
        border-right: 1px solid ${!!o.border_color ? o.border_color : "var(--border-color)"};
        border-left: 1px solid ${!!o.border_color ? o.border_color : "var(--border-color)"};
    }
    ${css_class} .g__basic_bottom{
        padding: ${o.inside_top_bottom_padding} ${o.inside_left_right_padding};
        background: var(--bottom-background);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: 0 0 4px 4px;
        border: 1px solid ${!!o.border_color ? o.border_color : "var(--border-color)"};
        align-items: ${content_align};
    }
    ${css_class} .g__basic_card .a__card_header{
        font-family: var(--font-regular);
        font-weight: 300;
        font-size: ${o.header_size};
        color: var(--header-color);
        margin-bottom: ${o.header_bottom_margin};
    }
    ${css_class} .g__basic_card .a__card_desc{
        font-family: var(--font-regular);
        font-weight: 300;
        font-size: ${o.description_size};
        color: var(--description-color);
        text-align: ${desc_align};
        margin-bottom: ${o.description_bottom_margin};
    }
    ${css_class} .g__basic_card_image {
        max-width: 100%;
        max-height: calc(${o.top_height} - 30px);
    }
    /* Bottom Button Container */
    .g__card_button_container{
        display:flex;
        padding-left: ${padding};
        padding-right: ${padding};
    }
    ${css_class} .g__card_btn{
        font-family: var(--font-regular);
        font-weight: 300;
        z-index: 1;
        font-size: ${bottom_button_text_size};
        padding: 10px ${bottom_button_left_right_padding};
        border-radius: 2px;
        text-decoration: none;
        font-weight: 400;
    }
    ${css_class} .g__card_single_btn{
        font-family: var(--font-regular);
        font-weight: 300;
        z-index: 1;
        font-size: 14px;
        padding: 10px 15px;
        border-radius: 2px;
        font-size: ${button_text_size};
        text-decoration: none;
        font-weight: 400;
        margin-top: 20px;
    }
    /* --- Button Styles --- */
    /* Color button */
    ${css_class} .g__card_single_btn.g__cta_button_color,
    ${css_class} .g__card_btn.g__cta_button_color{
        color: #ffffff;
        background-color: rgba(var(--primary), 1);
        border: 1px solid rgba(var(--primary), 1);
        font-family: var(--font-regular);
        transition: all .5s;
    }
    ${css_class} .g__card_single_btn.g__cta_button_color:hover,
    ${css_class} .g__card_btn.g__cta_button_color:hover{
        color: #ffffff;
        background-color: rgba(var(--primary), .6);
        border: 1px solid rgba(var(--primary), .6);
        text-decoration: none;
        border-radius: 2px;
    }
    ${css_class} .g__card_single_btn.g__cta_button_color:active,
    ${css_class} .g__card_btn.g__cta_button_color:active{
        color: #ffffff;
        background-color: rgba(var(--primary), .6);
        border: 1px solid rgba(var(--primary), .6);
        text-decoration: none;
        border-radius: 2px;
    }
    /* White button */
    ${css_class} .g__card_single_btn.g__cta_button_white,
    ${css_class} .g__card_btn.g__cta_button_white{
        color: #D44697;
        background-color: #ffffff;
        border: 1px solid #D44697;
        font-family: var(--font-regular);
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${css_class} .g__card_single_btn.g__cta_button_white:hover,
    ${css_class} .g__card_btn.g__cta_button_white:hover{
        color:#ffffff;
        background-color: #D44697;
        border: 1px solid #D44697;
    }
    ${css_class} .g__card_single_btn.g__cta_button_white:active,
    ${css_class} .g__card_btn.g__cta_button_white:active{
        color:#ffffff;
        border: 1px solid #fff;
    }
    /* Transparent White */
    ${css_class} .g__card_single_btn.g__cta_button_transparent_white,
    ${css_class} .g__card_btn.g__cta_button_transparent_white{
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0);
        border: 1px solid #ffffff;
        font-family: var(--font-regular);
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${css_class} .g__card_single_btn.g__cta_button_transparent_white:hover,
    ${css_class} .g__card_btn.g__cta_button_transparent_white:hover{
        background-color: rgba(255, 255, 255, .3);
    }
    ${css_class} .g__card_single_btn.g__cta_button_transparent_white:active,
    ${css_class} .g__card_btn.g__cta_button_transparent_white:active{
        background-color: rgba(255, 255, 255, .5);
    }
    /* Transparent Pink */
    ${css_class} .g__card_single_btn.g__cta_button_transparent_pink,
    ${css_class} .g__card_btn.g__cta_button_transparent_pink{
        color: #ffffff;
        background: rgba(212, 70, 151, 0.75);
        border: 1px solid rgba(212, 70, 151, 0.75);
        font-family: var(--font-regular);
        text-decoration: none;
        border-radius: 2px;
        transition: all .5s;
    }
    ${css_class} .g__card_single_btn.g__cta_button_transparent_pink:hover,
    ${css_class} .g__card_btn.g__cta_button_transparent_pink:hover{
        background: #D44697;
        border: 1px solid #D44697;
    }
    ${css_class} .g__card_single_btn.g__cta_button_transparent_pink:active,
    ${css_class} .g__card_btn.g__cta_button_transparent_pink:active{
        background: #D44697;
        border: 1px solid #FFFFFF;
    }

  /*---------------------------------------------
  Mobile Styles
  ---------------------------------------------*/
  @media (max-width: 991.98px) {
    ${css_class} .a__card_single{
        flex: ${fillRow} 0 50%;
        overflow: hidden;
      }
  }
  @media only screen and (max-width: 767.98px) {
    ${css_class} .a__card_single{
        flex: ${fillRow} 0 100%;
        overflow: hidden;
      }
    .a__desc_container {
      position: relative;
      opacity: 1;
      padding: 0;
    }
    .a__tile:hover  .a__desc_container {
      background-color: transparent;
    }
    .a__basic_container .a__desc_container {
    opacity: 1;
    position: relative;
    }
    .a__card_action{
      display: flex;
      flex-direction: column;
    }

    .a_action_content{
      margin-right: 0px;
    }
    .a_action_content p{
      margin-bottom: 15px;
    }
    .a__seach_row {
      width: 100%
    }
    .search-container {
      width: 100%;
    }
    .search-container input#a__search_input {
      width: 100%;
    }
  }
      `
      document.head.appendChild(cardCss);

    /*---------------------------------------------
    Helpers - Should be moved to there own file
    ---------------------------------------------*/
    var isObject = function (val) {
        return Object.prototype.toString.call(val) === "[object Object]";
    };

    var isArray = function (val) {
        return Array.isArray(val);
    };

    var createElement = function (a, b) {
        var d = document.createElement(a);
        if (b && "object" == typeof b) {
            var e;
            for (e in b) {
                if ("html" === e) {
                    d.innerHTML = b[e];
                } else {
                    d.setAttribute(e, b[e]);
                }
            }
        }
        return d;
    };
    var each = function (arr, fn, scope) {
        var n;
        if (isObject(arr)) {
            for (n in arr) {
                if (Object.prototype.hasOwnProperty.call(arr, n)) {
                    fn.call(scope, arr[n], n);
                }
            }
        } else {
            for (n = 0; n < arr.length; n++) {
                fn.call(scope, arr[n], n);
            }
        }
    };
    /*---------------------------------------------
    Element Functions
    ---------------------------------------------*/
    function action(o){
       var header = o.action_header ? `<h2 class="g__action_header">${o.action_header}</h2>` : "";
       var desc = o.action_description ? `<p class="g__action_description">${o.action_description}</p>` : "";
        return `<div class="a_action_content">${header} ${desc}</div>`;
    }
    function cardBkg(r) {
        var align_background = !!r.align_background_image ? r.align_background_image : "center center";
        var background_opacity = !!r.background_opacity ? r.background_opacity : "1";
        if(r.background_image){
            return `style="background: url(${r.background_image}) no-repeat ${align_background}; background-size:cover; opacity: ${background_opacity}"`;
        }else{
            return `style="background: url(https://addapptation.blob.core.windows.net/pictures/no_image.png) no-repeat center center; background-size:cover;"`;
        }
    }
    function rClasses(r){
        return r.classes ? ` ${r.classes}` : "";
    }
    function cardBtn(r){
        var target = r.target ? "_blank" : "_self";
        return r.button_link && r.button_text ? `<a href="${r.button_link}" target="${target}" class="a__white_btn">${r.button_text}</a>` : "";
    }
    function cardTitle(r){
        return r.header ? `<div class="a__card_header">${r.header}</div>` : "";
    }
    function cardDesc(r){
        return r.description ? `<div class="a__card_desc">${r.description}</div>` : "";
    }
    function cardLink(r){
        return !!r.button_link ? ` onclick="window.open('${r.button_link}', '${r.target ? r.target : "_self"}')"` : "";
    }
    function container(o){
        return o.full_width ? "g__container-fluid" : "g__container";
    }
    function actionBorder(o){
        return o.action_border ? " g__bottom-border" : " g__no-border";
    }
    function basicCardImg(r){
        return !!r.thumb_image ? `<img class='g__basic_card_image' src='${r.thumb_image}'>` : "";
    }
    function basicCardBtn(r){
        var target = r.target ? "_blank" : "_self";
        return !!r.button_text ? `<a href="${r.button_link}" target="${target}" class="g__card_single_btn ${basicBtnStyle(o)}">${r.button_text}</a>` : "";
    }
    function overlay(r){
        var overlay_color = r.overlay_color;
        var overlay_opacity = r.overlay_opacity;
        return !!r.overlay_color ? `<div class="a__overlay" style="background:${overlay_color}; opacity:${overlay_opacity}"></div>` : "";
    }
    function basicCardBkg(r){
        var align_background = !!r.align_background_image ? r.align_background_image : "center center";
        if(!!r.background_image){
            return `background: url(${r.background_image}) ${align_background}; background-size:cover;)`
        }else if(!!r.background_color){
            return `background: ${r.background_color};`
        }else{
            return ``
        }
    }
    function basicBtnStyle(o){
        console.log(o.bottom_button_style);
        return    o.button_style === "transparentWhite" ? "g__cta_button_transparent_white"
                : o.button_style === "transparentPink" ? "g__cta_button_transparent_pink"
                : o.button_style === "color"   ? "g__cta_button_color"
                : "g__cta_button_white";
    }
    function topLink(r){
        var target = r.target ? "_blank" : "_self";
        return !!r.button_link ? `href="${r.button_link}" target="${target}"` : "";
    }
    function bottomBtnStyle(o){
        return    o.bottom_button_style === "transparentWhite" ? "g__cta_button_transparent_white"
                : o.bottom_button_style === "transparentPink" ? "g__cta_button_transparent_pink"
                : o.bottom_button_style === "color"   ? "g__cta_button_color"
                : "g__cta_button_white";
    }
    function mode(t){
        if(t.mode === "midnight"){
            return "dark"
        }else{
            return "light"
        }
    }
    /*---------------------------------------------
    Container Build
    ---------------------------------------------*/
    var wrapper = createElement("div", {
        "class": `a__${id} a__card_wrapper  ${container(o)}`,
        "theme": mode(t)
    });
    var row = createElement("div", {
        "class": "a__card_container",
        "id": "a__card"
    });
    if(o.action_header || o.action_description || o.search){
        var action_row = createElement("div", {
            html: `${action(o)}`,
            "class": "a__card_action mt-4" + actionBorder(o)
        });
        wrapper.appendChild(action_row);
    };
        if(o.search){
            var search = createElement("div", {
                html: `<span class="icon"><i class="fal fa-search"></i></i></span><input type="text" id="a__search_input" class="a__tile_search" onkeyup="window.cardSearch()">`,
                "class": "search-container"
            });
            action_row.appendChild(search);
        };
    if (r && r.length) {
        each(r, function(r){
            var tile_container = createElement("div", {
                "class": "a__card_single" + " " +  rClasses(r)
            })
            tile_container.appendChild(createElement("div", {
                html: `${cardBuild(o, r)}`,
                "class": "a__single_card",
            }))
            wrapper.appendChild(row);
            row.appendChild(tile_container);
        })
    } else {
        var empty = createElement("div", {
            html: "<h2>Add Tile Element</h2>",
            "class": "a__no-records col-12 mt-3"
        })
        wrapper.appendChild(row).appendChild(empty);
    };
    if (!!o.bottom_button_text){
        var button_container = document.createElement('div');
        button_container.setAttribute('class','g__card_button_container');
        button_container.setAttribute('style',`margin-top:${o.bottom_button_top_margin}; justify-content: ${o.bottom_button_align};`);
        wrapper.appendChild(button_container);

        var content_btn = document.createElement('a');
        content_btn.setAttribute('href', o.bottom_button_link);
        content_btn.setAttribute('class','g__card_btn');
        content_btn.setAttribute('style',`font-size:${bottom_button_text_size}`);
        content_btn.setAttribute('target', o.bottom_button_target ? "_blank" : "_self" );
        content_btn.classList.add( bottomBtnStyle(o) );
        content_btn.innerHTML = o.bottom_button_text;
        button_container.appendChild(content_btn);
    }

    /*---------------------------------------------
    Empty Granite Div and Append Hero
    ---------------------------------------------*/
    if ((document.getElementById(id).innerHTML).trim() == "") {
        document.getElementById(id).appendChild(wrapper);
    }

    /*---------------------------------------------
    Record Build
    ---------------------------------------------*/
    function cardBuild(o, r){
        switch (style){
            case "bottom_slide":
                return `<div class="card">
                        <div class="a__card_top" ${cardBkg(r)} ${cardLink(r)}>
                            ${overlay(r)}
                            <div class="a__filter">${cardBtn(r)}</div>
                        </div>
                    <div class="card-body a__card_body">
                        ${cardTitle(r)}
                        ${cardDesc(r)}
                        <div class="a__show_more">See More</div>
                    </div>
                    </div>`
            break;
            default:
                return `<div class="g__basic_card">
                            <a ${topLink(r)} class="g__basic_top" style="${basicCardBkg(r)}">
                                ${basicCardImg(r)}
                            </a>
                            <div class="g__basic_bottom">
                                ${cardTitle(r)}
                                ${cardDesc(r)}
                                ${basicCardBtn(r)}
                            </div>
                        </div>`
            break;
        }
    }
    /*---------------------------------------------
    Show More Button
    ---------------------------------------------*/
    if (style === "bottom_slide"){
        var showMoreBtn = document.getElementsByClassName('a__show_more');
        var desc = document.getElementsByClassName('a__card_desc');
        for (var n = 0; n < desc.length; n++) {
        var char = desc[n].innerHTML.length;
        if (char > 45){
        desc[n].nextElementSibling.classList.add("show");
        }
        }
        // 'Show More' button on click
        var showMore = document.getElementsByClassName('a__show_more');
        for (var i = 0; i < showMore.length; i++) {
            showMore[i].addEventListener("click", function(e) {
                var descCont = this.parentNode;
                var cardCont = descCont.parentNode;
                descCont.classList.toggle('active');
                cardCont.classList.toggle('active');
                if (this.innerHTML === "See More"){
                this.innerHTML = "<i class='fal fa-times'></i>";
                } else{
                this.innerHTML = 'See More';
                }
            })
        }
    }


    if (style === "basic"){
        /*---------------------------------------------
        Height Match
        ---------------------------------------------*/
        var basic_bottom_height = document.getElementsByClassName('g__basic_bottom');
        var height_arr = [];
        for (var i = 0; i < basic_bottom_height.length; i++){
                height_arr.push(basic_bottom_height[i].clientHeight);
        }
        var max_height = Math.max(...height_arr);
        if(o.match_height){
            console.log(max_height);
            for (var i = 0; i < basic_bottom_height.length; i++){
                basic_bottom_height[i].style.minHeight = max_height + 'px';
            }
        }
        /*---------------------------------------------
        Align Button
        ---------------------------------------------*/
        if(o.align_buttons_bottom){
            var basic_buttons = document.getElementsByClassName('g__basic_btn');
            for (var i = 0; i < basic_buttons.length; i++){
                basic_buttons[i].style.marginTop = "auto";
            }
        }

    }

    /*---------------------------------------------
    SEARCH BAR
    ---------------------------------------------*/
    //Event Listener
    var dt_search = document.querySelectorAll('.search-container .a__tile_search');
    for (i = 0; i < dt_search.length; i++){
        var search_input = dt_search[i];
        search_input.addEventListener('focus', function(){
            var search = this;
            search.parentNode.classList.add('active');
            setTimeout(function(){
            search.classList.add('active');
            }, 300);
        });
        search_input.addEventListener('focusout', function(){
            var search = this;
            var val = this.value;
            if(val.length == 0){
            search.parentNode.classList.remove('active');
            setTimeout(function(){
                search.classList.remove('active');
            }, 300);
            }
        });
    }
    window['cardSearch'] = function() {
        var input, filter, tiles, t, a, i, txtValue;
        input = document.getElementById('a__search_input');
        filter = input.value.toUpperCase();
        tiles = document.getElementById("a__card");
        t = tiles.getElementsByClassName('a__card_single');
        for (i = 0; i < t.length; i++) {
            a = t[i].getElementsByClassName("a__card_header")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                t[i].style.display = "";
                } else {
                t[i].style.display = "none";
            }
        }
    }
    /*---------------------------------------------
    ASSIGN THEME VALUES IF PRESENT
    ---------------------------------------------*/
    var main_css = document.getElementsByClassName("a__card_wrapper");
    !!o.bottom_background_color ? main_css[0].style.setProperty('--bottom-background', o.bottom_background_color) : "";
    !!o.header_color ? main_css[0].style.setProperty('--header-color', o.header_color) : "";
    !!t.primary ? main_css[0].style.setProperty('--primary', hexToRgb(t.primary)) : "212, 70, 151";
    !!t.secondary ? main_css[0].style.setProperty('--secondary', hexToRgb(t.secondary)) : "255, 139, 205";

};



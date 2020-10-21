function granite_template(jsonTemplate, jsonTheme){
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    const id = jsonTemplate.id;
    const o = jsonTemplate.options;
    const r = jsonTemplate.records;
    const t = jsonTheme;
    const cssId = "#" + id;

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
    CSS Block
    ---------------------------------------------*/
    var heroCss = document.createElement('style');
    heroCss.innerHTML = `
    ${cssId} .g__micro_wrapper{
        display: flex;
        flex-direction: row;
        --primary: 212, 70, 151;
        --background: #ffffff;
        --bottom-background: #ffffff;
        --font-color: #101010;
        --header-color: #101010;
        --description-color: #101010;
        --font-hairline: hero-new-hairline, sans-serif;
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
    }
    ${cssId} .g__micro_wrapper[mode="midnight"]{
        --primary: 212, 70, 151;
        --background: #101010;
        --bottom-background: #ffffff;
        --font-color: #ffffff;
        --header-color: #ffffff;
        --description-color: #ffffff;
    }
    ${cssId} .g__micro_container{
        padding: 50px;
        margin: 15px;
        border: 2px solid #b4b4b4;
        background:var(--background);
    }
    ${cssId} .g__micro_header{
        color:var(--header-color);
        font-family: var(--font-regular);
        font-weight: 300;
    }
    `
    document.head.appendChild(heroCss);
    /*---------------------------------------------
    Wrapper
    ---------------------------------------------*/
    const hero_wrapper = document.createElement('div');
    hero_wrapper.setAttribute('id', "granite-123");
    hero_wrapper.setAttribute('class','g__micro_wrapper');
    hero_wrapper.setAttribute('mode','midnight');

    /*---------------------------------------------
    Records Loop
    ---------------------------------------------*/
    if(!!r){
        r.forEach((r, val) => {

            /* Record Container */
            const micro_container = document.createElement('div');
            micro_container.setAttribute('class','g__micro_container');
            hero_wrapper.appendChild(micro_container);

            /* Hero Header */
            if(!!r.header){
                const micro_header = document.createElement('h2');
                micro_header.setAttribute('class','g__micro_header');
                micro_header.innerHTML = r.header;
                micro_container.appendChild(micro_header);
            }

        })
    }

    /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
    document.getElementById(id).appendChild(hero_wrapper);

    /*---------------------------------------------
    CSS Variable Overrides
    ---------------------------------------------*/
    var main_css = document.getElementById(id);
    !!t.primary ? main_css.style.setProperty('--primary', hexToRgb(t.primary)) : "212, 70, 151";
    !!t.secondary ? main_css.style.setProperty('--secondary', hexToRgb(t.secondary)) : "255, 139, 205";
}
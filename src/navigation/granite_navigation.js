
function granite_navigation(jsonNav, jsonTheme){
    /* BUILD NAVIGATION */
    /* Verion G1.0.4 */
    var json = jsonNav;
    var jsonTheme = jsonTheme;
    var targetID = json['id'];
    var options = json.options;
    var records = json.records;
    var t = jsonTheme;
    var content = (document.getElementById(targetID).innerHTML).trim();
    var nav_root = document.documentElement;
    const font_include = document.getElementById('g__font_stylesheet');
    /*---------------------------------------------
    Add Font Family To Header
    ---------------------------------------------*/
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
        return false;
    }
    /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
    var mobile_break_point = !!options.mobile_breakpoint ? options.mobile_breakpoint : "960px";
    var navigationCss = document.createElement('style');
    navigationCss.innerHTML = `
    @media (min-width: ${mobile_break_point}) {
        #a__mobile_nav_topbar {
            transform: translateY(100vh);
            display: none;
          }
        #a__topbar_nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        #a__topbar_nav #a__side_pane {
          height: calc(100vh - 60px) !important;
        }
        #a__topbar_nav #a__side_pane.sidenav.fullscreen {
          max-width: 100% !important;
        }
      }
    `
    document.head.appendChild(navigationCss);
    var gradient_1 = jsonTheme.gradient_1 ? jsonTheme.gradient_1 : "linear-gradient(180deg, #FD937A 0%, #D44697 50%, #2F1522 100%)";
    var gradient_2 = jsonTheme.gradient_2 ? jsonTheme.gradient_2 : "linear-gradient(to left, #ffb866 -5%, #ff8bcd 40%, #d44697 65%, #202020 96%)";
    var primary = !!options.highlight ? hexToRgb(options.highlight) : "#D44697";;
    var secondary = jsonTheme.secondary ? jsonTheme.secondary : "#D44697";
    var success = jsonTheme.success ? jsonTheme.success : "#00B28B";
    var warning = jsonTheme.warning ? jsonTheme.warning : "#00B28B";
    var alert = jsonTheme.alert ? jsonTheme.alert : "#EA386E";
    var darkGray = jsonTheme.darkGray ? jsonTheme.darkGray : "#666666";
    var mediumGray = jsonTheme.mediumGray ? jsonTheme.mediumGray : "#b7b7b7";
    var lightGray = jsonTheme.lightGray ? jsonTheme.lightGray : "#5d5d5d";

    //SETTING THE BACKGROUND COLOR
    if (options.type === "sidebar"){
        if(options.background === "@none"){
            var background_color = gradient_1;
        }else{
            var background_color = options.background ? options.background : gradient_1;
        }
    }else{
        if(options.background === "@none"){
            var background_color = gradient_2;
        }else{
            var background_color = options.background ? options.background : gradient_2;
        }
    }
    if(!!hexToRgb(background_color)){
        var backgroundOpacity = options.background_opacity;
        var backgroundColor = hexToRgb(background_color);
        var heroCss = document.createElement('style');
        heroCss.innerHTML = `
        #a__topbar_nav {
            background: rgba(${backgroundColor}, ${backgroundOpacity});
        }`
        document.head.appendChild(heroCss);
    }
    // CSS VARIABLES --topbarMobileMenuBackground
    var topbar_over_content = "60px";
    var cta_button_padding = !!options.cta_button_padding ? options.cta_button_padding : "48px";
    var cta_link_left_margin = !!options.cta_link_left_margin ? options.cta_link_left_margin : "10px";
    var topbar_mobile_menu_background = t.mode === "midnight" ? "#101010" : "#ffffff";
    var topbar_mobile_font_color = t.mode === "midnight" ? "#ffffff" : "#101010";
    var font_color = !!options.font_color ? hexToRgb(options.font_color) : "#fff";
    var topbar_submenu_background = t.mode === "midnight" ? "#101010" : "#ffffff";
    var topbar_submenu_hover = t.mode === "midnight" ? "rgba(255, 255, 255, .2)" : "rgba(0, 0, 0, .2)";
    var topbar_submenu_active = t.mode === "midnight" ? "rgba(255, 255, 255, .3)" : "rgba(0, 0, 0, .3)";
    if(!!options){
        nav_root.style.setProperty('--active', primary); /*options.highlight*/
        nav_root.style.setProperty('--color', font_color);
        nav_root.style.setProperty('--font-size', options.font_size);
        nav_root.style.setProperty('--topbarGradient', background_color);
        nav_root.style.setProperty('--gradient', background_color);
        nav_root.style.setProperty('--primary', primary);
        nav_root.style.setProperty('--secondary', secondary);
        nav_root.style.setProperty('--topbarOpacity', options.topbar_opacity);
        nav_root.style.setProperty('--topbarFontSize', options.topbar_font_size);
        nav_root.style.setProperty('--dropdownFontSize', options.dropdown_font_size);
        nav_root.style.setProperty('--topbarOverContent', topbar_over_content);
        nav_root.style.setProperty('--ctaButtonFontSize', options.cta_button_font_size);
        nav_root.style.setProperty('--ctaButtonPadding', cta_button_padding);
        nav_root.style.setProperty('--ctaLinkFontSize', options.cta_link_font_size);
        nav_root.style.setProperty('--ctaLinkLeftMargin', cta_link_left_margin);
        nav_root.style.setProperty('--topbarPaddingRight', options.topbar_padding_right);
        nav_root.style.setProperty('--topbarPaddingLeft', options.topbar_padding_left);
        nav_root.style.setProperty('--topbarMobileMenuBackground', topbar_mobile_menu_background);
        nav_root.style.setProperty('--topbarMobileFontColor', topbar_mobile_font_color);
        nav_root.style.setProperty('--topbarSubmenuBackground', topbar_submenu_background);
        nav_root.style.setProperty('--topbarSubmenuHover', topbar_submenu_hover);
        nav_root.style.setProperty('--topbarSubmenuActive', topbar_submenu_active);
    }
        /* MENU OPTIONS */
        var options_list_content = '';
        var options_list = '';
        if(options.menu){
            var menu_items = options.menu_items;
            if(!!menu_items){
            menu_items.forEach(function(record, index){
                options_list_content += `<a href='${record.href}' class='show_loader'><li class='nav-link'>${record.label}<i class='a__nav_options_icon fal fa-${record.icon}'></i></li></a>`;
            });
            }
            options_list_content += `<a href='/sign_out' class='show_loader'><li class='nav-link'>Sign Out<i class='a__nav_options_icon fal fa-sign-out'></i></li></a>`;

            options_list = `
            <div id='a__sidebar_nav__options'>
            <i id='a__options_link' class='fal fa-ellipsis-h'></i>
            <ul id='a__sidebar_nav__options-container'>
                ${options_list_content}
            </ul>
            </div>`;
        }

        /* NAV CONTAINER */
        var nav = document.createElement('nav');
        var side_pane = document.getElementById('a__side_pane');
        var navShift = sessionStorage.getItem('navShift');
        var topbar = false;

        if(options.type === 'topbar'){
            nav.setAttribute('id','a__topbar_nav');
            nav.setAttribute('class','a__nav_container');
            nav.setAttribute('mode', mode());
            topbar = true;
            document.body.classList.add('topbar_shift');
            if(!!side_pane){
            side_pane.classList.add('topbar_shift');
            }
        } else {
            nav.setAttribute('id','a__sidebar_nav');
            nav.setAttribute('class','a__nav_container');
            nav.setAttribute('mode', mode());
            document.body.classList.add('sidebar_shift');
            if(!!side_pane){
            side_pane.classList.add('sidebar_shift');
            }
            if(navShift === "true"){
              nav.classList.add('shift');
              document.body.classList.add('shift');
            } else {
              nav.classList.remove('shift');
              document.body.classList.remove('shift');
            }
        }

        /* NAV HEADER */
        var path = window.location.pathname.split('/').pop();
        var nav_header = document.createElement('div');
        function extractText(text) {
            var span = document.createElement('span');
            span.innerHTML = text;
            return span.textContent || span.innerText;
        }
        var header_label_text = extractText(options.header_label);
        var header_label = options.header_label.replace(/'/g,'"');
        nav_header.setAttribute('class','a__sidebar_nav__header');
        nav_header.innerHTML = `<div class='img_container'>
            <a href='${options.header_link}'><img src='${options.header_image}'></a>
            </div>
            <div class='a__sidebar_header_wrapper'>
            <div class='a__sidebar_header_label' title='${header_label_text}'>${header_label}</div>
            </div>`;
        if(options.searching) {
            if(!!nav_header){nav_header.classList.add('search_shift');}
            nav_header.innerHTML += `<div class='a__search_container'>
            <a id='a__global_search_link' class='a__side_pane_link fullscreen' href='/search?test=true'></a>
            <form action='${options.search_url}'>
                <i id='a__search_icon' class='a__search_icon fal fa-search'></i>
                <input id='a__search_input' type='text' class='a__input_search form-control' name='s'>
            </form>
            </div>`;
        }
        if(!!options.cta_label){
            var target = options.cta_target ? "_blank" : "_self";
            var cta_button = `<a href="${options.cta_url}" class="g__cta_button_color" target="${target}">${options.cta_label}</a>`
        }
        function btnStyle(o){
            return    o.button_style === "transparentWhite" ? "g__cta_button_transparent_white"
                    : o.button_style === "transparentPink" ? "g__cta_button_transparent_pink"
                    : o.button_style === "white"   ? "g__cta_button_white"
                    : "g__cta_button_color";
        }
        function ellipsis(){
            if(options.no_break_link_item){
                return "g__no_break_link"
            }else{
                return "g__break_link"
            }
        }
        function mode(){
            if(t.mode === "standard"){
                return "standard"
            }else{
                return "midnight"
            }
          }
        if((!!options.cta_label || !!options.link_label) && (options.type === "topbar")){
            var utility_topbar = '';
            if(!!options.link_label){
                utility_topbar += `<a href="${options.link_url}" class="g__link_button" target="${options.link_target ? "_blank" : "_self"}">${options.link_label}</a>`;
            }
            if(!!options.cta_label){
                utility_topbar += `<a href="${options.cta_url}" class="${btnStyle(options)}" target="${options.cta_target ? "_blank" : "_self"}">${options.cta_label}</a>`;
            }
        }
        /* NAV LIST */
        var nav_list = document.createElement('ul');
        nav_list.setAttribute('id','a__sidebar_nav__list');
        nav_list.setAttribute('class','a__sidebar_nav__list');
        nav_list.setAttribute('class','list-unstyled');
        if(options.topbar_position === "center"){
            nav_list.classList.add("a__topbar_center")
        } else if(options.topbar_position === "left"){
            nav_list.classList.add("a__topbar_left")
        }else{
            nav_list.classList.add("a__topbar_right")
        }

        var nav_list_content = '';
        var in_submenu = false;
        var is_submenu_item = false;
        records.forEach(function(record, val){
            var href = record.href;
            var target = record.type === "external" ? "_blank" : "_self";
            var custom_class = !!record.classes ? record.classes : "g__no_custom";
            var label = extractText(record.label);
            var hide_text = record.hide_if;
            var icon = record.icon;
            var link_text = !!href ? href.substr(1) : href;
            var link_check = path === link_text ? true : false;
            var is_active = link_check ? true : (path === '/' || path === '/homepage' || path === 'homepage') && val == 0;
            var active_class = is_active ? 'active' : '';
            is_submenu_item = record.submenu;
            /* CHECK FOR LABEL AND ICON */
            var label_only = false;
            var icon_only = false;
            var label_icon = false;
            if(!!label && label.length && !!icon && icon.length){
                label_icon = true;
            } else if(!!label && label.length){
                label_only = true;
            } else if(!!icon && icon.length){
                icon_only = true;
            }
            if(record.submenu_header){
            nav_list_content += `${in_submenu ? '</ul></li>' : ''}
                <li class='${active_class}${label_only ? ' label_only' : ''}${icon_only ? 'icon_only' : ''}${label_icon ? ' label_icon' : ''} has_submenu'>
                <a id='nav-link-partials' title='${label}' class='nav-link has_submenu ${label_only ? 'label_only' : ''}'>
                    <div>
                      <div class='a__sidebar_nav__list-label ${label_only ? 'label_only' : ''} ${icon_only ? 'icon_only' : ''} ${ellipsis()}'>${label}</div>
                      <div class='a__sidebar_nav__list-arrow ${label_only ? 'label_only' : ''}'><i class='fal fa-angle-down a__label_arrow'></i></div>
                      <div class='a__sidebar_nav__list-icon ${icon_only ? 'icon_only' : ''}'>
                          <i class='${icon}'></i>
                      </div>
                    </div>
                </a>
                <ul class='nav-submenu list-unstyled' id='nav-link-partials-submenu' data-spy='affix'>`;
            in_submenu = true;
            is_submenu_item = true;
            } else {
            if(is_submenu_item){
                nav_list_content += `
                <li class="g__submenu-item ${custom_class}">
                    <a href='${href}' target='${target}' id='nav-link-calendar-calendar' title='${label}' class='nav-submenu-link ${active_class}'>
                    <span class="${ellipsis()}">${label}</span>
                    <div class='submenu-icon-container'>
                        <i class='${icon} submenu-icon'></i>
                    </div>
                    </a>
                </li>`;
            } else {
                nav_list_content += `${in_submenu ? '</ul></li>' : ''}`
                in_submenu = false;
                if(!!href){
                nav_list_content += `
                    <li class='g__menu-item ${active_class}${label_only ? ' label_only' : ''}${label_icon ? ' label_icon' : ''} ${custom_class}'>
                      <a href='${href}' target="${target}" id='nav-link-home' title='${label}' class='nav-link ${label_only ? 'label_only' : ''}'>
                          <div>
                            <div class='a__sidebar_nav__list-label ${label_only ? 'label_only' : ''} ${icon_only ? 'icon_only' : ''} ${ellipsis()}'>${label}</div>
                            <div class='a__sidebar_nav__list-arrow'><i class='fal fa-angle-down a__label_arrow'></i></div>
                            <div class='a__sidebar_nav__list-icon ${icon_only ? 'icon_only' : ''}'>
                                <i class='${icon}'></i>
                            </div>
                          </div>
                      </a>
                    </li>`;
                }
            }
            }
        });
        nav_list.innerHTML = nav_list_content;
        /* HAMBURGER LIST */
        var options_shift_class = options_shift ? 'options_shift' : '';
        nav_header.innerHTML += `<div id='a__nav_hamburger' class='hide ${options_shift_class}'>
            <i class='far fa-bars'></i>
            <ul id='a__nav_hamburger_container'>${nav_list_content}</ul>
            </div>`;

        /* NAV FOOTER */
        var nav_footer = document.createElement('div');
        nav_footer.setAttribute('class','a__sidebar_nav__footer');
        nav_footer.innerHTML = `<div>${options.footer}</div>
            <i id='a__sidebar_nav__arrow' class='fal fa-angle-left'></i>`;

        /* APPEND ELEMENTS TO DOM */
        nav.innerHTML = [nav_header.outerHTML, nav_list.outerHTML, options_list, utility_topbar, nav_footer.outerHTML].join('');
        document.getElementById(targetID).appendChild(nav);

    /* MOBILE NAV FOOTER*/
    var utility = '';
    if((!!options.cta_label || !!options.link_label)  && (options.type === "topbar")){

        if(!!options.link_label){
            utility += `<li class="g__mobile_link"><a href="${options.link_url}" class="g__link_button" target="${options.link_target ? "_blank" : "_self"}">${options.link_label}</a></li>`;
        }
        if(!!options.cta_label){
            utility += `<li class="g__mobile_cta"><a href="${options.cta_url}" class="${btnStyle(options)} g__mobile_cta" target="${options.cta_target ? "_blank" : "_self"}">${options.cta_label}</a></li>`;
        }
    }
    if(options.mobile_menu === "topbar"){
        var mobile_nav = document.createElement('div');
        mobile_nav.setAttribute('id','a__mobile_nav_topbar');
        mobile_nav.setAttribute('class','a__nav_container');
        mobile_nav.innerHTML = `<div id='mobile_nav_bar_topbar'>
                                  <a href='${options.header_link}'>
                                    <img id='mobile_logo_topbar' src='${options.header_image}'>
                                  </a>
                                  <div id='a__mobile_topbar_toggle'>

                                    <div class="a__topbar_hamburger"></div>
                                  </div>
                                </div>
                                <div id='mobile_menu_topbar' class=''>
                                  <div>
                                    <ul class='mobile_menu_topbar'>
                                        <div id='a__mobile_menu_scrollable_topbar'>
                                        ${nav_list_content}
                                        ${is_submenu_item ? '</ul></li>' : ''}
                                        ${utility}
                                        </ul></div>
                                    </ul>

                                  </div>
                                </div>
                                `;
        document.getElementById(targetID).appendChild(mobile_nav);
      } else {
        var mobile_nav = document.createElement('div');
        mobile_nav.setAttribute('id','a__mobile_nav');
        mobile_nav.setAttribute('class','a__nav_container');
        var mobile_nav_header = `<div class='mobile_nav_header'><a href='${options.header_link}'><img id='mobile_logo' src='${options.header_image}'></a><span title='${header_label}'>${header_label}</span></div>`;
        var mobile_search_button = options.searching ? `<i id='mobile_search' class='far fa-search'></i>` : '';
        var mobile_options_button = options.menu ? `<i id='mobile_options' class='fal fa-ellipsis-h'></i>` : '';

        mobile_nav.innerHTML = `<div id='mobile_nav_bar'>
            ${mobile_search_button}
            <div id='a__mobile_menu_toggle'><i id='a__mobile_menu_toggle_arrow' class='fal fa-chevron-circle-up'></i></div>
            ${mobile_options_button}
        </div>
        <div id='mobile_menu' class=''>
            <div>
            <ul class='mobile_menu'>
                ${mobile_nav_header}
                <div id='a__mobile_menu_scrollable'>
                ${nav_list_content}
                </ul></div>
            </ul>
            </div>
        </div>`;

        if(options.searching){
        mobile_nav.innerHTML += `<div id='mobile_search_container' class=''>
            ${mobile_nav_header}
            <div id='mobile_search_header'>Global Search</div>
            <div>
                <form action='${options.search_url}'>
                <input id='mobile_search_field' name='s' placeholder='Search...' type='text'>
                <div id='mobile_search_button_container'>
                    <button id='mobile_search_button' class='btn btn-outline-primary w-100' type='submit'>Search</button>
                </div>
                </form>
            </div>
            </div>`;
        }
        if(options.menu){
        mobile_nav.innerHTML += `<div id='mobile_options_container' class=''>
            ${mobile_nav_header}
            <div>
                <ul class='mobile_menu'>
                <div id='a__mobile_options_scrollable'>
                    ${options_list_content}
                </div>
                <li class='spacer'></li>
                </ul>
            </div>
            </div>
            `;
        }
        document.getElementById(targetID).appendChild(mobile_nav);
      }

    /* CLICK HANDLERS */
        /* SEARCH */
        var search_icon = document.getElementById('a__search_icon');
        var search_input = document.getElementById('a__search_input');
        var nav_arrow = document.getElementById('a__sidebar_nav__arrow');

        if(!!search_icon){
            search_icon.addEventListener('click', function(){
            nav_arrow.click();
            search_input.focus();
            }, false);
        }

        /* OPTIONS */
        var options_link = document.getElementById('a__options_link');
        var options_input = document.getElementById('a__sidebar_nav__options-container');
        var options_shown = false;
        if(!!options_link){
            options_link.addEventListener('click', function(){
            options_input.classList.toggle('show');
            options_shown = options_input.classList.contains('show');
            }, false);
        }

        document.addEventListener('click', function(e){
            var target = e.target.id;
            if(options_shown && target != 'a__options_link'){
            options_input.classList.remove('show');
            }
        });

        /* HAMBURGER MENU */
        // var hamburger_list = document.getElementById('a__nav_hamburger');
        // var hamburger_container = document.getElementById('a__nav_hamburger_container');

        // setTimeout(function(){
        //     var nav_header = document.getElementsByClassName('a__sidebar_nav__header');
        //     var nav_header_width = nav_header[0].clientWidth;
        //     var nav_list = document.getElementById('a__sidebar_nav__list');
        //     var nav_list_offset = nav_list.getBoundingClientRect().left;

        //     function toggleHamburger(){
        //     if(nav_list_offset < nav_header_width){
        //         nav_list.classList.add('hide');
        //         hamburger_list.classList.remove('hide');
        //     } else {
        //         nav_list.classList.remove('hide');
        //         hamburger_list.classList.add('hide');
        //     }
        //     }
        //     toggleHamburger();
        //     window.addEventListener('resize',function(){
        //     nav_list_offset = nav_list.getBoundingClientRect().left;
        //     toggleHamburger();
        //     });

        //     var hamburger_list_icon = document.querySelector('#a__nav_hamburger .fa-bars');
        //     hamburger_list_icon.addEventListener('click',function(){
        //     hamburger_container.classList.toggle('show');
        //     });
        // }, 250);

        /* NAV SUBMENUS */
        var navbar = topbar ? document.getElementById('a__topbar_nav') : document.getElementById('a__sidebar_nav');
        var nav_link = document.getElementsByClassName('nav-link');
        var options_list_container = document.getElementById('a__sidebar_nav__options-container');
        var submenus = navbar.querySelectorAll('.has_submenu');

        function toggleSubmenu(){
            for (var k = 0; k < submenus.length; k++) {
            submenus[k].parentElement.classList.remove('active');
            }
        }
        var singleSubmenu = topbar ? true : options.single_submenu;
        for (var i = 0; i < nav_link.length; i++) {
            nav_link[i].addEventListener('click', function(){
            var parent = this.parentElement;
            if(!this.parentElement.classList.contains('active')){
                if(singleSubmenu){
                toggleSubmenu();
                }
            }
            parent.classList.toggle('active');
            if(!!options_list_container){
                options_list_container.classList.remove('show');
            }
            }, false);
        }

        var options_shift = false;
        if(topbar && !!options_link){
            var topbar_nav_list = document.getElementById('a__sidebar_nav__list');
            if(options.topbar_position !== "center"){
              topbar_nav_list.classList.add('options_shift');
            }
            // hamburger_list.classList.add('options_shift');
            // options_shift = true;
            // options_link.addEventListener('click', function(){
            // hamburger_container.classList.remove('show');
            // toggleSubmenu();
            // });
        }

        // hamburger_list.addEventListener('click',function(){
        //     if(!!options_list){
        //     options_list.classList.remove('show');
        //     }
        // });

        /* NAV COLLAPSE */
        var nav_container = document.getElementById('a__sidebar_nav');

        nav_arrow.addEventListener('click', function(){
            nav_container.classList.toggle('shift');
            document.body.classList.toggle('shift');
            var shifted = nav_container.classList.contains('shift');
            if(!!side_pane){
            side_pane.classList.toggle('shift');
            }
            if(shifted){
            sessionStorage.setItem('navShift', true);
            } else {
            sessionStorage.setItem('navShift', false);
            }
        }, false);

        if(topbar){
            window.addEventListener('click', function(e){
            var dropdown = document.querySelectorAll('li.has_submenu.active')[0];
            if (!!dropdown && !dropdown.contains(e.target)){
                dropdown.classList.remove('active');
            }
            });
        }

        /* MOBILE NAV BAR */
        var m_menu = document.getElementById('mobile_menu');
        var m_menu_topbar = document.getElementById('mobile_menu_topbar');
        var m_search_container = document.getElementById('mobile_search_container');
        var m_options_container = document.getElementById('mobile_options_container');

        /* MOBILE MENU TOPBAR */
        if(options.mobile_menu === "topbar"){
          var m_nav_topbar_hamburger = document.getElementById('a__mobile_topbar_toggle');
          m_nav_topbar_hamburger.addEventListener('click', function(){
          m_nav_topbar_hamburger.classList.toggle('flip');
          m_menu_topbar.classList.toggle('show');
          }, false);
        } else {
          /* MOBILE MENU FOOTER */
          var m_nav_arrow = document.getElementById('a__mobile_menu_toggle_arrow');
          m_nav_arrow.addEventListener('click', function(){
          m_nav_arrow.classList.toggle('flip');
          m_menu.classList.toggle('show');
          if(!!m_search_container){
              m_search_container.classList.remove('show');
          }
          if(!!m_options_container){
              m_options_container.classList.remove('show');
          }
          }, false);
        }

        /* MOBILE SEARCH */
            if(options.searching){
            var m_search_button = document.getElementById('mobile_search');

            m_search_button.addEventListener('click', function(){
                m_search_button.classList.toggle('show');
                if(!!m_search_container){
                m_search_container.classList.toggle('show');
                }
                m_menu.classList.remove('show');
                if(!!m_options_container){
                m_options_container.classList.remove('show');
                }
                m_nav_arrow.classList.remove('flip');
            }, false);
            }

        /* MOBILE OPTIONS */
            var m_options_button = document.getElementById('mobile_options');

            if(!!m_options_button){
            m_options_button.addEventListener('click', function(){
                m_options_button.classList.toggle('show');
                m_options_container.classList.toggle('show');
                m_menu.classList.remove('show');
                if(!!m_search_container){
                m_search_container.classList.remove('show');
                }
                m_nav_arrow.classList.remove('flip');
            }, false);
            }
  /* ACTIVE DROPDOWN */
  if(options.type === "sidebar"){
    var dd_menus = document.getElementsByClassName('nav-submenu-link');
    for (var d = 0; d < dd_menus.length; d++) {
        var dd_active = dd_menus[d].classList.contains('active');
            if(dd_active){
                var dd_parent = dd_menus[d].parentElement.parentElement.parentElement;
                dd_parent.classList.add('active');
            }
    };
  };
  if(options.type === "topbar"){
    var dd_menus = document.getElementsByClassName('nav-submenu-link');
    for (var d = 0; d < dd_menus.length; d++) {
        var dd_active = dd_menus[d].classList.contains('active');
            if(dd_active){
                var dd_parent = dd_menus[d].parentElement.parentElement.parentElement;
                dd_parent.classList.add('submenu_active');
            }
    };
  }

};

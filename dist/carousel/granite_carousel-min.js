function granite_carousel(e,t){const n=e.id,s=e.options,c=e.records,a=t;if(!document.getElementById("g__font_stylesheet")){const e=document.head,t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.id="g__font_stylesheet",t.href="https://use.typekit.net/ihq4dbs.css",e.appendChild(t)}const i=document.createElement("div");i.setAttribute("id","g__carousel"),i.setAttribute("class","container");const r=document.createElement("div");r.setAttribute("class","g__active_container"),s.background_color&&r.setAttribute("style",`background-color:${s.background_color}`),c.forEach(function(e,t){const n=document.createElement("div");n.setAttribute("class","g__carousel_item");const s=document.createElement("img");s.setAttribute("src",e.image_url),s.setAttribute("class","w3-animate-right g__carousel_image"),n.append(s),r.append(n),i.append(r)});const l=document.createElement("a");l.setAttribute("class","prev"),l.setAttribute("id","prev"),l.innerHTML="&#10094;";const o=document.createElement("a");o.setAttribute("class","next"),o.setAttribute("id","next"),o.setAttribute("onclick","plusSlides(1)"),o.innerHTML="&#10095;",i.append(l),i.append(o);const d=document.createElement("div");d.setAttribute("class","g__thumbnails_container"),c.forEach(function(e,t){const n=document.createElement("div");n.setAttribute("class","column");const s=document.createElement("img");s.setAttribute("src",e.image_url),s.setAttribute("class","demo cursor thumbnail"),s.setAttribute("alt",e.description),s.setAttribute("data-num",t+1),n.append(s),d.append(n)}),i.append(d),document.getElementById(n).appendChild(i);var u=1;g(u),document.getElementById("prev").addEventListener("click",function(){g(u+=-1)}),document.getElementById("next").addEventListener("click",function(){g(u+=1)});for(var m=document.getElementsByClassName("thumbnail"),p=0;a<m.length;p++)m[p].addEventListener("click",function(){var e=parseInt(this.getAttribute("data-num"));g(u=e)});function g(e){var t,n=parseInt(e);console.log(n);var s=document.getElementsByClassName("g__carousel_item"),c=document.getElementsByClassName("demo");for(n>s.length&&(u=1),n<1&&(u=s.length),n++,t=0;t<s.length;t++)s[t].style.display="none";for(t=0;t<c.length;t++)c[t].className=c[t].className.replace(" active","");s[u-1].style.display="flex",c[u-1].className+=" active",u++}}
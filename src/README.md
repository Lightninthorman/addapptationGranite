# Micro Development

This section of the article goes through the steps you need to follow – and some things you need to consider – when creating a well-structured addapptation Adapter.

We'll be using 'template' as our example micro.

## Basic Micro Function
```js
function granite_template(templateBlock, jsonTheme){
  Micro Code
}
```

## Global Variables
All micros are unique and require different varaibles. That being said we try keeping a few variables consistant across all micros:
```js
const id = jsonTemplate.id;
const o = jsonTemplate.options;
const r = jsonTemplate.records;
const t = jsonTheme
```
## Block Level CSS in JS
```js
var templateCss = document.createElement('style');
templateCss.innerHTML = `
.g__micro_wrapper{
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
.g__micro_wrapper[mode="midnight"]{
    --primary: 212, 70, 151;
    --background: #101010;
    --bottom-background: #ffffff;
    --font-color: #ffffff;
    --header-color: #ffffff;
    --description-color: #ffffff;
}
.g__micro_container{
    padding: 50px;
    margin: 15px;
    border: 2px solid #b4b4b4;
    background:var(--background);
}
.g__micro_header{
    color:var(--header-color);
    font-family: var(--font-regular);
    font-weight: 300;
}
`
document.head.appendChild(templateCss);
```
## Layout Case Block with Felxbox
```js
switch (o.layout){
      case "left":
        var content_layout = "row";
        var content_align = "flex-start";
        var desc_align = "left";
      break;
      case "right":
        var content_layout = "row-reverse";
        var content_align = "flex-end";
        var desc_align = "left";
      break;
      default:
        var content_layout = "column";
        var content_align = "center";
        var desc_align = "center";
      break;
    }
```
## Wrapper
```js
/*---------------------------------------------
Wrapper
---------------------------------------------*/
const template_wrapper = document.createElement('div');
template_wrapper.setAttribute('id', "granite-123");
template_wrapper.setAttribute('class','g__micro_wrapper');
template_wrapper.setAttribute('mode', t.mode);
```
## Append micro to the DOM
```js
document.getElementById(id).appendChild(template_wrapper);
```

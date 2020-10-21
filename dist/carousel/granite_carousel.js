function granite_carousel(jsonCarousel, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonCarousel.id;
  const o = jsonCarousel.options;
  const r = jsonCarousel.records;
  const t = jsonTheme;
  const cssId = "#" + id;
  /*---------------------------------------------
  Add Font Family To Header
  ---------------------------------------------*/

  const font_include = document.getElementById('g__font_stylesheet');

  if (!font_include) {
    const head = document.head;
    const fontLink = document.createElement("link");
    fontLink.type = "text/css";
    fontLink.rel = "stylesheet";
    fontLink.id = "g__font_stylesheet";
    fontLink.href = "https://use.typekit.net/ihq4dbs.css";
    head.appendChild(fontLink);
  }
  /*---------------------------------------------
  Main Wrapper
  ---------------------------------------------*/


  const carousel_wrapper = document.createElement('div');
  carousel_wrapper.setAttribute('id', "g__carousel");
  carousel_wrapper.setAttribute('class', 'container');
  /*---------------------------------------------
  Full-width images
  ---------------------------------------------*/

  const active_container = document.createElement('div');
  active_container.setAttribute('class', 'g__active_container');

  if (!!o.background_color) {
    active_container.setAttribute('style', `background-color:${o.background_color}`);
  }

  r.forEach(function (r, val) {
    const slide_container = document.createElement('div');
    slide_container.setAttribute('class', 'g__carousel_item');
    const slide_image = document.createElement('img');
    slide_image.setAttribute('src', r.image_url);
    slide_image.setAttribute('class', "w3-animate-right g__carousel_image");
    slide_container.append(slide_image);
    active_container.append(slide_container);
    carousel_wrapper.append(active_container);
  });
  /*---------------------------------------------
  Next and previous buttons
  ---------------------------------------------*/

  const prev_btn = document.createElement('a');
  prev_btn.setAttribute('class', 'prev');
  prev_btn.setAttribute('id', 'prev');
  prev_btn.innerHTML = "&#10094;";
  const next_btn = document.createElement('a');
  next_btn.setAttribute('class', 'next');
  next_btn.setAttribute('id', 'next');
  next_btn.setAttribute('onclick', 'plusSlides(1)');
  next_btn.innerHTML = "&#10095;";
  carousel_wrapper.append(prev_btn);
  carousel_wrapper.append(next_btn);
  /*---------------------------------------------
  Thumbnail images
  ---------------------------------------------*/

  const carousel_thumbnails = document.createElement('div');
  carousel_thumbnails.setAttribute('class', 'g__thumbnails_container');
  r.forEach(function (r, val) {
    const thumbnail_container = document.createElement('div');
    thumbnail_container.setAttribute('class', 'column');
    const thumbnail_image = document.createElement('img');
    thumbnail_image.setAttribute('src', r.image_url);
    thumbnail_image.setAttribute('class', "demo cursor thumbnail");
    thumbnail_image.setAttribute('alt', r.description);
    thumbnail_image.setAttribute('data-num', val + 1);
    thumbnail_container.append(thumbnail_image);
    carousel_thumbnails.append(thumbnail_container);
  });
  carousel_wrapper.append(carousel_thumbnails);
  /*---------------------------------------------
  Append Hero
  ---------------------------------------------*/

  document.getElementById(id).appendChild(carousel_wrapper);
  var slideIndex = 1;
  showSlides(slideIndex); // Next/previous controls

  var prev = document.getElementById('prev');
  prev.addEventListener('click', function () {
    var n = -1;
    showSlides(slideIndex += n);
  });
  var prev = document.getElementById('next');
  prev.addEventListener('click', function () {
    var n = 1;
    showSlides(slideIndex += n);
  }); // Thumbnail image controls

  var thumbnails = document.getElementsByClassName('thumbnail');

  for (var th = 0; t < thumbnails.length; th++) {
    thumbnails[th].addEventListener('click', function () {
      var n = parseInt(this.getAttribute('data-num'));
      showSlides(slideIndex = n);
    });
  }

  function showSlides(n) {
    var num = parseInt(n);
    var i;
    console.log(num);
    var slides = document.getElementsByClassName("g__carousel_item");
    var dots = document.getElementsByClassName("demo");

    if (num > slides.length) {
      slideIndex = 1;
    }

    if (num < 1) {
      slideIndex = slides.length;
    }

    num++;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    slideIndex++; // setTimeout(showSlides, 8000);
  }
}
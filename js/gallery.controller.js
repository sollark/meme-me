'use strict';

const gImages = [];
let gInterval = null;
// let isCheckEnabled = true;
// let isCheckFinished = false;

_loadImages();

function renderImageGallery() {
  const elContainer = document.querySelector('.images-container');
  const images = gImages;

  // console.log('images:', images);
  // console.log('elContainer:', elContainer);
  const strHtmls = images.map((img) => {
    // console.log('img:', img);
    return `<div class="image-wrapper"><img src='${img.src}' alt='Image' onclick="onStartEdit('${img.src}')"></img></div>\n`;
  });

  elContainer.innerHTML = strHtmls.join('');
}

let isCheckEnabled = true;
let isFinishCheck = false;

let img;
let i = 1;

function _loadImages() {
  gInterval = setInterval(loadImage, 1);
}

function loadImage() {
  if (isFinishCheck) {
    clearInterval(gInterval);
    // alert('Loaded ' + i + ' image(s)!)');
    return;
  }

  if (isCheckEnabled) {
    isCheckEnabled = false;

    img = new Image();
    img.onload = addImage;
    img.onerror = stopLoad;
    img.src = `assets/images/${i}.jpg`;
  }
}

function addImage() {
  gImages.push(img);
  i++;
  isCheckEnabled = true;
  // console.log('gImages:', gImages);
}

function stopLoad() {
  isFinishCheck = true;
  renderImageGallery();
}

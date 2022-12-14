'use strict';

const gImages = [];
let gInterval = null;
// let isCheckEnabled = true;
// let isCheckFinished = false;

_loadImages();

function renderImageGallery() {
  const elContainer = document.querySelector('.images-container');
  const images = gImages;

  console.log('images:', images);
  console.log('elContainer:', elContainer);
  const strHtmls = images.map((img) => {
    return `<div class="image-wrapper"> <img src='${img.src}' alt='' srcset=''></img></div>\n`;
  });

  elContainer.innerHTML = strHtmls.join('');
}

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var i = 1;

function _loadImages() {
  gInterval = setInterval(loadImage, 1);
}

function loadImage() {
  if (bFinishCheck) {
    clearInterval(gInterval);
    // alert('Loaded ' + i + ' image(s)!)');
    return;
  }

  if (bCheckEnabled) {
    bCheckEnabled = false;

    img = new Image();
    img.onload = fExists;
    img.onerror = fDoesntExist;
    img.src = `assets/images/${i}.jpg`;
  }
}

function fExists() {
  gImages.push(img);
  i++;
  bCheckEnabled = true;
  // console.log('gImages:', gImages);
}

function fDoesntExist() {
  bFinishCheck = true;
  renderImageGallery();
}

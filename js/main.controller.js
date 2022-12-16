'use strict';

function onInit() {
  console.log('inInit');
  // loadCustomFonts();
  //load fonts
  _loadImages();
}

function onGallery() {
  const elBody = document.querySelector('body');
  elBody.dataset.view = 'gallery';
}

function onMeme() {
  const elBody = document.querySelector('body');
  elBody.dataset.view = 'editor';
}

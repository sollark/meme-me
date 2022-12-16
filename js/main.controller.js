'use strict';

function onInit() {
  console.log('inInit');

  if (gCurrImage) {
    //   const elEditor = document.querySelector('.editor');
    //   elEditor.classList.add('active');

    onMeme();
  }
  // loadCustomFonts();
  //load fonts
  loadImages();
  initEditor();
}

function onGallery() {
  const elBody = document.querySelector('body');
  elBody.dataset.view = 'gallery';
}

function onMeme() {
  const elBody = document.querySelector('body');
  elBody.dataset.view = 'editor';

  // if (gCurrImage) {
  //   const elEditor = document.querySelector('.editor');
  //   elEditor.classList.add('active');
  // }
}

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
  renderMemeGallery();
  initEditor();

  addListeners();
}

function onGallery() {
  const elBody = document.querySelector('body');
  elBody.dataset.view = 'gallery';

  renderImageGallery();
}

function onMeme() {
  const elBody = document.querySelector('body');
  elBody.dataset.view = 'memes';
}

//Handle the listeners
function addListeners() {
  setCursor('grab');

  gElCanvas.addEventListener('mousemove', onMove);
  gElCanvas.addEventListener('mousedown', onDown);
  gElCanvas.addEventListener('mouseup', onUp);
  gElCanvas.addEventListener('touchmove', onMove);
  gElCanvas.addEventListener('touchstart', onDown);
  gElCanvas.addEventListener('touchend', onUp);
}

function setCursor(type) {
  gElCanvas = document.querySelector('.canvas');

  gElCanvas.style.cursor = type;
  // gElCanvas.style.cursor = 'grab';
}

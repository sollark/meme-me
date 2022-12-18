'use strict';

function onInit() {
  console.log('inInit');

  if (gCurrImage) {
    onMeme();
  }

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
  setView('memes');
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
}

function setView(view) {
  const elBody = document.querySelector('body');
  switch (view) {
    case 'editor':
      elBody.dataset.view = 'editor';
      break;
    case 'gallery':
      elBody.dataset.view = 'gallery';
      break;
    case 'memes':
      elBody.dataset.view = 'memes';
      break;
  }
}

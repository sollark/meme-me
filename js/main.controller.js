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

window.onresize = () => {
  document.body.classList.remove('menu-open');
};

function onGallery() {
  setView('gallery');
  document.body.classList.remove('menu-open');

  renderImageGallery();
}

function onMeme() {
  setView('memes');
  document.body.classList.remove('menu-open');
}

function onToggleMobileMenu() {
  document.body.classList.toggle('menu-open');
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

function onKeyUp(ev) {
  if (ev.key === 'Enter') {
    ev.target.blur();
    console.log(ev.target);
  }
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

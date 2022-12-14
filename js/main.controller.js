'use strict';

function onInit() {
  console.log('inInit');
  // loadCustomFonts();
  //load fonts
}

function onStartEdit(image) {
  const elGallery = document.querySelector('.gallery');
  const elEditor = document.querySelector('.editor');

  elGallery.classList.toggle('hidden');
  elEditor.classList.toggle('hidden');

  startEdit(image);
}

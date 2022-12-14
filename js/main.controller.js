'use strict';

function onInit() {}

function onStartEdit(image) {
  const elGallery = document.querySelector('.gallery');
  const elEditor = document.querySelector('.editor');

  elGallery.classList.toggle('hidden');
  elEditor.classList.toggle('hidden');

  startEdit(image);
}

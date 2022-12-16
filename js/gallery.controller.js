'use strict';

const gImages = [];

function renderImageGallery() {
  const elContainer = document.querySelector('.images-container');
  const images = gImages;

  const strHtmls = images.map((img) => {
    return `<div class="image-wrapper"><img src='${img.src}' alt='Image' onclick="onStartEdit('${img.id}')"></img></div>\n`;
  });

  elContainer.innerHTML = strHtmls.join('');
}

function loadImages() {
  const images = getImages();

  images.forEach((image) => {
    const img = new Image();
    img.onload = addImage(img);
    img.onerror = stopLoad;
    img.src = image.url;
    img.id = image.id;
  });

  renderImageGallery();
}

function addImage(image) {
  gImages.push(image);
}

function stopLoad() {
  console.log('error loading images');
}

function onStartEdit(imageId) {
  const elBody = document.querySelector('body');
  elBody.dataset.view = 'editor';

  const image = gImages.find((img) => img.id === imageId);

  startEdit(image);
}

'use strict';

const gImages = [];

function renderImageGallery() {
  const elContainer = document.querySelector('.images-container');
  const images = gImages;
  console.log('images:', images);

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

function loadUserImage(file) {
  const FR = new FileReader();

  FR.addEventListener('load', (ev) => {
    const img = new Image();

    img.onload = () => {
      addImage(img);
      renderImageGallery();
    };
    img.onerror = stopLoad;
    img.src = ev.target.result;
    img.id = -1;
  });
  FR.readAsDataURL(file);
}

function addImage(image) {
  gImages.unshift(image);
}

function stopLoad() {
  console.log('error loading images');
}

// TODO  DUPLICATED CODE
function onStartEdit(imageId) {
  const elBody = document.querySelector('body');
  elBody.dataset.view = 'editor';

  createNewMeme(imageId);

  startEdit();
}

function onFileUpload(el) {
  if (!el.files || !el.files[0]) return;

  // const elBody = document.querySelector('body');
  // elBody.dataset.view = 'editor';

  createNewMeme();
  loadUserImage(el.files[0]);
}

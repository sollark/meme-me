'use strict';

let gCurrImage = `assets/images/1.jpg`;

let gElCanvas;
let gCtx;

_initEditor();

async function _initEditor() {
  const elContainer = document.querySelector('.image-container');
  gElCanvas = document.querySelector('.canvas');
  gCtx = gElCanvas.getContext('2d');

  window.addEventListener('resize', () => {
    resizeCanvas();
  });

  await loadCustomFonts();

  resizeCanvas();
  // drawImage();
}

function startEdit(img) {
  //   const elContainer = document.querySelector('.image-container');
  //   elContainer.innerHTML = `<img src='${img}' alt='Image'></img>`;
}

function resizeCanvas() {
  let heightRatio = 1;
  gElCanvas.height = gElCanvas.width * heightRatio;

  gCtx.fillStyle = '#008000';
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height);

  delayOn(drawImage);
}

const drawImage = () => {
  const lines = getLines();
  const elImg = new Image();
  elImg.src = gCurrImage;

  elImg.onload = () => {
    const { width, height } = fitImage(elImg);
    gElCanvas.width = width;
    gElCanvas.height = height;

    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);

    // draw all lines
    lines.forEach((line, idx) => {
      drawText(line, idx);
    });

    //set options controls according to text settings
    initControls();
  };
};

function drawText(line, idx) {
  applyTextOptions(idx);
  const { text, posX, posY } = line;

  gCtx.fillText(text, posX, posY);
  gCtx.strokeText(text, posX, posY);
}

function onTextChange() {
  const elLine = document.querySelector('.input-line');
  setText(elLine.value);

  drawImage();
}

function fitImage(image) {
  const elContainer = document.querySelector('.image-container');
  const maxWidth = elContainer.width;
  const maxHeight = elContainer.height;

  let width = image.width;
  let height = image.height;

  if (width > height) {
    if (width > maxWidth) {
      height *= maxWidth / width;
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width *= maxHeight / height;
      height = maxHeight;
    }
  }

  return { width, height };
}

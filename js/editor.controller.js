'use strict';

let gCurrImage = null;

let gElCanvas;
let gCtx;

async function initEditor() {
  gElCanvas = document.querySelector('.canvas');
  gCtx = gElCanvas.getContext('2d');

  window.addEventListener('resize', () => {
    resizeCanvas();
  });

  await loadCustomFonts();

  resizeCanvas();
}

function startEdit(img) {
  gCurrImage = img;

  if (gCurrImage) {
    const elEditor = document.querySelector('.editor');
    elEditor.classList.add('active');
  }

  drawImage();
}

function resizeCanvas() {
  let heightRatio = 1;
  gElCanvas.height = gElCanvas.width * heightRatio;

  gCtx.fillStyle = '#008000';
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height);

  delayOn(drawImage);
}

const drawImage = () => {
  if (!gCurrImage) return;
  const lines = getLines();

  const { width, height } = fitImage(gCurrImage);
  gElCanvas.width = width;
  gElCanvas.height = height;

  gCtx.drawImage(gCurrImage, 0, 0, gElCanvas.width, gElCanvas.height);

  // draw all lines
  lines.forEach((line, idx) => {
    drawText(line, idx);
  });

  //set options controls according to text settings
  initControls();
};

function drawText(line, idx) {
  applyTextOptions(idx);
  const { text, posX, posY } = line;

  const textPosX = gElCanvas.width * posX;
  const textPosY = gElCanvas.height * posY;

  gCtx.fillText(text, textPosX, textPosY);
  gCtx.strokeText(text, textPosX, textPosY);
}

// TODO text align
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

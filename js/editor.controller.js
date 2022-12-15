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
  const elContainer = document.querySelector('.image-container');
  gElCanvas.width = elContainer.offsetWidth;

  delayOn(drawImage);
  // drawImage();
}

const drawImage = () => {
  const lines = getLines();
  const elImg = new Image();
  elImg.src = gCurrImage;

  elImg.onload = () => {
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

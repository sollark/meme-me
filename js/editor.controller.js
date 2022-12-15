'use strict';

let gCurrImage = `assets/images/1.jpg`;

let gElCanvas;
let gCtx;

_initEditor();

async function _initEditor() {
  const elContainer = document.querySelector('.image-container');
  gElCanvas = document.querySelector('.canvas');
  gCtx = gElCanvas.getContext('2d');

  resizeCanvas();

  window.addEventListener('resize', () => {
    resizeCanvas();
  });

  await loadCustomFonts();

  drawImage();
}

function startEdit(img) {
  //   const elContainer = document.querySelector('.image-container');
  //   elContainer.innerHTML = `<img src='${img}' alt='Image'></img>`;
}

function resizeCanvas() {
  const elContainer = document.querySelector('.image-container');
  gElCanvas.width = elContainer.offsetWidth;
}

function drawImage() {
  const meme = getMeme();
  const elImg = new Image();
  elImg.src = gCurrImage;

  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);

    // save currLine
    const currLine = getLineIdx();

    // draw all lines
    meme.lines.forEach((line, idx) => {
      focusOnLine(idx);
      drawText(line.text, line.posX, line.posY);
    });

    // restore line
    focusOnLine(currLine);

    //set options controls according to text settings
    initControls();
  };
}

function drawText(text, x, y) {
  applyTextOptions();

  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}

function onTextChange() {
  const elLine = document.querySelector('.input-line');
  setText(elLine.value);

  drawImage();
}

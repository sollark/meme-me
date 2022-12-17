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

function resizeCanvas() {
  let heightRatio = 1;
  gElCanvas.height = gElCanvas.width * heightRatio;

  gCtx.fillStyle = '#008000';
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height);

  delayOn(drawImage);
}

function startEdit() {
  const image = gImages.find((img) => img.id === getCurrImageId());

  gCurrImage = image;

  if (gCurrImage) {
    const elEditor = document.querySelector('.editor');
    elEditor.classList.add('active');
  }

  drawImage();
}

const drawImage = () => {
  if (!gCurrImage) return;

  const { width, height } = fitImage(gCurrImage);
  gElCanvas.width = width;
  gElCanvas.height = height;

  gCtx.drawImage(gCurrImage, 0, 0, gElCanvas.width, gElCanvas.height);

  // draw  lines
  const meme = getMeme();
  const lines = meme.lines;
  const selectedLine = meme.selectedLineIdx;

  lines.forEach((line, idx) => {
    const isSelected = idx === selectedLine;
    drawText(width, line, idx, isSelected);
  });

  //set options controls according to text settings
  initControls();
};

function drawText(width, line, idx, isSelected) {
  applyTextOptions(idx);

  const { text, posX, posY, textAlign, fontSize } = line;

  // set x for new line
  if (posX === 0) {
    const textPosX =
      textAlign === 'center'
        ? width / 2
        : textAlign === 'start'
        ? 20
        : width - 20;
    line.posX = textPosX;
  }

  // set y for new line
  if (posY === 0) {
    if (idx === 0) line.posY = gElCanvas.height * 0.2;
    else if (idx === 1) line.posY = gElCanvas.height * 0.85;
    else line.posY = gElCanvas.height * 0.5;
  }

  gCtx.fillText(text, line.posX, line.posY);
  gCtx.strokeText(text, line.posX, line.posY);

  // draw focus box on line if selected
  if (isSelected) {
    gCtx.save();

    //TODO handle text align
    gCtx.beginPath();
    gCtx.strokeStyle = 'red';
    gCtx.strokeRect(
      line.posX,
      line.posY - fontSize,
      gCtx.measureText(text).width,
      fontSize
    );

    gCtx.restore();
  }
}

// TODO text align
function onTextChange() {
  const elLine = document.querySelector('.input-line');
  editLineText(elLine.value);

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

function onSave() {
  var canvasImageData = gElCanvas.toDataURL('image/jpeg', 1.0);

  saveMeme(canvasImageData);
  renderMemeGallery();
}

// line tools
function onSwitchLine() {
  const elInputLine = document.querySelector('.input-line');
  elInputLine.focus();

  focusOnLNextine();

  drawImage();
}

function onAddLine() {
  const elInputLine = document.querySelector('.input-line');
  elInputLine.focus();

  addNewLine();

  drawImage();
}

function onDeleteLine() {
  deleteLine();
  focusOnLNextine();

  drawImage();
}

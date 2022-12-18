'use strict';

let gCurrImage = null;

let gElCanvas;
let gCtx;
let gNoFocus = false;

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
  const currImgId = getCurrImageId();

  gCurrImage = gImages.find((img) => {
    return img.id === currImgId;
  });

  // if (gCurrImage) {
  //   const elEditor = document.querySelector('.editor');
  //   elEditor.classList.add('active');
  // }

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

  const { posX, posY, textAlign, fontSize } = line;
  let text = line.text;

  // set x for new line
  if (posX === 0) {
    line.posX =
      textAlign === 'center'
        ? width / 2
        : textAlign === 'start'
        ? 20
        : width - 20;
  }

  // set posY for new line
  if (posY === 0) {
    if (idx === 0) line.posY = gElCanvas.height * 0.2;
    else if (idx === 1) line.posY = gElCanvas.height * 0.85;
    else line.posY = gElCanvas.height * 0.5;
  }

  // dummy text if line line eampty
  if (text === '') {
    if (idx === 0) text = 'TOP LINE';
    else if (idx === 1) text = 'BOTTOM LINE';
    else text = 'NEW LINE';
  }

  gCtx.fillText(line.text, line.posX, line.posY);
  gCtx.strokeText(line.text, line.posX, line.posY);

  // draw focus box on line if selected
  if (isSelected && !gNoFocus) {
    gCtx.save();

    // handle text align
    const borderColor = 'white';
    if (textAlign === 'start') {
      gCtx.strokeStyle = borderColor;
      gCtx.strokeRect(
        line.posX - 5,
        line.posY - fontSize - 5,
        gCtx.measureText(text).width + 10,
        +fontSize + 20
      );
    } else if (textAlign === 'center') {
      const halfLine = gCtx.measureText(text).width / 2;
      gCtx.beginPath();
      gCtx.strokeStyle = borderColor;
      gCtx.strokeRect(
        line.posX - halfLine,
        line.posY - fontSize,
        gCtx.measureText(text).width + 5,
        +fontSize + 20
      );
    } else if (textAlign === 'end') {
      gCtx.beginPath();
      gCtx.strokeStyle = borderColor;
      gCtx.strokeRect(
        line.posX - gCtx.measureText(text).width - 5,
        line.posY - fontSize,
        gCtx.measureText(text).width + 5,
        +fontSize + 20
      );
    }

    gCtx.restore();
  }
}

function onTextChange() {
  const elLine = document.querySelector('.input-line');
  editLineText(elLine.value);

  drawImage();
}

function onTextChangeMobile() {
  const elLine = document.querySelector('.input-line-mobile');
  editLineText(elLine.value);

  drawImage();
}

function onEditTextMobile() {
  const input = document.querySelector('.input-line-mobile');
  input.focus();

  focusOnLNextine();

  drawImage();
}

function fitImage(image) {
  const elContainer = document.querySelector('.canvas-container');
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
  gNoFocus = true;
  drawImage();

  var canvasImageData = gElCanvas.toDataURL('image/jpeg', 1.0);

  saveMeme(canvasImageData);
  renderMemeGallery();

  gNoFocus = false;
}

function onDownloadImage() {
  gNoFocus = true;
  drawImage();

  var image = gElCanvas
    .toDataURL('image/jpeg')
    .replace('image/jpeg', 'image/octet-stream');

  window.location.href = image;

  gNoFocus = false;
}

function onShare() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg');

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    // Encode the instance of certain characters in the url
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`
    );
  }
  // Send the image to the server
  doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
  // Pack the image for delivery
  const formData = new FormData();
  formData.append('img', imgDataUrl);
  console.log('formData:', formData);
  // Send a post req with the image to the server
  fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
    .then((res) => res.text())
    .then((url) => {
      console.log('url:', url);
      onSuccess(url);
    });
}

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

'use strict';

function applyTextOptions(idx) {
  const line = getLine(idx);

  gCtx.lineWidth = line.lineWidth;
  gCtx.strokeStyle = line.strokeStyle;
  gCtx.fillStyle = line.fillStyle;
  gCtx.font = `${line.fontSize}px ${line.fontFamily}`;
  gCtx.textAlign = line.textAlign;
}

function onTextOption(el) {
  const line = getLine();

  line[el.getAttribute('data-option')] = el.value;

  drawImage();
}

function onFontSizeUp() {
  const line = getLine();
  line.fontSize = '' + (+line.fontSize + 3);
  drawImage();
}

function onFontSizeDown() {
  const line = getLine();
  line.fontSize = '' + (+line.fontSize - 3);

  drawImage();
}

function onTextAlign(el) {
  const line = getLine();
  line.textAlign = el.getAttribute('data-value');

  line.posX =
    line.textAlign === 'center'
      ? gElCanvas.width / 2
      : line.textAlign === 'start'
      ? 20
      : gElCanvas.width - 20;

  drawImage();
}

function initControls() {
  const line = getLine();

  // desktop input
  const elInputLine = document.querySelector('.input-line');
  elInputLine.value = line.text;

  // remove placeholder
  if (
    elInputLine.value === 'TOP LINE' ||
    elInputLine.value === 'BOTTOM LINE' ||
    elInputLine.value === 'NEW LINE'
  ) {
    line.text = '';
    elInputLine.value = '';
  }

  // mobile input
  const elInputLineMobile = document.querySelector('.input-line-mobile');
  elInputLineMobile.value = line.text;
  // remove placeholder
  if (
    elInputLineMobile.value === 'TOP LINE' ||
    elInputLineMobile.value === 'BOTTOM LINE' ||
    elInputLineMobile.value === 'NEW LINE'
  ) {
    line.text = '';
    elInputLineMobile.value = '';
  }

  const elStrokeColor = document.querySelector('.stroke-color');
  elStrokeColor.value = line.strokeStyle;

  const elFontColor = document.querySelector('.font-color');
  elFontColor.value = line.fillStyle;

  const elFontFamily = document.querySelector('.select-font');
  elFontFamily.value = line.fontFamily;

  const btnsTextAlign = document.querySelectorAll('[data-option="textAlign"]');
  btnsTextAlign.forEach((button) => {
    if (button.dataset.value === line.textAlign) button.classList.add('active');
    else button.classList.remove('active');
  });
}

function onFontSelect(el) {
  const line = getLine();
  line.fontFamily = el.value;

  drawImage();
}

'use strict';

function applyTextOptions() {
  const line = getLine();

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
  // line[el.getAttribute('data-option')] = el.getAttribute('data-value');

  drawImage();
}

function initControls() {
  console.log('iniControl');
  const line = getLine();

  //  gCtx.lineWidth = line.lineWidth;
  const elStrokeColor = document.querySelector('.stroke-color');
  elStrokeColor = line.strokeStyle;

  // gCtx.fillStyle = line.fillStyle;
  //  gCtx.font = `${line.fontSize}px ${line.fontFamily}`;
  //  gCtx.textAlign = line.textAlign;
}

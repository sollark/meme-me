'use strict';

const gTextOptions = {
  lineWidth: 2,
  strokeStyle: 'black',
  fillStyle: 'white',
  fontSize: '40',
  fontFamily: 'Impact',
  textAlign: 'center',
  textBaseLine: 'middle',
};

function applyTextOptions() {
  gCtx.lineWidth = gTextOptions.lineWidth;
  gCtx.strokeStyle = gTextOptions.strokeStyle;
  gCtx.fillStyle = gTextOptions.fillStyle;
  gCtx.font = gTextOptions.fontSize + 'px ' + gTextOptions.fontFamily;
  gCtx.textAlign = gTextOptions.textAlign;
  gCtx.textBaseLine = gTextOptions.textBaseLine;
}
function onTextOption(el) {
  gTextOptions[el.getAttribute('data-option')] = el.value;

  drawImage();
}

function onFontSizeUp() {
  gTextOptions.fontSize = '' + (+gTextOptions.fontSize + 3);

  drawImage();
}

function onFontSizeDown() {
  gTextOptions.fontSize = '' + (+gTextOptions.fontSize - 3);

  drawImage();
}

function onTextAlign(el) {
  gTextOptions[el.getAttribute('data-option')] = el.getAttribute('data-value');

  drawImage();
}

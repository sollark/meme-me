'use strict';

const gCtxSettings = {
  lineWidth: 2,
  strokeStyle: 'black',
  fillStyle: 'white',
  fontSize: '40',
  fontFamily: 'Impact',
  textAlign: 'center',
  textBaseLine: 'middle',
};

function applyCtxSettings() {
  gCtx.lineWidth = gCtxSettings.lineWidth;
  gCtx.strokeStyle = gCtxSettings.strokeStyle;
  gCtx.fillStyle = gCtxSettings.fillStyle;
  gCtx.font = gCtxSettings.fontSize + 'px ' + gCtxSettings.fontFamily;
  gCtx.textAlign = gCtxSettings.textAlign;
  gCtx.textBaseLine = gCtxSettings.textBaseLine;
}

function onLineChange() {
  const elLine = document.querySelector('.input-line');
  setText(elLine.value);

  drawImage();
}

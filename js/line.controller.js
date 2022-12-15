'use strict';

//TODO need?
let gLineCounter = 2;

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
  updateLineCounter();

  drawImage();
}

function onDeleteLine() {
  deleteLine();
  updateLineCounter();

  drawImage();
}

function updateLineCounter() {
  gLineCounter = getLineCounter();
}

'use strict';

//TODO need?
let gLineCounter = 2;

function onSwitchLine() {
  focusOnLNextine();
}

function onAddLine() {
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

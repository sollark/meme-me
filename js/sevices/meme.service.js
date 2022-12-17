'use strict';

// TODO posX
const gDefaultMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      isDrag: false,
      lineWidth: 2,
      text: 'TOP LINE',
      fontSize: '40',
      fontFamily: 'Impact',
      textAlign: 'start',
      strokeStyle: '#ffffff',
      fillStyle: '#000000',
      posX: 0,
      posY: 0,
    },
    {
      isDrag: false,
      lineWidth: 2,
      text: 'BOTTOM LINE',
      fontSize: '40',
      fontFamily: 'Impact',
      textAlign: 'start',
      strokeStyle: '#ffffff',
      fillStyle: '#000000',
      posX: 0,
      posY: 0,
    },
  ],
};

let gCurrMeme = null;

function createNewMeme(imgId) {
  // console.log('gCurrImage:', gCurrImage);
  gCurrMeme = gDefaultMeme;
  gCurrMeme.selectedImgId = imgId;
}

//TODO check if can be replaces with getLine
function getMeme() {
  return gCurrMeme;
}

function setSavedMeme(meme) {
  // console.log(' in service i restore meme:', meme);
  gCurrMeme = meme;
}

//TODO handel -1 case of user image
function getCurrImageId() {
  return gCurrMeme.selectedImgId;
}

function getLine(idx = gCurrMeme.selectedLineIdx) {
  return gCurrMeme.lines[idx];
}

function getLines() {
  return gCurrMeme.lines;
}

function getLineIdx() {
  return gCurrMeme.selectedLineIdx;
}

function addNewLine() {
  gCurrMeme.lines.push({
    lineWidth: 2,
    text: 'NEW LINE',
    strokeStyle: '#ffffff',
    fillStyle: '#000000',
    fontSize: '40',
    fontFamily: 'Impact',
    textAlign: 'left',
    posX: 0,
    posY: 0,
  });

  gCurrMeme.selectedLineIdx = gCurrMeme.lines.length - 1;
}

function deleteLine() {
  if (gCurrMeme.lines.length === 1) {
    console.log('cannot delete last line');
    return;
  }

  gCurrMeme.lines.splice(gCurrMeme.selectedLineIdx--, 1);
}

function moveLine(dx, dy) {
  const line = getLine();
  line.posX += dx;
  line.posY += dy;
}

function editLineText(text) {
  gCurrMeme.lines[gCurrMeme.selectedLineIdx].text = text;
}

function selectImage(id) {
  gCurrMeme.selectedImgId = id;
  gCurrMeme.selectedLineIdx = 0;
  gCurrMeme.lines = [];
}

function focusOnLine(lineIdx) {
  gCurrMeme.selectedLineIdx = lineIdx;
}

function focusOnLNextine() {
  // gCurrMeme.selectedLineIdx = ++gCurrMeme.selectedLineIdx % getLineCounter();
  gCurrMeme.selectedLineIdx =
    ++gCurrMeme.selectedLineIdx % gCurrMeme.lines.length;
}

function updateTextOption(lineId, option) {
  if (gCurrMeme.lines[lineId]) {
    const entries = Object.entries(option);
    gCurrMeme.lines[lineId][entries[0][0]] = entries[0][1];
  } else console.log('lines[lineId] is undefined', option);
}

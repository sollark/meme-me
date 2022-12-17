'use strict';

const gDefaultMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      lineWidth: 2,
      text: 'TOP LINE',
      fontSize: '40',
      fontFamily: 'Impact',
      textAlign: 'center',
      strokeStyle: '#ffffff',
      fillStyle: '#000000',
      posX: 0.5,
      posY: 0.2,
    },
    {
      lineWidth: 2,
      text: 'BOTTOM LINE',
      fontSize: '40',
      fontFamily: 'Impact',
      textAlign: 'center',
      strokeStyle: '#ffffff',
      fillStyle: '#000000',
      posX: 0.5,
      posY: 0.85,
    },
  ],
};

let gCurrMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      lineWidth: 2,
      text: 'TOP LINE',
      fontSize: '40',
      fontFamily: 'Impact',
      textAlign: 'center',
      strokeStyle: '#ffffff',
      fillStyle: '#000000',
      posX: 0.5,
      posY: 0.2,
    },
    {
      lineWidth: 2,
      text: 'BOTTOM LINE',
      fontSize: '40',
      fontFamily: 'Impact',
      textAlign: 'center',
      strokeStyle: '#ffffff',
      fillStyle: '#000000',
      posX: 0.5,
      posY: 0.85,
    },
  ],
};

function createNewMeme(imgId = -1) {
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

// function getLineCounter() {
//   return gCurrMeme.lines.length;
// }

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
    textAlign: 'center',
    posX: 0.5,
    posY: 0.5,
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

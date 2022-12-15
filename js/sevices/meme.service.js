'use strict';

let gKeyWordsSearchCountMap = { funny: 12, cat: 16, baby: 2 };

let gImg = [{ id: 1, url: 'assets/image/1.jpg', keywords: ['funny', 'cat'] }];

let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      lineWidth: 2,
      text: 'Top Line',
      fontSize: '40',
      fontFamily: 'Impact',
      align: 'center',
      strokeStyle: 'black',
      fillStyle: 'white',
      posX: 200,
      posY: 100,
    },
    {
      lineWidth: 2,
      text: 'Bottom Line',
      fontSize: '40',
      fontFamily: 'Impact',
      align: 'center',
      strokeStyle: 'black',
      fillStyle: 'white',
      posX: 200,
      posY: 550,
    },
  ],
};

//TODO check if can be replaces with getLine
function getMeme() {
  return gMeme;
}

// TODO need?
function getLine() {
  return gMeme.lines[gMeme.selectedLineIdx];
}

function getLines() {
  return gMeme.lines;
}

function getLineCounter() {
  return gMeme.lines.length;
}

function addNewLine() {
  gMeme.lines.push({
    lineWidth: 2,
    text: 'New Line',
    strokeStyle: 'black',
    fillStyle: 'white',
    fontSize: '40',
    fontFamily: 'Impact',
    textAlign: 'center',
    posX: 200,
    posY: 300,
  });

  gMeme.selectedLineIdx = gMeme.lines.length - 1;
}

function deleteLine() {
  if (gMeme.lines.length === 1) {
    console.log('cannot delete last line');
    return;
  }

  gMeme.lines.splice(gMeme.selectedLineIdx--, 1);
}

function getLineIdx() {
  return gMeme.selectedLineIdx;
}

function setText(text) {
  gMeme.lines[gMeme.selectedLineIdx].text = text;
}

function selectImage(id) {
  gMeme.selectedImgId = id;
  gMeme.selectedLineIdx = 0;
  gMeme.lines = [];
}

function focusOnLine(lineIdx) {
  gMeme.selectedLineIdx = lineIdx;
}

function focusOnLNextine() {
  gMeme.selectedLineIdx = ++gMeme.selectedLineIdx % getLineCounter();
}

function updateTextOption(lineId, option) {
  if (gMeme.lines[lineId]) {
    const entries = Object.entries(option);
    gMeme.lines[lineId][entries[0][0]] = entries[0][1];
  } else console.log('lines[lineId] is undefined', option);
}

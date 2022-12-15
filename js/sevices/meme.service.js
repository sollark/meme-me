'use strict';

let gKeyWordsSearchCountMap = { funny: 12, cat: 16, baby: 2 };

let gImg = [{ id: 1, url: 'assets/image/1.jpg', keywords: ['funny', 'cat'] }];

let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      text: 'Top Line',
      fontSize: '40',
      align: 'left',
      strokeStyle: 'red',
      fillStyle: 'red',
      posX: 200,
      posY: 100,
    },
    {
      text: 'Bottom Line',
      fontSize: '40',
      align: 'left',
      strokeStyle: 'red',
      fillStyle: 'red',
      posX: 200,
      posY: 550,
    },
  ],
};

//TODO check if can be replaces with getLine
function getMeme() {
  return gMeme;
}

function getLine() {
  return gMeme.lines[gMeme.selectedLineIdx];
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

function updateTextOption(lineId, option) {
  if (gMeme.lines[lineId]) {
    const entries = Object.entries(option);
    gMeme.lines[lineId][entries[0][0]] = entries[0][1];
  } else console.log('lines[lineId] is undefined', option);
}

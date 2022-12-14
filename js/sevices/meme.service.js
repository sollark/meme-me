'use strict';

let gKeyWordsSearchCountMap = { funny: 12, cat: 16, baby: 2 };

let gImg = [{ id: 1, url: 'assets/image/1.jpg', keywords: ['funny', 'cat'] }];

let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      text: 'I sometimes eat Falafel',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
};

function getMeme() {
  return gMeme;
}

function setText(text) {
  gMeme.lines[0].text = text;
}

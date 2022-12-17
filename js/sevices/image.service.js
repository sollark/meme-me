'use strict';

let gKeyWordsSearchCountMap = { funny: 12, cat: 16, baby: 2 };

let gImg = [
  { id: 1, url: 'assets/images/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'assets/images/2.jpg', keywords: ['funny', 'cat'] },
  { id: 3, url: 'assets/images/3.jpg', keywords: ['funny', 'cat'] },
  { id: 4, url: 'assets/images/4.jpg', keywords: ['funny', 'cat'] },
  { id: 5, url: 'assets/images/5.jpg', keywords: ['funny', 'cat'] },
  { id: 6, url: 'assets/images/6.jpg', keywords: ['funny', 'cat'] },
  { id: 7, url: 'assets/images/7.jpg', keywords: ['funny', 'cat'] },
  { id: 8, url: 'assets/images/8.jpg', keywords: ['funny', 'cat'] },
  { id: 9, url: 'assets/images/9.jpg', keywords: ['funny', 'cat'] },
  { id: 10, url: 'assets/images/10.jpg', keywords: ['funny', 'cat'] },
  { id: 11, url: 'assets/images/11.jpg', keywords: ['funny', 'cat'] },
  { id: 12, url: 'assets/images/12.jpg', keywords: ['funny', 'cat'] },
  { id: 13, url: 'assets/images/13.jpg', keywords: ['funny', 'cat'] },
  { id: 14, url: 'assets/images/14.jpg', keywords: ['funny', 'cat'] },
  { id: 15, url: 'assets/images/15.jpg', keywords: ['funny', 'cat'] },
  { id: 16, url: 'assets/images/16.jpg', keywords: ['funny', 'cat'] },
  { id: 17, url: 'assets/images/17.jpg', keywords: ['funny', 'cat'] },
  { id: 18, url: 'assets/images/18.jpg', keywords: ['funny', 'cat'] },
];

const gCurrImageIdx = 1;

function getImages() {
  return gImg;
}

function setImage(idx) {
  gCurrImageIdx = idx;
}

function getImageUrl() {
  return gImg[gCurrImageIdx].url;
}

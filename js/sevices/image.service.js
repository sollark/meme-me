'use strict';

let gKeyWordsSearchCountMap = { funny: 12, cat: 16, baby: 2 };

let gImg = [
  { id: 1, span: '', url: 'assets/images/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, span: '', url: 'assets/images/2.jpg', keywords: ['funny', 'cat'] },
  { id: 3, span: '', url: 'assets/images/3.jpg', keywords: ['funny', 'cat'] },
  { id: 4, span: '', url: 'assets/images/4.jpg', keywords: ['funny', 'cat'] },
  { id: 5, span: '', url: 'assets/images/5.jpg', keywords: ['funny', 'cat'] },
  { id: 6, span: '', url: 'assets/images/6.jpg', keywords: ['funny', 'cat'] },
  { id: 7, span: '', url: 'assets/images/7.jpg', keywords: ['funny', 'cat'] },
  { id: 8, span: '', url: 'assets/images/8.jpg', keywords: ['funny', 'cat'] },
  { id: 9, span: '', url: 'assets/images/9.jpg', keywords: ['funny', 'cat'] },
  { id: 10, span: '', url: 'assets/images/10.jpg', keywords: ['funny', 'cat'] },
  { id: 11, span: '', url: 'assets/images/11.jpg', keywords: ['funny', 'cat'] },
  { id: 12, span: '', url: 'assets/images/12.jpg', keywords: ['funny', 'cat'] },
  { id: 13, span: '', url: 'assets/images/13.jpg', keywords: ['funny', 'cat'] },
  { id: 14, span: '', url: 'assets/images/14.jpg', keywords: ['funny', 'cat'] },
  { id: 15, span: '', url: 'assets/images/15.jpg', keywords: ['funny', 'cat'] },
  { id: 16, span: '', url: 'assets/images/16.jpg', keywords: ['funny', 'cat'] },
  { id: 17, span: '', url: 'assets/images/17.jpg', keywords: ['funny', 'cat'] },
  { id: 18, span: '', url: 'assets/images/18.jpg', keywords: ['funny', 'cat'] },
  { id: 19, span: '', url: 'assets/images/19.jpg', keywords: ['funny', 'cat'] },
  {
    id: 20,
    span: 'rowSpan colSpan',
    url: 'assets/images/20.png',
    keywords: ['funny', 'cat'],
  },
  { id: 21, span: '', url: 'assets/images/21.jpg', keywords: ['funny', 'cat'] },
  {
    id: 22,
    span: 'rowSpan',
    url: 'assets/images/22.jpg',
    keywords: ['funny', 'cat'],
  },
  { id: 23, span: '', url: 'assets/images/23.jpg', keywords: ['funny', 'cat'] },
  { id: 24, span: '', url: 'assets/images/24.png', keywords: ['funny', 'cat'] },
  {
    id: 25,
    span: 'rowSpan',
    url: 'assets/images/25.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 26,
    span: 'rowSpan colSpan',
    url: 'assets/images/26.jpg',
    keywords: ['funny', 'cat'],
  },
  { id: 27, span: '', url: 'assets/images/27.jpg', keywords: ['funny', 'cat'] },
  { id: 28, span: '', url: 'assets/images/28.jpg', keywords: ['funny', 'cat'] },
  { id: 29, span: '', url: 'assets/images/29.jpg', keywords: ['funny', 'cat'] },
  {
    id: 30,
    span: 'rowSpan',
    url: 'assets/images/30.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 31,
    span: 'rowSpan',
    url: 'assets/images/31.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 32,
    span: 'colSpan',
    url: 'assets/images/32.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 33,
    span: 'colSpan',
    url: 'assets/images/33.jpg',
    keywords: ['funny', 'cat'],
  },
  { id: 34, span: '', url: 'assets/images/34.png', keywords: ['funny', 'cat'] },
  {
    id: 35,
    span: 'colSpan',
    url: 'assets/images/35.jpg',
    keywords: ['funny', 'cat'],
  },
  { id: 36, span: '', url: 'assets/images/36.png', keywords: ['funny', 'cat'] },
  { id: 37, span: '', url: 'assets/images/37.jpg', keywords: ['funny', 'cat'] },
  { id: 38, span: '', url: 'assets/images/38.jpg', keywords: ['funny', 'cat'] },
  { id: 39, span: '', url: 'assets/images/39.jpg', keywords: ['funny', 'cat'] },
  { id: 40, span: '', url: 'assets/images/40.jpg', keywords: ['funny', 'cat'] },
  { id: 41, span: '', url: 'assets/images/41.jpg', keywords: ['funny', 'cat'] },
  { id: 42, span: '', url: 'assets/images/42.jpg', keywords: ['funny', 'cat'] },
  { id: 43, span: '', url: 'assets/images/43.jpg', keywords: ['funny', 'cat'] },
  {
    id: 44,
    span: 'colSpan',
    url: 'assets/images/44.jpg',
    keywords: ['funny', 'cat'],
  },
  { id: 45, span: '', url: 'assets/images/45.jpg', keywords: ['funny', 'cat'] },
  {
    id: 46,
    span: 'colSpan',
    url: 'assets/images/46.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 47,
    span: 'colSpan',
    url: 'assets/images/47.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 48,
    span: 'colSpan',
    url: 'assets/images/48.jpg',
    keywords: ['funny', 'cat'],
  },
  { id: 49, span: '', url: 'assets/images/49.jpg', keywords: ['funny', 'cat'] },
  { id: 50, span: '', url: 'assets/images/50.jpg', keywords: ['funny', 'cat'] },
  { id: 51, span: '', url: 'assets/images/51.png', keywords: ['funny', 'cat'] },
  { id: 52, span: '', url: 'assets/images/52.jpg', keywords: ['funny', 'cat'] },
  { id: 53, span: '', url: 'assets/images/53.jpg', keywords: ['funny', 'cat'] },
  {
    id: 54,
    span: 'rowSpan colSpan',
    url: 'assets/images/54.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 55,
    span: 'rowSpan colSpan',
    url: 'assets/images/55.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 56,
    span: 'rowSpan',
    url: 'assets/images/56.jpg',
    keywords: ['funny', 'cat'],
  },
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

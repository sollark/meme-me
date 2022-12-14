'use strict';

const STORAGE_KEY = 'memes';
let gSavedMemes = [];

// clearLS();
_loadMemes();

function getSavedMemes() {
  return gSavedMemes;
}

function getSavesMeme(idx) {
  return gSavedMemes[idx];
}

function saveMeme(canvasImageData) {
  if (gSavedMemes.length === 10) {
    console.log(
      'Become supporter and get option to save unlimited number of memes!'
    );

    //TODO modal
    return;
  }

  const meme = JSON.parse(JSON.stringify(getMeme()));
  gSavedMemes.push({ img: canvasImageData, meme });

  saveToLS(STORAGE_KEY, gSavedMemes);
}

function _loadMemes() {
  const loadedMemes = loadFromLS(STORAGE_KEY);
  if (loadedMemes) gSavedMemes = loadedMemes;
}

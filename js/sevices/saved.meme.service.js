'use strict';

const STORAGE_KEY = 'memes';
let gSavedMemes = [];

/* 
{
img: "sdfsdf",
meme: {},
}

 */

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
    console.log('You cant save more than 10 memes');

    //TODO modal
    return;
  }

  console.log('getMeme to save ():', getMeme());

  const meme = JSON.parse(JSON.stringify(getMeme()));
  gSavedMemes.push({ img: canvasImageData, meme });

  saveToLS(STORAGE_KEY, gSavedMemes);
}

function _loadMemes() {
  const loadedMemes = loadFromLS(STORAGE_KEY);
  if (loadedMemes) gSavedMemes = loadedMemes;

  console.log('loaded gSavesMeme:', gSavedMemes);
}

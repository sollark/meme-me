'use strict';

'memes-container';

function renderMemeGallery() {
  const elContainer = document.querySelector('.memes-container');

  const memes = getSavedMemes();

  const strHtmls = memes.map((meme, idx) => {
    return `<div class="image-wrapper"><img src='${meme.img}' alt="Image" onclick="onResumeEdit(${idx})"></img></div>\n`;
  });

  elContainer.innerHTML = strHtmls.join('');
}

//TODO Modal
function onResumeEdit(savedMemeIdx) {
  // TODO user image got 7
  // console.log('savedMemeIdx:', savedMemeIdx);

  if (savedMemeIdx === -1) {
    console.log("users image. Can't edit user image");
    return;
  }

  const elBody = document.querySelector('body');
  elBody.dataset.view = 'editor';

  const { meme } = getSavesMeme(savedMemeIdx);
  setSavedMeme(meme);

  startEdit();
}

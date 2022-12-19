'use strict';

function renderMemeGallery() {
  const elContainer = document.querySelector('.memes');
  const memes = getSavedMemes();

  const strHtmls = memes.map((meme, idx) => {
    const imgInfo = getImage(+meme.meme.selectedImgId);
    return `<div class="image-wrapper ${imgInfo?.span}"><img src='${meme.img}' alt="Image" onclick="onResumeEdit(${idx})"></img></div>\n`;
  });

  elContainer.innerHTML = strHtmls.join('');
}

//TODO Modal
function onResumeEdit(savedMemeIdx) {
  if (savedMemeIdx === -1) {
    console.log("users image. Can't edit user image");
    return;
  }

  setView('editor');

  const { meme } = getSavesMeme(savedMemeIdx);
  setSavedMeme(meme);

  startEdit();
}

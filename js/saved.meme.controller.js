'use strict';

'memes-container';

function renderMemeGallery() {
  const elContainer = document.querySelector('.memes-container');

  const memes = getSavedMemes();
  console.log('memes:', memes);

  // image.src = canvasImageData;
  const strHtmls = memes.map((meme, idx) => {
    return `<div class="image-wrapper"><img src='${meme.img}' alt="Image" onclick="onResumeEdit(${idx})"></img></div>\n`;
  });

  elContainer.innerHTML = strHtmls.join('');
}

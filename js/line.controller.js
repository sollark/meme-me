'use strict';

let gLineCounter = 2;

function onSwitchLine() {
  const meme = getMeme();
  meme.selectedLineIdx = ++meme.selectedLineIdx % gLineCounter;
}

// TODO move to service
function onAddLine() {
  const meme = getMeme();
  meme.lines.push({
    text: 'New Line',
  });

  updateLineCounter();
  focusOnLine(gLineCounter - 1);
  console.log('gMeme:', gMeme);
  drawImage();
}

function onDeleteLine() {
  const meme = getMeme();

  if (gLineCounter === 1) {
    console.log('cannot delete last line');
    return;
  }

  meme.lines.splice(meme.selectedLineIdx--, 1);

  updateLineCounter();
}

function updateLineCounter() {
  const meme = getMeme();
  gLineCounter = meme.lines.length;
}

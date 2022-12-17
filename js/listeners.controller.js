'use strict';

let gStartPos;

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend'];

function onDown(ev) {
  // Get the ev pos from mouse or touch
  const pos = getEvPos(ev);

  console.log('ondown', pos);
  const clickLine = isTextLineClicked(pos);

  if (clickLine === -1) return;

  setLineDrag(true);
  focusOnLine(clickLine);

  //Save the pos we start from
  gStartPos = pos;
  setCursor('grabbing');

  drawImage();
}

function onMove(ev) {
  const { isDrag } = getLine();

  if (!isDrag) return;

  const pos = getEvPos(ev);
  // console.log('onmove', pos);

  // Calc the delta , the diff we moved
  const dx = pos.x - gStartPos.x;
  const dy = pos.y - gStartPos.y;

  moveLine(dx, dy);

  // Save the last pos , we remember where we`ve been and move accordingly
  gStartPos = pos;

  drawImage();
}

function setLineDrag(isDrag) {
  //TODO refactor
  getLine().isDrag = isDrag;
}

function onUp() {
  setCursor('grab');
  setLineDrag(false);
}

function getEvPos(ev) {
  // Gets the offset pos , the default pos
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  };

  // Check if its a touch ev
  if (TOUCH_EVS.includes(ev.type)) {
    console.log('touch ev:', ev);
    //soo we will not trigger the mouse ev
    ev.preventDefault();
    //Gets the first touch point
    ev = ev.changedTouches[0];
    //Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    };
  }
  return pos;
}

//TODO on resize miss text
function isTextLineClicked(pos) {
  let clickedLineIdx = -1;
  const lines = getLines();

  lines.forEach((line, idx) => {
    const { text, posX, posY, textAlign, fontSize } = line;
    // need for align
    const width = gElCanvas.width;

    //TODO handle text align
    const startPosX = posX;

    const startPosY = posY;
    const endPosY = startPosY - fontSize;
    const endPosX = startPosX + gCtx.measureText(text).width;
    if (
      pos.x > startPosX &&
      pos.x < endPosX &&
      pos.y > endPosY &&
      pos.y < startPosY
    )
      clickedLineIdx = idx;
  });

  return clickedLineIdx;
}

'use strict';

let gStartPos;

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend'];

function onDown(ev) {
  // Get the ev pos from mouse or touch
  const pos = getEvPos(ev);

  const clickLine = isTextLineClicked(pos);

  if (clickLine === -1) return;

  setLineDrag(true);
  focusOnLine(clickLine);

  gStartPos = pos;
  setCursor('grabbing');

  drawImage();
}

function onMove(ev) {
  const { isDrag } = getLine();

  if (!isDrag) return;

  const pos = getEvPos(ev);

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

function isTextLineClicked(pos) {
  let clickedLineIdx = -1;
  const lines = getLines();

  lines.forEach((line, idx) => {
    const { posX, posY, textAlign, fontSize } = line;

    let text = (' ' + line.text).slice(1);
    if (text === '') {
      text = 'BOTTOM LINE';
    }

    let startPosX = 0;
    let endPosX = 0;
    let startPosY = posY;
    let endPosY = line.posY - fontSize;

    if (textAlign === 'start') {
      startPosX = posX - 5;
      endPosX = posX + gCtx.measureText(text).width + 5;
    } else if (textAlign === 'center') {
      const halfLine = gCtx.measureText(text).width / 2;

      startPosX = posX - halfLine - 5;
      endPosX = posX + halfLine + 5;
    } else if (textAlign === 'end') {
      startPosX = posX - gCtx.measureText(text).width - 5;
      endPosX = posX + 5;
    }

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

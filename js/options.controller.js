'use strict';

const gTextOptions = {
  lineWidth: 2,
  text: 'New Line',
  strokeStyle: 'black',
  fillStyle: 'white',
  fontSize: '40',
  fontFamily: 'Impact',
  textAlign: 'center',
  posX: 200,
  posY: 300,
};

function applyTextOptions() {
  const line = getLine();
  const keys = Object.keys(gTextOptions);

  keys.forEach((option) => {
    if (option === 'fontSize') {
      if (option in line)
        gCtx.font = gCtx.font.replace(/\d+px/, `${line.fontSize}px`);
      else gCtx.font = gCtx.font.replace(/\d+px/, `${gTextOptions.fontSize}px`);

      return;
    }

    if (option === 'fontFamily') {
      if (option in line)
        gCtx.font = gCtx.font.replace(/[^\dpx][\w\s-]+/, ` ${line.fontFamily}`);
      else
        gCtx.font = gCtx.font.replace(
          /[^\dpx][\w\s-]+/,
          ` ${gTextOptions.fontFamily}`
        );
      return;
    }

    if (option === 'posX' || option === 'posY') {
      if (option in line) return;

      line[option] = gTextOptions[option];
    }

    if (option === 'fontFamily') console.log('fdsfsdfsafdsfdsafsdfsdf');
    if (option in line) {
      gCtx[option] = line[option];
    } else {
      gCtx[option] = gTextOptions[option];
    }
  });
}

function onTextOption(el) {
  const line = getLine();

  line[el.getAttribute('data-option')] = el.value;

  drawImage();
}

function onFontSizeUp() {
  const line = getLine();

  line.fontSize = line.fontSize ? '' + (+line.fontSize + 3) : '13';

  drawImage();
}

function onFontSizeDown() {
  const line = getLine();

  line.fontSize = line.fontSize ? '' + (+line.fontSize - 3) : '7';

  drawImage();
}

function onTextAlign(el) {
  const line = getLine();
  line[el.getAttribute('data-option')] = el.getAttribute('data-value');

  drawImage();
}

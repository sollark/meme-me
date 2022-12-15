'use strict';

const defaultTextOptions = {
  _isSettingsOpen: false,
  text: '',
  fillColor: '#ffffff',
  shadowColor: '#000000',
  font: 'Anton',
  fontSize: 40,
  fontWeight: 'normal',
  textAlign: 'center',
  shadowBlur: 3,
  offsetY: 0,
  offsetX: 0,
  allCaps: true,
};

let textOptions = [{ ...defaultTextOptions }];

console.log('textOptions:', textOptions);

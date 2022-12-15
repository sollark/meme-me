'use strict';

const customFonts = [
  {
    name: 'Impact',
    label: 'Impact',
    path: '/assets/fonts/Impact/impact.ttf',
    style: 'normal',
    weight: '400',
  },
  {
    name: 'Anton',
    label: 'Anton',
    path: '/assets/fonts/Anton/Anton-Regular.ttf',
    style: 'normal',
    weight: '400',
  },
  {
    name: 'Oswald-Regular',
    label: 'Oswald',
    path: '/assets/fonts/Oswald/Oswald-Regular.ttf',
    style: 'normal',
    weight: '400',
  },
  {
    name: 'Oswald-Bold',
    label: 'Oswald Bold',
    path: '/assets/fonts/Oswald/Oswald-Bold.ttf',
    style: 'normal',
    weight: '700',
  },
  {
    name: 'Roboto-Regular',
    label: 'Roboto',
    path: '/assets/fonts/Roboto/Roboto-Regular.ttf',
    style: 'normal',
    weight: '400',
  },
  {
    name: 'Roboto-Bold',
    label: 'Roboto Bold',
    path: '/assets/fonts/Roboto/Roboto-Bold.ttf',
    style: 'normal',
    weight: '700',
  },
  {
    name: 'RobotoCondensed-Regular',
    label: 'Roboto Condensed',
    path: '/assets/fonts/RobotoCondensed/RobotoCondensed-Regular.ttf',
    style: 'normal',
    weight: '400',
  },
  {
    name: 'RobotoCondensed-Bold',
    label: 'Roboto Condensed Bold',
    path: '/assets/fonts/RobotoCondensed/RobotoCondensed-Bold.ttf',
    style: 'normal',
    weight: '700',
  },
  {
    name: 'CourierPrime-Regular',
    label: 'Courier Prime',
    path: '/assets/fonts/CourierPrime/CourierPrime-Regular.ttf',
    style: 'normal',
    weight: '400',
  },
  {
    name: 'CourierPrime-Bold',
    label: 'Courier Prime Bold',
    path: '/assets/fonts/CourierPrime/CourierPrime-Bold.ttf',
    style: 'normal',
    weight: '700',
  },
  {
    name: 'OpenSans-Regular',
    label: 'Open Sans',
    path: '/assets/fonts/OpenSans/OpenSans-Regular.ttf',
    style: 'normal',
    weight: '400',
  },
  {
    name: 'OpenSans-Bold',
    label: 'Open Sans Bold',
    path: '/assets/fonts/OpenSans/OpenSans-Bold.ttf ',
    style: 'normal',
    weight: '400',
  },
];
async function loadCustomFonts() {
  customFonts.forEach(({ name, path, style, weight }) => {
    loadCustomFont(name, path, { style, weight });
  });
}

const loadCustomFont = async (name, path, options = {}) => {
  try {
    const font = new FontFace(name, `url(${path})`, { ...options });
    await font.load();
    document.fonts.add(font);
  } catch (err) {
    console.error(err);
  }
};

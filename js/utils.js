'use strict';

const delay = 500;

var timeoutHandle;

function delayOn(myFunc) {
  if (timeoutHandle) {
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(myFunc, delay);
    return;
  }

  timeoutHandle = window.setTimeout(myFunc, delay);
}

function delayOnFunc(delay) {
  return (x) => setTimeout(x, delay);
}

const delayForFourSec = delayOnFunc(5000);
const delayForThreeSec = delayOnFunc(3000);
const delayForTwoSec = delayOnFunc(2000);

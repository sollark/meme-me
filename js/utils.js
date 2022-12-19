'use strict';

var timeoutHandle;

const gDelay = 500;
function delayOn(myFunc) {
  if (timeoutHandle) {
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(myFunc, gDelay);
    return;
  }
  timeoutHandle = window.setTimeout(myFunc, gDelay);
}

function delayOnFunc(delay) {
  return (x) => setTimeout(x, delay);
}
const delayForFourSec = delayOnFunc(5000);
const delayForThreeSec = delayOnFunc(3000);
const delayForTwoSec = delayOnFunc(2000);

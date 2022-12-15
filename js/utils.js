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

'use strict';

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

function removeFromLS(key) {
  localStorage.removeItem(key);
}

function clearLS() {
  localStorage.clear();
}

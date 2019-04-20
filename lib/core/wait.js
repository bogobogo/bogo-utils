"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wait;

function wait(ms) {
  return new Promise(function (res) {
    return setTimeout(function () {
      return res();
    }, ms);
  });
}
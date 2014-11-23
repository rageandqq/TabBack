/* Copyright Sameer Chitley, 2014 */
var keys = [];
var flag = false;

function dHandler(e) {
  keys[e.keyCode] = true;
  if (e.keyCode == 84 && e.altKey && e.shiftKey && !flag) { 
    flag = !flag;
    safari.self.tab.dispatchMessage('TabBack-down');
  }
}

function uHandler(e) {
  keys[e.keyCode] = false;
  if ((!keys[84] || (!keys[18] && !keys[16]) )&& flag) {
    flag = !flag;
  }
}

window.addEventListener('keydown', dHandler, false);
window.addEventListener('keyup', uHandler, false);

export default function Wait(callBack) {
  window.onload = function () {
    callBack();
  };
}
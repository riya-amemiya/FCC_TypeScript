export default function wait(callBack) {
    window.onload = function () {
        callBack();
    };
}

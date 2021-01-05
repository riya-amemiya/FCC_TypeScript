export default function wait(callBack) {
    window.onload = function () {
        callBack();
    };
}
//# sourceMappingURL=wait.js.map
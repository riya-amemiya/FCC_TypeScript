function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default async function sleep(ms) {
    await _sleep(ms);
}
//# sourceMappingURL=sleep.js.map
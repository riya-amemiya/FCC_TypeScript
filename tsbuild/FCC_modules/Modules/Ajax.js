function youtube(_a) {
    var _b = _a === void 0 ? {} : _a, type = _b.type, part = _b.part, q = _b.q, maxResults = _b.maxResults, key = _b.key, videoEmbeddable = _b.videoEmbeddable, videoSyndicated = _b.videoSyndicated;
    return "https://www.googleapis.com/youtube/v3/search?type=" + (type || "video") + "&part=" + (part || "snippet") + "&q=" + (q || "music") + "&maxResults=" + (maxResults || 6) + "&key=" + key + "&videoEmbeddable=" + (videoEmbeddable || "true") + "&videoSyndicated=" + (videoSyndicated || "true");
}
function ajax(_a) {
    var url = _a.url, callback = _a.callback;
    var xml = new XMLHttpRequest();
    xml.open('GET', url);
    xml.send();
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            var data = JSON.parse(xml.response);
            callback(data);
        }
    };
}
export { ajax, youtube };
//# sourceMappingURL=Ajax.js.map
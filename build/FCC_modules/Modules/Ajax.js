function youtube() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      type = _ref.type,
      part = _ref.part,
      q = _ref.q,
      maxResults = _ref.maxResults,
      key = _ref.key,
      videoEmbeddable = _ref.videoEmbeddable,
      videoSyndicated = _ref.videoSyndicated;

  return "https://www.googleapis.com/youtube/v3/search?type=".concat(type || "video", "&part=").concat(part || "snippet", "&q=").concat(q || "music", "&maxResults=").concat(maxResults || 6, "&key=").concat(key, "&videoEmbeddable=").concat(videoEmbeddable || "true", "&videoSyndicated=").concat(videoSyndicated || "true");
}

function ajax(_ref2) {
  var url = _ref2.url,
      callback = _ref2.callback;
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
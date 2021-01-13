function youtube({ type, part, q, maxResults, key, videoEmbeddable, videoSyndicated } = {}) {
    return `https://www.googleapis.com/youtube/v3/search?type=${type || "video"}&part=${part || "snippet"}&q=${q || "music"}&maxResults=${maxResults || 6}&key=${key}&videoEmbeddable=${videoEmbeddable || "true"}&videoSyndicated=${videoSyndicated || "true"}`;
}
function ajax({ url, callback }) {
    let xml = new XMLHttpRequest();
    xml.open('GET', url);
    xml.send();
    xml.onreadystatechange = () => {
        if (xml.readyState === 4 && xml.status === 200) {
            let data = JSON.parse(xml.response);
            callback(data);
        }
    };
}
export { ajax, youtube };
//# sourceMappingURL=Ajax.js.map
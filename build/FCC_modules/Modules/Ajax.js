function youtube(req) {
  return `https://www.googleapis.com/youtube/v3/search?type=${req.type || 'video'}&part=${req.part || 'snippet'}&q=${req.q || 'music'}&maxResults=${req.maxResults || 6}&key=${req.key}&videoEmbeddable=${req.videoEmbeddable || 'true'}&videoSyndicated=${req.videoSyndicated || 'true'}`;
}

function ajax_youtube(req) {
  let xml = new XMLHttpRequest();
  xml.open('GET', youtube(req.url));
  xml.send();

  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      let data = JSON.parse(xml.response);
      req.callback(data);
    }
  };
}

function ajax(req) {
  let xml = new XMLHttpRequest();
  xml.open('GET', req.url);
  xml.send();

  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      let data = JSON.parse(xml.response);
      req.callback(data);
    }
  };
}

export { ajax, youtube, ajax_youtube };
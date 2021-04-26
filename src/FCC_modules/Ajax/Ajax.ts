const youtube = ({
    type,
    part,
    q,
    maxResults,
    key,
    videoEmbeddable,
    videoSyndicated,
}: {
    type?: string;
    part?: string;
    q?: string;
    maxResults?: string | number;
    key?: string;
    videoEmbeddable?: string;
    videoSyndicated?: string;
}): string =>
    `https://www.googleapis.com/youtube/v3/search?type=${
        type || 'video'
    }&part=${part || 'snippet'}&q=${q || 'music'}&maxResults=${
        maxResults || 6
    }&key=${key}&videoEmbeddable=${videoEmbeddable || 'true'}&videoSyndicated=${
        videoSyndicated || 'true'
    }`;
const ajax = <J, T>({
    url,
    callback,
    JsonType,
}: {
    url: string;
    callback: (data: typeof JsonType) => T;
    JsonType: J;
}) =>
    fetch(url)
        .then((data) => data.json())
        .then((data: typeof JsonType) => callback(data));
export { ajax, youtube };

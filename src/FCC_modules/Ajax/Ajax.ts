const youtube = <T extends string | number>({
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
    maxResults?: T;
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
const ajax = <J extends object, T>({
    url,
    callback,
}: {
    url: string;
    callback: (data: J) => T;
}) =>
    fetch(url)
        .then((data) => data.json())
        .then((data: J) => callback(data));
export { ajax, youtube };

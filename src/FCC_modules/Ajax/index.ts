const youtube = ({
    type = 'video',
    part = 'snippet',
    q = 'music',
    maxResults = 6,
    key,
    videoEmbeddable = 'true',
    videoSyndicated = 'true',
}: {
    type?: string;
    part?: string;
    q?: string;
    maxResults?: number;
    key: string;
    videoEmbeddable?: 'true' | 'false';
    videoSyndicated?: 'true' | 'false';
}): string =>
    `https://www.googleapis.com/youtube/v3/search?type=${type}&part=${part}&q=${q}&maxResults=${maxResults}&key=${key}&videoEmbeddable=${videoEmbeddable}&videoSyndicated=${videoSyndicated}`;
const ajax = async <J extends object, T>(
    url: string,
    callback: (data: J) => T,
) => {
    return callback(await (await fetch(url)).json());
};
export { ajax, youtube };

declare function youtube({ type, part, q, maxResults, key, videoEmbeddable, videoSyndicated }?: {
    type?: string;
    part?: string;
    q?: string;
    maxResults?: string | number;
    key?: string;
    videoEmbeddable?: string;
    videoSyndicated?: string;
}): string;
declare function ajax({ url, callback }: {
    url: string;
    callback: (data: any) => void;
}): void;
export { ajax, youtube };

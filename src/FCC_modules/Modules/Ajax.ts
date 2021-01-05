function youtube({ type, part, q, maxResults, key, videoEmbeddable, videoSyndicated }: { type?: string; part?: string; q?: string; maxResults?: string | number; key?: string; videoEmbeddable?: string; videoSyndicated?: string } = {}): string
{
    return `https://www.googleapis.com/youtube/v3/search?type=${type || 'video'}&part=${part || 'snippet'}&q=${q || 'music'}&maxResults=${maxResults || 6}&key=${key}&videoEmbeddable=${videoEmbeddable || 'true'}&videoSyndicated=${videoSyndicated || 'true'}`
}
function ajax({ url, callback }: { url: string; callback: (data: any) => void }): void
{
    let xml: XMLHttpRequest = new XMLHttpRequest()
    xml.open('GET', url)
    xml.send()
    xml.onreadystatechange = (): void =>
    {
        if (xml.readyState === 4 && xml.status === 200)
        {
            let data = JSON.parse(xml.response)
            callback(data)
        }
    }
}
export
{
    ajax,
    youtube
}
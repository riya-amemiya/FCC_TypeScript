async function hash(name: string): Promise<string>
{
    const uint8 = new TextEncoder().encode(name)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2, '0')).join('')
}
export default async function Hash(name: string): Promise<string>
{
    const data = await hash(name)
    return data
}
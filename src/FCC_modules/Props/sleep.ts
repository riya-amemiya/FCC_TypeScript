function _sleep(ms: number): Promise<unknown>
{
    return new Promise(resolve => setTimeout(resolve, ms))
}
export default async function sleep(ms: number): Promise<void>
{
    await _sleep(ms);
}
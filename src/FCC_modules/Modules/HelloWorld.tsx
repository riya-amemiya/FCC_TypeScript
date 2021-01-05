async function _HelloWorld(): Promise<JSX.Element>
{
    const React = await import('react')
    return <h1>Hello World</h1>;
}
export default async function HelloWorld(callback: (arg0: JSX.Element) => JSX.Element | PromiseLike<JSX.Element>): Promise<JSX.Element>
{
    const text = await _HelloWorld();
    return callback(text);
}

async function _HelloWorld() {
    const React = await import('react');
    return React.createElement("h1", null, "Hello World");
}
export default async function HelloWorld(callback) {
    const text = await _HelloWorld();
    return callback(text);
}
//# sourceMappingURL=HelloWorld.js.map
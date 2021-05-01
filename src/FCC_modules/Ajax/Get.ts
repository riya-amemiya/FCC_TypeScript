const Get = async <J extends object, T>(
    url: string,
    callback: (data: J) => T,
) => {
    return callback(await (await fetch(url)).json());
};
export default Get;

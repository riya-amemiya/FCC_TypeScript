import wait from './wait';
const wait_callback = async <T, R>(
    ms: number,
    data: T,
    callback: (data: T) => R,
): Promise<void> => {
    await wait(ms);
    callback(data);
};
export default wait_callback;

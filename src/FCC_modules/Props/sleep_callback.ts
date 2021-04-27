import sleep from './sleep';
const sleep_callback = async <T, R>(
    ms: number,
    data: T,
    callback: (data: T) => R,
): Promise<void> => {
    await sleep(ms);
    callback(data);
};
export default sleep_callback;

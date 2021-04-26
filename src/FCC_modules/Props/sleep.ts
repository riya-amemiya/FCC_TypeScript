const sleep = async (ms: number): Promise<void> => {
    await (() => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    })();
};
export default sleep;

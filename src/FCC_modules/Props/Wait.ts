const wait = <T, D>(data: D, callBack: (data: D) => T): void => {
    window.onload = () => {
        callBack(data);
    };
};
export default wait;

const counter = (num = 0): (() => number) => {
    return () => ++num;
};
export default counter;

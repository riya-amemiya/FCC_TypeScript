const Min = (num: number[]): number => Math.min.apply(null, [...new Set(num)]);
export default Min;

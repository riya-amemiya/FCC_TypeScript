const Max = (num: number[]): number => Math.max.apply(null, [...new Set(num)]);
export default Max;

const DuplicateDeletion = <T extends any>(array: T[]) => [...new Set(array)];
export default DuplicateDeletion;

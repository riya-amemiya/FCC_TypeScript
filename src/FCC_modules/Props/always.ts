export interface ALWAYS {
    <T>(any: T): () => T;
}
export const always: ALWAYS =
    <T>(any: T) =>
    () =>
        any;

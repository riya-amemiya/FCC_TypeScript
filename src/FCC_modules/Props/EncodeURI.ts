export interface ENCODEURI {
    <T extends string | number | boolean>(any: T): string;
}
export const EncodeURI: ENCODEURI = <T extends string | number | boolean>(any: T) => encodeURIComponent(any);

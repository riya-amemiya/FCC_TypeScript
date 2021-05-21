export interface NOW {
    (): Date;
}
export const now = (() => new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000)) as NOW;

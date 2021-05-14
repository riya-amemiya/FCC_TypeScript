import { curry1 } from '../Curry';
export interface WAIT {
    (ms: number): Promise<void>;
    (): (ms: number) => Promise<void>;
}
export const wait = curry1(async function (ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}) as WAIT;

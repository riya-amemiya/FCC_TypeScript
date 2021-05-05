import { FCC } from '../../build';
const t = FCC.Props.counter(100, 'and');
for (const n of [...Array(10).keys()]) {
    n % 2 == 0 ? console.log(`${n}:${t(8, 'remove')}`) : console.log(`${n}:${t(8, 'add')}`);
}

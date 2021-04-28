import { FCC } from '../src';
FCC.Props.OptPipe(Math.random() < 0.5 ? 1 : undefined)((x) => console.log(x));

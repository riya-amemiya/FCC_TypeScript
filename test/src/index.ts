import { FCC } from '../../build';
let a = FCC.Props.birthday(['05']);
console.log(a(1, 29));
a = FCC.Props.birthday(['20', '05']);
console.log(a(1, 29));
a = FCC.Props.birthday(5);
console.log(a(1, 29));

import { Maths, Props } from './FCC_modules';
import { MathsType } from './FCC_modules/Math/index';
import { PropsType } from './FCC_modules/Props/index';
export { Maths, Props };
interface FCCType {
    Maths: MathsType;
    Props: PropsType;
}

const FCC: FCCType = { Maths, Props };
export { FCC };

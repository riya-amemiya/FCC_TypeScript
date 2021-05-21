import { Maths, Props, F_Date } from './FCC_modules';
import { MathsType } from './FCC_modules/Math/index';
import { PropsType } from './FCC_modules/Props/index';
import { F_DateType } from './FCC_modules/Date';
export { Maths, Props };
interface FCCType {
    Maths: MathsType;
    Props: PropsType;
    F_Date: F_DateType;
}

const FCC: FCCType = { Maths, Props, F_Date };
export { FCC };

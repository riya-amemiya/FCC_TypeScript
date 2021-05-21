import { Zeller } from './Zeller';
import { HasZero } from './HasZero';
import { birthday } from './birthday';
import { wait } from './wait';
import { wait_callback } from './wait_callback';
import { sort } from './sort';
import { HasType } from './HasType';
import { HasKey } from './HasKey';
import { ObjectToArray } from './ObjectToArray';
import { NullCheck } from './NullCheck';
import { DuplicateDeletion } from './DuplicatDeletion';
import { HowNumber } from './HowNumber';
import { Pipe } from './Pipe';
import { OptPipe } from './OptPipe';
import { counter } from './counter';
import { Between } from './Between';
import { always } from './always';
import { Max } from './Max';
import { Min } from './Min';
import { EncodeURI } from './EncodeURI';
export interface PropsType {
    wait_callback: import('./wait_callback').WAIT_CALLBACK;
    Zeller: import('./Zeller').ZELLER;
    HasZero: import('./HasZero').HASZERO;
    birthday: import('./birthday').BIRTHDAY;
    wait: import('./wait').WAIT;
    sort: import('./sort').SORT;
    HasType: import('./HasType').HASTYPE;
    HasKey: import('./HasKey').HASKEY;
    ObjectToArray: import('./ObjectToArray').OBJECTTOARRAY;
    NullCheck: import('./NullCheck').NULLCHECK;
    DuplicateDeletion: import('./DuplicatDeletion').DUPLICATEDELETION;
    HowNumber: import('./HowNumber').HOWNUMBER;
    Pipe: <T>(x: T) => import('./Pipe').Pipe<T>;
    OptPipe: <T_1>(x?: T_1 | undefined) => import('./OptPipe').OPTPIPE<T_1>;
    counter: import('./counter').COUNTER;
    Between: import('./Between').BETWEEN;
    always: import('./always').ALWAYS;
    Max: import('./Max').P_MAX;
    Min: import('./Min').P_MIN;
    EncodeURI: import('./EncodeURI').ENCODEURI;
}
export const Props: PropsType = {
    wait_callback,
    Zeller,
    HasZero,
    birthday,
    wait,
    sort,
    HasType,
    HasKey,
    ObjectToArray,
    NullCheck,
    DuplicateDeletion,
    HowNumber,
    Pipe,
    OptPipe,
    counter,
    Between,
    always,
    Max,
    Min,
    EncodeURI,
};

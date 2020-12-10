//Modules
import Maths from './FCC_modules/Modules/Math/Math'
import Html from './FCC_modules/Modules/HTML/HTML'
import * as Ajax from './FCC_modules/Modules/Ajax/Ajax'
import HelloWorld from './FCC_modules/Modules/HelloWorld'
import Cal from './FCC_modules/Modules/CalClass/CalClass';

//Math
import Gcd from './FCC_modules/Math/Gcd'
import K from './FCC_modules/Math/K'
import nCr from './FCC_modules/Math/nCr';
import nCrs from './FCC_modules/Math/nCrs';
import nPr from './FCC_modules/Math/nPr';
import Pow from './FCC_modules/Math/Pow';
import Random from './FCC_modules/Math/Random';

//Props
import Zeller from './FCC_modules/Props/Zeller';
import Zero from './FCC_modules/Props/Zero'
import Birthday from './FCC_modules/Props/Birthday';
import Render from './FCC_modules/Props/Render';
import Wait from './FCC_modules/Props/Wait';
import error_language from './FCC_modules/Props/error_language';

//components
import * as components from './FCC_modules/components/components'

type int = number;
interface joketype{
    Hello: 'Hello',
    World: 'World'
}
const joke:joketype = {
    Hello:'Hello',
    World:'World'
}
const version:string = '1.0'
export
{
    int,
    version,
    Ajax,
    joke,
    Zero,
    HelloWorld,
    Maths,
    Render,
    Birthday,
    Html,
    Cal,
    Zeller,
    nPr,
    Gcd,
    Random,
    K,
    nCr,
    nCrs,
    Pow,
    Wait,
    error_language,
    components
}

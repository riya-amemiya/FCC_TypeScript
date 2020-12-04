export default function Wait(callBack: any): void
{
    window.onload = function ()
    {
        callBack();
    };
}

export default function wait(callBack: () => any): void
{
    window.onload = function ()
    {
        callBack();
    };
}

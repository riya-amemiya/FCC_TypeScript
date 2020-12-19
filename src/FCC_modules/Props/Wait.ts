export default function wait(callBack: ()=>void): void
{
    window.onload = function ()
    {
        callBack();
    };
}

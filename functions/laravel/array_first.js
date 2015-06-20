/**
 *  replicates array_first feature from laravel
 */
function array_first(a,f,d)
{
    if (!f && a.length)
    {
        return a[0];
    }
    for(var x = 0; x < a.length; x++)
    {
        if (f(a[x])) return a[x];
    }
    return d;
}

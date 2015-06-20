/**
 *  reports any root-level keys that have difference values
 */
function assoc_diff (a,b)
{
    console.log([a,b]);
    var ks = Object.keys(a).concat(Object.keys(b)).unique();

    var Δ = [];

    for(var x=0; x<ks.length; x++)
    {
        if (typeof a[ks[x]] == 'object' && typeof b[ks[x]] == 'object')
        {
            if (a[ks[x]]===null || b[ks[x]]===null)
            {
                if (!(a[ks[x]]===null && b[ks[x]]===null))
                {
                    Δ.push(ks[x]);
                }
            }
            else if (assoc_diff(a[ks[x]],b[ks[x]]).length)
            {
                Δ.push(ks[x]);
            }
        }
        else if (a[ks[x]]!=b[ks[x]])
        {
            Δ.push(ks[x]);
        }
    }
    return Δ;
}


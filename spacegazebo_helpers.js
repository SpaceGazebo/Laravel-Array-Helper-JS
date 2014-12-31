/**
 *   converts array_dot keys into form keys
 *  
 *  this is specifically made for multidimensional arrays that dynamically become HTML forms.
 *
 * e.g.
 * 
 * var arr = array_dot(original_data);
 * for (var key in arr)
 *     s = '<input type="text" name="'+ dot_key_to_form_key(key) +'" value="" />'
 */
function dot_key_to_form_key(i)
{
    i = i.split('.');
    for(var x = 0;x<i.length;x++)
    {
        if (x) i[x] = '['+i[x]+']';
    }
    
    return i.join('');
}
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

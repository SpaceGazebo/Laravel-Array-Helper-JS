/**
 *  replicates array_get feature from laravel
 */
function array_get(i,k,d)
{
    if (typeof d === 'undefined') { d = null; }
    if (!k) return i;
    
    var s = k.split('.');
    
    var o = i;
    
    for(var x=0;x < s.length; x++)
    {
        if (null !== o && o.hasOwnProperty(s[x]))
        {
            o = o[s[x]];
        }
        else
        {
            return d;
        }
    }
    
    return o;
}


/**
 *  replicates array_get feature from laravel
 */
function array_get(i,k,d)
{
    d = d||null;
    if (!k) return i;
    
    var s = k.split('.');
    
    var o = i;
    
    for(var x=0;x < s.length; x++)
    {
        if (o.hasOwnProperty(s[x]))
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
/**
 *  replicates array_set feature from laravel
 */
function array_set(i,k,v)
{
    if (!k) return;
    var s = k.split('.');
    h = i;
    for(var x=0;x < s.length-1; x++)
    {
        if (h.hasOwnProperty(s[x]))
        {
            h = h[s[x]];
        }
        else
        {
            for(var y = s.length-1;x <= y; y--)
            {
                w = v;
                v = {};
                v[s[y]] = w;
            }
            h[s[x]] = v[s[x]];
            return;
        }
    }
    h[s[x]] = v;
}
/**
 *  replicates array_dot feature from laravel
 */
function array_dot(i, p){
    var o = {};p = p || '';
    
    if (p) { p = p+'.'; }
    
    if (typeof i == 'object')
    {
        for (var k in i)
        {
            if (i.hasOwnProperty(k))
            {
                if (typeof i[k] == 'object')
                {
                    x = array_dot(i[k],k);
                    for(var l in x)
                    {
                        o[p+l] = x[l];
                    }
                }
                else
                {
                    o[p+k] = i[k];
                }
            }
        }
    }
    return o;
}
/**
 *  replicates array_dot feature from laravel
 */
function array_flatten(i)
{
    i = Object(i);
    var o = [];
    
    for(var k in i)
    {
        if (i.hasOwnProperty(k))
        {
            if (typeof i[k]=='object')
            {
                o = o.concat(array_flatten(i[k]));
            }
            else
            {
                o.push(i[k]);
            }
        }
    }
    return o;
}

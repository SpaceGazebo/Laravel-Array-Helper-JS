/**
 *  replicated array_get feature from laravel
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
 *  replicated array_dot feature from laravel
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
 *  replicated array_dot feature from laravel
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

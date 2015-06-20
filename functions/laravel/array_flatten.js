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


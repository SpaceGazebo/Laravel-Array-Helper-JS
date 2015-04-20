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
            o = o[s[x]]||{};
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
/**
 *  replicates array_except feature from laravel
 */
function array_except(a,ks){
  /**
   *  does not account for array_dot sub-keys
   */
  var b = jQuery.extend(true, {}, a);
  ks.forEach(function(k){
    delete b[k];
  });
  return b;
}
/**
 *  replicates array_only feature from laravel
 */
function array_only(a,ks){
  /**
   *  does not account for array_dot sub-keys
   */
  var b = jQuery.extend(true, {}, a);
  
  for(var k in a)
  {
      if (ks.indexOf(k) === -1) delete b[k];
  }
  
  return b;
}
/**
 * replicates array_fetch feature from laravel
 */
function array_fetch (arr,key)
{
    var r = [];
    for (var k in arr)
    {
        if (arr.hasOwnProperty(k))
        {
            if (array_has(arr[k],key))
            {
                r.push(
                    array_get(arr[k],key)
                );
            }
        }
    }
    return r;
}
/**
 *  This checks if a deeply nested variable is set, similar to Laravel's Input::has('key')
 */
function array_has (arr,key)
{
    return (array_get(arr,key,false)!==false && array_get(arr,key,true)!==true);
}


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


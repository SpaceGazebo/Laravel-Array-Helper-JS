/**
 *  This checks if a deeply nested variable is set, similar to Laravel's Input::has('key')
 */
function array_has (arr,key)
{
    return (array_get(arr,key,false)!==false && array_get(arr,key,true)!==true);
}


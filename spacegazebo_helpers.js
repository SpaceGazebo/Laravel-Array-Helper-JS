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

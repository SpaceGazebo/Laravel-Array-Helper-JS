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
/**
 *  returns inputed money value as string representing a valid decimal number
 *  intended for sending serverside or to be passed to other calls.
 * 
 *  OR returns NaN
 * 
 *  does not validate arrangements of $,space,comma,period, only strips them
 */
function money2DecimalString(m){
    var v;
    var p = m;
    if (typeof p == 'string')
    {
        p = money2DecimalArr(m);
    }
    if (typeof p == 'number' && isNaN(p))
    {
        return p;
    }
    if (p.invalid)
    {
        return NaN;
    }
    
    p.left = parseInt('0'+p.left,10);
    
    if (p.left && p.right)
    {
        v = p.left+'.'+p.right;
    }
    else if (p.right)
    {
        v = '0.'+p.right;
    }
    else if (p.left)
    {
        v = p.left;
    }
    else
    {
        v = '0';
    }
    if (p.negative && v!=='0')
    {
        v = '-'+v;
    }
    return v;
}
/**
 *  Helper function for money2DecimalArr
 * 
 *  A money format validator may prefer to call this function instead of the above
 *  if you wanted to check the $,space,comma,period count/order.
 * 
 *  returns array describing number
 */
function money2DecimalArr(str){
    if (typeof str == 'number' && isNaN(str)){ return str; }
    
    var decimal_pos = Math.max(str.lastIndexOf('.'),str.lastIndexOf(','));
    
    if (decimal_pos==-1) decimal_pos = str.length;
    
    var num = {
    left:str.substr(0,decimal_pos).replace(/[^0-9]+/g,""),
    right:str.substr(decimal_pos+1,str.length).replace(/[^0-9]+/g,""),
        source:str
    };

    if (str.trim().indexOf('-')==0)
    {
        num.negative = true;
    }

    if (num.left.length + num.right.length === 0)
    {
        num.invalid = true;
    }

    return num;
}

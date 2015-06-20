/**
 *  returns inputed money value as string representing a valid decimal number
 *  intended for sending serverside or to be passed to other calls.
 * 
 *  OR returns NaN
 * 
 *  does not validate arrangements of $,space,comma,period, only strips them
 */
function money2DecimalString(m){
    if (typeof m === 'undefined') return NaN;
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

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
    
    //var decimal_pos = Math.max(str.lastIndexOf('.'),str.lastIndexOf(','));
    var decimal_pos = str.lastIndexOf('.');
    
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
    
    if (num.left.length > 15)
    {
        num.invalid = true;
    }

    return num;
}


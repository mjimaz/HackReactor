//  Write a JavaScript program to compute the exponent of a number

function exponent(num, exp){
    if(exp === 0){
        return 1;
    }else if(exp === 1){
        return num;
    }else{
        return num * exponent(num, exp-1);
    }
}
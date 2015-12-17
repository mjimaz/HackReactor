//  Write a JavaScript program to compute the sum of an array of integers.

function sumArray(sum, array){
    if(array.length > 0){
        var item = array.pop();
        return sumArray(sum+item, array);
    }else {
        return sum;
    }
}
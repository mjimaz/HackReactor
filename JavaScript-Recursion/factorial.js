
// Write a JavaScript program to calculate the factorial of a number

function factorial(n){
    if(n === 1 || n === 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
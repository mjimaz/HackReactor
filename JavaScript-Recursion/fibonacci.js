// Write a JavaScript program to get the first n Fibonacci numbers

function fibonacci(n){
    if(n === 0 || n === 1){
        return [0,1];
    }else{
        var s = fibonacci(n-1);
        s.push(s[n-1]+s[n-2]);
        return s;
    }
}

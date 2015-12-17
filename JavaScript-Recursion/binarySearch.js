//Write a JavaScript program for binary search.
function binarySearch(key, min, max, array){
    
    if(min<=max){
        var middle = parseInt((min+max)/2);
        var pivot = array[middle];
    
        if(pivot === key){
            return middle;
        }else if(array[middle] > key){
            return binarySearch(key, min, middle-1, array);
        }else{
            return binarySearch(key, middle+1, max, array);
        }
    }
    return -1;
}
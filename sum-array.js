function arr(numbers){
    
    return numbers.reduce((total,current) => total+current,0);
}
console.log(arr([1,2,3,4]));
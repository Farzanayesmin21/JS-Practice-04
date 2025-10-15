function multiple(num){
    if (typeof num !== "number"){
        console.log("that's not a number");
        return;

    }
    else if (num % 3 === 0 && num % 5 === 0){
        console.log("Divisible by both");
    }
    else{
        console.log(" Not divisible by both");
    }
}
multiple(15)
function dateTime(){
    let hour=new Date().getHours();
    if(hour < 12){
        console.log("Good Morning");
    }
    else if (hour <18){
        console.log("Good Afternoon");
    }
    else{
        console.log("Good Evening");
    }
}
dateTime(7)
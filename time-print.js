function dateTime(){
    let hour=new Date().getHours();
    if(hour > 12){
        console.log("Good Evening");
    }
   
    else{
        console.log("Good Morning");
    }
}
dateTime()
//get element ID
let days= document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

//get date now
var now = new Date();
var currentYear= now.getFullYear();

// declare new year date
var christmas = new Date("2022-12-25");
console.log(christmas)
function countdown (){
    let dateNow = new Date();
    let interval = christmas - dateNow;
    console.log(interval)

    //Ginoogle ko yung mga formula diko alam e HAHAHAHA
    let day = Math.floor(interval/1000/60/60/24);
    let hour = Math.floor(interval/1000/60/60)%24;
    let minute =Math.floor(interval/1000/60)%60;
    let second = Math.floor(interval/1000)%60;

    //testing
    console.log("day: "+day)
    console.log("hours: "+hour)
    console.log("minutes: "+minute)
    console.log("seconds: "+second)

    //web output
    days.innerText = day;
    if (hour< 10){hours.innerText = '0'+ hour;}else{hours.innerText = hour;}
    if (minute< 10){minutes.innerText = '0'+ minute;}else{minutes.innerText = minute;}
    if (second< 10){seconds.innerText = '0'+ second;}else{seconds.innerText = second;}
}

// spam function
    setInterval(countdown,1000)

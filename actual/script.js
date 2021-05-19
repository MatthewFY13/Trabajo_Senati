let html = document.getElementById("clock");

setInterval(function(){
    time = new Date();

    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds();

    if(hour < 10)
        hour = "0" + hour;
    if(minute < 10)
        minute = "0" + minute;
    if(second < 10)
        second = "0" + second;
        
    html.innerHTML = hour + " : " + minute + " : " + second;
}, 1000);
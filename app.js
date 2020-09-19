setInterval(function() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = 'AM';

    if(hours >= 12){
        period = 'PM';
    }else if(hours > 12){
        hours = hours - 12;
    }else if(seconds < 10){
        seconds = '0' + seconds;
    }else if(minutes < 10){
        minutes = '0' + minutes;
    }

    let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + period;
    let clock = document.getElementById('clock');
    clock.innerText = clockTime;
} , 1000)
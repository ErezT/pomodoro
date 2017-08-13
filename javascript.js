
// var now = moment().minutes(00).seconds(05);
var endTime = moment().minutes(00).seconds(00);
var onScreenClock = document.getElementById('time');
var intervalID;
var userInput = 25;
var now = moment().minutes(userInput).seconds(00);


function showTime() {
    if(now.second() == 00 && now.minute() == 00) {
        console.log(now.second() + ":" + now.minute());
        stopper();
        console.log("stopped");
    } else {
        // console.log(now.second());
        // console.log(now.minutes());
        console.log(now.subtract(1, 'seconds').format("mm:ss"));
        onScreenClock.innerHTML = now.minute() + ":" + now.second();
    }
}

function starter() {
    intervalID = setInterval('showTime()', 1000);
}

function stopper() {
    clearInterval(intervalID);
}

function reseter() {
    onScreenClock.innerHTML = now.set('minute',25).set('seconds', 00).format('mm:ss');  
}

function addTime() {
    now.add(1, 'minutes');   
    onScreenClock.innerHTML = now.minutes() + ":" + now.second();    
}

function subtractTime() {
    now.subtract(1, 'minutes');
    onScreenClock.innerHTML = now.minutes() + ":" + now.second();    
}

var endTime = moment().minutes(00).seconds(00);
var onScreenClock = document.getElementById('time');
var intervalID;
var now = moment().minutes(25).seconds(00);
var chosenTime = 25;


function showTime() {
    if (now.second() == 00 && now.minute() == 00) {
        console.log(now.second() + ":" + now.minute());
        stopper();
        console.log("stopped");
    } else {
        console.log(now.subtract(1, 'seconds').format("mm:ss"));
        onScreenClock.innerHTML = now.format('mm:ss');
    }
}

function starter() {
    intervalID = setInterval('showTime()', 1000);
    chosenTime = now.minute();
}

function stopper() {
    clearInterval(intervalID);
}

function reseter() {
    onScreenClock.innerHTML = now.set('minute', chosenTime).set('seconds', 00).format('mm:ss');
}

function addTime() {
    now.add(1, 'minutes');
    onScreenClock.innerHTML = now.format('mm:ss');
}

function subtractTime() {
    now.subtract(1, 'minutes');
    onScreenClock.innerHTML = now.format('mm:ss');
}
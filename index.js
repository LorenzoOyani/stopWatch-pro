const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('startButton');
const  pauseBtn = document.getElementById('pauseButton');
const  stopBtn = document.getElementById('stopButton');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId
let hrs =0;
let minutes = 0;
let seconds =0;

startBtn.addEventListener("click", ()=> {
 if(paused){
     paused = false;
     startTime = Date.now() -elapsedTime;
     intervalId = setInterval(updateTime, 1000)

 }
})

pauseBtn.addEventListener("click", ()=>{
    if(!paused){
        paused=true;
        elapsedTime = Date.now()- startTime;
        clearInterval(intervalId)
    }
})

stopBtn.addEventListener("click", ()=>{
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
     elapsedTime = 0;
    currentTime = 0;
    paused = true;
    hrs =0;
    minutes = 0;
    seconds =0;
    timeDisplay.textContent ="00:00:00";

})

function updateTime(){
    elapsedTime = Date.now() - startTime


    seconds = Math.floor((elapsedTime/ 1000) % 60 );
    minutes = Math.floor((elapsedTime/ (1000 * 60)) % 60)
    hrs = Math.floor((elapsedTime/ (1000* 60 * 60)) % 60)

    
 seconds = pad(seconds)
 minutes = pad(minutes)
 hrs = pad(hrs)


 timeDisplay.textContent = `${hrs}:${minutes}:${seconds}`;

function pad (unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit
}
}
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const sessionTimeInMinutes = params.get("option");
const retireTimeInMinutes = params.getAll("option")[1];

var sessionSelected = document.getElementById("select-session-btn");
var retireSelected = document.getElementById("select-retire-btn");

var sessionInterval, retireInterval, remainingTimeSession, remainingTimeRetire, timer;

function startSessionTimer(duration, display) {
    var timer = duration;
    var minutes, seconds;
  
    sessionInterval = setInterval(function() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
        
      display.textContent = minutes + ":" + seconds;

      remainingTimeSession = --timer;
  
      if (remainingTimeSession < 0) {
        timer = duration;
      }

      if (remainingTimeSession == 0){
        alert("Fim do timer!");
      }
    }, 1000);
  }


function startRetireTimer(duration, display) {
    var timer = duration;
    var minutes, seconds;

    retireInterval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        remainingTimeRetire = --timer;

        if (remainingTimeRetire < 0) {
            timer = duration;
    }
        if (remainingTimeRetire == 0) {
            alert("Fim do timer!");
        }
    
}, 1000);
}

function restartTimer(){
    if (sessionSelected.classList[1] == 'active') {
        clearInterval(sessionInterval);
        startSessionTimer(sessionTimeInMinutes * 60, sessionTimerShowing);
    }
    else if (retireSelected.classList[1] == 'active') {
        clearInterval(retireInterval);
        startRetireTimer(retireTimeInMinutes * 60, retireTimerShowing);
    }
}

var sessionTimerShowing = document.getElementById("timer-showing-session");
sessionTimerShowing.textContent = sessionTimeInMinutes + ":00"

var retireTimerShowing = document.getElementById("timer-showing-retire");
retireTimerShowing.textContent = retireTimeInMinutes + ":00"

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", function(){
    if (sessionSelected.classList[1] == 'active') {
        var sessionDuration = remainingTimeSession > 0 ? remainingTimeSession : sessionTimeInMinutes * 60;
        startSessionTimer(sessionDuration, sessionTimerShowing);
    } 
    else if (retireSelected.classList[1] == 'active') {
        var retireDuration = remainingTimeRetire > 0 ? remainingTimeRetire : retireTimeInMinutes * 60;
        startRetireTimer(retireDuration, retireTimerShowing);
    }
})

restartBtn.addEventListener("click", function() {
    if (sessionSelected.classList[1] == 'active') {
        clearInterval(sessionInterval);
        startSessionTimer(sessionTimeInMinutes * 60, sessionTimerShowing);
    } 
    else if (retireSelected.classList[1] == 'active') {
        clearInterval(retireInterval);
        startRetireTimer(retireTimeInMinutes * 60, retireTimerShowing);
    }
})

stopBtn.addEventListener("click", function() {
    if (sessionSelected.classList[1] == 'active') {
        clearInterval(sessionInterval);
        
    }
    else if (retireSelected.classList[1] == 'active') {
        clearInterval(retireInterval);
    }
})
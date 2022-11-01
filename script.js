const daysE1    = document.getElementById('days');
const hoursE1   = document.getElementById('hours');
const minsE1    = document.getElementById('mins');
const secondsE1   = document.getElementById('seconds');


const newYears = '9 feb 2023';

function countDown(){
    const newYearDate = new Date(newYears);
    console.log(newYearDate);
    const currentDate = new Date();
    console.log(currentDate);

    let totalSeconds = Math.floor((newYearDate-currentDate)/1000);
    const days = Math.floor(totalSeconds/(3600*24));
     totalSeconds %= 3600*24;
    const hours = Math.floor(totalSeconds/3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds/60);
    totalSeconds %= 60;
    const seconds = totalSeconds;
     
    daysE1.innerHTML = formatTime(days);
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);

     
}
  function formatTime(time){
    return time<10 ? `0${time}`:time;
  }

countDown();
setInterval(countDown,1000);    
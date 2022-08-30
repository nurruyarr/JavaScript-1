let givenName = prompt("Lütfen adınızı giriniz:");
let nameDOM = document.querySelector("#myName");
nameDOM.innerHTML = `${givenName}`;

function showTime() {
    let date = new Date();
  
    let hours = correctTime(date.getHours());
    let mins = correctTime(date.getMinutes());
    let secs = correctTime(date.getSeconds());
  
    let clockDOM = document.querySelector("#myClock");
    clockDOM.innerHTML = `${hours}:${mins}:${secs}`;
    setTimeout(showTime, 1000);
  }
  function correctTime(t) {
    if (t < 10) {
      return "0" + t;
    }
    return t;
  }
  showTime();
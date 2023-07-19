  function rotateClockHands() {
    var date = new Date();

    // WIB clock
    var hourHandWIB = document.getElementById('hour-hand-wib');
    var minuteHandWIB = document.getElementById('minute-hand-wib');
    var secondHandWIB = document.getElementById('second-hand-wib');
    var secondsWIB = date.getUTCSeconds() + (20 * 3);
    var minutesWIB = date.getUTCMinutes() - 1 + Math.floor(secondsWIB / 60);
    var hoursWIB = (date.getUTCHours() + 7 + Math.floor(minutesWIB / 60)) % 12;

    hourHandWIB.style.transform = `rotate(${hoursWIB * 30}deg)`;
    minuteHandWIB.style.transform = `rotate(${minutesWIB * 6}deg)`;
    secondHandWIB.style.transform = `rotate(${secondsWIB * 6}deg)`;

    // WITA clock
    var hourHandWITA = document.getElementById('hour-hand-wita');
    var minuteHandWITA = document.getElementById('minute-hand-wita');
    var secondHandWITA = document.getElementById('second-hand-wita');
    var secondsWITA = date.getUTCSeconds() + (20 * 2);
    var minutesWITA = date.getUTCMinutes() - 1 + Math.floor(secondsWITA / 60);
    var hoursWITA = (date.getUTCHours() + 7 + Math.floor(minutesWITA / 60) + 1) % 12;

    hourHandWITA.style.transform = `rotate(${hoursWITA * 30}deg)`;
    minuteHandWITA.style.transform = `rotate(${minutesWITA * 6}deg)`;
    secondHandWITA.style.transform = `rotate(${secondsWITA * 6}deg)`;

    // WIT clock
    var hourHandWIT = document.getElementById('hour-hand-wit');
    var minuteHandWIT = document.getElementById('minute-hand-wit');
    var secondHandWIT = document.getElementById('second-hand-wit');
    var secondsWIT = date.getUTCSeconds() + 20;
    var minutesWIT = date.getUTCMinutes() - 1 + Math.floor(secondsWIT / 60);
    var hoursWIT = (date.getUTCHours() + 7 + Math.floor(minutesWIT / 60) + 2) % 12;

    hourHandWIT.style.transform = `rotate(${hoursWIT * 30}deg)`;
    minuteHandWIT.style.transform = `rotate(${minutesWIT * 6}deg)`;
    secondHandWIT.style.transform = `rotate(${secondsWIT * 6}deg)`;
  }

  setInterval(rotateClockHands, 1000);
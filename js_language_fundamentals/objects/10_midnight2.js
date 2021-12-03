const MILLISECONDS_IN_MINUTE = 60000;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(':');
  
  let hoursToMilliseconds = parseInt(hours, 10) * 60 * MILLISECONDS_IN_MINUTE;
  let minutesToMilliseconds = parseInt(minutes, 10) * MILLISECONDS_IN_MINUTE;
  
    let dateObj = new Date();
    dateObj.setTime(0);
}

// unfinished
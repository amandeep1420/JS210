function timeOfDay(delta) {
  let baseTimeObj = new Date();
  
  const millisecondsInMinute = 60000;
  
  baseTimeObj.setTime(0 + delta * millisecondsInMinute);
  
  let hours           = String(baseTimeObj.getHours());
  let minutes         = String(baseTimeObj.getMinutes());
  
  if (minutes.length === 1) minutes = '0' + minutes;
  if (hours.length === 1) hours = '0' + hours;
  
  return `${hours}:${minutes}`;
}


// man, working with dates and times can be hard! whew
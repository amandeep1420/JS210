function dms(angle) {
  let degrees = Math.floor(angle);
  
  let minutes = (angle % degrees * 60) || 0;
  
  let seconds = (minutes % Math.floor(minutes) * 60) || 0;
  
  [degrees, minutes, seconds]
}

console.log(dms(360))
console.log(dms(254.6))
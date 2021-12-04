function dms(angle) {
  let degrees = Math.floor(angle);
  
  let minutes = (angle % degrees * 60) || 0;
  
  let seconds = (minutes % Math.floor(minutes) * 60) || 0;
  
  let strings = [degrees, minutes, seconds].map(num => String(num));
  
  strings = strings.map()//...
}

console.log(dms(360))
console.log(dms(254.6))

// come back to this problem to finish it
// 1

let today = new Date();

// 2

console.log(`Today's date is ${today.getDay()}`);

// 3

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(`Today's date is ${daysOfWeek[today.getDay()]}`);

// 4

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${today.getDate()}`);

// 5

// function dateSuffix(number) {
//   let numString = String(number);
  
//   if (numString[0] === '1' && numString.length == 2) {
//     return numString + 'th';
//   } else if ((numString[1] || numString[0]) === '1') { // if the string is one char, then
//     return numString + 'st';                           // numstring[1] returns undefined,
//   } else if ((numString[1] || numString[0]) === '2') { // so index 0 is used to check instead
//     return numString + 'nd';
//   } else if ((numString[1] || numString[0]) === '3') {
//     return numString + 'rd';
//   } else {
//     return numString + 'th';
//   }
// }

// their version is much better as it avoids repetition and is easier to read/understand
// mine was lazy; I was feeling lazy

function dateSuffix(date) {
  let dateString = String(date);

  let digit;
  if (dateString.length === 1 ) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  let suffix = 'th';
  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(today.getDate())}`);

// 6

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ` + 
            `${today.getMonth()} ${dateSuffix(today.getDate())}`);
            
// 7

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ` + 
            `${months[today.getMonth()]} ${dateSuffix(today.getDate())}`);
            
// 8

let formattedDay = (dateObj) => {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return daysOfWeek[today.getDay()];
};

function formattedMonth(dateObj) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[today.getMonth()];
}

function formattedDate(dateObj) {
  let day = formattedDay(dateObj);
  let month = formattedMonth(dateObj);
  let date = dateSuffix(dateObj.getDate());
  
  console.log(`Today's date is ${day}, ${month} ${date}`);
}

formattedDate(today);

// 9

console.log(today.getFullYear());
console.log(today.getYear());

// 10

console.log(today.getTime());

// 11

let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);

formattedDate(tomorrow);

// 12

let nextWeek = new Date(today.getTime());

console.log(today);

console.log(nextWeek);

console.log(today === nextWeek);

// 13

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(nextWeek.getDate() + 7);

console.log(today);

console.log(nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());

// 14

function formatTime(dateObj) {
  let hours   = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  
  let hoursString = hours < 10 ? `0${hours}` : String(hours);
  let minutesString = minutes < 10 ? `0${minutes}` : String(minutes);
  
  return `${hoursString}:${minutesString}`;
}
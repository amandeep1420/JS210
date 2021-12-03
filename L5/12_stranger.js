let greetings = function(namesArray, infoObject) {
  let title = infoObject['title'];
  let job = infoObject['occupation'];
  console.log(`Hello, ${namesArray.join(' ')}! Nice to have a ${title} ${job} around.`);
};

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
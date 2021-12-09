meow();

function meow() {
  console.log(sound);
}

let sound = 'meow';

let kittySound = () => {
  meow;
};

function prepareMeow(firstSound) {
  return function executeMeow(secondSound) {
    console.log(firstSound, secondSound);
  };
}
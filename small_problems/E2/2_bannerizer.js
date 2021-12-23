let logInBox = (string) => {
  let dashedLine = '+-' + string.replaceAll(/./g, '-') + '-+';
  let emptyLine  = `| ` + string.replaceAll(/./g, ' ') + ' |';
  let stringLine = `| ` + string + ' |';
  
  console.log(dashedLine);
  console.log(emptyLine);
  console.log(stringLine);
  console.log(emptyLine);
  console.log(dashedLine);
};

logInBox('Meow mix.');
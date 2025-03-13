const fs = require('fs');
const { exit } = require('process');

const arguments = process.argv;
const fileName = arguments[2];
const allContents = fs.readFileSync(fileName, 'utf-8');

let runningTotal = 0;

const translateContent = allContents.replace(/(two)/g, (match) => {
  return match.replace("two", "2");
});
console.log(translateContent);

allContents.split(/\r?\n/).forEach((line) => {
  const newLine = line.replace(/\D+/g, '');
  if (newLine) {
    const newInt = parseInt(newLine);
    runningTotal += newInt;
  }
});
console.log(`Running Total: ${runningTotal}`);
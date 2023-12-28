const fs = require('fs');
const { exit } = require('process');


const arguments = process.argv;
const fileName = arguments[2];
const allContents = fs.readFileSync(fileName, 'utf-8');

let runningTotal = 0;
const numbersMap = [['one','1'],['two','2'],['three','3'],['four','4'],['five','5'],['six','6'],['seven','7'],['eight','8'],['nine','9']];

// numbersMap.forEach((num) => {
//     translatedContent += allContents.replace(new RegExp(num[0],'g'),num[1]);
// });
// console.log(translatedContent);

function replacer(match, p1, p2, p3, p4,  offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return match.replace("two","2");
}

const translateContent = allContents.replace(/(two)/g,replacer);
console.log(translateContent);

allContents.split(/\r?\n/).forEach((line) => {


  const newLine = line.replace(/[A-Za-z]+/g,'');
  const newInt = parseInt(newLine.slice(0,1).concat(newLine.slice(-1)));
  runningTotal += newInt;
  // console.log(`line: ${newLine} ${newInt}`);
});
console.log(`Running Total: ${runningTotal}`);
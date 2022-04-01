/* 
problem statement: count the number of occurances in a word.
string: Internet
output:
I=1, n=2, t=2, e=2, r=1
*/
const str = "Internetttt";
const spl = str.split("");
// let emptyArray = [];
// let output = {};
// spl.forEach((l) => {
//   if (emptyArray.includes(l)) {
//     output[l] = ++output[l];
//   } else {
//     emptyArray.push(l);
//     output[l] = 1;
//   }
// });
// console.log(output);

/* using reduce */
let output = {};
spl.reduce((acc, curr) => {
  if (acc.includes(curr)) {
    output[curr] = ++output[curr];
  } else {
    acc.push(curr);
    output[curr] = 1;
  }
  return acc;
}, []);
// console.log(output);

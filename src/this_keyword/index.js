/* 
problem statement: what will be the value of a in console.
if it is undefined how will you print 10 without making any changes?
*/

var a = 10;
const app = () => {
  console.log(a);
  var a = 20;
};
app();

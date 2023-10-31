console.log(`
___________________Q1___________________
`);

let Numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (i = 0; i < Numbers.length; i++) {
  sum += Numbers[i];
}
console.log(`sum ${sum}`);
console.log(`
___________________Q2___________________
`);

let num = [16, 4, 2, 0, 19, 6];
let maxnumber = [0];
for (i = 1; i <= num.length; i++) {
  if (num[i] > maxnumber) {
    maxnumber = num[i];
  }
}
console.log(`max is ${maxnumber}`);

console.log(`
___________________Q3___________________
`);

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reversNum1 = [];
for (i = num1.length - 1; i >= 0; i--) {
  let value = num1[i];
  reversNum1.push(value);
}
console.log(reversNum1);

console.log(`
___________________Q4___________________
`);

let values = 8;
for (i = 1; i <= values; i++) {
  let n = "";
  for (j = 1; j <= i; j++) {
    n += j + " ";
  }
  console.log(n);
}

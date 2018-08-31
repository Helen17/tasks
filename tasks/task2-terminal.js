const readline = require("readline");

const array = [];

const factorial = num => {
  let numb = num;
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i -= 1) {
    numb *= i;
  }
  return numb;
};

const amountOfNumb = arr => {
  let amount = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 2 ** i && arr[i] < factorial(i)) {
      amount += 1;
    }
  }
  return amount;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", input => {
  if (input === "") {
    console.log(`Amount is: ${amountOfNumb(array)}`);
    rl.close();
  } else {
    array.push(+input);
  }
});

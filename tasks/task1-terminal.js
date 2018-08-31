const readline = require("readline");

const array = [];

const amountOfNumb = arr => {
  let amount = 0;
  for (let i = 1; i < arr.length - 1; i += 1) {
    const operation = (arr[i - 1] + arr[i + 1]) / 2;
    if (arr[i] < operation) {
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
    console.log(`Your array: ${array}
Amount is: ${amountOfNumb(array)}`);
    rl.close();
  } else {
    array.push(+input);
  }
});

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

const param = process.argv.slice(2).map(i => +i);

const amountOfNumb = arr => {
  let amount = 0;
  for (let i = 0; i < arr.length; i += i) {
    if (arr[i] > 2 ** i && arr[i] < factorial(i)) {
      amount += 1;
    }
  }
  return amount;
};

console.log(amountOfNumb(param));

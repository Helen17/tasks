const param = process.argv.slice(2).map(i => +i);
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

module.exports = amountOfNumb;
console.log(amountOfNumb(param));

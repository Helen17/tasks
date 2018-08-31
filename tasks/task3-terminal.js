const readline = require("readline");

const createPascalTriangle = arg => {
  const num = +arg;
  const pascalTriangle = [];
  for (let i = 0; i < num; i += 1) {
    pascalTriangle[i] = new Array(i + 1);
    for (let j = 0; j < i + 1; j += 1) {
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] =
          pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
      }
    }
  }
  return pascalTriangle;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on("line", input => {
  console.log(createPascalTriangle(input));
  rl.close();
});

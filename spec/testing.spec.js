const amountOfNumb = require(`../tasks/task1-console`);
const createPascalTriangle = require(`../tasks/task3-console`);

describe("test", function() {
    it("Amount of numbers", function() {
        expect(amountOfNumb([2,3,6,10,20,45,60,78,90])).toBe(5);
    });
});

describe("test 2", function() {
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
    it('factorial', function(){
        expect(factorial(4)).toBe(24);
    });
});

describe("test 3", function() {
    it(`Pascal Triangle`, function() {
        expect(createPascalTriangle(2)).toEqual([[ 1 ],[ 1, 1 ]]);
    });
});
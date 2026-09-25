function getSquareNumbers(numbers: number[]) {
  return numbers.map((number) => ({
    number: number,
    square: number ** 2,
  }));
}

console.log(getSquareNumbers([1, 2, 3]));

function palindromCheck(str: string): boolean {
  return str === [...str].reverse().join("");
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false

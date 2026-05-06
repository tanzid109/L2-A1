//?Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers: number[] = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
      evenNumbers.push(numbers[index]);
    }
  }
  console.log(evenNumbers);
  return evenNumbers;
}
// filterEvenNumbers([1, 2, 3, 4, 5]);

//?Problem 2
function reverseString(word: string): string {
  const reverseWord = word.split("").reverse().join("");
  console.log(reverseWord);
  return reverseWord;
}
// reverseString("typescript");

//?Problem 3
function checkType(input: string | number): "String" | "Number" {
  const typeOfInput = typeof input === "string" ? "String" : "Number";
  console.log(typeOfInput);
  return typeOfInput;
}
// checkType(26);

//?Problem 4
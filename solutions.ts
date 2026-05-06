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
// reverseString("tanzid");

//?Problem 3
function checkType(input: string | number): "String" | "Number" {
  const typeOfInput = typeof input === "string" ? "String" : "Number";
  console.log(typeOfInput);
  return typeOfInput;
}
// checkType(26);

//?Problem 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// Sample Input:
// const user = { id: 1, name: "John Doe", age: 21 };
// getProperty(user, "name");


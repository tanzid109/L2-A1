//?Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers: number[] = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
      evenNumbers.push(numbers[index]);
    }
  }
  return evenNumbers;
}

//?Problem 2
function reverseString(word: string): string {
  const reverseWord = word.split("").reverse().join("");
  return reverseWord;
}

//?Problem 3
function checkType(input: string | number): "String" | "Number" {
  const typeOfInput = typeof input === "string" ? "String" : "Number";
  return typeOfInput;
}

//?Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

//? Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
interface ReadBook extends Book {
  isRead: boolean;
}
function toggleReadStatus(book: Book): ReadBook {
  return {
    ...book,
    isRead: true,
  };
}

//? Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

//? Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}

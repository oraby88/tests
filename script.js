function addTwoNumbers(l1 = [1, 2, 3], l2 = [4, 5, 6]) {
  let ll1 = l1.reverse();
  let ll2 = l2.reverse();
  let sum = "";
  let sum2 = "";
  for (let i = 0; i < l1.length; i++) {
    sum += ll1[i];
  }
  for (let i = 0; i < l2.length; i++) {
    sum2 += ll2[i];
  }
  let result = parseInt(sum) + parseInt(sum2);
  let result2 = result
    .toString()
    .split("")
    .reverse()
    .map((item) => parseInt(item));
}

class bank {
  constructor(accountNumber, accountHolderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposite(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}$ New Balance: ${this.balance}$`);
    } else {
      console.log("can't deposit negative amount.");
    }
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}$ New Balance: ${this.balance}$`);
    } else {
      console.log("Invalid amount to withdraw.");
    }
  }
}

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }
  sayHi() {
    return `the triangle with side A of ${this.a} and side B of ${
      this.b
    } has an area of ${this.getArea()}`;
  }
}
class shyTriangle extends Triangle {
  sayHi() {
    return `the shy triangle with side A of ${this.a} and side B of ${
      this.b
    } has an area of ${this.getArea()}`;
  }
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  // static property
  static species = "Felis catus";
  // static method
  static getSpecies() {
    return this.species;
  }
}
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getInfo() {
    return `${this.title} by ${this.author}, ${this.year} years`;
  }
  getTitle() {
    return this.title;
  }
}
class EBook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }
  getFileSize() {
    return this.fileSize;
  }
  download() {
    return `Downloading ${this.title} and it is ${this.fileSize}MB`;
  }
}

class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }
  static average(arr) {
    // return arr.reduce((a, b) => a + b, 0) / this.arr.length;
    if (arr.length === 0) {
      return "Array cannot be empty.";
    }
    sum = 0;
    arr.forEach((element) => {
      sum += element;
    });

    return sum / arr.length;
  }

  static max() {
    return Math.max(...arr);
  }
}

class Circel{
  constructor(redius){
    this.redius = redius;
  }
  //getters for diameter
  // the point of using getters is to act like a property , but we have function logic behind it
  // so we can use it like a property but it is a function behind the scene
  get diameter(){
    return this.redius * 2;
  }
}


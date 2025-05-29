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

class Circel {
  static allowedColors = new Set(["red", "blue", "green"]);
  constructor(redius, color) {
    if (Circel.allowedColors.has(color)) {
      this._color = color;
    } else {
      throw new Error("color must be red, blue or green");
    }
    this.redius = redius;
  }

  set redius(redius) {
    if (redius < 0) {
      console.log("redius can't be negative");
    } else {
      this._redius = redius;
    }
  }
  set color(color) {
    // if(color === "red" || color === "blue" || color === "green"){
    //   this._color = color;
    // }else{
    //   console.log("color must be red, blue or green")
    // }

    // allowedColors = ["red", "blue", "green"];
    // if(allowedColors.includes(color)){
    //   this._color = color;
    // }else{
    //   console.log("color must be red, blue or green")
    // }

    if (allowedColors.has(color)) {
      this._color = color;
    } else {
      console.log("color must be red, blue or green");
    }
  }

  //getters for diameter
  // the point of using getters is to act like a property , but we have function logic behind it
  // so we can use it like a property but it is a function behind the scene
  get diameter() {
    return this.redius * 2;
  }
  get color() {
    return this.color;
  }

  #privateMethod() {
    console.log("This is a private method");
  }
  publicMethod() {
    console.log("This is a public method");
    this.#privateMethod(); // calling private method from public method
  }
}

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set setFullName(newName) {
    const [first, last] = newName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

class Connection {
  static connection = null;
  static {
    if (this.connection != null) {
      throw new Error("Connection already exists.");
    } else {
      console.log("Connection created successfully.");
    }
  }
}

class UserProfile {
  #userName;
  #email;
  #birthdate;
  constructor(userName, email, birthdate) {
    if (typeof userName !== "string" || userName.trim() === "") {
      throw new Error("Invalid username");
    } else {
      this.#userName = userName;
    }
    if (!email.includes("@")) {
      throw new Error("Invalid email.");
    } else {
      this.#email = email;
    }
    if (isNaN(Date.parse(birthdate))) {
      throw new Error("Invalid birthdate.");
    } else {
      this.#birthdate = birthdate;
    }
  }

  set userName(name) {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Invalid username");
    } else {
      this.#userName = name;
    }
  }
  get userName() {
    return this.#userName;
  }
  set email(email) {
    if (!email.includes("@")) {
      throw new Error("Invalid email.");
    } else {
      this.#email = email;
    }
  }
  get email() {
    return this.#email;
  }
  set birthdate(date) {
    if (!(date instanceof Date)) {
      throw new Error("Invalid birthdate.");
    } else {
      this.#birthdate = date;
    }
  }
  get birthdate() {
    return this.#birthdate;
  }
  displayProfile() {
    return `User: ${this.#userName}, Email: ${this.#email}, Birthdate: ${
      this.#birthdate
    }`;
  }
}

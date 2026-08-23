// Cau 1
class Person {
    name: string; // Tên của người
    age: number; // Tuổi của người

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Phuong thức để hiển thị thông tin của người
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Câu 2 
class Student extends Person {
    grade: number; // Điểm số của sinh viên

    constructor(name: string, age: number, grade: number) {
        super(name, age); // Gọi constructor của lớp cha
        this.grade = grade;
    }

    // Phương thức để hiển thị thông tin của sinh viên
    displayInfo(): void {
        super.displayInfo(); // Gọi phương thức displayInfo của lớp cha
        console.log(`Grade: ${this.grade}`);
    }
}

// Câu 3

class Car {
    brand: string; // Thương hiệu của xe
    model: string; // Mẫu xe
    year: number; // Năm sản xuất của xe

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Phương thức để hiển thị thông tin của xe
    displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Câu 4
class Rectangle {
    width: number; // Chiều rộng của hình chữ nhật
    height: number; // Chiều cao của hình chữ nhật

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Phương thức để tính diện tích của hình chữ nhật
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Câu 5
class BankAccount {
    balance: number; // Số dư tài khoản

    constructor(balance: number) {
        this.balance = balance;
    }

    // Phuong thước deposit để nạp tiền vào tài khoản
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Phuong thước withdraw để rút tiền từ tài khoản
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
}

// Câu 6

class Book {
    title: string; // Tiêu đề của sách
    author: string; // Tác giả của sách
    year: number; // Năm xuất bản của sách

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// Câu 7
class User {
    name: string; // Tên người dùng

    constructor(name: string) {
        this.name = name;
    }

    // Phương thức get
    getName(): string {
        return this.name;
    }

    // Phương thức set
    setName(name: string): void {
        this.name = name;
    }
}

// Câu 8
class Product {
    name: string; // Tên sản phẩm
    price: number; // Giá sản phẩm

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

// Mãng products để lưu trữ danh sách sản phẩm
const products: Product[] = [
  new Product("Chuột", 50),
  new Product("Bàn phím", 150),
  new Product("Màn hình", 300),
  new Product("Tai nghe", 80),
];

const filteredProducts = products.filter(p => p.price > 100); // Lọc các sản phẩm có giá lớn hơn 100

// Câu 9
interface Animal {
  name: string; // Tên của động vật
  sound(): string; // Phương thức để phát ra âm thanh của động vật
}

// Câu 10
class Account {
  public username: string;       // truy cập tự do từ bên ngoài
  private password: string;      // chỉ truy cập trong nội bộ class
  readonly accountId: string;    // chỉ gán được 1 lần lúc khởi tạo
 
  constructor(username: string, password: string, accountId: string) {
    this.username = username;
    this.password = password;
    this.accountId = accountId;
  }
 
  // Vì password là private nên cần method để kiểm tra
  checkPassword(input: string): boolean {
    return input === this.password;
  }
}

// Câu 11
class AnimalBase {
  constructor(public name: string) {}
}
 
class Dog extends AnimalBase {
  bark(): void {
    console.log(`${this.name} says: Woof! Woof!`);
  }
}
 
class Cat extends AnimalBase {
  meow(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

// Câu 12

interface Flyable {
    fly(): void; // Phương thức để bay
}

interface Swimmable {
    swim(): void; // Phương thức để bơi
}

class Bird implements Flyable {
    fly(): void {
        console.log("The bird is flying.");
    }
}

class Fish implements Swimmable {
    swim(): void {
        console.log("The fish is swimming.");
    }
}

// Câu 13
abstract class Shape {
  // Phương thức trừu tượng - bắt buộc lớp con phải implement
  abstract area(): number;
 
  // Phương thức thường, dùng chung cho các lớp con
  describe(): void {
    console.log(`Diện tích là: ${this.area()}`);
  }
}
 
class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  area(): number {
    return this.side * this.side;
  }
}
 
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const square = new Square(5);
square.describe(); 

const circle = new Circle(3);
circle.describe(); 

// Câu 14

class Employee {
  constructor(public name: string, public salary: number) {}
}
 
class Manager extends Employee {
  // Phương thức riêng của Manager
  manageTeam(): void {
    console.log(`${this.name} đang quản lý đội nhóm`);
  }
}
 
class Developer extends Employee {
  // Phương thức riêng của Developer
  writeCode(): void {
    console.log(`${this.name} đang viết code`);
  }
}

const manager = new Manager("Alice", 80000);
manager.manageTeam(); // Alice đang quản lý đội nhóm

// Câu 15

class Library {
    books: Book[]; // Mảng chứa các sách trong thư viện
    users: User[]; // Mảng chứa các người dùng của thư viện

    constructor() {
        this.books = [];
        this.users = [];
    }

    // Phương thức để thêm sách vào thư viện
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Phương thức showBooks để hiển thị danh sách sách trong thư viện
    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author} (${book.year})`);
        });
    }
}

const library = new Library();
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
library.addBook(new Book("1984", "George Orwell", 1949));
library.showBooks();

// Câu 16
class Box<T> {
  private content: T;
 
  constructor(content: T) {
    this.content = content;
  }
 
  getContent(): T {
    return this.content;
  }
 
  setContent(content: T): void {
    this.content = content;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello, TypeScript!");
console.log(numberBox.getContent()); 
console.log(stringBox.getContent());

// Câu 17

class Logger {
  // instance duy nhất được lưu trữ static
  private static instance: Logger;
 
  // constructor private -> không thể new Logger() từ bên ngoài
  private constructor() {}
 
  // Phương thức để lấy (hoặc tạo) instance duy nhất
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
 
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

Logger.getInstance().log("This is a singleton logger instance.");

// Câu 18

class MathUtils {
  // Phương thức static để tính tổng hai số
  static add(a: number, b: number): number {
    return a + b;
  }

    // Phương thức static để tính hiệu hai số
    static subtract(a: number, b: number): number {
        return a - b;
    }

    // Phương thức static để tính tích hai số
    static multiply(a: number, b: number): number {
        return a * b;
    }

    // Phương thức static để tính thương hai số
    static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    }
}

const sum = MathUtils.add(10, 5);
const difference = MathUtils.subtract(10, 5);
const product = MathUtils.multiply(10, 5);
const quotient = MathUtils.divide(10, 5);

console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}`);

// Câu 19

class AnimalPoly {
  makeSound(): void {
    console.log("Animal makes a sound");
  }
}
 
class DogPoly extends AnimalPoly {
  // Ghi đè phương thức của lớp cha
  makeSound(): void {
    console.log("Dog barks");
  }
}
 
class CatPoly extends AnimalPoly {
  makeSound(): void {
    console.log("Cat meows");
  }
}
 
// Minh họa tính đa hình: cùng 1 lời gọi nhưng hành vi khác nhau tùy đối tượng
function demoPolymorphism(animals: AnimalPoly[]): void {
  animals.forEach((a) => a.makeSound());
}

const animals: AnimalPoly[] = [new DogPoly(), new CatPoly()];
demoPolymorphism(animals);

// Câu 20

interface Vehicle {
  speed: number;
  drive(): void;
}
 
class CarVehicle implements Vehicle {
  constructor(public speed: number) {}
  drive(): void {
    console.log(`Car is driving at ${this.speed} km/h`);
  }
}
 
class Bike implements Vehicle {
  constructor(public speed: number) {}
  drive(): void {
    console.log(`Bike is riding at ${this.speed} km/h`);
  }
}
const car = new CarVehicle(120);
const bike = new Bike(30);
car.drive(); 
bike.drive();

// Câu 21
class Repository<T> {
    private items: T[] = []; 

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const userRepository = new Repository<User>();
userRepository.add(new User("Alice"));
userRepository.add(new User("Bob"));

const allUsers = userRepository.getAll();
allUsers.forEach(user => console.log(user.getName()));

// Câu 22
class Stack<T> {
  private items: T[] = [];
 
  // Đẩy phần tử vào đầu stack
  push(item: T): void {
    this.items.push(item);
  }
 
  // Lấy và xóa phần tử ở đầu stack
  pop(): T | undefined {
    return this.items.pop();
  }
 
  // Xem phần tử ở đầu stack mà không xóa
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
 
  // Kiểm tra stack có rỗng không
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek());

// Câu 23

interface Payment {
  pay(amount: number): void;
}
 
class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Đã thanh toán ${amount} bằng tiền mặt`);
  }
}
 
class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Đã thanh toán ${amount} bằng thẻ`);
  }
}

const cashPayment = new CashPayment();
const cardPayment = new CardPayment();
cashPayment.pay(100);
cardPayment.pay(200);

// Câu 24
abstract class Appliance {
  abstract turnOn(): void;
 
  // Phương thức dùng chung
  turnOff(): void {
    console.log("Thiết bị đã tắt");
  }
}
 
class Fan extends Appliance {
  turnOn(): void {
    console.log("Quạt đang bật");
  }
}
 
class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("Máy lạnh đang bật");
  }
}

const fan = new Fan();
fan.turnOn();

// Câu 25
class ShapeStatic {
  // Static method - gọi trực tiếp qua tên class, không cần khởi tạo
  static describe(): void {
    console.log("Shape là hình học tổng quát");
  }
}
ShapeStatic.describe();

// Câu 26

class Order {
  products: Product[] = [];
 
  // Thêm sản phẩm vào đơn hàng
  addProduct(product: Product): void {
    this.products.push(product);
  }
 
  // Tính tổng giá trị đơn hàng
  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.price, 0);
  }
}

const order = new Order();
order.addProduct(new Product("Chuột", 50));
order.addProduct(new Product("Bàn phím", 150));
console.log(`Tổng giá trị đơn hàng: ${order.calculateTotal()}`);

// Câu 27

class Teacher extends Person {
  subject: string;
 
  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this.subject = subject;
  }
 
  // Phương thức giới thiệu bản thân
  introduce(): void {
    console.log(
      `Xin chào, tôi tên ${this.name}, ${this.age} tuổi, dạy môn ${this.subject}`
    );
  }
}

const teacher = new Teacher(" cô Lan", 30, "Toán");
teacher.introduce();

// Câu 28

class AnimalProtected {
  // protected: chỉ class này và các class con truy cập được
  protected makeSound(): void {
    console.log("Animal makes a generic sound");
  }
 
  // Method public để "kích hoạt" makeSound từ bên ngoài
  performSound(): void {
    this.makeSound();
  }
}
 
class DogProtected extends AnimalProtected {
  protected makeSound(): void {
    console.log("Dog barks: Woof!");
  }
}
 
class CatProtected extends AnimalProtected {
  protected makeSound(): void {
    console.log("Cat meows: Meow!");
  }
}
const dogProtected = new DogProtected();
dogProtected.performSound(); 

// Câu 29
interface Movable {
  move(): void;
}
 
class CarMovable implements Movable {
  move(): void {
    console.log("Car is moving on the road");
  }
}
 
class Robot implements Movable {
  move(): void {
    console.log("Robot is moving using its legs/wheels");
  }
}
const carMovable = new CarMovable();
const robot = new Robot();
carMovable.move(); 
robot.move();

// Câu 30

class School {
  students: Student[] = [];
  teachers: Teacher[] = [];
 
  addStudent(student: Student): void {
    this.students.push(student);
  }
 
  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }
 
  // Hiển thị toàn bộ thông tin học sinh và giáo viên
  displayInfo(): void {
    console.log("=== Danh sách học sinh ===");
    this.students.forEach((s) => s.displayInfo());
 
    console.log("=== Danh sách giáo viên ===");
    this.teachers.forEach((t) => t.introduce());
  }
}

const school = new School();
school.addStudent(new Student("Nam", 20, 8.5));
school.addStudent(new Student("Lan", 19, 9.0));
school.addTeacher(new Teacher("Cô Mai", 35, "Văn"));
school.addTeacher(new Teacher("Thầy Hùng", 40, "Toán"));
school.displayInfo();

"use strict";
// Cau 1
class Person {
    name; // Tên của người
    age; // Tuổi của người
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Phuong thức để hiển thị thông tin của người
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
// Câu 2 
class Student extends Person {
    grade; // Điểm số của sinh viên
    constructor(name, age, grade) {
        super(name, age); // Gọi constructor của lớp cha
        this.grade = grade;
    }
    // Phương thức để hiển thị thông tin của sinh viên
    displayInfo() {
        super.displayInfo(); // Gọi phương thức displayInfo của lớp cha
        console.log(`Grade: ${this.grade}`);
    }
}
// Câu 3
class Car {
    brand; // Thương hiệu của xe
    model; // Mẫu xe
    year; // Năm sản xuất của xe
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // Phương thức để hiển thị thông tin của xe
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
// Câu 4
class Rectangle {
    width; // Chiều rộng của hình chữ nhật
    height; // Chiều cao của hình chữ nhật
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Phương thức để tính diện tích của hình chữ nhật
    calculateArea() {
        return this.width * this.height;
    }
}
// Câu 5
class BankAccount {
    balance; // Số dư tài khoản
    constructor(balance) {
        this.balance = balance;
    }
    // Phuong thước deposit để nạp tiền vào tài khoản
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    // Phuong thước withdraw để rút tiền từ tài khoản
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Invalid withdrawal amount.");
        }
    }
}
// Câu 6
class Book {
    title; // Tiêu đề của sách
    author; // Tác giả của sách
    year; // Năm xuất bản của sách
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// Câu 7
class User {
    name; // Tên người dùng
    constructor(name) {
        this.name = name;
    }
    // Phương thức get
    getName() {
        return this.name;
    }
    // Phương thức set
    setName(name) {
        this.name = name;
    }
}
// Câu 8
class Product {
    name; // Tên sản phẩm
    price; // Giá sản phẩm
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// Mãng products để lưu trữ danh sách sản phẩm
const products = [
    new Product("Chuột", 50),
    new Product("Bàn phím", 150),
    new Product("Màn hình", 300),
    new Product("Tai nghe", 80),
];
const filteredProducts = products.filter(p => p.price > 100); // Lọc các sản phẩm có giá lớn hơn 100
// Câu 10
class Account {
    username; // truy cập tự do từ bên ngoài
    password; // chỉ truy cập trong nội bộ class
    accountId; // chỉ gán được 1 lần lúc khởi tạo
    constructor(username, password, accountId) {
        this.username = username;
        this.password = password;
        this.accountId = accountId;
    }
    // Vì password là private nên cần method để kiểm tra
    checkPassword(input) {
        return input === this.password;
    }
}
// Câu 11
class AnimalBase {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends AnimalBase {
    bark() {
        console.log(`${this.name} says: Woof! Woof!`);
    }
}
class Cat extends AnimalBase {
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}
class Bird {
    fly() {
        console.log("The bird is flying.");
    }
}
class Fish {
    swim() {
        console.log("The fish is swimming.");
    }
}
// Câu 13
class Shape {
    // Phương thức thường, dùng chung cho các lớp con
    describe() {
        console.log(`Diện tích là: ${this.area()}`);
    }
}
class Square extends Shape {
    side;
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const square = new Square(5);
square.describe();
const circle = new Circle(3);
circle.describe();
// Câu 14
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee {
    // Phương thức riêng của Manager
    manageTeam() {
        console.log(`${this.name} đang quản lý đội nhóm`);
    }
}
class Developer extends Employee {
    // Phương thức riêng của Developer
    writeCode() {
        console.log(`${this.name} đang viết code`);
    }
}
const manager = new Manager("Alice", 80000);
manager.manageTeam(); // Alice đang quản lý đội nhóm
// Câu 15
class Library {
    books; // Mảng chứa các sách trong thư viện
    users; // Mảng chứa các người dùng của thư viện
    constructor() {
        this.books = [];
        this.users = [];
    }
    // Phương thức để thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    // Phương thức showBooks để hiển thị danh sách sách trong thư viện
    showBooks() {
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
class Box {
    content;
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
}
const numberBox = new Box(123);
const stringBox = new Box("Hello, TypeScript!");
console.log(numberBox.getContent());
console.log(stringBox.getContent());
// Câu 17
class Logger {
    // instance duy nhất được lưu trữ static
    static instance;
    // constructor private -> không thể new Logger() từ bên ngoài
    constructor() { }
    // Phương thức để lấy (hoặc tạo) instance duy nhất
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
Logger.getInstance().log("This is a singleton logger instance.");
// Câu 18
class MathUtils {
    // Phương thức static để tính tổng hai số
    static add(a, b) {
        return a + b;
    }
    // Phương thức static để tính hiệu hai số
    static subtract(a, b) {
        return a - b;
    }
    // Phương thức static để tính tích hai số
    static multiply(a, b) {
        return a * b;
    }
    // Phương thức static để tính thương hai số
    static divide(a, b) {
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
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class DogPoly extends AnimalPoly {
    // Ghi đè phương thức của lớp cha
    makeSound() {
        console.log("Dog barks");
    }
}
class CatPoly extends AnimalPoly {
    makeSound() {
        console.log("Cat meows");
    }
}
// Minh họa tính đa hình: cùng 1 lời gọi nhưng hành vi khác nhau tùy đối tượng
function demoPolymorphism(animals) {
    animals.forEach((a) => a.makeSound());
}
const animals = [new DogPoly(), new CatPoly()];
demoPolymorphism(animals);
class CarVehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    drive() {
        console.log(`Car is driving at ${this.speed} km/h`);
    }
}
class Bike {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    drive() {
        console.log(`Bike is riding at ${this.speed} km/h`);
    }
}
const car = new CarVehicle(120);
const bike = new Bike(30);
car.drive();
bike.drive();
// Câu 21
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const userRepository = new Repository();
userRepository.add(new User("Alice"));
userRepository.add(new User("Bob"));
const allUsers = userRepository.getAll();
allUsers.forEach(user => console.log(user.getName()));
// Câu 22
class Stack {
    items = [];
    // Đẩy phần tử vào đầu stack
    push(item) {
        this.items.push(item);
    }
    // Lấy và xóa phần tử ở đầu stack
    pop() {
        return this.items.pop();
    }
    // Xem phần tử ở đầu stack mà không xóa
    peek() {
        return this.items[this.items.length - 1];
    }
    // Kiểm tra stack có rỗng không
    isEmpty() {
        return this.items.length === 0;
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek());
class CashPayment {
    pay(amount) {
        console.log(`Đã thanh toán ${amount} bằng tiền mặt`);
    }
}
class CardPayment {
    pay(amount) {
        console.log(`Đã thanh toán ${amount} bằng thẻ`);
    }
}
const cashPayment = new CashPayment();
const cardPayment = new CardPayment();
cashPayment.pay(100);
cardPayment.pay(200);
// Câu 24
class Appliance {
    // Phương thức dùng chung
    turnOff() {
        console.log("Thiết bị đã tắt");
    }
}
class Fan extends Appliance {
    turnOn() {
        console.log("Quạt đang bật");
    }
}
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Máy lạnh đang bật");
    }
}
const fan = new Fan();
fan.turnOn();
// Câu 25
class ShapeStatic {
    // Static method - gọi trực tiếp qua tên class, không cần khởi tạo
    static describe() {
        console.log("Shape là hình học tổng quát");
    }
}
ShapeStatic.describe();
// Câu 26
class Order {
    products = [];
    // Thêm sản phẩm vào đơn hàng
    addProduct(product) {
        this.products.push(product);
    }
    // Tính tổng giá trị đơn hàng
    calculateTotal() {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
}
const order = new Order();
order.addProduct(new Product("Chuột", 50));
order.addProduct(new Product("Bàn phím", 150));
console.log(`Tổng giá trị đơn hàng: ${order.calculateTotal()}`);
// Câu 27
class Teacher extends Person {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    // Phương thức giới thiệu bản thân
    introduce() {
        console.log(`Xin chào, tôi tên ${this.name}, ${this.age} tuổi, dạy môn ${this.subject}`);
    }
}
const teacher = new Teacher(" cô Lan", 30, "Toán");
teacher.introduce();
// Câu 28
class AnimalProtected {
    // protected: chỉ class này và các class con truy cập được
    makeSound() {
        console.log("Animal makes a generic sound");
    }
    // Method public để "kích hoạt" makeSound từ bên ngoài
    performSound() {
        this.makeSound();
    }
}
class DogProtected extends AnimalProtected {
    makeSound() {
        console.log("Dog barks: Woof!");
    }
}
class CatProtected extends AnimalProtected {
    makeSound() {
        console.log("Cat meows: Meow!");
    }
}
const dogProtected = new DogProtected();
dogProtected.performSound();
class CarMovable {
    move() {
        console.log("Car is moving on the road");
    }
}
class Robot {
    move() {
        console.log("Robot is moving using its legs/wheels");
    }
}
const carMovable = new CarMovable();
const robot = new Robot();
carMovable.move();
robot.move();
// Câu 30
class School {
    students = [];
    teachers = [];
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    // Hiển thị toàn bộ thông tin học sinh và giáo viên
    displayInfo() {
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

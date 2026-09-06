"use strict";
// Câu 1 
function HelloAsyncPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Word!");
        }, 2000);
    });
}
// HelloAsyncPromise().then((message) => {
//     console.log(message);
// });
// Câu 2 
function getNumberAsyncPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
// getNumberAsyncPromise().then((message) => {
//     console.log(message);
// });
// Câu 3
function rejectsAsyncPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Promise rejected!"));
        }, 1000);
    });
}
// rejectsAsyncPromise().then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error.message);
// });
// Câu 4
function getRamdomNumberAsyncPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5) {
            resolve(random);
        }
        else {
            reject(new Error("Random number is greater than or equal to 0.5"));
        }
    });
}
// getRamdomNumberAsyncPromise().then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error.message);
// });
// Câu 5
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done after ${time} milliseconds`);
        }, time);
    });
}
// simulateTask(2000).then((message) => {
//     console.log(message);
// });
// Câu 6
function allPromises() {
    const promises = [
        simulateTask(1000),
        simulateTask(2000),
        simulateTask(3000)
    ];
    Promise.all(promises).then((results) => {
        console.log(results);
    }); // đợi xong hết rùi mới in ra kết quả
}
// allPromises();
// Câu 7 : Promise.rare
function rarePromise() {
    const promises = [
        simulateTask(1000),
        simulateTask(2000),
        simulateTask(3000)
    ];
    Promise.race(promises).then((result) => {
        console.log(result);
    }); // đợi xong cái nào nhanh nhất thì in ra kết quả
}
// rarePromise();
// Câu 8
function square(n) {
    return Promise.resolve(n * n);
}
function CheckSquare() {
    square(2)
        .then((result) => result * 2) // nhân đôi
        .then((result) => result + 5) // cộng 5
        .then((finalResult) => console.log("Kết quả chuỗi Promise:", finalResult));
    // 2 -> bình phương = 4 -> nhân đôi = 8 -> cộng 5 = 13
}
// CheckSquare();
// Câu 9
function getEvenNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evens = arr.filter((n) => n % 2 === 0);
            resolve(evens);
        }, 3000);
    });
}
// getEvenNumbers([1, 2, 3, 4, 5, 6]).then((evens) => {
//     console.log("Các số chẵn:", evens);
// });
// Câu 10
function FinallyPromise() {
    getNumberAsyncPromise()
        .then((num) => console.log("Thành công:", num))
        .catch((err) => console.error("Thất bại:", err.message))
        .finally(() => console.log("Done")); // luôn chạy dù thành công hay thất bại
}
// FinallyPromise();
// Câu 11
async function helloAsyncAwait() {
    const message = await HelloAsyncPromise(); // chờ Promise hoàn thành
    console.log(message);
}
// helloAsyncAwait();
// Câu 12 
async function runSimulateTask() {
    const result = await simulateTask(2000);
    console.log("Kết quả simulateTask:", result);
}
// runSimulateTask();
// Câu 13
async function handleErrorWithTryCatch() {
    try {
        await rejectsAsyncPromise(); // Promise này sẽ reject
    }
    catch (error) {
        console.error("Bắt được lỗi:", error.message); // bắt lỗi và in ra thông báo
    }
}
// handleErrorWithTryCatch();
// Câu 14
async function multiplyByThree(num) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
}
// multiplyByThree(5).then((result) => {
//     console.log("Kết quả nhân 3:", result);
// });
// Câu 15
async function runSequentially() {
    console.log("Bắt đầu chạy tuần tự...");
    const result1 = await multiplyByThree(2); // chờ xong mới chạy tiếp
    console.log("Kết quả 1:", result1);
    const result2 = await multiplyByThree(result1);
    console.log("Kết quả 2:", result2);
    const result3 = await multiplyByThree(result2);
    console.log("Kết quả 3:", result3);
}
// runSequentially();
// Câu 16
async function runInParallel() {
    console.log("Bắt đầu chạy song song...");
    // Cả 3 hàm chạy đồng thời, không chờ lần lượt
    const [r1, r2, r3] = await Promise.all([
        multiplyByThree(1),
        multiplyByThree(2),
        multiplyByThree(3),
    ]);
    console.log("Kết quả song song:", r1, r2, r3);
}
// runInParallel();
// Câu 17
async function iterateWithForAwait() {
    const promises = [multiplyByThree(1), multiplyByThree(2), multiplyByThree(3)];
    // for await...of xử lý TUẦN TỰ từng Promise trong mảng
    for await (const result of promises) {
        console.log("Kết quả từng phần tử:", result);
    }
}
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}
const arrUser = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
];
// fetchUser(1).then((user) => {
//     console.log("Người dùng:", user);
//   });
// Câu 19
async function fetchUsers(ids) {
    const userPromises = ids.map((id) => fetchUser(id));
    return Promise.all(userPromises);
}
// fetchUsers([1, 2]).then((users) => {
//     console.log("Danh sách người dùng:", users);
//   });
// Câu 20
function timeoutPromise(ms) {
    return new Promise((_resolve, reject) => {
        setTimeout(() => reject(new Error("Request timeout")), ms);
    });
}
async function fetchUserWithTimeout(id) {
    // Promise.race giữa API thật và Promise timeout - cái nào xong trước thắng
    return Promise.race([fetchUser(id), timeoutPromise(2000)]);
}
async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Todo:", data);
}
// getTodo();
// Câu 22
async function getMultipleTodos(ids) {
    for (const id of ids) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        console.log(`Todo ${id}:`, data);
    }
}
// getMultipleTodos([1, 2, 3]);
// Câu 23
async function getIncompleteTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    // Lọc các todo có completed = false
    return todos.filter((todo) => !todo.completed);
}
// getIncompleteTodos().then((incompleteTodos) => {
//     console.log("Danh sách todo chưa hoàn thành:", incompleteTodos);
//   });
// Câu 24 
async function postData(data) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Kết quả POST:", result);
}
// postData({ userId: 1, id: 201, title: "New Todo", completed: false });
// Câu 25
function downloadFile() {
    return new Promise((resolve) => {
        console.log("Bắt đầu tải file...");
        setTimeout(() => {
            console.log("Tải file hoàn tất!");
            resolve();
        }, 3000);
    });
}
// downloadFile();
// Câu 26
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function waitFiveSeconds() {
    console.log("Đang chờ 5 giây...");
    await wait(5000);
    console.log("Đã chờ xong 5 giây!");
}
// waitFiveSeconds();
// Câu 27
async function fetchWithRetry(url, retries) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.log(`Lần thử ${attempt} thất bại: ${error.message}`);
            if (attempt === retries) {
                throw new Error(`Đã thử ${retries} lần nhưng vẫn thất bại`);
            }
        }
    }
}
// fetchWithRetry("https://jsonplaceholder.typicode.com/todos/501", 3)
//     .then((data) => {
//       console.log("Dữ liệu nhận được:", data);
//     })
//     .catch((error) => {
//       console.error("Lỗi:", (error as Error).message);
//     });
// Câu 28
async function batchProcess() {
    const tasks = [1, 2, 3, 4, 5].map((num) => multiplyByThree(num));
    // Promise.all xử lý đồng thời 5 tác vụ
    const results = await Promise.all(tasks);
    console.log("Kết quả batch xử lý song song:", results);
}
// batchProcess();
// Câu 29
async function queueProcess() {
    const queue = [1, 2, 3, 4, 5];
    const results = [];
    // Xử lý từng tác vụ MỘT SAU MỘT (tuần tự), không song song
    for (const num of queue) {
        const result = await multiplyByThree(num);
        results.push(result);
        console.log(`Đã xử lý xong tác vụ: ${num} -> ${result}`);
    }
    console.log("Kết quả toàn bộ hàng đợi:", results);
}
// queueProcess();
// Câu 30
async function handleAllSettled() {
    const apiCalls = [
        fetchUser(1),
        fetchUser(2),
        rejectsAsyncPromise(), // cố tình cho 1 call bị lỗi
    ];
    // Promise.allSettled KHÔNG dừng lại dù có Promise bị reject
    const results = await Promise.allSettled(apiCalls);
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Call ${index + 1} THÀNH CÔNG:`, result.value);
        }
        else {
            console.log(`Call ${index + 1} THẤT BẠI:`, result.reason.message);
        }
    });
}
handleAllSettled();

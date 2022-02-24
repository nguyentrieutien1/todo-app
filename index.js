// method string
// method array
// promise
// async await
// var -> khong co scope block
// let, const co scope block

// var -> cho gan lai, cho khai bao lai
// let -> cho gan lai, khong cho khai bao lai
// const -> Khong cho gan lai, khong cho khai bao lai

// String method

let text = "Nguyen Thanh Tung";
// SLICE
// let newText = text.slice(0, 6);
// console.log(text);
// console.log(newText);

// REPLACE
// let newText = text.replace("Nguyen", "Tran");
// console.log(newText);

// INDEXOF
// let indexOf = text.indexOf("n", 6);
// console.log(indexOf);

// LASTINDEXOF
// let lastIndexOf = text.lastIndexOf("z");

// INCLUDE
// const isFind = text.includes("ssn");
// console.log(isFind);

// METHOD NUMBER

// var number = 10.8;
// var newNumber = number.toString(number);
// console.log(typeof newNumber);

// Method array
// PUSH -> Them phan tu vao vi tri cuoi cung trong 1 mang
// array.push(10);
// console.log(array);

// POP
// const lastIndex = array.pop();
// console.log(array);
// console.log(lastIndex);
// const newArray = array.sort(function (a, b) {
//   return -(-b + a);
// });
// console.log(newArray);
// INCLUDE -> tuong tu string;

// forEach -> Nó không có return nên không có biến để hứng lại kết quả
// const array = [];
// arrayNumber.forEach(function (value, index) {
//   array.push({ [index]: value });
// });
// const newArr = arrayNumber.map(function (value, index) {
//   return value * 2;
// });
// console.log(newArr);
// const newArr = arrayNumber.filter(function (value , index) {
//   return value < 6;
// });

// const findMethod = arrayNumber.find(function (value, index) {
//   return value > 5;
// });
// console.log(findMethod);
// const everyMethod = arrayNumber.some(function (value, index) {
//   return value > 5;
// });
// console.log(everyMethod);

// const arrayNumber = [1, 5, 8, 3, 6, 9, 42, 42];
// const newArr = [...new Set(arrayNumber)];
// console.log(newArr);
// const [a, b] = arrayNumber;
// console.log(a);
// const value = arrayNumber.reduce(function (
//   prevalue,
//   currvalue,
//   currIndex,
//   arr
// ) {
//   if (!prevalue.includes(currvalue)) {
//     prevalue.push(currvalue);
//   }
//   return prevalue;
// },
// []);
// console.log(value);

// DOM

// const buttonElement = document.querySelectorAll("button");
// console.log(buttonElement);
// Event
// click, change, keyup, keydown
// const buttonElement = document.querySelector("button");
// const bodyElement = document.querySelector("body");
// bodyElement.textContent = "<h1 style='color: red'>Hello world</h1>";
// innrerHTML => Lay ra 1 doan van ban, hoac thay the 1 doan van ban

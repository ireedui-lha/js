// let number = 10; // number
// let text = "text"; // string
// let isDone = false; // boolean
// let employee = { name: "Bold", age: 21, isWorking: true }; // object
// console.log("Ajiltan", employee.name, employee.age);

// console.log("first", number);
// number = 20;

// if (isDone == false) {
//   console.log("isDonen true ym bna"); //true
// } else {
//   console.log("isDonen hudlaa ym bna"); //false
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// ymar negen toonii buh huvaagchin olno
// let randomNum = 12;
// let sum = 0;
// // 1,2,3,4,6,12 = 28
// for (let i = 1; i <= randomNum; i++) {
//   if (randomNum % i == 0) {
//     console.log("huvaagch", i);
//     sum = addNumbers(sum, i);
//   }
// }
// console.log("niilber", sum);

// let udur = 5;
//baasan garig bna

// //Arithemtic operators + , - , * , / , %
// let number1 = 2;
// let number2 = 3;

// +
console.log("niilber", number1 + number2 / 10); //nemeh

let number4 = 5;
let number5 = 6;

console.log("niilber", number4 + number5 / 10); //nemeh

// function javascript
// function functionNer() {
//   // function zarlah
//   console.log("function ajillaa");
//   console.log("uildel");
// }

// functionNer(); // function duudah uildel

// function addNumbers(num1, num2) {
//   console.log("nemeh function ajilla");
//   return num1 + num2;
// }
// function toonuudigHasah(a, b) {
//   console.log(a - b);
// }

// let niilber = addNumbers(3, 7);
// console.log("niilber", niilber);
// addNumbers(5, 2, 5);

// toonuudigHasah(10, 3);
//NaN = Not A Number
// 3+7+todorhoigui = NaN

//Write a C program to print all natural numbers from 1 to n. – using while loop

// function printNum(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }

// printNum(12);
//Write a C program to find sum of all natural numbers between 1 to n.
// function sumNum(n) {
//   let sumNum = 0;
//   for (let i = 1; i <= n; i = i + 1) {
//     sumNum = sumNum + i;
//   }
//   console.log(sumNum);
// }
// sumNum(10);

// Write a C program to print multiplication table of any number.

// function hurd(n) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(n, "*", i, "=", n * i);
//   }
// }
// hurd(7);

// const max = (a, b, c) => {
//   if (a >= b && a >= c) return a;
//   if (b >= a && b >= c) return b;
//   return c;
// };
// function max3(a, b, c) {
//   const m = max(a, b, c);
//   console.log(m * 3);
// }
// max3(9, 8, 7);

// const isLeapYear = (year) => {
//   if (year % 4 === 0) {
//     if (year % 400 === 0) {
//       return true;
//     } else {
//       if (year % 100 === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   } else {
//     return false;
//   }
// };

// const isLeapYear2 = (year) => {
//   if (year % 400 === 0) return true;
//   if (year % 100 === 0) return false;
//   if (year % 4 === 0) return true;
//   return false;
// };

// const arr = [-4, -5, -1, -40];

// const max = (numbers) => {
//   let m = arr[3];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > m) m = numbers[i];
//   }

//   return m;
// };

// console.log(max(arr));

// Write a C program to print multiplication table of any number.

// function hurd(n) {
//   for(let i=1; i<=10; i++ ) {
//     console.log( n,"*",i , "=", n*i)
//   }

// }
// hurd(6)

// 1. Function too avaad gatsuur uusgeh
//     //input: 3
//     //output:
// let tree = "*";
// let od = "*";
// function gatsuur(undur) {
//   for (let k = 1; k <= undur; k++) {
//     console.log(od);
//     od = od + tree;
//   }
// }
// result = gatsuur(7);

// // 2. functiond 3 too uguud hamgiin iheesee 2dhiign olno
// //input: (10, 11, 30)
// //output: 11
// function getMid(a, b, c) {
//   if ((a >= b && a <= c) || (a <= b && a >= c)) return a;
//   if ((b >= a && b <= c) || (b <= a && b >= c)) return b;
//   if ((c >= b && c <= a) || (c <= b && c >= a)) return c;
// }
// console.log(getMid(9, 4, 7));

// *****
// *****
// *****
// *****
// *****
function square(n) {
  for (let j = 0; j < n; j++) {
    let str = "";
    for (let i = 0; i < n; i++) {
      str = str + "*";
    }
    {
      for (let i = 0; i <= j; i++) str = str + " ";
    }
    console.log(str);
  }
}
square(5);

// *****
// *   *
// *   *
// *   *
// *****
function hollowstar(n) {
  for (let j = 0; j < n; j++) {
    let str = "";
    for (let i = 0; i < n; i++) {
      if (j == 0 || j == n - 1 || i == 0 || i == n - 1) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}
hollowstar(5);

function mirror(n) {
  for (let j = 0; j < n; j++) {
    let str = "";
    for (let i = 0; i < n - j - 1; i++) {
      str = str + " ";
    }
    for (let i = 0; i <= j; i++) {
      str = str + "*";
    }
    console.log(str);
  }
}
mirror(5);

// function rhombus(n) {
//   for (let j = 0; j < n; j++) {
//     let str = "";
//     for (let i = 0; i < n; i++) {
//       str = str + "*";
//     }
//     console.log(str);
//   }
// }
// rhombus(5);

// function piramid(n) {
//   for (let j = 0; j < n; j++) {
//     let str = "";
//     for (let i = 0; i < n - j - 1; i++) {
//       str = str + " ";
//     }
//     for (let i = 0; i < j * 2 + 1; i++) {
//       str = str + "*";
//     }
//     console.log(str);
//   }
// }
// piramid(7);

let numbers = [12, 324, 54, 546, 5657, 656, 2, 5, 35, 3453];

function mind(arr) {
  let midnum = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (midnum > arr[i + 1] && arr[i + 1] % 2 != 0) {
      midnum = arr[i + 1];
    }
  }
  console.log(midnum);
}
mind(numbers);

// let numbers = [12, 324, 54, 546, 5657, 656, 5, 11, 35, 3453];
// function sondgoibaga(arr) {
//   let but = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (but > arr[i + 1] && arr[i + 1] % 2 != 0) {
//       but = arr[i + 1];
//     }
//   }
//   console.log(but);
// }
// sondgoibaga(numbers);

// let numbers = [12, 324, 54, 546, 5657, 656, 5, 11, 35, 3453];

// function baga(arr) {
//   let but = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (but > arr[i + 1]) {
//       but = arr[i + 1];
//     }
//   }
//   console.log(but);
// }
// baga(numbers);

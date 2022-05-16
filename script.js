// let mang = [-3, 5, 1, 3, 2, 10];
// let mangNguoc = [];
// for (let i = 5, j = 0; i >= 0, j <= 5; i--, j++) {
//   mang[i] = mangNguoc[j];
// }
// console.log(mangNguoc);

// let mang = [-3, 5, 1, 3, 2, 10];
// let mangNguoc = [];
// let i = mang.length - 1;
// let j = 0;
// while (i >= 0) {
//   mang[i] = mangNguoc[j];
//   i--;
//   j++;
// }
// console.log(mangNguoc);

let x = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = x.length - 1;
while (first < last) {
  let b = x[first];
  x[first] = x[last];
  x[last] = b;
  first++;
  last--;
}
console.log(x);

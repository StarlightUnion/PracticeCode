// import add from "./add";
import count from "./count";

console.log("index.js");

import("./add").then(({ default: add }) => {
  console.log(add(1, 2));
});

// console.log(add(1, 2));
console.log(count(1, 2));
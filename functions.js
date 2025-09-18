// ----- Function Declaration -----
function add(a, b) {
  return a + b;     // returns the sum
}

let result = add(5, 10);
console.log("Function Declaration result:", result);

// ----- Function Expression -----
const sum = function (x, y) {  
     return x + y;
};

let z = sum(2, 3);
console.log("Function Expression result:", z);

// ----- Arrow Function -----
const divide = (x, y) => {
  let res = x / y;
  return res;
};

console.log("Arrow Function result:", divide(10, 5));
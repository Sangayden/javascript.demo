for (let i = 1; i <= 3; i++) {
   console.log("Count:", i);
}

let i = 0;
while (i < 3) {
   console.log("Number:", i);
   i++;
}

let i = 0;
do {
   console.log("Iteration:", i);
   i++;
} while (i < 3);

const obj = { name: "Ashish", age: 25 }; // Sample object
// Iterate over the object's properties using for...in loop
for (let key in obj) // loop through each key in the object
   {
   console.log(key, ":", obj[key]); // print each key-value pair
}



let a = [1, 2, 3, 4, 5]; // Sample array
// Iterate over the array using for...of loop
for (let val of a) // loop through each value in the array
{
   console.log(val); // print each value
}

// primitive
let num1 = 1;
let num2 = num1; // VALUE of num1 (1) is copied to num2, not ADDRESS

num2++;

console.log(num2);
console.log(num1);

// reference
const person1 = {
    name: 'Brian'
}; 

const person2 = person1; // pointer copied, not values. person1 and person2 are pointing to the same object
person1.name = 'Hoang'; // changing p1 name will also change p2 value

console.log(person1.name);
console.log(person2.name);
// spread on array
const num1 = [1, 2, 3];
const num2 = [...num1, 4, 5, 6];
console.log(num2);

// spread on object
const me1 = {
    name: 'Brian',
    age: 26
}

const me2 = {
    ...me1,
    occupation: 'developer',
    hobby: 'piano'
}
console.log(me2);

// rest 
const sumAll = (...args) => {
    // console.log(args);
    return args.reduce((acc, val) => {
        return acc + val;
    })
}
console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

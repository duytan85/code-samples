const add = x => y => x + y;
const add5 = add(5);
const sum = add5(2);

console.log(sum); // expect sum to equal 7

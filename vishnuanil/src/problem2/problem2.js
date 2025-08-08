let a = 4;

// funciton to get the result
const getOutput = (input) => {
  if (input === 1) return [1]; // if input is 1 return 1
  const num = input + input; // double the input

  let value = []; // creating an array to store the values
  for (let i = 1; i <= num; i++) {
    // using for loop to create the array of nums
    // pushing nums to  value array
    value.push(i);
  }

  const result = value.filter((i) => i % 2 !== 0); //filtering the array to get the odd numbers
  return result; // returning the output
};

// calling the function and passing the value which is a=4
console.log(getOutput(a));

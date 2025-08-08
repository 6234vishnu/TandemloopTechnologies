let a = 5; // diclaring the input

// funciton to get the result
const getOutput = (input) => {
  if (input === 1) return [1]; // if input is 1 return 1
  const num = input + input; // double the input

  let value = []; // creating an array to store the values
  // using for loop to create the array of nums
  for (let i = 1; i <= num; i++) {
    value.push(i); // pushing nums to  value array
  }

  const result = value.filter((i) => i % 2 !== 0); //filtering the array to get the odd numbers
  if (input % 2 == 0) {
    result.pop(); // if input is an even number the last number is removing from the array
  }
  return result; //returning the result
};

// calling the function and passing the input
console.log(getOutput(a));

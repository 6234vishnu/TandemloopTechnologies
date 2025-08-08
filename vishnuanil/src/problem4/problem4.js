let input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];  //diclaring the input

const getResult = (arr) => {  // generating the funciton
  let value = {};  //creating a object to store the values
  for (let i = 1; i <= 9; i++) {  // creating a loop from 1 to 9
    let totalCount = arr.filter((num) => num % i === 0).length;
    value[i] = totalCount;
  }
  return value;
};
console.log(getResult(input));

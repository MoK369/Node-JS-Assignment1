let arr = [1, 2, 3, 4, 5];

let result = arr.filter((value, index, array) => {
  if (value % 2 == 0) return value;
});

console.log(result);

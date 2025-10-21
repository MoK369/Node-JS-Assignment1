let arr = ["a", "ab", "abc"];

let result = arr.map((value, index, array) => {
  return value.length;
});

console.log(result);

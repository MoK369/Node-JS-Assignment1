function getKeysOfObject(object) {
  let keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

let object = { name: "Ali", age: 21 };
let result = getKeysOfObject(object);
console.log(result);

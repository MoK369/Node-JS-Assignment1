let users = [
  { email: "user1@gmail.com", password: "12345" },
  { email: "user2@gmail.com", password: "67890" },
  { email: "user3@gmail.com", password: "24681" },
];

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = users.find((value, index, array) => {
        return value.email == email && value.password == password;
      });      
      if (result.length != 0) {
        resolve("Success");
      } else {
        reject("Failure");
      }
    }, 3000);
  });
}

login("user1@gmail.com", "12345")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Database
const Users = [
    {
      username: "sayuri",
      password: "prerana"
    },
    {
      username: "aman",
      password: "kanishk"
    },
    {
      username: "omkar",
      password: "shivam"
    }
  ];
  
  const findUserByUserName = (username) => {
    return Users.find((user) => user.username === username);
  };
  
  export const fakeAuthApi = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = findUserByUserName(username);
        if (user.password === password) {
          resolve({ success: true, status: 200, token: "abcdefghi" });
        }
        reject({ success: false, status: 401 });
      }, 500);
    });
  };
  
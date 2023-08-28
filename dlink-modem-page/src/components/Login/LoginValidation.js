const errorMessages = {
    usernameEmpty: "Username should not be empty",
    usernamePattern: "Username didn't match the pattern",
    passwordEmpty: "Password should not be empty",
    passwordPattern: "Password didn't match the pattern",
  };
  
  function Validation(values) {
    let error = {};
    const username_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.username === "") {
      error.username = errorMessages.usernameEmpty;
      console.log("username empty")
    } else if (!username_pattern.test(values.username)) {
      error.username = errorMessages.usernamePattern;
    } else {
      error.username = "";
    }
  
    if (values.password === "") {
      error.password = errorMessages.passwordEmpty;
      console.log("passworxd empty")
    } else if (!password_pattern.test(values.password)) {
      error.password = errorMessages.passwordPattern;
      
    } else {
      error.password = "";
    }
    return error;
  }
  
export default Validation;
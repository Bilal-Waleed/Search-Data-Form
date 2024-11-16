var data = [
    { username: "bilal", password: "bilal123", id: "12345" },
    { username: "ahmad", password: "ahmad123", id: "54321" },
    { username: "asharib", password: "asharib123", id: "11111" },
    { username: "adminUser", password: "admin123", id: "11110" }
  ];
  
  var form = document.getElementById("searchForm");
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var idInput = document.getElementById("id");
  var messageDiv = document.getElementById("message");
  
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var idError = document.getElementById("idError");
  
  var isUsernameValid = false;
  var isPasswordValid = false;
  var isIdValid = false;
  
  function validateUsername() {
    var value = usernameInput.value.trim();
    if (value.length < 3) {
      usernameError.textContent = "Username must be at least 3 characters.";
      isUsernameValid = false;
    } else {
      usernameError.textContent = "";
      isUsernameValid = true
    }
  }
  
  function validatePassword() {
    var value = passwordInput.value.trim();
    if (value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isPasswordValid = false;
    } else {
      passwordError.textContent = "";
      isPasswordValid = true;
    }
  }
  
  function validateId() {
    var value = idInput.value.trim();
    if (value.length !== 5) {
      idError.textContent = "ID must be exactly 5 characters.";
      isIdValid = false;
    } else {
      idError.textContent = "";
      isIdValid = true;
    }
  }
  
  usernameInput.addEventListener("input", validateUsername);
  passwordInput.addEventListener("input", validatePassword);
  idInput.addEventListener("input", validateId);
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    validateUsername();
    validatePassword();
    validateId();
  
    if (isUsernameValid && isPasswordValid && isIdValid) {
      var username = usernameInput.value.trim().toLowerCase();
      var password = passwordInput.value.trim().toLowerCase();
      var id = idInput.value.trim();
  
      var match = data.find(function (item) {
        return (
          item.username.toLowerCase() === username &&
          item.password.toLowerCase() === password &&
          item.id === id
        );
      });
      
  
      if (match) {
        messageDiv.textContent = `Data Found: Username - ${match.username}, ID - ${match.id}`;
        messageDiv.className = "message success";
      } else {
        messageDiv.textContent = "Data not exist.";
        messageDiv.className = "message";
      }
    } else {
      messageDiv.textContent = "Please Fill it correctly before submitting.";
      messageDiv.className = "message";
    }
  });
  
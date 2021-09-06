document.getElementById("login-submit").addEventListener("click", function () {
  const userField = document.getElementById("user-username");
  const userName = userField.value;
  userField.value = " ";
  //get user password
  const PassField = document.getElementById("user-password");
  const userPassword = PassField.value;
  PassField.value = "";
  if (userName == "test@" && userPassword == "test@") {
    window.location.href = "/banking.html";
  }
});

window.onload = () => {
  initialization();
};

function initialization() {
  if (localStorage.getItem("isLogin") == "false")
    document.querySelector("#btnModalLogin").click();

  document.querySelector("#btnLogin").onclick = () => {
    login();
  };
}

function login() {
  let username = document.querySelector("#txtUsername").value;
  let password = document.querySelector("#txtPassword").value;
  let errorMessage = "";
  if (username.length == 0 || password.length == 0)
    errorMessage = `Username and password is required.`;
  else if (
    username != localStorage.getItem("adminUsername") ||
    password != localStorage.getItem("adminPassword")
  )
    errorMessage = `Username or password is incorrect.`;

  console.log(
    localStorage.getItem("adminUsername"),
    localStorage.getItem("adminPassword")
  );

  if (errorMessage) return alert(errorMessage);

  localStorage.setItem("isLogin", true);
  document.querySelector("#btnModalLoginClose").click();
}

const baseUrl = "https://mix.flectone.net/api/admin";
// const baseUrl = "http://127.0.0.1/api/admin";

let password = localStorage.getItem("password");

if (!password) login(prompt('password'));

async function login(newPassword) {
  const resp = await fetch(`${baseUrl}?password=${newPassword}`);
  if (resp.status == 200) {
    password = newPassword;
    localStorage.setItem("password", password);
    return;
  }
  
  location.reload();
};

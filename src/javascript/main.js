let apiUser = 'http://localhost:3000/user';

// Function to handle Login
function login() {
  getUser(hanldeLogin);
}

function getUser(callback) {
  fetch(apiUser).then(function (res) {
    return res.json().then(callback);
  });
}

function hanldeLogin(data) {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  data.forEach(data => {
    if (data.email == email && data.password == password) {
      alert('Đăng nhập thành công');
      window.location.href = './public/homepage.html';
    }
  });
}

// Function to handle SignUp
function signUp() {
  handleCreateForm();
}

function createUser(data) {
  fetch(apiUser, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(function (res) {
    return res.json();
  });
  if (data) {
    alert('Đăng ký thành công');
  }
}
function handleCreateForm() {
  let username = document.getElementById('username');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  createUser(user);
}

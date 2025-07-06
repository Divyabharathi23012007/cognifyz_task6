const API = "http://localhost:3000";

async function signUp() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  await fetch(`${API}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  alert("Signed up successfully");
}

async function logIn() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  localStorage.setItem("token", data.token);
  alert("Logged in successfully");
}

async function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const token = localStorage.getItem("token");
  await fetch(`${API}/submit-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email }),
  });
  alert("Form submitted successfully");
}

async function getData() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/get-data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  document.getElementById("dataDisplay").textContent = JSON.stringify(data, null, 2);
}
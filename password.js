document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct
    if (username === "Nadilla Khalisha" && password === "enhypenkece") {
      alert("Selamat Datang " + username + "!");
    } else {
      alert("Username atau password salah!");
    }
  });

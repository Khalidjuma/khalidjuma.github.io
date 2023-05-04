//LOGIN SCRIPT
let loginForm = document.getElementById("loginform");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
        var infos = JSON.parse(localStorage.getItem("infos")) || [];
        var infomation = "";
        for (var i = 0; i < infos.length; i++) {
            infomation += "<h2>Contact #" + (i + 1) + "</h2>";
            infomation += "<p><strong>Name:</strong> " + infos[i].name + "</p>";
            infomation += "<p><strong>Address:</strong> " + infos[i].Adress + "</p>";
            infomation += "<p><strong>Email:</strong> " + infos[i].Email + "</p>";
            infomation += "<p><strong>Comments:</strong> " + infos[i].Message + "</p>";
        }
        document.getElementById("details").innerHTML = infomation;
    } else {
        alert("Invalid username or password.");
    }
    loginForm.reset();
});
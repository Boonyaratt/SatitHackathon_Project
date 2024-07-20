var loginUser = ["Apple","abc"];
var loginPass = ["Banna","123"];

function gotoLearnPage() {
    window.location.href="LearnPage.html";
}

function gotoHomePage() {
    window.location.href="HomePage.html";
}

function changeLanguage() {
    var selectedLanguage = document.getElementById("language").value;
    var url=window.location.href;
    var baseUrl = url.split("?")[0];
    window.location.href=baseUrl+"?lang="+selectedLanguageanguage;
}

function  gotoLoginPage() {
    window.location.href="LoginPage.html";
}

function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for (var i = 0; i < loginUser.length; i++) {
        if (loginUser[i] == username && loginPass[i] == password) {
            alert("LogIn Sucessful 😍😍😍");
            window.location.href="HomePage.html"; //Not working
            return;
        }
    }
    alert("Wrong Username or Password, Try again! 😅😅😅");
}

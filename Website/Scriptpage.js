//Define URLs 
var LearnPageURL = "LearnPage.html";
var HomePageURL = "HomePage.html";
var BefHomePageURL = "BefHomePage.html";
var LoginPageURL = "LoginPage.html";
var UserAccount = [
    { username: "admin", password: "admin" },
    { username: "test01", password: "betatest" },
    { username: "1", password: "1" }
];
//Function goto another website
function gotoBefHomePage() {
    window.location.href = BefHomePageURL;
}
function gotoHomePage() {
    window.location.href = HomePageURL;
}
function gotoLoginPage() {
    window.location.href = LoginPageURL;
}
function gotoLearnPage() {
    window.location.href = LearnPageURL;
}
function gotoOthersPage() {
    window.location.href = "OthersPage.html";
}
function showScore() {
    var show = document.getElementById("scorePage");
    var ask = document.getElementById("askPage");
    if (show) {
        ask.style.visibility = "hidden";
        show.style.visibility = "visible";
    }
}
function showAsk() {
    var ask = document.getElementById("askPage");
    var show = document.getElementById("scorePage");
    if (ask) {
        show.style.visibility = "hidden";
        ask.style.visibility = "visible";
    }
}
//check loginAccount
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for (var i = 0; i < UserAccount.length; i++) {
        if (UserAccount[i].username == username && UserAccount[i].password == password) {
            alert("LogIn Sucessful 😍😍😍");
            setTimeout(function () {
                window.location.assign("HomePage.html");
            }, 0);
            return;
        }
    }
    alert("Invalid username or password, Try again! 😅😅😅");
}
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
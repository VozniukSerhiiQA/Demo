$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CLP.feature");
formatter.feature({
  "line": 1,
  "name": "CLP",
  "description": "",
  "id": "clp",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7718715000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login Page check",
  "description": "",
  "id": "clp;login-page-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Women\" category",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see CLP page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 4292979100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 12
    }
  ],
  "location": "HomePageSteps.iClickOnCategory(String)"
});
formatter.result({
  "duration": 2233467000,
  "status": "passed"
});
formatter.match({
  "location": "ClpPageSteps.iSeeCLPPage()"
});
formatter.result({
  "duration": 71935900,
  "status": "passed"
});
formatter.after({
  "duration": 2168465200,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3921011400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Home Page check",
  "description": "",
  "id": "homepage;home-page-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "footer is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "menu is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "elements are correct",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 3890111500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.footerIsCorrect()"
});
formatter.result({
  "duration": 782145900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.menuIsCorrect()"
});
formatter.result({
  "duration": 277048500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.loginIsCorrect()"
});
formatter.result({
  "duration": 228914000,
  "status": "passed"
});
formatter.after({
  "duration": 413686800,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPage",
  "description": "",
  "id": "loginpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4671629000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login Page check",
  "description": "",
  "id": "loginpage;login-page-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see Create an account form",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I see Sign In form",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 4382392700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 2136534900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeCreateAnAccountForm()"
});
formatter.result({
  "duration": 153469900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeSignInForm()"
});
formatter.result({
  "duration": 63490600,
  "status": "passed"
});
formatter.after({
  "duration": 781645100,
  "status": "passed"
});
formatter.before({
  "duration": 4048433600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create new invalid user",
  "description": "",
  "id": "loginpage;create-new-invalid-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I navigate to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I create an invalid user",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see an alert of invalid user creation",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 4231929600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 2345924400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateAnInvalidUser()"
});
formatter.result({
  "duration": 8859065000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iSeeAnAlertOfInvalidUserCreation()"
});
formatter.result({
  "duration": 153165300,
  "status": "passed"
});
formatter.after({
  "duration": 267874000,
  "status": "passed"
});
formatter.before({
  "duration": 3879512700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create new valid user",
  "description": "",
  "id": "loginpage;create-new-valid-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I create valid user",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I see My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 4149181800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 2234973700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateValidUser()"
});
formatter.result({
  "duration": 8931669800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iSeeMyAccount()"
});
formatter.result({
  "duration": 389627400,
  "status": "passed"
});
formatter.after({
  "duration": 2400534500,
  "status": "passed"
});
});
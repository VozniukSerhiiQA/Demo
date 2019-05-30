$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9687848400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Home Page verification",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 5,
  "name": "Home Page check",
  "description": "",
  "id": "homepage;home-page-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "footer is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "menu is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "elements are correct",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 27076754600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.footerIsCorrect()"
});
formatter.result({
  "duration": 3764681100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.menuIsCorrect()"
});
formatter.result({
  "duration": 1120158500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.loginIsCorrect()"
});
formatter.result({
  "duration": 824533200,
  "status": "passed"
});
formatter.after({
  "duration": 139800,
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
  "duration": 6514567900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Log In feature.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Login Page check",
  "description": "",
  "id": "loginpage;login-page-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see Create an account form",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I see Sign In form",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 32984363600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 6174077400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeCreateAnAccountForm()"
});
formatter.result({
  "duration": 509790500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeSignInForm()"
});
formatter.result({
  "duration": 172849800,
  "status": "passed"
});
formatter.after({
  "duration": 79300,
  "status": "passed"
});
formatter.before({
  "duration": 6065632300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Log In feature.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "Create new invalid user",
  "description": "",
  "id": "loginpage;create-new-invalid-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I navigate to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I create an invalid user",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see an alert of invalid user creation",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 29532689800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 4909579800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateAnInvalidUser()"
});
formatter.result({
  "duration": 19239178000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iSeeAnAlertOfInvalidUserCreation()"
});
formatter.result({
  "duration": 555503500,
  "status": "passed"
});
formatter.after({
  "duration": 51300,
  "status": "passed"
});
formatter.before({
  "duration": 5614572600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Log In feature.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "Create new valid user",
  "description": "",
  "id": "loginpage;create-new-valid-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I navigate to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I create valid user",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 26189701900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 4963726100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateValidUser()"
});
formatter.result({
  "duration": 23019361200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iSeeMyAccount()"
});
formatter.result({
  "duration": 1052486000,
  "status": "passed"
});
formatter.after({
  "duration": 40400,
  "status": "passed"
});
});
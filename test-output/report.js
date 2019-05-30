$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPage",
  "description": "",
  "id": "loginpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10419217600,
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
      "name": "@InProgress"
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
  "duration": 27006149600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 4702246300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateValidUser()"
});
formatter.result({
  "duration": 20541737700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iSeeMyAccount()"
});
formatter.result({
  "duration": 1128965000,
  "status": "passed"
});
formatter.after({
  "duration": 105600,
  "status": "passed"
});
});
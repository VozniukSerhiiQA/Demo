$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPage",
  "description": "",
  "id": "loginpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8553006000,
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
      "name": "@InProgress"
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
  "name": "I create a user",
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
  "duration": 16082138300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 5932614600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateAUser()"
});
formatter.result({
  "duration": 15057916200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iSeeAnAlertOfInvalidUserCreation()"
});
formatter.result({
  "duration": 321675100,
  "status": "passed"
});
formatter.after({
  "duration": 128100,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8212732600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Home Page verification, log in, new user creation.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Login Page check",
  "description": "",
  "id": "homepage;login-page-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@InProgress"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I navigate to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see Create an account form",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I see Sign In form",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 5141344300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 2201347300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeCreateAnAccountForm()"
});
formatter.result({
  "duration": 131579600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeSignInForm()"
});
formatter.result({
  "duration": 62945200,
  "status": "passed"
});
formatter.after({
  "duration": 155300,
  "status": "passed"
});
});
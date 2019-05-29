$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage",
  "description": "This feature deals with login functionality",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8497093600,
  "status": "passed"
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
      "name": "@InProgress"
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
  "name": "login is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 5278211000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.footerIsCorrect()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.menuIsCorrect()"
});
formatter.result({
  "duration": 19500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.loginIsCorrect()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.after({
  "duration": 262561600,
  "status": "passed"
});
});
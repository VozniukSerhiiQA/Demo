$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CLP.feature");
formatter.feature({
  "line": 1,
  "name": "CLP",
  "description": "",
  "id": "clp",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8878573900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Verify CLP",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Login Page check",
  "description": "",
  "id": "clp;login-page-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@InProgress"
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
  "name": "I click on \"Women\" category",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see CLP page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 15894946200,
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
  "duration": 6368245300,
  "status": "passed"
});
formatter.match({
  "location": "ClpPageSteps.iSeeCLPPage()"
});
formatter.result({
  "duration": 199423800,
  "status": "passed"
});
formatter.after({
  "duration": 183500,
  "status": "passed"
});
});
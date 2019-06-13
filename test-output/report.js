$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CLP.feature");
formatter.feature({
  "line": 1,
  "name": "CLP",
  "description": "",
  "id": "clp",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9344735600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "CLP check",
  "description": "",
  "id": "clp;clp-check",
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
  "duration": 4001330700,
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
  "duration": 1805181500,
  "status": "passed"
});
formatter.match({
  "location": "ClpPageSteps.iSeeCLPPage()"
});
formatter.result({
  "duration": 937343500,
  "status": "passed"
});
formatter.after({
  "duration": 352737900,
  "status": "passed"
});
formatter.before({
  "duration": 3808956800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login Page check",
  "description": "",
  "id": "clp;login-page-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Ready"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on \"Tops\" sub-category",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I see sub-category on CLP page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 3994958300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tops",
      "offset": 12
    }
  ],
  "location": "HomePageSteps.iClickOnSubCategory(String)"
});
formatter.result({
  "duration": 1805847300,
  "status": "passed"
});
formatter.match({
  "location": "ClpPageSteps.iSeeSubCategoryOnCLPPage()"
});
formatter.result({
  "duration": 507955500,
  "status": "passed"
});
formatter.after({
  "duration": 161503800,
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
  "duration": 4100437000,
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
  "duration": 4081719400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.footerIsCorrect()"
});
formatter.result({
  "duration": 1004028000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.menuIsCorrect()"
});
formatter.result({
  "duration": 175852300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.loginIsCorrect()"
});
formatter.result({
  "duration": 173539900,
  "status": "passed"
});
formatter.after({
  "duration": 209441400,
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
  "duration": 3784565200,
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
  "duration": 4073562100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 1598653600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeCreateAnAccountForm()"
});
formatter.result({
  "duration": 131881100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeSignInForm()"
});
formatter.result({
  "duration": 67264400,
  "status": "passed"
});
formatter.after({
  "duration": 308918000,
  "status": "passed"
});
formatter.before({
  "duration": 4116065300,
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
  "duration": 4238423200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 1503272600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateAnInvalidUser()"
});
formatter.result({
  "duration": 6992079800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iSeeAnAlertOfInvalidUserCreation()"
});
formatter.result({
  "duration": 115000900,
  "status": "passed"
});
formatter.after({
  "duration": 194207500,
  "status": "passed"
});
formatter.before({
  "duration": 3935019900,
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
  "duration": 3757339900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 1444046700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateValidUser()"
});
formatter.result({
  "duration": 6127559100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iSeeMyAccount()"
});
formatter.result({
  "duration": 356850000,
  "status": "passed"
});
formatter.after({
  "duration": 240405800,
  "status": "passed"
});
formatter.uri("PLP.feature");
formatter.feature({
  "line": 1,
  "name": "PLP",
  "description": "",
  "id": "plp",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3704772000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "PDP check",
  "description": "",
  "id": "plp;pdp-check",
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
  "name": "I click on \"Blouses\" PLP category",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see PLP page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I see \"Add to cart\" button on product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I see \"Quick view\" button on product",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I see \"More\" button on product",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePage()"
});
formatter.result({
  "duration": 3717736400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouses",
      "offset": 12
    }
  ],
  "location": "PlpPageSteps.iClickOnPLPCategory(String)"
});
formatter.result({
  "duration": 1942014100,
  "status": "passed"
});
formatter.match({
  "location": "PlpPageSteps.iSeePLPPage()"
});
formatter.result({
  "duration": 409938100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to cart",
      "offset": 7
    }
  ],
  "location": "PlpPageSteps.iSeeButtonOnProduct(String)"
});
formatter.result({
  "duration": 156850300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quick view",
      "offset": 7
    }
  ],
  "location": "PlpPageSteps.iSeeButtonOnProduct(String)"
});
formatter.result({
  "duration": 104391000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "More",
      "offset": 7
    }
  ],
  "location": "PlpPageSteps.iSeeButtonOnProduct(String)"
});
formatter.result({
  "duration": 88115500,
  "status": "passed"
});
formatter.after({
  "duration": 540735900,
  "status": "passed"
});
});
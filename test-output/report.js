$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CLP.feature");
formatter.feature({
  "line": 1,
  "name": "CLP",
  "description": "",
  "id": "clp",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8292941700,
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
  "duration": 4170482400,
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
  "duration": 2303999700,
  "status": "passed"
});
formatter.match({
  "location": "ClpPageSteps.iSeeCLPPage()"
});
formatter.result({
  "duration": 1094317800,
  "status": "passed"
});
formatter.after({
  "duration": 191807300,
  "status": "passed"
});
formatter.before({
  "duration": 3781541200,
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
  "duration": 4006119100,
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
  "duration": 2238759900,
  "status": "passed"
});
formatter.match({
  "location": "ClpPageSteps.iSeeSubCategoryOnCLPPage()"
});
formatter.result({
  "duration": 583764400,
  "status": "passed"
});
formatter.after({
  "duration": 249218800,
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
  "duration": 4050662800,
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
  "duration": 3980863800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.footerIsCorrect()"
});
formatter.result({
  "duration": 757352000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.menuIsCorrect()"
});
formatter.result({
  "duration": 167250100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.loginIsCorrect()"
});
formatter.result({
  "duration": 164499600,
  "status": "passed"
});
formatter.after({
  "duration": 189123000,
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
  "duration": 4009974700,
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
  "duration": 3842639400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 1627374000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeCreateAnAccountForm()"
});
formatter.result({
  "duration": 154920200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iSeeSignInForm()"
});
formatter.result({
  "duration": 59520100,
  "status": "passed"
});
formatter.after({
  "duration": 242412600,
  "status": "passed"
});
formatter.before({
  "duration": 3992137800,
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
  "duration": 4155173700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 1505469100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateAnInvalidUser()"
});
formatter.result({
  "duration": 6934704300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iSeeAnAlertOfInvalidUserCreation()"
});
formatter.result({
  "duration": 206793700,
  "status": "passed"
});
formatter.after({
  "duration": 394735200,
  "status": "passed"
});
formatter.before({
  "duration": 4111569700,
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
  "duration": 3915933900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iNavigateToLoginPage()"
});
formatter.result({
  "duration": 2495535100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageSteps.iCreateValidUser()"
});
formatter.result({
  "duration": 7282841600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iSeeMyAccount()"
});
formatter.result({
  "duration": 237096600,
  "status": "passed"
});
formatter.after({
  "duration": 184841700,
  "status": "passed"
});
});
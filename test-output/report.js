$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/D:/Nikhil%20Docs/eclipse%20workspace/BehaviorFramework/src/main/java/Features/login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page in facebook",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.clickBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home()"
});
formatter.result({
  "status": "passed"
});
});
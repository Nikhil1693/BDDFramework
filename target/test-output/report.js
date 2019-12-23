$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/D:/Nikhil%20Docs/eclipse%20workspace/BehaviorFramework/src/main/java/Features/contact.feature");
formatter.feature({
  "name": "Contact Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Contact Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of login page is CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter contacts details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ]
    },
    {
      "cells": [
        "niks_1693@yahoo.co.in",
        "Test@123",
        "Tom",
        "Rayan",
        "Manager"
      ]
    },
    {
      "cells": [
        "niks_1693@yahoo.co.in",
        "Test@123",
        "naveen",
        "automation",
        "Employee"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Contact Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "title of login page is CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"niks_1693@yahoo.co.in\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.login(String,String)"
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
formatter.step({
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.click_contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.click_new()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter contacts details \"Tom\" and \"Rayan\" and \"Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.enter_details(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Contact Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "title of login page is CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"niks_1693@yahoo.co.in\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.login(String,String)"
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
formatter.step({
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.click_contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.click_new()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter contacts details \"naveen\" and \"automation\" and \"Employee\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.enter_details(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "status": "passed"
});
});
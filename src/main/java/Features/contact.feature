Feature: Contact Feature

Scenario Outline:Contact Test Scenario

Given User is already on login page
When title of login page is CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user clicks on Contacts link
Then user clicks on New button
Then user enter contacts details "<firstname>" and "<lastname>" and "<position>"
Then user clicks on save button
Then user close the browser

Examples:

	| username | password | firstname | lastname | position |
	| niks_1693@yahoo.co.in | Test@123 | Tom | Rayan | Manager |
	| niks_1693@yahoo.co.in | Test@123 | naveen | automation | Employee |
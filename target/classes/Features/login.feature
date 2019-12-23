Feature: Login Feature

#WITHOUT EXAMPLE KEYWORD

#Scenario: Login Test Scenario

#Given User is already on login page
#When title of login page is facebook
#Then user enters "niks_1693@yahoo.co.in" and "053161993"
#Then user clicks on login button
#Then user is on home page
#Then user close the browser

#WITH EXAMPLE KEYWORD

Scenario Outline:Login Test Scenario

Given User is already on login page
When title of login page is facebook
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user close the browser

Examples:

	| username | password |
	| niks@1693@yahoo.co.in | 053161993 |
	| tom | test456 |
	
	
# Testing Style Guide
## Tools.
- Cypress, Robot framework (For UI test, Api test)
- Katalon Studio (For Mobile test )
___
## Cypress
### Structure File

|-- cypress \
&ensp;&ensp;&ensp;|-- fixtures *สำหรับเก็บพวกไฟล์รูป หรือไฟล์ดาต้าต่างๆ*\
&ensp;&ensp;&ensp;|-- integration *สำหรับเก็บ Test suite*\
&ensp;&ensp;&ensp;|-- support\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|-- keywords *สำหรับเก็บคำสั่งที่ได้ใช้ซ้ำๆ*\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|-- pageObjects *สำหรับเก็บ page Object*

### Naming (Use camel case)
Test case file
```
loginEmail.spec.js
loginFacebook.spec.js
forgotPassword.spec.js
resendEmail.spec.js
```
Page Object
```
file name : homePageObject.js
const logoutButton = "...";
const emailInput = "...";
```
Command
```
file name : getTokenCommands.js
Cypress.Commands.add("getToken", () => {
  //command here
});
```
___
## Robot Framework
### Structure File
|-- Resources \
&ensp;&ensp;&ensp;|-- Keywords *สำหรับเก็บคำสั่งที่ได้ใช้ซ้ำๆ*\
&ensp;&ensp;&ensp;|-- PageObject *สำหรับเก็บ page Object*\
|-- Test *สำหรับเก็บไฟล์ test cases*

### Naming
Test suite name
```
Test suite names should be as descriptive as possible.
Examples : login_email.robot, register.robot
```

Test case names
```
*** Test Cases ***
LOG01: Empty Password
LOG02: Empty Username
LOG03: Empty Username And Password
LOG04: Invalid Username
LOG05: Invalid Password
LOG06: Invalid Username And Password
```
Keyword names
```
Keyword names should be descriptive and clear.

*** Keywords ***
Login With Valid Credentials
```
Variable naming
- Use case consistently:
    - Lower case with local variables only available inside a certain scope.
    - Upper case with others (global, suite or test level).
    - Both space and underscore can be used as a word separator.
```
*** Variables ***
${SERVER URL}     http://sre-12.example.com/
${USER}           Actual value set dynamically at suite setup
```
___
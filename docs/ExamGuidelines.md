## Exam overview

The purpose of this is to discuss the exam and keep track of topics

## Exam concept

The exam for PG6301 is a practical test where you should demonstrate your mastery of
the technologies and concepts that have been thought in the course:
React, Express, Azure, Mongodb, Jest and Web sockets.
The fact that this is a practical exam means that you are evaluated on the
functionality of the running code that you deliver, rather than your theoretical
mastery of the subjects.

## Suggestion - Test your application

I suggest that you ask another student to check your application on Heroku and Github. When you evaluate your own or your team's application you can do as follows:

1. Go to the Github page of the solution
2. Check the Github Action actions build and verify that you can see the coverage
3. Check that Github links to the deployed app on Heroku
4. Verify that you can log in to the app
5. Verify that you can add data
6. Verify that you can see the data you added

If you're smart, you construct the code of your app so that everything that has to do with movies can easily be replaced with something else. Then you can reuse the code directly on the exam. This is especially relevant for the `package.json`-files, `index.html` and `index.jsx`, login code, and `server.js`.

## Checklist of technologies you should include in your application

* [ ] Logon with Active Directory
* [ ] Jest tests
    * [ ] Snapshot tests
    * [ ] Simulate + jest.fn
    * [ ] Supertest
* [ ] Github Actions with coverage report
* [ ] Deployment to cloud (in this case, Azure)
* [ ] Mongodb
* [ ] Navigating in the application using React Router (remember Express Middleware)
* [ ] Reading data from the server (remember error handling)
* [ ] Writing data to the server
* [ ] Websockets


## Practicalities

* The exam is **individual**. During the exam period, you are not allowed to discuss
  any part of this exam with any other student or person, not even the lecturer
  (i.e., do not ask questions or clarification on the exam). In case of ambiguities
  in these instructions, do your best effort to address them (and possibly explain
  your decisions in the readme file).
* Structure and formatting:
    * Your project should have a README.md file, that contains information about how to
      start/run the code, what tasks have been accomplished, and discusses what assumptions
      were made
    * Your code should clearly separate the server from client
    * While you are free to use libraries you find useful you **are not** allowed to replace
      the libraries we discussed in class. So you **cannot** replace React with other libraries,
      or go for other backend solutions than Express


## Grading

Grading is from A to F. In order to get a grade, you must complete all the requirements associated
with that grade, as well as all the requirements for lower grades. For example, to get a C, a  
submission must fulfill all the requirements listed under **R3** along with all the previous
requirements (so, **R2** and **R1** as well).

Below you will find the general requirements. In addition to these, a list of topic or application specific requirements
may also be added.

* **R1** Requirements **necessary**, but not **sufficient**, for an **E**
    * Write a homepage with React
    * Have at least 2 other React pages that can be accessed via React-Router
    * At least one page should have some "state", with a change that should be triggered from the
      interface.
    * From each page, be able to navigate back (either to previous page or to homepage) without
      using the browser "Back" button.
* **R2** Requirements **necessary**, but not **sufficient**, for a **D**
    * Create a RESTful API that handles at least one GET, one POST, one PUT, and one DELETE calls
      and uses JSON for data transfer.
    * The frontend must use that RESTful API (for example, using fetch).
    * All endpoints must be listed in README.md
* **R3** Requirements **necessary**, but not **sufficient**, for an **C**
    * handle authentication/authorization, session-based via cookies
    * Frontend should have a login page (Register will depend on the topic)
    * A logged-in user should get a personalized welcome message
    * On every page, there should be an option to logout
* **R4** Requirements **necessary**, but not **sufficient**, for an **B**
    * Each REST endpoint MUST handle authentication (401), and possibly authorization
      (403) checks. If an endpoint is supposed to be “open” to everyone, explicitly add a
      code-comment for it in its Express handler.
    * Create a test class called security-test.js, where each endpoint is tested for when it
      returns 401 and 403 (if applicable, i.e., if they can return such codes).
    * In the “readme.md” file, where you list the endpoints (recall R2), for each endpoint list
      the security tests written for it.
* **R5** Requirements **necessary**, but not **sufficient**, for an **A**
    * In the eventuality of you finishing all of the above requirements, and only then, if you
      have extra time left you should add new functionalities/features to your project.
      Those extra functionalities need to be briefly discussed/listed in the “readme.md” file
      (e.g., as bullet points). Note: in the marking, examiners will ignore new functionalities that
      are not listed in the readme document. What type of functionalities to add is completely up to you.


## Testing

Your submission should have test for both frontend and backed. You should measure and report code
coverage, and there are requirements on coverage for each grade. The tests should be
written with Jest. 
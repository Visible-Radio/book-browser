Front-End Interview Test – Build a Book Search Tool
v.04/29/2021
Documentation for the Open Library API (API for Books) is available at:
 https://openlibrary.org/developers/api
 https://openlibrary.org/dev/docs/api/read
 https://openlibrary.org/dev/docs/api/search
 https://openlibrary.org/dev/docs/api/covers
 More documentation is available under developers/api
For example, if you were looking for The Great Gatsby, you would call:
http://openlibrary.org/search.json?q=the+great+gatsby
To get a specific version of The Great Gatsby (including links to images etc.), would be found using the
call below, using an ISBN number (ISBN number can be found from the search call above).
http://openlibrary.org/api/volumes/brief/isbn/9781442249073.json
The task is to create an application that accepts a title as a parameter. The application should then
return book results, and for each book should display the following information:
 Title
 Book Cover
 Author
 Published Date
The application should also have the ability to:
 Sort results alphabetically by title
 Sort results by more recently published
 Any other functionality you feel will make this app a better experience
 
Platform Choice
 MUST use ReactJS
 
Task requirements
Feel free to spend as much or as little time on the exercise as you like as long as the following
requirements have been met.
 Please complete the user story below.
 Your code should compile and run in one step.
 Try not to use any UI library, as the more of your own hand-written code and design is there, the
better it is to evaluate your own skills.

User Story

As a user running the application I can view a list of books matching or related to the user-submitted
title (e.g. The Great Gatsby).
Acceptance Criteria
 For the title, results are returned
 User can sort results
 You must include tests
 UI must be responsive
 Must be fully WCAG 2.0/2.1 AA compliant for the entire page
 Must perform well in a Lighthouse audit - Performance, SEO, Accessibility
 The title, book cover, author and published date are displayed
 Must work in common browsers, desktop and mobile (Chrome, Safari, Firefox)
 Send your GitHub repo of your application
 Host the app on Heroku, Firebase, GitHub or any other cloud host platform of your choice
 Send your answers to the tech questions as a .md file in your repo
 
Technical questions
Please answer the following questions in a markdown file called Answers to technical questions.md.
1. How long did you spend on the coding assignment?
a. What would you add to your solution if you had more time?
b. If you didn&#39;t spend much time on the coding test, then use this as an opportunity to
explain what you would add.

2. What was the most useful feature that was added to the latest version of your chosen
language? Please include a snippet of code that shows how you&#39;ve used it.
3. How would you track down a performance issue in production? Have you ever had to do this?
4. How would you improve the API that you just used?
5. Please describe yourself using correctly formatted JSON.
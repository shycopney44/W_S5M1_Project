# Sprint 5 Module 1 Project

## Introduction

Welcome to Module 1 Project! Today, you'll practice using JavaScript to manipulate the DOM using "vanilla" JavaScript, without any frameworks.

To succeed in this project, you'll need the following technical skills:

1. **Selecting elements** and groups of elements from the DOM.
1. **Creating new elements** and attaching them to the DOM.
1. **Looping** over arrays and lists of DOM elements.
1. **Generating pseudo-random numbers** using the Math object.
1. **Using data** and template literals to build text content for elements in the DOM.
1. **Manipulating attributes** on elements.
1. **Using setInterval** to schedule repeated actions.
1. **Using clearInterval** to cancel a setInterval.

Additionally, the following soft skills will greatly impact your performance:

1. Attention to detail. Make sure there isn't a single character out of place!
1. Perseverance. Keep trying until you figure it out!
1. Patience. Make sure to read the entire README for important information.

## Instructions

During a hiring process for a Web Developer position, you have been given a take-home coding assignment. The task consists in building some widgets on a web-page, using JavaScript alone.

You have been given a detailed [mock](todo) showing the desired end result.

**To help you complete the task, two of your future team-members will provide you with instructions and advice.**

### 💾 DevOps Engineer

Below, a DevOps Engineer will help you set up your local environment and launch the project:

This is a **full-stack web application** that comprises both back-end and front-end components. When deployed to production, the back-end part would run in the cloud (think Amazon Web Services or Azure), while the front-end would execute inside the user's web browser (like Chrome for Android, or Firefox for desktop).

As a front-end engineer, your focus is mainly on the files that load **on the user's device**. In this particular project, these files live inside the `frontent` folder. The `backend` folder contains a web server built in Node, but the project as a whole is managed as a Node app, with a `package.json` file at the root containing meta-information about the project.

1. You will **clone this repository** to your computer, which will allow you to run the software locally for development and testing purposes.

1. You will navigate your terminal to the project folder **and execute `npm install`**. This will install the libraries listed inside `package.json`. Some of these packages are needed for the back-end to do its job of serving the website you will be working on. Other libs help with things like testing and linting your code.

1. After successful installation you will run, in separate terminals, the two scripts referenced inside `package.json`. To do this, **execute `npm start` in your first terminal, and `npm test` in your second**. On successful start, you will load the app in Chrome by **navigating the browser to `http://localhost:3003`**. The term "localhost" means "your machine", and the number is called a port, allowing multiple web servers to run on the same computer, with one server per port.

### 🥷 Lead Developer

Below, your Team Lead will discuss the tasks you need to complete.

Hey! Let's make sure you're up to speed with your **action items so far**.

- [x] The app is installed on your machine, with both `start` and `test` scripts running in terminals.
- [x] You studied the [mock](todo).

Awesome! As you complete your tasks, you should see tests passing in the terminal which is running the `test` script. **Do not stop until all tests are in the green!**

If you look inside the `frontend` folder you will notice it contains, among other assets, two scripts: `data.js` and `index.js`. If you inspect the head element of the `index.html` document, you will find both scripts loading there.

Many scripts can be loaded on the same page, and whatever variables exist at the top-level of each script are accessible by any scripts executing later.

This is why we are loading `data.js` first: we want the data it contains available to the `index.js` script. This is how JavaScript programs were traditionally partitioned and loaded on a web-site.

With all that out of the day, let's discuss `index.js` and the tasks you need to complete inside that script:

#### TASK 1 - Add a "widget" class name to widgets so CSS kicks in

<details>
  <summary>Click to read</summary>

  ---

Inside the section element in the HTML, there are four divs. Add a class name of "widget" to all of them. Do not modify the HTML. Work inside `index.js` exclusively!

You will know your code is working correctly because some CSS will kick in for the widgets, and you will also see a passing test inside your tests. The end result in the DOM should look like the following:

```html
<section>
  <div class="quoteoftheday widget">
    <h3>Quote of the Day</h3>
  </div>
  <div class="corporatespeak widget">
    <h3>Corporate Speak</h3>
  </div>
  <div class="countdown widget">
    <h3>Countdown</h3>
  </div>
  <div class="friends widget">
    <h3>Friends</h3>
  </div>
</section>
```

  ---

</details>

#### TASK 2 - Build a "Quote of the Day" widget

<details>
  <summary>Click to read</summary>

  ---

Let's start by using a `console.log` to print the variable `quotes` to the console. Even though this variable is not declared inside `index.js`, it is defined because the `data.js` script loaded it into the global space shared by all scripts.

Now that we have determined we have access to an array of quotes, you will use `Math.random` (research how!) to generate a random index between 0 and 9. You will use this random index to grab one of the quotes inside the quotes array.

Using JavaScript, use the random quote we selected to construct the following markup on the page:

```html
<!-- the text will change depending on the quote -->
<div class="quoteoftheday widget">
  <h3>Quote of the Day</h3>
  <div>Optimism is an occupational hazard of programming: feedback is the treatment.</div>
  <div>Kent Beck in 2003</div>
</div>
```

Some of the quotes have a `null` date because it is unknown. In those cases, the div containing the author should be in the following format:

```html
<!-- the text will change depending on the quote -->
<div>John Romero in an unknown date</div>
```

<details>
  <summary>Click to read</summary>

  ---

```html
<div class="quoteoftheday widget" tabindex="1">
  <h3>Quote of the Day</h3>
  <div>Any sufficiently advanced technology is indistinguishable from magic.</div>
  <div>Arthur C. Clarke in 1973</div>
</div>
```

#### Task 2

#### Task 3

#### Task 4

#### Task 5

#### Task 6

❗ Install the [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode. It will highlight syntax errors and problems right inside your editor.

❗ Only make changes to the `frontend/index.js` file.

Reach out if you get too stuck, and have fun!

  ---

</details>

**[Watch the video](http://wistia.com)**

## FAQ

<details>
  <summary>How do I submit this task?</summary>

You submit via Codegrade. Check the assignment page on your learning platform.

</details>

<details>
  <summary>I am getting errors when I run npm install or npm start. What is going on?</summary>

This project requires Node correctly installed on your computer, in order to work. Your Orientation materials should have covered installation of Node. Sometimes Node can be installed but be mis-configured. If the errors persist, please request assistance from Staff.

</details>

<details>
  <summary>Do I need to install libraries or add scripts to the HTML?</summary>

No. Everything you need should be installed already, including Axios.

</details>

<details>
  <summary>Why can't I edit the CSS file?</summary>

The CSS is the domain of a different team, and in this particular project we're not supposed to touch it. Do not use inline styles to get around this! It will only make the CSS team angry. And believe me, you want them happy, as they can write CSS twenty times faster than you.

</details>

<details>
  <summary>Why can't I edit the HTML file?</summary>

This particular part of the product is a Single Page Application, so the HTML is mostly generated by JavaScript. We don't want to manually edit HTML files when the data that powers the site changes often! It would be untenable.

</details>

<details>
  <summary>How do I debug this project?</summary>

Save your changes, and reload the site in Chrome. If you have a syntax error in your code, the app will crash and you will see errors in the Console. Put console logs before the crash site (error messages usually inform of the line where the crash is happening) and see if your variables contain the data you think they do.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

Execute `npm test` in your terminal. These are the same tests that execute inside Codegrade. Although this never crossed your mind, tampering with the test file won't change your score, because Codegrade uses a pristine copy of the original test file, `mvp.test.js`.

</details>

<details>
  <summary>I believe my code is correct and the test is wrong. What do I do?</summary>

Sometimes a test refuses to budge, even if (we think) our code is doing the right thing. Use CTRL-C to kill the tests, and then `npm test` to launch them again, just in case there is a problem with the test runner. More likely, there is a problem with your code. Try your best to reproduce the error by interacting with the site in Chrome. Do not code "to make the test happy". Code so that the browser does exactly what the mock does. The tests are there for confirmation. If the problem persists, please request assistance from Staff.

</details>

<details>
  <summary>The output of the test script is too overwhelming! What do I do?</summary>

If a test complains about something, you should try your best to replicate the problem in Chrome. If you need to disable all tests except the one you are focusing on, edit the `mvp.test.js` file and, as an example, change `test('👉 it works', () => { etc })` into `test.only('👉 it works', () => { etc })`. (Note the "only".) This won't affect Codegrade, because Codegrade runs its own version of the tests.

</details>

<details>
  <summary>Why can't a single endpoint provide the data in the correct shape?</summary>

As web developers, we often don't have control over our sources of data, and it's common to have to combine JSON from various sources into a data structure that works for the front-end. Even if the endpoints were under our control, and the back-end team were willing to build a new endpoint or improve the existing ones, bug fixes and features sometimes can't wait that long.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

**Do NOT delete your repository from GitHub!** Instead, commit _frequently_ as you work. Make a commit whenever you achieve _anything_ and the app isn't crashing in Chrome. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use `git reset --hard` to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well, but it is advised that you request assistance from Staff.

</details>

<details>
  <summary>Why are there so many files in this project?</summary>

Although a small, "old-fashioned" website might be made of just HTML, CSS and JS files, these days we mostly manage projects with Node and its package manager, NPM. Node apps typically have a `package.json` file and several other configuration files placed at the root of the project. This project also includes automated tests and a web server, which adds a little bit of extra complexity and files.

</details>

<details>
  <summary>Is this how web projects are normally organized?</summary>

Web projects can be organized in a million ways, there are no standards beyond the placement of configuration files, which typically live at the root. Some developers like it like this, while others prefer to use opinionated frameworks, which do a lot of magic but prescribe that folders and files be structured and named just so.

</details>

<details>
  <summary>Why is my code inside index.js wrapped in an async function called sprintChallenge5?</summary>

This way we can easily import your code as a single function in the `mvp.test.js` test suite. The export syntax is at the bottom of `index.js`, but this syntax does not work in the browser, only in the environment where the tests execute, which is Node. The function declaration is prefixed by the `async` keyword to allow you to use `await` inside it.

</details>

<details>
  <summary>What are the package.json and package-lock.json files?</summary>

The `package.json` file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that are downloaded when you execute `npm install`. There can be some wiggle room to allow newer versions of the dependencies to be installed, so the `package-lock.json` file makes sure the exact same versions of everything are used every time the project is installed from scratch.

</details>

<details>
  <summary>What is the .eslintrc.js file?</summary>

This file works in combination with the Eslint extension for VSCode to highlight syntax errors and problems in your code. By editing this file you can customize your linting rules.

</details>

<details>
  <summary>What is Jest?</summary>

Jest is a framework that allows you to write tests and execute them, to alert you very quickly of problems with the code. Jest can do in seconds what an entire Quality Assurance team would take hours or even days. In the context of the Sprint Challenge, Jest is used to check your code against specification and give you a grade (% of tests passing).

</details>

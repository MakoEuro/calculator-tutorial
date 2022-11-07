# How to create a simple calculator

For a demo click [here](https://makoeuro.github.io/calculator-tutorial/)!

## HTML

To begin, create a new folder and inside a file called `index.html` and use any basic template to start off the project, typically with the basic:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <body>
        
    </body>
</html>
```

Just to get started on the page and its body. Afterwards in a *seperate folder* called `assets` create the `index.css` and `index.js` files for CSS and JavaScript related code.

Inside the JavaScript folder on the first line write `'use strict';` which will put your code into strict mode and prevent undeclared variables from being used.

Going back to the HTML code, write the following inside the `<body>`:

```
    <main>
        <div class="container">
            <div class="calculator">
                <h2>Calculator</h2>

                <section class="output">
                    <p></p>
                </section>
            </div>
        </div>
    </main>
```

This will create the basis for the calculator, with the `"calculator"` class holding all the elements of the inputs, write this next line of code *between* the header element `<h2>` and the `<section>`:

```
    <form name="calc">
        <input type="text" name="one" class="number-one" placeholder="First number">
        <input type="text" name="two" clas="number-two" placeholder="Second number">
        <input type="button" class="get-result" value="Result">
    </form>
```
Feel free to run the code to see how it looks!

Afterward, let's move onto the JavaScript, styling the CSS will come last as we want to purely make this function for now.

## JavaScript

Firstly, add these pre-made sets of code, this will make the writing process substantially easier by making the lines of code necessary a lot more simplified:

```
    // Add event listener
    function onEvent(event, selector, callback) {
        return selector.addEventListener(event, callback);
    }

    // Get HTML element by id
    function getElement(selector, parent = document) {
        return parent.getElementById(selector);
    }

    // Select HTML element by selector
    function select(selector, parent = document) {
        return parent.querySelector(selector); 
    }
```

Next to connect our JavaScript to our HTML so that our next few lines don't produce any errors, add this line to your HTML right before the `<body>`, this will read the JS code before executing anything.

```
    <head>
        <script src="assets/index.js" defer></script>
    </head>
```

Right afterward head back to your JS file and input these selectors which will read your classes from the HTML code and let them be used as variables in the JS file.

```
    const form = select('form');
    const numberOne = select('.number-one');
    const numberTwo = select('.number-two');
    const btn = select('.get-result');
    const output = select('.output p');
```

Next, add this verification code to make sure the input value *is* a number and not empty or a character other than numbers.

```
    function isNumber(str) {
        let input = str.trim();
        
        if (input.length > 0 && !isNaN(input))
            return true;
        
        return false;
    }
```

Additionally a small counter for errors after the previous code:
```
    let count = 0;
```

And finally, to create the actual conversion to do addition, write this `onEvent` code:

```
    // Adding an event listener
    onEvent('click', btn, function() {
        let a = numberOne.value.trim();
        let b = numberOne.value.trim();

        if (isNumber(a) && isNumber(b)) {
            let result = parseFloat(a) + parseFloat(b);
            output.innerText = `${parseFloat(a)} + ${parseFloat(b)} = ${result}`
            count = 0;
        } else {
            if (count > 3){
                output.innerText = 'Fun fact: letters are not numbers';
            } else {
                output.innerText = 'Please enter valid numbers';
            }
        }   
    });
```

This all may look complicated but on breakdown, it will create 2 variables at the start that will trim down the input values (in case of spaces) and check if they are a number, else it will display an error indicating it is not functioning.

## CSS

Now for an optional choice, you may add some code for styling into the CSS with this. Head over to that remaining `index.css` file and input this:

```
    @charset "utf-8";
    @import './reset.css';
    
    body {
        background-color: #1a1d28;
    }
    
    h2 {
        color: #f2f4f6;
    }

    .container {
        width:min(100%-30px, 1280px);
        margin-inline:auto;
        margin: 50px;
    }

    .calculator {
        width: 360px;
    }
    
    form {
        margin-top: 20px;
        width: 100%;
        text-align: right;
    }
    
    input[type="text"] {
        width: 100%;
        height: 48px;
        padding: 0 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 26px 30px -10px, rgba(0, 0, 0, 0.1) 0px 16px 10px -10px;
        font-size: 17px;
        font-weight: 400;
        color: #fff;
        text-align: left;
    }
    
    form input + input {
        margin-top: 20px;
    }
    
    input:focus {
        border: 1px solid rgba(255, 255, 255, .25);
    }
    
    input[type="button"] {
        width: 120px;
        height: 46px;
        text-align: center;
        background-color: #3c57ff;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 26px 30px -10px, rgba(0, 0, 0, 0.1) 0px 16px 10px -10px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.2px;
        color: #fff;
        cursor: pointer;
    }
    
    .output {
        margin-top: 40px;
        height: 52px;
        padding: 0 15px;
        border-radius: 4px;
        background-color: rgb(0 0 0 / 0.2);
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2) inset, -1px -1px 1px 0 rgba(255, 255, 255, 0.1) inset;
        text-align: left;
    }
    
    .output p {
        font-size: 17px;
        font-weight: 400;
        color: #f2f4f6;
        line-height: 52px;
        cursor: default;
    }
```

Now to make the CSS file work, you need to do the same as you did with the JS file and go to the HTML, and add this line of code in the `<head>` section.

And finally, create a new file called `reset.css` which will style everything to the ideal proportions to make everything line up properly:

```
    @charset "utf-8";

    /*
    A CSS reset style sheet is a list of rules that 'reset' all of the default 
    browser styles
    */

    *, *::before, *::after {
    box-sizing: border-box;
    }

    * {
    margin: 0;
    padding: 0;
    font-family: inherit;
    outline: none;
    border-style: none;
    vertical-align: baseline;
    }

    html {
    height: 100%;
    font-family: "Nunito Sans", "Open Sans", Arial, sans-serif;
    font-size: 100%;
    font-weight: 400;
    line-height: 1.5;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    body {
    height: 100%;
    }

    ul, ol {
    list-style: none;
    }

    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }

    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }

    li, a, i, figure, img, button,
    input[type=button], input[type=submit] {
    -webkit-user-select: none;
        -moz-user-select: none;
            user-select: none;
    }

    input, textarea, button {
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
    }

    input[type=button], input[type=submit], input[type=clear], button, a {
    cursor: pointer;
    }

    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    }

    .container {
    width: min(100% - 30px, 1080px);
    margin-inline: auto;
    }
```

And then link it to your document by going into `index.css` and adding the line:

```
    @import './reset.css';
```

To the top of the file below the other `@` you wrote.

And that should be everything!


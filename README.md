# --- TUTORIAL ---

## How to create a simple calculator

To begin, create a new folder and inside a file called `index.html` and use any basic template to start off the project, typically with the basic:

```
<!DOCTYPE html>
<html>
    <body>
        
    </body>
</html>
```

Just to get started on the page and its body. Afterwards in a *seperate folder* create the `index.css` and `index.js` files for CSS and JavaScript related code.

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

This will create the basis for the calculator, with the `"calculator"` class holding all the elements of the inputs, write this next line of code between the header element `<h2>` and the `<section>`:

```
    <form name="calc">
        <input type="text" name="one" class="number-one" placeholder="First number">
        <input type="text" name="two" clas="number-two" placeholder="Second number">
        <input type="button" class="get-result" value="Result">
    </form>
```

Now let's move onto the JavaScript, styling the CSS will come last as we want to purely make this function for now.
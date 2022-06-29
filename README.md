# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://leo-jcq.github.io/Interactive-rating-component/](https://leo-jcq.github.io/Interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

The main difficulty was to learn JavaScript. Indeed, this language was totally unknown to me. But it didn't take me too long to learn the basics for this project either.

So here is how I created the buttons to grade
```html
<ul>
  <li class="ratingButton" id="1" onclick="choice('1');">1</li>
  <li class="ratingButton" id="2" onclick="choice('2');">2</li>
  <li class="ratingButton" id="3" onclick="choice('3');">3</li>
  <li class="ratingButton" id="4" onclick="choice('4');">4</li>
  <li class="ratingButton" id="5" onclick="choice('5');">5</li>
</ul>
```
As well as the function to make them work
```js
let selectedButton;

function choice(button) {
  selectedButton = button;

  let buttons = document.getElementsByClassName('ratingButton')
  
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.color = 'var(--medium-grey)';
      buttons[i].style.background = 'var(--medium-blue)';
  }

  let modifButton = document.getElementById(button);
  modifButton.style.color = 'var(--white)';
  modifButton.style.background = 'var(--light-grey)';
}
```

And here the button to send the grade
```html
<div class="button" onclick="submitChoice()">Submit</div>
```

And finally the functions that send the grade
```js
function submitChoice() {
    if (selectedButton != null) {
        let state = document.getElementsByClassName('state');
        state[0].style.display = 'none';
        state[1].style.display = 'flex';

        document.getElementById('feedBackText').innerHTML = 'You selected ' + selectedButton + ' out of 5';
    } else {
        alert('Please select a grade');
    }
}
```

### Useful resources

Here are the resources I used to help me with my project :
- [The basics of JavaScript](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics) - This helped me to learn JavaScript
- [Modifying the style attribute of an HTML element in JavaScript](https://www.devenir-webmaster.com/V2/TUTO/CHAPITRE/JAVASCRIPT/28-modifier-attribut-style/) - This article taught me how to modify the style of an HTML element in JavaScript

## Author

- GitHub - [@leo-jcq](https://github.com/leo-jcq)
- Frontend Mentor - [@leo-jcq](https://www.frontendmentor.io/profile/leo-jcq)
- Twitter - [@JacquetLo2](https://twitter.com/JacquetLo2)

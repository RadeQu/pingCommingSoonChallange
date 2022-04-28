# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: https://github.com/RadeQu/pingCommingSoonChallange
- Live Site URL: https://radequ.github.io/pingCommingSoonChallange/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS | CSS preprocessors
- JavaScript (ES6)

### What I learned

I learned how to nice switch color of icons on hover status
```css
{
  	ion-icon {
					color: $Blue;
					padding: 5px;
					border: 1px solid $Pale_Blue;
					border-radius: 50%;
					margin: 0 0.5%;
					transition: all 0.3s;
				}
				ion-icon:hover {
					cursor: pointer;
					color: white;
					background-color: $Blue;
				}
}
```

## Author

- Frontend Mentor - [@RadeQu](https://www.frontendmentor.io/profile/RadeQu)

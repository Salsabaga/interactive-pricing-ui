# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

[Full Image of the final product for the Interactive Pricing Component](./images/Screenshot.png)

### Links

- Solution URL: [Salsabaga/interactive-component-UI](https://salsabaga.github.io/interactive-pricing-ui/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3 custom properties
- Flexbox
- Vanilla Javascript

### What I learned

What I had learnt from coding this challenge is that I am fully grateful of Front End Developers and the amount of grit they have to get through just to exactly follow a design template cause wow.

For the code I have written, starting with HTML I have maintained the consistency of the use of containers and wrapping divs used for splitting each component. In addition, the use of splitting the containers to be convenient for the use of CSS Flexbox.

CSS is a massive, often bloated, language with so much styles for every element. Yet, its massive quantity allows me to discover more varieties of manipulating the DOM, like discovering an island in a barren sea. I have learnt to manipulate list styles from a left margin display to centering the list and putting the points away from each other at an even space.

```css
#check-list > ul > li {
	text-align: center;
	list-style-position: inside;
}
```

One great element of CSS is how much it pushes one to find and solve problems of styling the DOM, this is especially towards images and use of the background property. One issue I had was applying the circular img to the title container and only showing a portion of the image. How I solved this was by applying a padding on the top and bottom of the text which increased the space of the element to show the full image, rather than using the height and width property.

```css
#title-container {
	text-align: center;
	padding: 100px 0;
	background-image: url("./images/pattern-circles.svg");
	background-repeat: no-repeat;
	background-position: center;
}
```

Thirdly, I have learnt to create design custom sliders and checkboxes to a specific style, which can be a very complex task since the process involves removing the default style of the element to create the custom design. I have learnt the difficulty and inconvenience of -moz and -webkit properties which must be implemented to enable all browsers to display the styles. Small rant I must say it is ridiculuous how current so many features used for modern browsers must also be adapted for legacy and rarely used browsers.

```css
/* Range Slider */
.slider-container {
	position: relative;
	flex-basis: 100%;
	margin: 10px 50px;
}

.slider-container .bar {
	position: absolute;
	z-index: 1;
	top: 4px;
	width: 100%;
	height: 10px;
	background-color: hsl(224, 65%, 95%);
	overflow: hidden;
	border-radius: 10px;
}

.slider-container .bar .fill {
	display: block;
	width: 0;
	height: 100%;
	background-color: var(--full-slider-background);
}

.slider-container .range {
	-webkit-appearance: none;
	width: 100%;
	position: relative;
	height: 12px;
	z-index: 2;
	background-color: transparent;
}

.slider-container .range::-webkit-slider-thumb {
	-webkit-appearance: none;
	width: 60px;
	height: 60px;
	background-color: var(--slider-background);
	background-image: url("./images/icon-slider.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 2.5em;
	cursor: pointer;
	border-radius: 50%;
}
```

The issues I hit with Javascript was the implementation of both the slider functionality and the inclusion of the discount button when it is turned on or off. The main issue was that I had to ensure the amount for each pageview were not dynamicly changed when the button was pressed and use of the slider simultaneously. In order to solve this I split the functionality of both the slider and checkbox to display the amount, which had solved the prices issue and the inclusion of the button to display the amount and the pageviews that would be POSTED to the database.

```js
const setBar = () => {
	fill.style.width = slider.value * 2 - 10 + "%";
	switch (slider.value) {
		case "10":
			amount = 8;
			views.innerHTML = "10K PAGEVIEWS";
			break;
		case "20":
			amount = 12;
			views.innerHTML = "50K PAGEVIEWS";
			break;
		case "30":
			amount = 16;
			views.innerHTML = "100K PAGEVIEWS";
			break;
		case "40":
			amount = 24;
			views.innerHTML = "500K PAGEVIEWS";
			break;
		case "50":
			amount = 32;
			views.innerHTML = "1M PAGEVIEWS";
			break;

		default:
			console.log("error");
			break;
	}
	if (discountBtn.checked) {
		amountText.innerHTML = `$${amount * (3 / 4)}.00`;
	} else {
		amountText.innerHTML = `$${amount}.00`;
	}
};

const setDiscount = () => {
	if (discountBtn.checked) {
		amountText.innerHTML = `$${amount * (3 / 4)}.00`;
	} else {
		amountText.innerHTML = `$${amount}.00`;
	}
};
```

### Continued development

I would like to continue perfecting custom designs for input elements, I feel like just watching a Youtube video or two doesn't allow me to fully explore what I can achieve with implementing my styles, thus I must start by creating custom designs from scratch.

Another is the use of new Javascript concepts to ensure my program works efficiently and to make it more easier to refactor.

### Useful resources

- [Slider Custom Design](https://www.youtube.com/watch?v=8VlSBlLC6ug)
  , [Toggle Switch Custom Design](https://www.youtube.com/watch?v=NTyCpC7IrD8&t=785s) These designs gave me the view of the fundamentals of input custom designs, a plethora of different methods and property changes that allows me to create a default design for the elements.
- [CSS Tips and Tricks](https://www.youtube.com/watch?v=Qhaz36TZG5Y) - While CSS is a massive style language the forms of efficiency to make web pages not only easy to manage but also responsive based on the viewport is such a benefit I would of struggled without had I not found this video.

## Author

- Website - [TBA](#links)
- Frontend Mentor - [@Salsabaga](https://www.frontendmentor.io/profile/Salsabaga)
  -Github - [Salsabaga](https://github.com/Salsabaga)

## Acknowledgments

To every Youtube tutorial channel, you guys are the real heroes and without you I would be pulling my hair out, Thank you all and I hope I can match a fraction of your skills.

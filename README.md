# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help improve coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL:
- Live Site URL:

## My process

This project is based on
a [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) approach, so you
could find the first basic elements:

> You could [find here an amazing Dev.to article](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)
> explaining this Clean Architecture on frontend! (credits to [@bespoyasov\_](https://twitter.com/bespoyasov_)).

### UI layer

This folder contains the basic UI elements. You should add any UI element inside this folder, with the respective CSS
file module.

### Application layer

This layer is the one in charge of the different use cases of the application. A Use Case it's a workflow of what should
it happen to a concrete Domain entity once interacts with the application.

This is the layer which would use any external service and communicate with the world (ie. APIs, databases, etc...)

### Services layer

As we said, this is the layer that communicates the application with the outer world, and the one that would be coupled
with almost any 3rd party provider, framework, etc...

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

### Continued development

### Useful resources

## Author

- Frontend Mentor - [@jakwakwa](https://www.frontendmentor.io/profile/jakwakwa)
- Twitter - [@jakwakwa](https://twitter.com/jakwakwa)

## Acknowledgments

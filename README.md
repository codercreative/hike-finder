## Hike Finder

### Requirements

![screenshot](images/requirements.png)

### Stretch goals

![screenshot](images/stretch-goals.png)

### Built with

- HTML5
- CSS grid and flexbox
- Mobile-first design / Responsive

### Process

- Consult Figma design files
- Create draft of README file
- Create .gitignore file and check that meta tag is included
- Create Github repository
- Work on HTML, CSS and JS files
- Check final code and accessibility
- Finalize README file
- Publish live URL

### Useful code snippets and tips

### Issues while building the app

- Use flexbox to align the search input field to the page. Solved with `align-items: flex-end`

```css
.hero-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
```

- Half of hero area with semi-transparent background and 50% transparent background. Solved it with linear-gradient. See below.

```css
.hero-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-image: linear-gradient(
      to left,
      transparent 50%,
      rgb(35, 35, 35, 0.5) 50%
    ), url("/images/image-hero.jpg");
}
```

- Make search field fill up half the hero container on desktop view

- Avoid hero text overflowing the 50% width of container in desktop view

### Enhancement still needed

### Resources:

[Hero image and overlapping text](https://stackoverflow.com/questions/75227421/hero-image-with-overlapping-text-box)

[Max-content - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content)

[Search icon inside input](https://nikitahl.com/search-icon-inside-input)

[Put icons inside of input fields](https://teamtreehouse.com/community/how-do-i-put-icons-inside-of-input-fields)

[Adjusting half of screen image](https://stackoverflow.com/questions/51305396/css-half-of-screen-image-and-half-of-screen-background-color-with-a-container-o)

[Change an HTML's input placeholder](https://stackoverflow.com/questions/2610497/change-an-html-inputs-placeholder-color-with-css)

[Auto-hide placeholder text](https://www.w3docs.com/snippets/css/how-to-auto-hide-placeholder-text-on-focus-with-css-and-jquery.html)

[CSS positioning - Kevin Powell](https://www.youtube.com/watch?v=jFcWa9kiOHQ)

[Embed Google Map in HTML](https://blog.hubspot.com/website/how-to-embed-google-map-in-html)

[Swapping images from mobile to desktop](https://stackoverflow.com/questions/28966158/changing-image-depending-on-mobile-or-desktop-html-css)

[A complete guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

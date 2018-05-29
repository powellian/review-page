## PiFrame - review page example

**CSS:**\
SCSS and BEM are used throughout and compiled via the SCSS compilation script: `sass --watch src/scss:assets/css --style compressed`

This watches and compiles: 
- `src/scss/main.scss`  
*into*
- `assets/css/main.css` - and - `assets/css/main.map.css`

I have used a mildly opinionated SCSS folder system loosely based on [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

**Image lazy-load:**\
Images are lazy-loaded/LQIP with the following lib: [github.com/aFarkas/lazysizes](https://github.com/aFarkas/lazysizes)

**JS:**\
There is a rating button system using some vanilla JS. I plan to update this to utilise Vue.js and likely some gentle anim and am working toward that at the moment.

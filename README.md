## PiFrame - review page example

**CSS:**\
SCSS and BEM are used throughout and processed via: `sass --watch src/scss:assets/css --style compressed`
This watches and compiles: 
- `src/scss/main.scss`\
*into*
- `assets/css/main.css` - and - `assets/css/main.map.css`

There is a mildly opinionated SCSS folder system loosely based on [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

**Image lazy-load:**\
Images are lazy-loaded/LQIP with the following lib: [github.com/aFarkas/lazysizes](https://github.com/aFarkas/lazysizes)

**JS:**\
There is a rating button system using some vanilla JS. This is being updated to utilise some more visual feedback with gentle anim.

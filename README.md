# has-scrollbar
Checks whether a given element has a scollbar or not

## Installation
Use with [browserify](http://browserify.org/) or build a [standalone](http://www.forbeslindesay.co.uk/post/46324645400/standalone-browserify-builds) bundle

```
npm install --save has-scrollbar
```

## Usage

```javascript
var hasScrollbar = require("has-scrollbar");

var container = document.querySelector(".totallyscrolling");

if(hasScrollbar(container)){
    popUpBackToTopThing();
}
```

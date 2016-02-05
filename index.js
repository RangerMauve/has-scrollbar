"use strict";
module.exports = hasScrollbar;

function hasScrollbar(element) {
	return element.scrollHeight > element.clientHeight;
}

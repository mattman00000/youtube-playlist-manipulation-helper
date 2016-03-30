// ==UserScript==
// @name         YouTube Playlist Manipulation Helper
// @namespace    https://github.com/mattman00000
// @version      0.0.2
// @description  Allows you to set and then go to positions on the page for moving multiple videos from the top or bottom of a playlist to a desired arbitrary point somewhere in the middle. Coming soon, maybe, movement between two points. Don't hold your breath for more than two. Works best with either two working hands, one to operate the mouse to drag videos and the other to press home/end/insert/delete, or with one working hand and a mouse that has reprogrammable buttons like just about any G-series (and most others) Logitech gaming mouse.
// @author       mattman00000
// @match        https://www.youtube.com/playlist*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	// Your code here...
	if (localStorage.getItem("scry")==0) localStorage.setItem("scry","0");
	window.addEventListener("keydown",function(a){
		if (a.key == "Delete") {
			localStorage.setItem("scry",window.scrollY);
		} else if (a.key == "Insert") {
			window.scrollTo(0,Number(localStorage.getItem("scry")));
		}
	});
})();

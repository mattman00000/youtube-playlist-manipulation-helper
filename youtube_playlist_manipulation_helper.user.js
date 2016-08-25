// ==UserScript==
// @name               YouTube Playlist Manipulation Helper
// @version            0.0.2.1
// @description        Allows you to set and then go to positions on the page for moving multiple videos from the top or bottom of a playlist to a desired arbitrary point somewhere in the middle. Coming soon, maybe, movement between two points. Don't hold your breath for more than two. Works best with either two working hands, one to operate the mouse to drag videos and the other to press home/end/insert/delete, or with one working hand and a mouse that has reprogrammable buttons like just about any G-series (and most others) Logitech gaming mouse.
// @match              https://www.youtube.com/playlist*
// @grant              none
// @connect            self
// @connect            *
// @run-at             document-end
// @author             Matthew James Burnham <mattman00000@gmail.com>
// @icon               IIIIIIII
// @icon64             HHHHHHHH
// @priority           9001
// @downloadURL        https://github.com/mattman00000/RRRRRRRR/raw/master/FFFFFFFF.user.js
// @updateURL          https://github.com/mattman00000/RRRRRRRR/raw/master/FFFFFFFF.user.js
// @supportURL         https://github.com/mattman00000/RRRRRRRR/issues
// @homepageURL        https://github.com/mattman00000/userscripts
// @contributionURL    https://github.com/mattman00000/userscripts
// @namespace          https://github.com/mattman00000
// @license            MIT
// @copyright          2016+, Matthew James Burnham
// ==/UserScript==
/**
	The MIT License (MIT)
	
	Copyright © 2016 Matthew James Burnham
	
	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/
(function()
{
	'use strict';
	//USERSCRIPT START
	if (localStorage.getItem("scry")==0)
	{
		localStorage.setItem("scry","0");
	}
	window.addEventListener("keydown",function(a)
	{
		if (a.key == "Delete")
		{
			localStorage.setItem("scry",window.scrollY);
		}
		else if (a.key == "Insert")
		{
			window.scrollTo(0,Number(localStorage.getItem("scry")));
		}
	}
	);
	//USERSCRIPT END
}
)();

// ==UserScript==
// @name               YouTube Playlist Manipulation Helper (Advanced BETA)
// @version            b0.0.0.1
// @require            https://apis.google.com/js/api.js
// @description        Allows you to set and then go to positions on the page for moving multiple videos from the top or bottom of a playlist to a desired arbitrary point somewhere in the middle. Coming soon, maybe, movement between two points. Don't hold your breath for more than two. Works best with either two working hands, one to operate the mouse to drag videos and the other to press home/end/insert/delete, or with one working hand and a mouse that has reprogrammable buttons like just about any G-series (and most others) Logitech gaming mouse.
// @match              https://www.youtube.com/playlist*
// @grant              GM_log
// @grant              GM_registerMenuCommand
// @connect            self
// @connect            *
// @run-at             document-end
// @author             Matthew James Burnham <mattman00000@gmail.com>
// @priority           9001
// @downloadURL        https://github.com/mattman00000/youtube-playlist-manipulation-helper/raw/advanced/youtube_playlist_manipulation_helper.user.js
// @updateURL          https://github.com/mattman00000/youtube-playlist-manipulation-helper/raw/advanced/youtube_playlist_manipulation_helper.user.js
// @supportURL         https://github.com/mattman00000/youtube-playlist-manipulation-helper/issues
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
	var ypmhDebug = true;
	function dbg(str)
	{
		if (ypmhDebug)
		{
			GM_log(str);
		}
	}
	var oauthInfo =
	{
		"installed":
		{
			"client_id":"466044794062-lekiji7frrsl5opuv9ecmgq8f5s05gmj.apps.googleusercontent.com",
			"project_id":"youtube-playlist-manipulator",
			"auth_uri":"https://accounts.google.com/o/oauth2/auth",
			"token_uri":"https://accounts.google.com/o/oauth2/token",
			"auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
			"client_secret":"KPCaVYXZz2mqyzECZOiv9fpa",
			"redirect_uris":
			[
				"urn:ietf:wg:oauth:2.0:oob",
				"http://localhost"
			]
		}
	}
	//USERSCRIPT END
}
)();

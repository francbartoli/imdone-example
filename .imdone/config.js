/*
 * imdone
 * https://github.com/piascikj/imdone
 *
 * Copyright (c) 2012 Jesse Piascik
 * Licensed under the MIT license.
 */
module.exports = {
	include:/^.*$/,
	exclude:/^(node_modules|imdone|target)\/|\.(git|svn)|\~$|\.(jpg|png|gif|swp)$/,
	//github : {url : "http://www.github.com/piascikj/imdone"}, //Use this if you want file links to point at github, put the path to your repository here
	marked : {
		gfm: true,
		pedantic: false,
		sanitize: true
	}
};
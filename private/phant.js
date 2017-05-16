// import { Meteor } from 'meteor/meteor';
var page = require('webpage').create();
var fs = require('fs');
// var env = require('process');
// import { firstname, lastname }


// if (Meteor.isServer){
// 	var first = process.env.firstname
// var last = process.env.lastname;
// console.log(firstname, lastname);
// }

// console.log(process.argv.pop())


var url="https://pipl.com/search/?q=Tucker+Carlson&l=&sloc=&in=6"
page.open(url, function() {

	console.log(page.evaluate(function() {
		var users = [];

		// $('div.profile_result > :even > a > img').each(function(){
		// 	console.log($(this).attr('src'));
		// })

		$('div.profile_result > :odd > div.title > a').each(function(){
			var user = $(this).text();
			users.push(user);
		})

		return users
	}));

	phantom.exit();
});
// }

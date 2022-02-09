"use strict";

import { Meteor } from 'meteor/meteor';
import { phantomjs } from 'phantomjs'
import { Accounts } from 'meteor/accounts-base';


const { spawn } = require('child_process');
// const phantomjs = require('phantomjs');

// console.log(spawn, phantomjs)


if (Meteor.isServer){

const SearchHist = new Mongo.Collection('searches');
var users;
Meteor.methods({
  phantom: function(firstname, lastname) {

  	var env  = Object.create(process.env)
  	env.FIRST_NAME = firstname;
  	env.LAST_NAME = lastname;


    command = spawn(phantomjs.path, ['assets/app/phant.js'], {env: process.env});
    command.stdout.firstname = firstname;
    command.stdout.lastname = lastname;
    command.stdout.on('data',  function (data) {
      console.log('stdout: ' + data);
      data = users;
    });

  },
  dbEmpty: function(){
 return SearchHist.remove({});
  }
});


}

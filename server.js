const express = require('express'),
bodyParser = require('body-parser');

var {mongoose} = require('./database/mgs');
var {Todo} = require('./database/model_todos');
var {User} = require('./database/model_users');
//https://m.blog.naver.com/ijoos/221202873770
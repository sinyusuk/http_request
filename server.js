const express = require('express'),
bodyParser = require('body-parser');

var {mongoose} = require('./database/mgs');
var {Todo} = require('./database/model_todos');
var {User} = require('./database/model_users');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.send('error',e);
    });
})

app.listen(3000,()=>{
    console.log('ready!')
})
//https://m.blog.naver.com/ijoos/221202873770
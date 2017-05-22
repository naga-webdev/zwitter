var express = require('express');
//var bp = require('body-parser');

var app = express();
//app.use(bp.json());

app.set('port',( process.env.PORT || 5000 ))

app.use(express.static(__dirname +'/dist'));


app.get('/',function(req,res){
    res.send();
})


app.get('*',function(req,res){
    return res.redirect('/');
})


app.listen(app.get('port') ,function(){
    console.log('server is running at '+ app.get('port'));
})
const express = require('express')
const bodyParser = require('body-parser')
const app =express();
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','jade')
app.get('/topic/:id',function(req,res){
    let topic =[
        'hwi is handsome',
        'hwi is nice',
        'hwi is respectable'
    ]
    let output =`<a href="/topic/0">Javascript</a></br>
    <a href="/topic/1">nodejs</a></br>
    <a href="/topic/2">express</a></br>
    ${topic[req.params.id]}
    `
    res.send(output);
    
});
app.get('/topic/:id/:mode',function(req,res){
    res.send(req.params.id+req.params.mode)
})

app.get('/form',function(req,res){
    res.render('form')
})

app.get('/form_receiver',function(req,res){
    let title = req.query.title;
    let description = req.query.description;
    res.send(title+":"+ description)
});


app.post('/form_receiver',function(req,res){
    let title = req.body.title;
    let description = req.body.description;
    res.send(title+":"+ description)
})

app.listen(3000,function(){
    console.log("hello world")
});
const express = require('express')
const bodyParser = require('body-parser')
const app =express();

app.locals.pretty = true;
app.set('views','./views')  //views 의 디렉토리에서

app.use(express.static('public'));  //정적인 파일을 저장한 디렉토리
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

app.get('/template', function(req,res){
    res.render('temp' ,{time:Date(), _title:'jade'});  //객체전달

})

app.get('/',function(req,res){  //홈으로 들어오면 function 실행
    res.send('hello home page');
})

app.get('/dynamic',function(req,res){
    let lis = "";
    for(let i =0; i<5;i++){
        lis = lis + '<li>coding</li>'
    }
    let time = new Date();
    const output = `<html>
    <head>
    </head>
    <body>
        hello Dynamic duo    @@@@@@@@@
        ${lis}
        ${time}
    </body>
    </html>`
    
    res.send(output);
});

app.get('/koala',function(req,res){
    res.send('hello koala , <img src="/koala.jpg"/>')
})
app.get('/login',function(req,res){  //홈으로 들어오면 function 실행
    res.send('<h1>login please</h1>');
})


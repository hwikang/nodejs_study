const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');  //file system
const app = express();
app.set('views','./views_file');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({extended:false}));
app.listen(3000,function(){
    console.log('listening 3000 port');
})

app.get('/topic/new',function(req,res){
    res.render('new')
})
app.get('/topic',function(req,res){
    
})
app.post('/topic',function(req,res){
   let title =req.body.title;
   let description = req.body.description;
    fs.writeFile('data/'+title , description, function(err){
        if(err){
            console.log(err)
            res.status(500).send('internal server error')
        }
        res.send('success')
    });

});
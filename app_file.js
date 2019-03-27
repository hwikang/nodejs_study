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
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
        }
        res.render('new',{topics:files})
    });
   
})
app.get(['/topic','/topic/:id' ],function(req,res){
   
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send('internal server error readdir');
        }
        

        let id = req.params.id
        if(id){
            fs.readFile('data/'+id,'utf8',function(err, data){
                if(err){
                    console.log(err);
                    res.status(500).send('internal server error readfile');
                }
                res.render('view',{topics:files,title:id,description:data});
            });
        }else{
            res.render('view',{topics:files , title:"welcome",description:"to node js"});
        }
    });
    
});


app.post('/topic',function(req,res){
   let title =req.body.title;
   let description = req.body.description;
    fs.writeFile('data/'+title , description, function(err){
        if(err){
            console.log(err)
            res.status(500).send('internal server error')
        }
        res.redirect('/topic/'+title)
    });

});
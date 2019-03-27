
const fs = require('fs');
console.log(1111111);
const data = fs.readFileSync('data.txt',{encoding:'utf-8'})  //동기는 순서대로 , 작업을 기다리고 넘어감
console.log(data);



//
console.log(2222)
 fs.readFile('data.txt',{encoding:'utf-8'},function(err,data){  //작업하는동안 밑으로 내려가 4를 출력함
    console.log(3) 
    console.log(data);

    })

    console.log(4);
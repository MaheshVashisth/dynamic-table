const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser'); 

const connection = require('./database')

const app = express();
app.use(cors())
app.use(bodyParser.json());


app.get('/' , (req , res)=> {
    return res.json("from backend");
})

app.get('/users' , (req , res)=> {
    const sql = "SELECT * FROM firstproject.student";
    connection.query(sql , (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
});


 +

app.listen(3000, function(){
    console.log("mahesh");
    connection.connect(function(err){
        if(err) throw err;
        console.log("success");
    })
});
const express = require('express');
const app = express();

const index = require('./routes/index');

app.use(express.json());

app.use((req,res, next) => {
    console.log("YES!!!");
    next();
})
app.use('/', index);

app.listen(3001, () =>{
    console.log("Server Listening... ");
})
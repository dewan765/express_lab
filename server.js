const express = require('express');

const app = express(); // Calling this function sets up a server

app.get('/', (x, y)=>{
    console.log('Here');
    res.send("Hello World!");
});

app.listen(3030);
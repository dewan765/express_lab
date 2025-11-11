const express = 
require('express');

const userRouter = 
require('./routes/users');

const app = express(); // Calling this function sets up a server
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Here');
    res.render("index", {user:"George!",});
});
app.get('/users', (req, res)=>{
    res.send('User List');
});

app.listen(3030); 
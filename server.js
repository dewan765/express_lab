const express = 
require('express');

const userRouter = 
require('./routes/users');

const postRouter =
require('./routes/post');

const app = express(); // Calling this function sets up a server
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Here');
    res.render("index", {user:"George!",});
});
app.get('/users', (req, res)=>{
    res.send('User List');
});
app.get('/post', (req,res)=>{
    res.send('Post Page');
});

app.listen(3030); 
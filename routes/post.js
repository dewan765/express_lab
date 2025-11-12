const express =
require('express')

const router = 
express.Router();

router.get ('/', (req, res)=>{
    res.send('Post Page');
});
router.get('/new', (req,res)=>{
    res.send('New Post Page')
});

module.exports = router;
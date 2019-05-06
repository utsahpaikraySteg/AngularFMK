const express = require('express');
const router = express.Router();
router.get('/posts', (req, res)=>{
    res.send("post is working");
})
router.post('/posts', function(req, res) {
    // do something w/ req.body or req.files 
    req.send("post is working");
});
router.post('/sentmail', function(req, res) {
   
});
router.post('/sendmail', (req, res, next) => {
  res.send(body);
});
module.exports = router;
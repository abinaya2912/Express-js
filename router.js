const express = require('express');
const router=express.Router();

router.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
router.get('/two',function(req,res){
    res.sendFile(__dirname+'/two.html');
}
);
router.get('/three',function(req,res)
{
    res.sendFile(__dirname+'/three.html');
});

module.exports=router;
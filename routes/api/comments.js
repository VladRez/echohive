const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");

router.post('/' , 
    (req, res) => {

    const newComment = new Comment({
        user: req.body.user_id,
        body: req.body.comment_body
    })
    
    newComment.save().then(comment=>{
        return (res.json(comment))
    }).catch(err=>{

        return res.status(422).json({error: err})
    })
} ) 

module.exports = router;
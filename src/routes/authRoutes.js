const passport = require('passport')
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router()

router.post('/signup', passport.authenticate('signup', {session:false}),
    async (req,res) =>{
        res.status(200).json({
            success : true,
            message:"signup successful",
            data :{
                user :req.user
            }
        })
    })
router.post('/login', async(req, res, next) =>{
    passport.authenticate('login', async(err, user, info)=>{
        try {
            if(err || !user){
               const error = new Error ('something went wrong')
               return next(err)
            }else{
                req.login (user, {session: false},
                    async(error)=>{
                        if(error) return next(error)
                        const body = {_id : user._id, email: user.email}
                        const token = jwt.sign({user :body}, 'TOP_SECRET')
                        return res.status(200).json({
                            token:token,
                            success: true,
                            message:'successfully signed in'
                        })
                    })
            }
        } catch (error) {
            console.log(error)
            return next(error)
                    }
    })(req, res, next)
})    
 
module.exports = router;


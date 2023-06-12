const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRouter = require('./routes/index')
const passport = require('passport');
const bodyParser = require('body-parser');
const User = require('./models/user')
const {connect} = require ('./config/database')
const authRouter = require('./routes/authRoutes')
const {PORT} = require('./config/serverConfig')
require('./utils/auth')
mongoose.set('strictQuery', true);
app.get('/', (req,res)=>{
    console.log('hello world')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', passport.authenticate('jwt'), apiRouter)
app.use('/', authRouter)
app.use(function (error, req, res, next){
    // res.status(error.status || 500)
    // res.json({
    //     success:false,
    //     error:error
    // })
    res.status(500).json({
        success:false,
    })
    console.log(error)})
app.listen (PORT, async()=>{
    await connect()
    console.log('MongoDB connected')
    console.log('server started on port', PORT)
    // let user = await User.create({
    //     email:"abc@xyz.com",
    //     password: 123456,
    //     name: 'Admin'
    // })
    // console.log(user)
})



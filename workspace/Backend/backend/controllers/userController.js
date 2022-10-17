const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usermodel')

// @desc register user
// @route POST /api/user/register
// @access public
const registerUser = asyncHandler(async (req,res) => {
    const {first_name,last_name, email, password,birthday,description } = req.body
    if(!first_name || !email || !password || !last_name){
        res.status(400)
        throw new Error('Please enter all fields')
    }

    // check if user exists
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // hash password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //create user 
    const user = await User.create({
        first_name,
        last_name, 
        email,
        password: hashedPassword,
        birthday,
        description

    })

    if (user){
        res.status(201).json({
            _id: user.id,
            first_name: user.first_name,
            last_name:user.last_name,
            email:user.email,
            token: generateToken(user._id),
            birthday:user.birthday,
            description:user.description

        })
    } else {
        res.status(400)
        throw new Error ('Invalid user data')
    }

})

// @desc authenticate a user
// @route POST /api/user/login
// @access public
const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body

    // check if email exists in db
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error ('Invalid login')
    }
})

// @desc get user data
// @route GET /api/user/me
// @access private
const getMe = asyncHandler(async(req,res) => {
    const {_id, first_name,last_name, email,birthday,description} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        first_name,
        last_name, 
        email,
        birthday,
        description
    })
})

// @desc get user data from other people
// @route GET /api/user/
// @access private
const get = asyncHandler(async(req,res) => {
    const {_id, first_name,last_name, email,birthday,description} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        first_name,
        last_name, 
        email,
        birthday,
        description
    })
})


//generate token for jwt
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '60d',
    })
}
module.exports = {
    registerUser,
    loginUser,
    getMe
}
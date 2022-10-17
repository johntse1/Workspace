const express = require('express')
var cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require ('./config/db')
const port = process.env.PORT || 3000

connectDB()
const app = express()
app.use(cors())
app.use(cors({origin: '*'}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/jobs',require('./routes/jobRoutes'),cors())
app.use('/api/users',require('./routes/userRoutes'),cors())

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
console.log('please work cors')


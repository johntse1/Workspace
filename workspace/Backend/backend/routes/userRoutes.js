const express = require('express')
const router = express.Router()
const{registerUser, loginUser, getMe,getUser,getUserTag} = require('../controllers/userController')
const {upload} = require('../middleware/multerMiddleware')

const {protect} = require('../middleware/authMiddleware')

router.post('/register', upload.single("image"),registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/get/:id',getUser)
router.get('/gettag',protect, getUserTag)

module.exports = router
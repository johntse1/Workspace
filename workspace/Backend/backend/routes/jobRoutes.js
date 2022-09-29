const express = require('express')
const router = express.Router()
const {getJobs,setJobs,updateJobs,deleteJobs} = require('../controllers/jobController')

const {protect} = require ('../middleware/authMiddleware')

router.route('/').get(protect,getJobs).post(protect,setJobs)
router.route('/:id').delete(protect,deleteJobs).put(protect,updateJobs)

module.exports = router 
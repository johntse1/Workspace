const express = require('express')
const router = express.Router()
const {getJobs,setJobs,updateJobs,deleteJobs,getallJobs,filterJobs} = require('../controllers/jobController')

const {protect} = require ('../middleware/authMiddleware')

router.route('/').get(protect,getJobs).post(protect,setJobs)

router.route('/:id').delete(protect,deleteJobs).put(protect,updateJobs)
router.route('/getall').get(getallJobs)
router.route('/tags').get(filterJobs)


module.exports = router 
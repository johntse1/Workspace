const express = require('express')
const router = express.Router()
const {getJobs,setJobs,updateJobs,deleteJobs,getallJobs,filterJobs,acceptJob,getallJobsFiltered,getJobsWithin,getJobsWithTagDistance} = require('../controllers/jobController')

const {protect} = require ('../middleware/authMiddleware')

router.route('/get').get(protect,getJobs)
router.route('/set').post(protect,setJobs)
router.route('/update/:id').put(protect,updateJobs)
router.route('/delete/:id').delete(protect,deleteJobs)
router.route('/getall').get(getallJobs)
router.route('/tags').get(filterJobs)
router.route('/accept/:id').post(protect,acceptJob)
router.route('/mytags').get(protect,getallJobsFiltered)
router.route('/getwithin').get(getJobsWithin)
router.route('/getwithintag').get(getJobsWithTagDistance)

getJobsWithTagDistance
module.exports = router 

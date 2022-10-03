const asyncHandler = require('express-async-handler')
const { globalAgent } = require('http')
const Job = require('../models/jobmodel')
const User = require('../models/usermodel')
// @desc get jobs
// @route GET /api/jobs
// @access Private
const getJobs = asyncHandler(async (req,res)=>{
    const jobs = await Job.find({user: req.user.id})
    res.status(200).json(jobs)
})

// @desc set jobs
// @route POST /api/jobs
// @access Private
const setJobs = asyncHandler(async (req,res)=>{
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const job = await Job.create({
        text: req.body.text,
        user: req.user.id,
        tags: req.body.tags
    })
    res.status(200).json(job)
})

// @desc update jobs
// @route GET /api/jobs/:id
// @access Private
const updateJobs = asyncHandler(async (req,res)=>{
    const job = await Job.findById(req.params.id)
    if(!job) {
        res.status(400)
        throw new Error('Job not found')
    }

    const user = await User.findById(req.user.id)
    
    if(!user){
        res.status(401)
        throw new Error ('User not found')    
    }

    //Check if logged in user matches the job user
    if(job.user.toString() !== user.id){
        res.status(401)
        throw new Error ('User does not match job user')    
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedJob)
})

// @desc delete jobs
// @route GET /api/jobs/:id
// @access Private
const deleteJobs = asyncHandler(async (req,res)=>{
    const job = await Job.findById(req.params.id)
    if(!job) {
        res.status(400)
        throw new Error('Job not found')
    }    
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error ('User not found')    
    }

    //Check if logged in user matches the job user
    if(job.user.toString() !== user.id){
        res.status(401)
        throw new Error ('User does not match job user')    
    }

    await job.remove()
    res.status(200).json({id: req.params.id})
})

const getallJobs = asyncHandler(async (req,res)=>{
    const filter = {}
    const jobs = await Job.find(filter).sort({ createdAt: 'desc'}).exec();
    res.status(200).json(jobs)
})

const filterJobs = asyncHandler(async (req,res)=>{
    const filter = {tags:{$in:req.body.tags}}
    const jobs = await Job.find(filter)

    res.status(200).json(jobs)
})
module.exports = {
    getJobs,
    setJobs,
    updateJobs,
    deleteJobs,
    getallJobs,
    filterJobs
}
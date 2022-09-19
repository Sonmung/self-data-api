const express = require('express')
const router = express.Router();
const basicInfo = require('../model/info')
const education = require('../model/educaton')
const exp = require('../model/exp')
const project = require('../model/project')
const tech = require('../model/tech')

router.get('/', async(req,res) => {
    try {
        const data = await basicInfo.find();
        res.send(data);
    } catch (err) {
        res.send(err.message)
    }
    
    
})

router.get('/education', async(req,res) => {
    const data = await education.find();
    res.send(data);
})

router.get('/experience', async(req,res) => {
    const data = await exp.find();
    res.send(data);
})

router.get('/project', async(req,res) => {
    const data = await project.find();
    res.send(data);
})

router.get('/technical', async(req,res) => {
    const data = await tech.find();
    res.send(data);
})

module.exports = router;
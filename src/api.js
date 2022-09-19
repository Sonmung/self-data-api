require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const sonmung = require('./routes/sonmung');
const app = express();
const router = express.Router();

 mongoose.connect(process.env.mongo_URL, {dbName: 'resume'})
app.use('/.netlify/functions/api/sonmung', sonmung);

app.use('/.netlify/functions/api', router)

router.get('/', (req,res) => {
    res.send('basic data:<h1>/sonmung</h1> <br> education data:<h1> /sonmung/education</h1><br> Job Experience data:<h1> /sonmung/experience</h1><br>  Projects data:<h1> /sonmung/project</h1><br>  Technical Skill data:<h1> /sonmung/technical</h1><br>')
})

module.exports.handler = serverless(app);   
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const sonmung = require('./routes/sonmung');
const app = express();

 mongoose.connect(process.env.mongo_URL, {dbName: 'resume'})
app.use('/sonmung', sonmung);


app.get('/', (req,res) => {
    res.send('basic data:<h1> /sonmung</h1> <br> education data:<h1> /sonmung/education</h1><br> Job Experience data:<h1> /sonmung/experience</h1><br>  Projects data:<h1> /sonmung/project</h1><br>  Technical Skill data:<h1> /sonmung/technical</h1><br>')
})


const PORT = process.env.PORT || 5000;
app.listen(PORT)